import { User } from "./models/user";

const user = new User({ name: 'myName', age: 20 });

user.on('click', () => {
    console.log('Click 1')
});

user.on('click', () => {
    console.log('Click 2')
});

user.on('click', () => {
    console.log('Click 3')
});

user.trigger('dasd');

