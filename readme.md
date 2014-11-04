# Events.js
>Flexible and simple JavaScript event manager with focus on performance.

## Performance features
* no expensive method calls like call(), apply() or bind();
* no expensive array operations, like splitting arguments;
* accepts delegated event handlers, no need to pollute memory with anonymous functions;
* avoids "this" usage;

## Usage
```js
    var someObj = {};
    
    var handler = function(sender,args,meta){
      //do something
    };

    var token = Events.on(someObj, "someEvent", handler, {someMetaData: 1, self: someObj});

    Event.fire(someObj, "someEvent");

    Events.off(token);

    //Or you can unsubscribe by listener
    Events.off(someObj, "someEvent", handler);
```
## Alternative usage
Both ways of usage are cross-compatible.
```js
var someObj = {
change: Events.event("change")
}

//Subscribe
var sub = someObj.change(function(sender, args, data){
    //do something
});

//Unsubscribe
someObj.change(sub);

//Fire
someObj.change(someObj, {someArg:1});
}
```


