import {User} from "./models/user";

const user = new User({ name: 'user2', age: 30 });

user.save();
