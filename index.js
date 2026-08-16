const http = require('http');

const PORT = process.env.PORT || 3000;

const name = 'vikash';
const age = 25;
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(
    JSON.stringify({
      message: 'Hello from Node.js application Testing Node js',
      status: 'success',
    }),
  );
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Workflow4 Docker CI/CD application');
});
