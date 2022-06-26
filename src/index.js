const express = require('express');
const bodyParser = require('body-parser');
const apicache = require('apicache');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./v1/openapi3.json');
// const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger');

const v1WorkOutRouter = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

app.use(bodyParser.json());
app.use(cache('2 minutes'));
app.use('/api/v1/workouts', v1WorkOutRouter);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    // V1SwaggerDocs(app, PORT);
});
