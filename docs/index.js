var swaggerJsDoc = require('swagger-jsdoc');

var swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Information',
    },
    servers: [
      {
        url: 'http://localhost:3500',
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

module.exports = swaggerJsDoc(swaggerOptions);
