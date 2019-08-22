import { User } from "./models/user";

const user = new User({ name: 'myName', age: 20 });

user.on('click', () => {});
user.on('adas', () => {});

console.log(user);

