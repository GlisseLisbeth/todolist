import express from 'express';
import cors from 'cors';

//import conect DB
import db from './database/db.js';
//import router
import blogRoutes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/blogs', blogRoutes);

try {
    await db.authenticate();
    console.log("Conexión exitosa de la base de datos");
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

app.get('/', (req, resp) => {
    resp.send('HOLA MUNDO');
})

app.listen(8000, () => {
    console.log('Server up running in http://localhost:8000/');
})