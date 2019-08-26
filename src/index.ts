import { UserForm } from './views/user-form';
import { User } from './models/user';

const user = User.build({ name: 'userName', age: 24 });
const rootElement = document.getElementById('root');
const userForm = new UserForm(rootElement, user);

userForm.render();
