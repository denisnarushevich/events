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

    var subscriptionId = Events.on(someObj, "someEvent", handler, {someMetaData: 1, self: someObj});

    Event.fire(someObj, "someEvent");

    //You can unsubscribe by listener
    Events.off(someObj, handler);

    //Or you can unsubscribe by subscription
    Events.off(subscriptionId);
```
## Alternative usage
```js
var someObj = {
change: Events.event("change")
}

//Subscribe
var sub = someObj.change().on(function(sender, args, data){
    //do something
});

//Unsubscribe
someObj.change().off(sub);

//Fire
someObj.change(someObj, {someArg:1});
}
```


