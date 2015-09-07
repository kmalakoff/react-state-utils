# react-state-utils
Some helpers for updating component state

Toggling a button:

```
import React from 'react';
import {Button} from 'react-bootstrap';
import {toggle} from 'react-state-utils';

class MyComponent extends SummaryBase {
  state = {useX: true}

  render() {
    let {useX} = this.state;
    return <Button active={useX} onClick={e=>toggle(this, 'useX')}>UseX</Button>;
  }
}

export default MyComponent;
```

Setting a button group:

```
import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import {set} from 'react-state-utils';

class MyComponent extends SummaryBase {
  state = {diner: 'Chicken'}

  render() {
    let {diner} = this.state;
    return (
      <ButtonGroup>
        <Button active={diner == 'Chicken'} onClick={e=>set(this, 'diner', 'Chicken')}>Chicken</Button>
        <Button active={diner == 'Pizza'} onClick={e=>set(this, 'diner', 'Pizza')}>Pizza</Button>
      </ButtonGroup>
    );
  }
}

export default MyComponent;
```

Using nesting:

```
import React from 'react';
import {Button} from 'react-bootstrap';
import {toggle} from 'react-state-utils';

class MyComponent extends SummaryBase {
  state = {panelA: {useX: true}}

  render() {
    let {useX} = this.state;
    return <Button active={useX} onClick={e=>toggle(this, 'panelA.useX')}>UseX</Button>;
  }
}

export default MyComponent;
```
