var dotty = require('dotty');

function set(component, path, value) {
  dotty.put(component.state, path, value);
  component.setState(component.state);
}

function toggle(component, path) {
  dotty.put(component.state, path, !dotty.get(component.state, path))
  component.setState(component.state);
}

module.exports = {set: set, toggle: toggle};
