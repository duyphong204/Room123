import express from 'express';
require('dotenv').config();
import cors from 'cors';
import initRoutes from './src/routes';

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN ,
    methods : ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

const port = process.env.PORT || 8888;

const listener = app.listen(port, () => {
    console.log(`Server is running on port ${listener.address().port}`);
});

