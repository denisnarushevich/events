# Events
>Flexible and simple event manager with focus performance.

## Performance features
* no expensive method calls, like call(), apply() or bind()
* no expensive array operations, like splitting arguments
* accepts delegated event handlers, no need to pollute memory with anonymous functions
* avoids "this" usage

## Usage
This is a common way to raise or subscribe to events.
This way will give you a headache when you decide to make your class inherit from some other.
```js
    function MyObj(){}
    MyObj.prototype = Object.create(Events.EventEmmiter.prototype);
    
    //sender - the object, who called event
    //args - arguments passed when triggering event
    //data - arguments passed when subscribing to event
    MyObj.prototype.onSomeEvent = function(sender, args, data){
      //do something
    };
    
    var myobj = new MyObj();
    
    //ADD LISTENER
    var subscriptionId = myobj.on("event1", myobj.onSomeEvent, data);
    
    //FIRE
    myobj.fire("event1", {somearg:1});
    
    //REMOVE LISTENER
    //accepts subscriptionId or handler function
    myobj.off("event1", subscriptionId);
```
## Alternative usage #1
```js
var someObj = {
change: Events.event()
}

//Subscribe
var sub = someObj.change.add(function(sender, args, data){
    //do something
});

//Unsubscribe
someObj.change.remove(sub);

//Fire
someObj.change("stringAsArgument");
}
```
### Alternative usage #2
Alternative usage is faster and doesn't require to pollute prototype chain of object
```js
    var someObj = {};
    
    var handler = function(sender,args,meta){
      //do something
    };

    Events.on(someObj, "someEvent", handler, {someMetaData: 1, self: someObj});

    Event.fire(someObj, "someEvent");

    Events.off(someObj, handler);
```
  

