import App from './app';
import { categoriaRoutes } from './routes/CategoriaRoutes';
import { eventoRoutes } from './routes/EventoRoutes';
import { usuarioRoutes } from './routes/UsuarioRoutes';

const app = new App([
    categoriaRoutes,
    usuarioRoutes,
    eventoRoutes
]);

app.listen();