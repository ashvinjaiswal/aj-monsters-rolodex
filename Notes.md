### Main Concetps

## Component
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

### Function Component

The simplest way to define a component is to write a JavaScript function:
it accepts a single “props” (which stands for properties) object argument with data and returns a React element.

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

###  Class components 


1. To define a React component class, you need to extend React.Component.
2. The only method you must define in a React.Component subclass is called render().

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```



