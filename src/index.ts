import App from './app';
import { categoriaRoutes } from './routes/CategoriaRoutes';
import { usuarioRoutes } from './routes/UsuarioRoutes';

const app = new App([
    categoriaRoutes,
    usuarioRoutes
]);

app.listen();