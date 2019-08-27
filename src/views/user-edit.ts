import { View } from './view';
import { Props as UserProps, User } from '../models/user';
import { UserShow } from './user-show';
import { UserForm } from './user-form';

export class UserEdit extends View<User, UserProps> {
	regionsMap = (): { [key: string]: string } => ({
		userShow: '.user-show',
		userForm: '.user-form',
	});
	
	onRender = (): void => {
		new UserShow(this.regions.userShow, this.model).render();
		new UserForm(this.regions.userForm, this.model).render();
	};
	
	template = () => `
		<div>
			<div class="user-show"></div>
			<div class="user-form"></div>
		</div>
`;
}
