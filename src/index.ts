import { Collection } from './models/collection';
import { Props as UserProps, User } from './models/user';
import { UserList } from './views/user-list';

const USERS_URL = 'http://localhost:3000/users';
const usersDeserialize = (json: UserProps) => User.build(json);
const users = new Collection(USERS_URL, usersDeserialize);

users.on('change', () => {
	const root = document.getElementById('root');

	if (root) {
		const list = new UserList(root, users);
		
		list.render();
	}
});

users.fetch();
