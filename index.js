const createElement = (type, attributes, ...children) => {
    const div = document.createElement(type)
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
        div.appendChild(element)
    });
    return div
}
let r = <div id="a" class='b'><div>222<div>333</div></div>111</div >
document.body.appendChild(r)