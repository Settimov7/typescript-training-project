import { User } from './models/user';

const user = new User({ name: 'myName', age: 24 });

user.on('change', () => {
	console.log('user was changed');
});

console.log(user.get('name'));

user.set({ name: 'newName'});

console.log(user.get('name'));


