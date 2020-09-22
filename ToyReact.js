const createElement = (type, attributes, ...children) => {
  let div = null
  if (typeof type === 'function') {
    div = new type
  } else {
    div = document.createElement(type)
  }

  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      const value = attributes[key];
      div.setAttribute(key, value)
    }
  }
  children.forEach(type => {
    let element = null
    if (typeof type === 'string') {
      element = document.createTextNode(type)
    } else {
      element = type
    }

    Array.isArray(element) ? element.forEach((ele) => div.appendChild(ele)) : div.appendChild(element)
  });
  return div
}

const render = (component, root) => {
  root.appendChild(component.root)
}

class Component {
  constructor() {
    this._root = null
    this.props = {}
    this.children = []
  }
  setAttribute(key, value) {
    this.props[key] = value
  }
  appendChild(element) {
    if (Array.isArray(element)) {
      this.children.push(...element)
    } else {
      this.children.push(element)
    }
  }
  get root() {
    if (!this._root) {
      this._root = this.render()
    }
    return this._root
  }
}

export default Component
export { createElement, render }