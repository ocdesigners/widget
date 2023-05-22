const cors_proxy = require('cors-anywhere');

const host = 'localhost'; // Change this if you want to use a different hostname
const port = 8080; // Change this if you want to use a different port

// Create the CORS Anywhere server
const server = cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],
  removeHeaders: [],
});

// Start the server
server.listen(port, host, () => {
  console.log(`CORS Anywhere server is running on ${host}:${port}`);
});
