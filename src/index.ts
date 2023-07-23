import App from './app';
import { categoriaRoutes } from './routes/CategoriaRoutes';
import { eventoRoutes } from './routes/EventoRoutes';
import { reservaRoutes } from './routes/ReservaRoutes';
import { usuarioRoutes } from './routes/UsuarioRoutes';

const app = new App([
    categoriaRoutes,
    usuarioRoutes,
    eventoRoutes,
    reservaRoutes
]);

app.listen();