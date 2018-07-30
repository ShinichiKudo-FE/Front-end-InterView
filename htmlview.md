# html

## DOCTYPE（文档类型）的作用是什么？

DOCTYPE 则用来声明文档类型，它可以告诉 SGML parser 使用什么 DTD 来解析文档。

什么是 SGML
它是可以定义标签语言的元语言，比如 HTML5 之前的版本都是拿 SGML 来写的。

为什么 html5 的 doctype 这么简单呢？因为 HTML5 不再是基于 SGML 的语言，而 doctype 只是用来激活模式的。

为什么 HTML5 不再是 SGML 了呢？
我想它的原因可能是这样：SGML 需要在 DTD 中定义好标签和属性，但是 HTML5 中要允许自定的标签和属性的，原来的框架太过束缚，它需要更加广大的范围来放飞自己。

## HTML 和 XHTML 有什么区别？

最主要的不同：
XHTML 元素必须被正确地嵌套。
XHTML 元素必须被关闭。
标签名必须用小写字母。
XHTML 文档必须拥有根元素。

## 浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？

* 标准模式与怪异模式产生原因

在W3C标准出台以前，浏览器在对页面的渲染上没有统一规范，产生了差异(Quirks mode或者称为Compatibility Mode)；由于W3C标准的推出，浏览器渲染页面有了统一的标准(CSScompat或称为Strict mode也有叫做Standars mode)。

W3C标准推出以后，浏览器都开始采纳新标准，但存在一个问题就是如何保证旧的网页还能继续浏览，在标准出来以前，很多页面都是根据旧的渲染方法编写的，如果用的标准来渲染，将导致页面显示异常。为保持浏览器渲染的兼容性，使以前的页面能够正常浏览，浏览器都保留了旧的渲染方法（如：微软的IE）。这样浏览器渲染上就产生了Quircks mode和Standars mode，两种渲染方法共存在一个浏览器上。

火狐的始终表现的很一致，不用我们操心。重点是IE（6，7，8）标准模式与怪异模式差别很大，主要体现在 **对盒子模型的解释上**。

* 判断浏览器模式

js方法

```js
   alert(window.top.document.compatMode)
   //BackCompat  怪异模式
   //CSS1Compat  标准模式
```

* 怪异模式有哪些怪异的行为？

标准模式下，基于Gecko的浏览器将会对齐至基线，而在quirks模式下它们会对齐至底部。[3]

## 使用 data- 属性的好处是什么？

data-前缀加上自定义的属性名，使用这样的结构可以进行数据存放。使用data-*可以解决自定义属性混乱无管理的现状

data-* 属性用于存储页面或应用程序的私有自定义数据。

data-* 属性赋予我们在所有 HTML 元素上嵌入自定义 data 属性的能力。

存储的（自定义）数据能够被页面的 JavaScript 中利用，以创建更好的用户体验（不进行 Ajax 调用或服务器端数据库查询）。

data-* 属性包括两部分：

属性名不应该包含任何大写字母，并且在前缀 "data-" 之后必须有至少一个字符 属性值可以是任意字符串

注释：用户代理会完全忽略前缀为 “data-” 的自定义属性
data-*解释：用于存储页面或应用程序的私有自定义数据
1.自定义属性，可以被js很好的操作
2.H5的新属性
3.通过js的element.dataset.*或jQuery的data('*')拿到，*可以为url等字符
4.框架的数据绑定，例如data-ng-if="cs==1"

## 如果把 HTML5 看作做一个开放平台，那它的构建模块有哪些？

```html
列表<nav>,
头部<header>,
内容<section>,
底部<footer>
```

## cookies、sessionStorage 和localStorage 的区别

* cookie 确实非常小，它的大小限制为4KB左右，它的主要用途有保存登录信息

* localStorage 是 HTML5 标准中新加入的技术，它并不是什么划时代的新东西。早在 IE 6 时代，就有一个叫 userData 的东西用于本地存储，而当时考虑到浏览器兼容性，更通用的方案是使用 Flash。而如今，localStorage 被大多数浏览器所支持，如果你的网站需要支持 IE6+，那以 userData 作为你的 polyfill 的方案是种不错的选择。

* sessionStorage 与 localStorage 的接口类似，但保存数据的生命周期与 localStorage 不同。它只是可以将一部分数据在当前会话中保存下来，刷新页面数据依旧存在。但当页面关闭后，sessionStorage 中的数据就会被清空。

cookie 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效,存放数据大小一般4K左右，而sessionStorage与localStorage大小在5兆左右，在客户端生成，localStorage除非被清除，否则会永久保存，sessionStorage仅在当前会话下有效，关闭页面或浏览器后被清除，cookie在与服务器端通信每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题,而sessionStorage与localStorage仅在客户端（即浏览器）中保存，不参与和服务器的通信。

安全性方面，cookie中最好不要放置任何明文的东西。两个storage的数据提交后在服务端一定要校验（其实任何payload和qs里的参数都要校验）

## 请解释 `<script>、<script async> 和 <script defer>` 的区别。

当浏览器碰到 script 脚本的时候：
`<script src="script.js"></script>`

没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

`<script async src="script.js"></script>`

有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

`<script defer src="myscript.js"></script>`

有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

## 如何使页面支持多种语言？

两种方法：

