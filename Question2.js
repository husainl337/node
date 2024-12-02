const http = require('http');
const fs = require('fs');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    // Serve static HTML file for homepage
    if (req.url === '/') {
        fs.readFile('(For Ques2) index.html', (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } 
    // Serve simple dynamic content
    else if (req.url === '/dynamic') {
        const dynamicContent = `
            <html>
                <body>
                    <h1>Dynamic Page</h1>
                    <p>Current Time: ${new Date()}</p>
                </body>
            </html>
        `;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(dynamicContent);
    }
    // Basic 404 response
    else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
