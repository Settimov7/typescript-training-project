import { User } from '../models/user';

export class UserForm {
	constructor(public parent: Element, public model: User) {
		this.bindModel();
	}
	
	bindModel = (): void => {
		this.model.on('change', this.render);
	};
	
	eventsMap = (): { [key: string]: () => void } => ({
		'click:.set-age': this.onSetAgeClick,
		'click:.set-name': this.onSetNameClick,
	});
	
	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};
	
	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');
		const newName = input.value;
		
		this.model.set({ name: newName });
	};
	
	template = (): string => `
		<div>
			<h1>User form</h1>
			<p>User name: ${ this.model.get('name') }</p>
			<p>User age: ${ this.model.get('age') }</p>
		 	<input/>
		 	<button class="set-name">Change name</button>
		 	<button class="set-age">Set random age</button>
		</div>
	`;
	
	bindEvents = (fragment: DocumentFragment): void => {
		const eventsMap = this.eventsMap();
		
		for (let eventKey in eventsMap) {
			const [ eventType, selector ] = eventKey.split(':');
			
			fragment.querySelectorAll(selector).forEach((element) => {
				element.addEventListener(eventType, eventsMap[eventKey]);
			});
		}
	};
	
	render = (): void => {
		this.parent.innerHTML = '';
		
		const element = document.createElement('template');
		const { content } = element;
		
		element.innerHTML = this.template();
		
		this.bindEvents(content);
		this.parent.append(content);
	};
}
