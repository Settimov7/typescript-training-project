import { User } from './models/user';
import { UserEdit } from './views/user-edit';

const user = User.build({ name: 'userName', age: 24 });
const rootElement = document.getElementById('root');

if (rootElement) {
	const userEdit = new UserEdit(rootElement, user);
	
	userEdit.render();
} else {
	throw new Error('Root element not found');
}
