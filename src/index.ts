import { User } from './models/user';

const users = User.buildCollection();

users.on('change', () => {
	console.log(users);
});

users.fetch();


