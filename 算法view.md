# 算法问题

## 使用setTimeout实现setInterval功能

```js
var i = 0;
function intal(){
    setTimeout(function(){
        console.log(i++);
        intal()
    },1000)
}
```