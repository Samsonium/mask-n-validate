/** Input sequence elements mapping */
export default interface InputMapping {
    type: 'input';

    /** Input placeholder */
    placeholder?: string;

    /** Validator regexp or function */
    validator?: RegExp | ((value: string) => string | boolean);

    /**
     * Value mask for input.
     * Character cells can be masked with 'x' symbol.
     */
    mask?: string;
}
