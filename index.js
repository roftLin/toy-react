import Component, { render, createElement } from './ToyReact.js'
class MyComponent extends Component {
  render() {
    return <div>
      <h1>MyComponent</h1>
      {this.children}
    </div>
  }
}

let app = <MyComponent id="a" class='b'>111<div>222<div>333</div></div></MyComponent>
render(app, document.body) 