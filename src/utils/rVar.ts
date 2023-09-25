export type RVar<T> = {
    get value(): T;
    set value(value: T);
    subscribe(subscriber: (value: T) => void): void;
}

/**
 * Observable variable
 * @param initialValue
 */
export default function rVar<T>(initialValue?: T): RVar<T> {
    let _value = initialValue;
    const subscribers: ((value: T) => void)[] = [];

    return {
        get value(): T {
            return _value;
        },
        set value(newValue: T) {
            _value = newValue;
            subscribers.forEach(subscriber => subscriber(_value));
        },
        subscribe(subscriber: (value: T) => void) {
            subscribers.push(subscriber);
        }
    }
}
