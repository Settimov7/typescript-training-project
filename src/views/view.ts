import { Model } from '../models/model';

export abstract class View<T extends Model<K>, K> {
	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}
	
	abstract eventsMap: () => { [key: string]: () => void };
	abstract template: () => string;
	
	bindModel = (): void => {
		this.model.on('change', this.render);
	};
	
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
