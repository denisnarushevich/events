# Events.js
>Flexible and simple JavaScript event manager with focus on performance.

## Performance features
* no expensive method calls like call(), apply() or bind();
* no expensive array operations, like splitting arguments;
* accepts delegated event handlers, no need to pollute memory with anonymous functions;

## Usage
```js
    //DEFINE:
    function Button(){
        //you can define event on the instance
        this.push = Events.event();
    }

    //alternatively you can define event in the prototype
    Button.prototype.push = Events.event();



    //FIRE:
    Button.prototype.pushButton = function(){
        //first argument - sender, second - args
        this.push(this, {});

        //alternatively
        Events.fire(this, "push", this, {});
    }



    //SUBSCRIBE:
    var button = new Button();

    var listener = function(sender, args, data){
                           //...
                       }

    var token = button.push(listener, "thisIsMyDataThatWillBePassedToListener");

    //alternatively
    var token = Events.on(button, "push", listener, "thisIsMyDataThatWillBePassedToListener");



    //UNSUBSCRIBE
    //Unsubscribing this way, you can unsubscribe only by token
    button.push(token);
    //but, using "alternative" approach, you can unsubscribe by token...
    Events.off(button, "push", token);
    //...or by listener. This will match only first subscription with given listener.
    Events.off(button, "push", listener);
```

