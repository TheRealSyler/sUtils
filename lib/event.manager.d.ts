export interface EVENTListener {
    /**
     * Function to execute when the event get called.
     */
    func: (...args: any[]) => void;
    /**
     * Static array of function arguments will be overwritten by the arguments passed by the call event.
     */
    funcArgs?: any[];
    /**
     * Type of the event, if the type === the type of the event call the listener function will be executed.
     */
    type?: string;
}
export interface EVENTCall {
    /**
     * Type of the Event.
     */
    type?: string;
    /**
     * argument that wil be passed to the listener function.
     */
    args?: any;
}
/**
 * Basic Event Manager, executes functions when an event gets called.
 */
export declare class EventManager {
    constructor();
    private _EVENTS;
    /**
     * Add an event to this instance of the event manager.
     * @param event event to add.
     */
    ADD_Event(event: string): void;
    private _EXECUTE_FUNC;
    /**
     * Adds a listener to the event.
     * @param event event to listen to.
     * @param listenerId unique listener id.
     * @param listener Event Listener.
     */
    ADD_Listener(event: string, listenerId: string, listener: EVENTListener, options?: {
        createNewEvent: boolean;
    }): void;
    /**
     * Remove the given event from this instance of the event manager.
     * @param event Event to Remove.
     */
    REMOVE_Event(event: string): void;
    /**
     * Removes a Listener from this instance of the event manager.
     * @param event event on which the listener will be removed.
     * @param listenerId the id of the listener that will be removed.
     */
    REMOVE_Listener(event: string, listenerId: string): void;
    /**
     * Call the given event.
     * @param event event to call.
     * @param type type of the event.
     * @param args arguments for the event function.
     */
    CALL_Event(event: string, type?: string, ...args: any[]): void;
}
