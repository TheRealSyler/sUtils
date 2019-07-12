import { Subject } from 'rxjs';

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
export class EventManager {
  constructor() {}
  private _EVENTS: { [key: string]: { observer: Subject<EVENTCall>; listeners: { [key: string]: EVENTListener } } } = {};
  /**
   * Add an event to this instance of the event manager.
   * @param event event to add.
   */
  ADD_Event(event: string) {
    if (this._EVENTS[event] !== undefined) {
      console.warn('Event: ', event, ' already Exists');
    } else {
      this._EVENTS[event] = { listeners: {}, observer: new Subject() };
      this._EVENTS[event].observer.subscribe({
        next: call => {
          for (const key in this._EVENTS[event].listeners) {
            if (this._EVENTS[event].listeners.hasOwnProperty(key)) {
              const listener = this._EVENTS[event].listeners[key];
              if (listener.type) {
                if (listener.type === call.type) {
                  this._EXECUTE_FUNC(call, listener);
                }
              } else {
                this._EXECUTE_FUNC(call, listener);
              }
            }
          }
        }
      });
    }
  }

  private _EXECUTE_FUNC(call: EVENTCall, listener: EVENTListener) {
    if (call.args !== undefined) {
      listener.func(...call.args);
    } else {
      if (listener.funcArgs !== undefined) {
        listener.func(...listener.funcArgs);
      } else {
        listener.func();
      }
    }
  }
  /**
   * Adds a listener to the event.
   * @param event event to listen to.
   * @param listenerId unique listener id.
   * @param listener Event Listener.
   */
  ADD_Listener(event: string, listenerId: string, listener: EVENTListener) {
    if (this._EVENTS[event].listeners[listenerId] !== undefined) {
      console.warn(listenerId, ' is already Subscribed to ', event);
    } else {
      this._EVENTS[event].listeners[listenerId] = listener;
    }
  }
  /**
   * Remove the given event from this instance of the event manager.
   * @param event Event to Remove.
   */
  REMOVE_Event(event: string) {
    this._EVENTS[event] = undefined;
  }
  /**
   * Removes a Listener from this instance of the event manager.
   * @param event event on which the listener will be removed.
   * @param listenerId the id of the listener that will be removed.
   */
  REMOVE_Listener(event: string, listenerId: string) {
    this._EVENTS[event].listeners[listenerId] = undefined;
  }
  /**
   * Call the given event.
   * @param event event to call.
   * @param type type of the event.
   * @param args arguments for the event function.
   */
  CALL_Event(event: string, type?: string, ...args: any[]) {
    if (this._EVENTS[event] !== undefined) {
      if (type !== undefined) {
        this._EVENTS[event].observer.next({ type, args });
      } else {
        this._EVENTS[event].observer.next({ args });
      }
    } else {
      console.warn('could not call Event:', event, `because it doesn't exist`);
    }
  }
}
