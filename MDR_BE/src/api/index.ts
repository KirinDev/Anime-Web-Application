import { Router } from 'express';
import auth from './routes/userRoute';
import user from './routes/userRoute';
import role from './routes/roleRoute';
import anime from './routes/animeRoute';
import episode from './routes/episodeRoute';
import carousel from './routes/carouselRoute';

export default () => {
	const app = Router();

	auth(app);
	user(app);
	role(app);
	anime(app);
	episode(app);
	carousel(app);
	
	return app
}