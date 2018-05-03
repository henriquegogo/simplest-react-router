import React, { Component } from 'react';

export default class Route extends Component {

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.forceUpdate();
    });
  }

  render() {
    return window.location.hash === this.props.path ? this.props.children : null
  }
}
