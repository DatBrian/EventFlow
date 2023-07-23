import App from './app';
import { categoriaRoutes } from './routes/CategoriaRoutes';

const app = new App([
    categoriaRoutes
]);

app.listen();