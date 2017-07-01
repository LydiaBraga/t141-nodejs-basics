const http = require('http');
const fs = require('fs');
const port = 8080;

function requestHandler(request, response) {
    console.log(request.url);

    fs.readFile('index.html', 'utf-8', (error, fileContent) => {
        response.setHeader("Content-Type", "text/html");
        response.end(fileContent);
    });
}

const server = http.createServer(requestHandler);
server.listen(port, (error) => {
    if (error) throw error;
    console.log('Server up at http://localhost:' + port);
});