1，静态：就是为每种语言分别准备一套页面文件，要么通过文件后缀名来区分不同语言，要么通过子目录来区分不同语言。
2，动态：站点内所有页面文件都是动态页面文件（PHP，ASP等）而不是静态页面文件，在需要输出语言文字的地方统一采用语言变量来表示，这些语言变量可以根据用户选择不同的语言赋予不同的值，从而能够实现在不同的语言环境下输出不同的文字。

## 为什么通常推荐将 CSS `<link>` 放置在 `<head></head>` 之间，而将 JS `<script>` 放置在 </body>之前？你知道有哪些例外吗？

css放在head中， 是因为浏览器解析html文档是自上而下的，如果放底部的话，页面结构出来了，css还没开始渲染，可能会看到只有结构的页面。CSS 应当写在 head 中，以避免页面元素由于样式确实造成瞬间的白页或者给用户闪烁感。

而js放在</body>之前，是因为JS可能会改变DOM树，也可能依赖css样式。如果放在前面，那么DOM和css可能还未加载，这样容易报错。还有一个，我觉得是加载速度的问题，js放前面，页面会先去加载他，拖慢了时间，使用户在一定时间内看不到网页内容。

## 什么是渐进式渲染 (progressive rendering)？

页面第一次呈现速度稍快.
第一次只加载一个页面, 以及第一个页面所需要的文件,速度很快.但是每一次加载的速度基本相同的. 可用缓存进行优化
用户在网站中,停留时时间较长,点击较多时, 就会体现出劣势.

## 在设计和开发多语言网站时，有哪些问题你必须要考虑？

（1） 应用字符集的选择对提供了多语言版本的网站来说，Unicode字符集应该是最理想的选择。
（2） 语言书写习惯&导航结构
（3） 数据库驱动型网站
（4） 搜索引擎&市场推广

## 你用过哪些不同的 HTML 模板引擎？

这个有很多，各大前端框架组件基本都可以叫模版引擎，自己用过什么说说什么。
比喻jQuery，Backbone，Anguar, React，bootstarp等等。

## 介绍一下你对浏览器内核的理解？

主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

JS引擎则：解析和执行javascript来实现网页的动态效果。
最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

## html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

* HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

绘画 canvas;
用于媒介回放的 video 和 audio 元素;
本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
sessionStorage 的数据在浏览器关闭后自动删除;
语意化更好的内容元素，比如 article、footer、header、nav、section;
表单控件，calendar、date、time、email、url、search;
新的技术webworker, websockt, Geolocation;
移除的元素：
纯表现的元素：basefont，big，center，font, s，strike，tt，u;
对可用性产生负面影响的元素：frame，frameset，noframes；
支持HTML5新标签：
IE8/IE7/IE6支持通过document.createElement方法产生的标签，
可以利用这一特性让这些浏览器支持HTML5新标签，
浏览器支持新标签后，还需要添加标签默认的样式。

* 支持HTML5新标签：

IE8/IE7/IE6支持通过document.createElement方法产生的标签，
可以利用这一特性让这些浏览器支持HTML5新标签，
浏览器支持新标签后，还需要添加标签默认的样式。

当然最好的方式是直接使用成熟的框架、比如html5shim;

```html
<!--[if lt IE 9]>
   <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
<![endif]-->
```

* 如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素

## 简述一下你对HTML语义化的理解？

用正确的标签做正确的事情。
html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
及时在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的;
搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

## HTML5的离线储存怎么使用，工作原理能不能解释一下？

在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

* 原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

> 如何使用：
1、页面头部像下面一样加入一个manifest的属性；
2、在cache.manifest文件的编写离线存储的资源；

```js
CACHE MANIFEST
#v0.11
CACHE:
js/app.js
css/style.css
NETWORK:
resourse/logo.png
FALLBACK:
/ /offline.html
```

3、在离线状态时，操作window.applicationCache进行需求实现。

> 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
离线的情况下，浏览器就直接使用离线存储的资源。

## iframe有那些缺点

* iframe会阻塞主页面的Onload事件； 搜索引擎的检索程序无法解读这种页面，不利于SEO;
* iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
动态给iframe添加src属性值，这样可以绕开以上两个问题。

## Label的作用是什么？是怎么用的？

label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

```html
<label for="Name">Number:</label>
<input type=“text“name="Name" id="Name"/>

<label>Date:<input type="text" name="B"/></label>
```

## HTML5的form如何关闭自动完成功能？

给不想要提示的 form 或下某个input 设置为 autocomplete=off

## 如何实现浏览器内多个标签页之间的通信? (阿里)

调用localstorge、cookies等本地存储方式

## webSocket如何兼容低浏览器？(阿里)

Adobe Flash Socket 、
ActiveX HTMLFile (IE) 、
基于 multipart 编码发送 XHR 、
基于长轮询的 XHR

## 页面可见性（Page Visibility）API 可以有哪些用途？

在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；

## 如何在页面上实现一个圆形的可点击区域？

1、map+area或者svg
2、border-radius
3、纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等

## 实现不使用 border 画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。

```html
<div style="height:1px;overflow:hidden;background:#ccc"></div>
```

## 网页验证码是干嘛的，是为了解决什么安全问题。

区分用户是计算机还是人的公共全自动程序。可以防止：恶意破解密码、刷票、论坛灌水；
有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试；