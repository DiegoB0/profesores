import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

//Archivos
import alumnosRoutes from './routes/alumnos';
import asesoriasRoutes from './routes/asesorias';
import profesoresRoutes from './routes/profesores';
import tutoriasGrupales from './routes/tutoriasGrupales';
import tutoriasIndividuales from './routes/tutoriasIndividuales';

import { options } from './swaggerOptions';
const specs = swaggerJSDoc(options);

//Inicializar express
const app = express();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: './uploads/',
	})
);

//////////////////////////////// RUTAS DE LA API ///////////////////////////////////////////////
app.use(profesoresRoutes);
app.use(alumnosRoutes);
app.use(asesoriasRoutes);
app.use(tutoriasGrupales);
app.use(tutoriasIndividuales);

//Documentacion
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;
