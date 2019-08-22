interface Props {
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    events: { [key: string]: Callback[] } = {};

    constructor(private data: Props) {}

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(newProps: Props): void {
        Object.assign(this.data, newProps);
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName] || [];

        if (handlers.length) {
            handlers.forEach((callback) => callback());
        }
    }
}
