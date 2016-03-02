## Careless loader for webpack

Usage

*component.js*

```js
function SpringMap(props,context){
  var obj = props.obj;
  return (
    <map>
      {Object.keys(obj).map(key => (<entry key={key} value={obj[key]}/>))}
    </map>
  );
};

module.exports = {SpringMap};
```

*entry.js*
```js
const springmap = require("careless!./component.js");
```
