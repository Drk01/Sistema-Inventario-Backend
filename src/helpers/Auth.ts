import * as passport from 'passport';
import {Strategy} from 'passport-local';
import {getManager} from 'typeorm';
import {User} from '../database/entity/User';
import {compareSync} from 'bcrypt';

export class Auth {
	public static usingPassport() {
		return passport.use(new Strategy(async (username, password, done) => {
			const user = await getManager().createQueryBuilder().select(['user']).from(User, 'user').where('user.username = :username', {username}).getOne();

			if (user) {
				if (compareSync(password, user.password)) {
					return done(null, user);
				}
				return done(null, false, {message: 'Incorrect login, please verify your data'});
			}

			return done(null, false, {message: 'Incorrect login, please verify your data'})
		}));
	}
}
