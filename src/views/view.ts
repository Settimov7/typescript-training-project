import { Model } from '../models/model';

export abstract class View<T extends Model<K>, K> {
	regions: { [key: string]: Element } = {};
	
	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}
	
	abstract template: () => string;
	
	regionsMap = (): { [key: string]: string } => ({});
	
	eventsMap = (): { [key: string]: () => void } => ({});
	
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
	
	mapRegions = (fragment: DocumentFragment): void => {
		const regionsMap = this.regionsMap();
		
		for (let key in regionsMap) {
			const selector = regionsMap[key];
			const element = fragment.querySelector(selector);
			
			if(element) {
				this.regions[key] = element;
			}
		}
	};
	
	onRender = (): void => {};
	
	render = (): void => {
		this.parent.innerHTML = '';
		
		const element = document.createElement('template');
		const { content } = element;
		
		element.innerHTML = this.template();
		
		this.bindEvents(content);
		this.mapRegions(content);
		
		this.onRender();
		
		this.parent.append(content);
	};
}
