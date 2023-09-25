import ErrorInfo from './ErrorInfo';

/** createInput function configuration */
export default interface Config {

    /** Input sequence box */
    element: HTMLElement;

    /** Event handlers */
    handlers?: Partial<{

        /** Validation errors handler */
        onError: (errors: ErrorInfo[]) => void;

        /** Select or input field update event */
        onInput: (data: {
            name: string;
            value: string;
        }[]) => void;
    }>
}
