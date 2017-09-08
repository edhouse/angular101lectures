# Angular - Events

- handling the events triggered by the DOM host elements
- using standard Web API events (https://developer.mozilla.org/en-US/docs/Web/API/Event) 

```
    <td (hover)="onHover()" />
```

## $event object
- object that describes the event
- all events have common properties:
  - target - element that triggered the event
  - timeStamp - 
  - type - string with type name


## Key  events - handling
- basic event binding for key events response to all keys

```
    // all key events will be handled
    <b>{{inputValue}}</b>
    <input (keyup)="inputValue = $event.value"/>
```

## Key events - filtering
- built-in support for binding only for filtered key events

```
    // only filtered key events will be handled
    <b>{{inputValue}}</b>
    <input (keyup.enter)="inputValue = $event.value" />
```