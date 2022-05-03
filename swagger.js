const swaggerAutogen = require('swagger-autogen')();
const doc = {
      info: {
        version: "1.0.0",
        title: "Reddit API Documentation",
        description: "Detailed API Information",
        contact: {
          name: "Francoise"
        },
    },
        host: "localhost:8000",
        schemes: ['http'],
    };

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/routeServer.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)
