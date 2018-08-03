# js

## 5.27

### 一

为什么说js是单线程这一说法？为什么不会被卡主

javascript除了一个主线程外，还配有一个代码队列，这个队列用于存放定时器，http请求，事件响应的回调

### 二

什么是浏览器事件模型 ? 请描述js的事件冒泡和捕获(event bubble and capturing), 如何停止冒泡(bubble)?

浏览器事件模型与js事件模型是同一个概念。

Netscape主张元素1的事件首先发生，这种事件发生顺序被称为捕获型
微软则保持元素2具有优先权，这种事件顺序被称为冒泡型

进入捕获阶段 --》处于事件目标-- 》冒泡阶段

为一个web开发者，你可以选择是在捕获阶段还是冒泡阶段绑定事件处理函数，这是通过addEventListener()方法实现的，如果这个函数的最后一个参数是true，则在捕获阶段绑定函数，反之false，在冒泡阶段绑定函数。

停止冒泡
IE window.event.cancelBubble = true
W3c event.stopPropagation()

### 三

在js中我们为什么需要event delegation？简要描述一下事件委托？

使用事件委托技术能让你避免对特定的每个节点添加事件监听器，反之，事件监听器是建立在父容器上，事件监听器会分析从子元素冒泡上来的事件，找到是哪个子元素的事件。 也就是说把监听子元素上的事件监听函数放在它的父元素上来

## 5.28

### 一道this的问题

```js
    var num = 10;
    var obj = {
        num:8,
        inner: {
            num: 6,
            print: function () {
                console.log(this.num);
            }
        }
    }
    num = 888;
    obj.inner.print(); // 6
    var fn = obj.inner.print;
    fn(); //888
    (obj.inner.print)(); //6
    (obj.inner.print = obj.inner.print)(); //888 这个点没有太理解，虽然答对了
```

### http的cache机制，以及200状态下怎么实现 from cache（用于优化，没有接触过，需要理解）

`含义`
定义：浏览器缓存（Browser Caching）是为了加速浏览，浏览器在用户磁盘上对最近请求过的文档进行存储，当访问者再次请求这个页面时，浏览器就可以从本地磁盘显示文档，这样就可以加速页面的阅览。

cache的作用：
1、减少延迟，让你的网站更快，提高用户体验。
2、避免网络拥塞，减少请求量，减少输出带宽

`实现手段`
Cache-Control中的max-age是实现内容cache的主要手段，共有3种常用策略：max-age和Last-Modified（If-Modified-Since）的组合、仅max-age、max-age和ETag的组合。

对于强制缓存，服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行比较缓存策略。
对于比较缓存，将缓存信息中的Etag和Last-Modified通过请求发送给服务器，由服务器校验，返回304状态码时，浏览器直接使用缓存。

### 什么是虚拟dom

React为啥这么大？因为它实现了一个虚拟DOM（Virtual DOM）。虚拟DOM是干什么的？这就要从浏览器本身讲起

如我们所知，在浏览器渲染网页的过程中，加载到HTML文档后，会将文档解析并构建DOM树，然后将其与解析CSS生成的CSSOM树一起结合产生爱的结晶——RenderObject树，然后将RenderObject树渲染成页面（当然中间可能会有一些优化，比如RenderLayer树）。这些过程都存在与渲染引擎之中，渲染引擎在浏览器中是于JavaScript引擎（JavaScriptCore也好V8也好）分离开的，但为了方便JS操作DOM结构，渲染引擎会暴露一些接口供JavaScript调用。由于这两块相互分离，通信是需要付出代价的，因此JavaScript调用DOM提供的接口性能不咋地。各种性能优化的最佳实践也都在尽可能的减少DOM操作次数。

而虚拟DOM干了什么？它直接用JavaScript实现了DOM树（大致上）。组件的HTML结构并不会直接生成DOM，而是映射生成虚拟的JavaScript DOM结构，React又通过在这个虚拟DOM上实现了一个 diff 算法找出最小变更，再把这些变更写入实际的DOM中。这个虚拟DOM以JS结构的形式存在，计算性能会比较好，而且由于减少了实际DOM操作次数，性能会有较大提升