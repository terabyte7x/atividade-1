// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Atividade 1",

        description: "Aluno: Felipe Souza França Duque - 822133549",
    },

    host: "localhost:3333",

    schemes: ["http"],
};

const outputFile = "src/swagger.json";

const endpointsFiles = ["src/shared/infra/http/routes/customers.routes.ts"];

/* NOTE: if you use the express Router, you must pass in the 

   'endpointsFiles' only the root file where the route starts,

   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
