"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
/**
 * Basic Event Manager, executes functions when an event gets called.
 */
var EventManager = /** @class */ (function () {
    function EventManager() {
        this._EVENTS = {};
    }
    /**
     * Add an event to this instance of the event manager.
     * @param event event to add.
     */
    EventManager.prototype.ADD_Event = function (event) {
        var _this = this;
        if (this._EVENTS[event] !== undefined) {
            console.warn('Event: ', event, ' already Exists');
        }
        else {
            this._EVENTS[event] = { listeners: {}, observer: new rxjs_1.Subject() };
            this._EVENTS[event].observer.subscribe({
                next: function (call) {
                    for (var key in _this._EVENTS[event].listeners) {
                        if (_this._EVENTS[event].listeners.hasOwnProperty(key)) {
                            var listener = _this._EVENTS[event].listeners[key];
                            if (listener.type) {
                                if (listener.type === call.type) {
                                    _this._EXECUTE_FUNC(call, listener);
                                }
                            }
                            else {
                                _this._EXECUTE_FUNC(call, listener);
                            }
                        }
                    }
                }
            });
        }
    };
    EventManager.prototype._EXECUTE_FUNC = function (call, listener) {
        if (call.args !== undefined) {
            listener.func.apply(listener, call.args);
        }
        else {
            if (listener.funcArgs !== undefined) {
                listener.func.apply(listener, listener.funcArgs);
            }
            else {
                listener.func();
            }
        }
    };
    /**
     * Adds a listener to the event.
     * @param event event to listen to.
     * @param listenerId unique listener id.
     * @param listener Event Listener.
     */
    EventManager.prototype.ADD_Listener = function (event, listenerId, listener) {
        if (this._EVENTS[event].listeners[listenerId] !== undefined) {
            console.warn(listenerId, ' is already Subscribed to ', event);
        }
        else {
            this._EVENTS[event].listeners[listenerId] = listener;
        }
    };
    /**
     * Remove the given event from this instance of the event manager.
     * @param event Event to Remove.
     */
    EventManager.prototype.REMOVE_Event = function (event) {
        this._EVENTS[event] = undefined;
    };
    /**
     * Removes a Listener from this instance of the event manager.
     * @param event event on which the listener will be removed.
     * @param listenerId the id of the listener that will be removed.
     */
    EventManager.prototype.REMOVE_Listener = function (event, listenerId) {
        this._EVENTS[event].listeners[listenerId] = undefined;
    };
    /**
     * Call the given event.
     * @param event event to call.
     * @param type type of the event.
     * @param args arguments for the event function.
     */
    EventManager.prototype.CALL_Event = function (event, type) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (this._EVENTS[event] !== undefined) {
            if (type !== undefined) {
                this._EVENTS[event].observer.next({ type: type, args: args });
            }
            else {
                this._EVENTS[event].observer.next({ args: args });
            }
        }
        else {
            console.warn('could not call Event:', event, "because it doesn't exist");
        }
    };
    return EventManager;
}());
exports.EventManager = EventManager;
