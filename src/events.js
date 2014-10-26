var Event = require("./event");

/**
 * Subscribe to event of a given object
 * @param host {object}
 * @param event {string|number} Event id
 * @param handler {function}
 * @param data {object} Data that will be passed to callback
 * @param [once] {boolean}
 * @returns {number} Subscription id
 */
function on(host, event, handler, data, once) {
    var e, events = host._events,
        on = Event.on;

    if (events === undefined)
        events = host._events = {};

    e = events[event];

    if (e === undefined)
        e = events[event] = new Event();

    return on(e, handler, data, once);
}

function once(host, event, handler, data) {
    return on(host, event, handler, data, true);
}

/**
 * Unsubscribe from event of a given object
 * @param host {object}
 * @param event {string|number} Event id
 * @param tokenOrListener {number|function} Subscription id or handler
 * @returns {boolean}
 */
function off(host, event, tokenOrListener) {
    var e, off = Event.off;

    if (host._events === undefined || host._events[event] === undefined)
        return false;

    e = host._events[event];

    return off(e, tokenOrListener);
}

/**
 * Dispatch an event of a given object
 * @param host {object}
 * @param event {string|number} Event id
 * @param c {object} Sender argument that will be passed to callback
 * @param [d] {object} Event arguments that will be passed to callback
 */
function fire(host, event, c, d) {
    var sender, args, fire = Event.fire;

    if (d === undefined) {
        sender = host;
        args = c;
    } else {
        sender = c;
        args = d;
    }

    if (host._events === undefined || host._events[event] === undefined)
        return;

    fire(host._events[event], sender, args);
}

function event(name) {
    function ev(sender, args) {
        if(sender === undefined && args === undefined) {
            var e, events = this._events;

            if (events === undefined)
                events = this._events = {};

            e = events[name];

            if (e === undefined)
                e = events[name] = new Event();

            return e;
        }else
            return fire(this, name, sender, args);
    }

    return ev;
}

window.Events = {
    on: on,
    once: once,
    off: off,
    fire: fire,
    event: event,
    Event: Event
};
