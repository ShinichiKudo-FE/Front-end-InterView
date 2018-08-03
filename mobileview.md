# 移动端

## 移动端判断横竖屏的5种解决方案

如果横竖屏切换只是替换样式， 请用第4种，
如果横竖屏切换， 需要执行某些方法，最简单粗暴的就使用 第5种方式。【小米4c,微信浏览器，小米浏览器，360浏览器亲测没有问题】
使用resize会存在一个问题， 在移动端弹出输入法输入框之后，会触发resize ，底部有解决方案

温馨提示:
1、如果移动端所有浏览器都失效，请检查手机屏幕旋转是否开启；
2、如果只有微信旋转失效，而在浏览器中打开正常，请打开微信的【开启横屏模式】；
3、如果以上两条都无法解决，请检查人品。

* 浏览器自带事件 orientationchange

```js
var updateOrientation = function() {
    var orientation = window.orientation;

    switch(orientation) {
      case 90: case -90:
        orientation = 'landscape';
      break;
      default:
        orientation = 'portrait';
    }

    // set the class on the HTML element (i.e. )
    document.body.parentNode.setAttribute('class', orientation);
  };

  // event triggered every 90 degrees of rotation
  window.addEventListener('orientationchange', updateOrientation, false);
```

* css3media属性

```css
@media all and (orientation: portrait) {
  body div { width: 10%; }
}
@media all and (orientation: landscape) {
  body div { width: 15%; }
}
```

* 定时器判断页面宽高

```js
var updateOrientation = function() {
        // landscape when width is biggest, otherwise portrait
        var orientation = (window.innerWidth > window.innerHeight) ? 'landscape': 'portrait';

        // set the class on the HTML element (i.e. )
        document.body.parentNode.setAttribute('class', orientation);
    };

// initialize the orientation
updateOrientation();

// update every 5 seconds
setInterval(updateOrientation, 5000);
```

* 方法1 和 2 两种的结合， 因为1 存在兼容性问题，比如微信浏览器不触发， 那么就可以用定时器，判断CSS。

```js
(function(){
var supportsOrientation = (typeof window.orientation == 'number' && typeof window.onorientationchange == 'object');
var HTMLNode = document.body.parentNode;
var updateOrientation = function() {
// rewrite the function depending on what's supported
if(supportsOrientation) {
updateOrientation = function() {
var orientation = window.orientation;

      switch(orientation) {
        case 90: case -90:
          orientation = 'landscape';
        break;
        default:
          orientation = 'portrait';
      }

      // set the class on the HTML element (i.e. )
      HTMLNode.setAttribute('class', orientation);
    }
  } else {
    updateOrientation = function() {
      // landscape when width is biggest, otherwise portrait
      var orientation = (window.innerWidth > window.innerHeight) ? 'landscape': 'portrait';

      // set the class on the HTML element (i.e. )
      HTMLNode.setAttribute('class', orientation);
    }
  }

  updateOrientation();
}
var init = function() {
  // initialize the orientation
  updateOrientation();

  if(supportsOrientation) {
    window.addEventListener('orientationchange', updateOrientation, false);
  } else {
    // fallback: update every 5 seconds
    setInterval(updateOrientation, 5000);
  }

}
window.addEventListener('DOMContentLoaded', init, false);
})();
```

* 最简单粗暴的 onresize 事件【注意，不能加载 document 或者 body 上】，**必须加在 window对象上**  ，因为 body 和 document 的大小可能因为HTML内容而变化， 这样会造成不必要的触发。

```js
$(window).on('resize', function () {
fn_onResize();
})
```

> 移动端 input textarea 输入会弹出 输入法的框， 会触发 resize 方法. 那么如果横竖屏切换的时候，使用resize方法， 会有问题。 那么怎么处理呢？

```js
$input.on('focus',function(e){
    window.INPUTFOCUS = ture; //加一个标识
})

$input.on('blur',function(){
//这里加定时器，主要作用是，因为 移动端输入法的框缩收之后， 到 触发 resize， 有 大概 200~300ms 的间隔时间 。
    setTimeOut(function(){
        window.INPUTFOCUS = false; //清除标识
    },500)
})

$(window).on('resize',function(){
    if(!window.INPUTFOCUS){
    //弹出 输入法框的时候，不处理
    }
})

```