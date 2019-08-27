import { CollectionView } from './collection-view';
import { User, Props as UserProps} from '../models/user';
import { UserEdit } from './user-edit';

export class UserList extends CollectionView<User, UserProps> {
	renderItem = (model: User, parent: Element): void => {
		new UserEdit(parent, model).render();
	}
}
