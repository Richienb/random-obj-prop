/**
Get a random property from an object.

@example
```
import randomObjProp = require('random-obj-prop');

randomObjProp({foo: '🐴', bar: '🦄'});
//=> '🦄'
```
*/
declare function randomObjProp<T>(object: {[key: string]: T}): T;

export = randomObjProp;
