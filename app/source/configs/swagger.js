import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'REST API for yourRight a #BuldForSDG project', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'This is the REST API for yourRight a $BuldForSDG project' // short description of the app
  },
  servers: [
    { url: '', description: 'Deployed server' },
    { url: 'http://localhost:5000/api/v1', description: 'Local development/testing server' }
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'token'
      }
    }
  }
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./docs/**/*.yaml']
};
// initialize swagger-jsdoc
export default swaggerJSDoc(options);
