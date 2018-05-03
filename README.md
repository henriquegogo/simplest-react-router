# Simplest React Router

The simplest router for React apps

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save simplest-react-router


Then just import in your React project

```js
import React, { Component } from 'react';
import Route from 'simplest-react-router';

export default class App extends Component {
  render() {
    return (
      <section>
        <Route path="#first">
          First path
        </Route>
        <Route path="#second">
          Second path
        </Route>
      </section>
    );
  }
}
```

## License

MIT License
