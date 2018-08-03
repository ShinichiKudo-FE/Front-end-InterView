一、什么是链式调用（方法链），链式调用的好处，坏处？
所谓链式调用其实只不过是一种语法招数。它能让你通过重用一个初始操作来达到用少量代码表达复杂操作的目的。 
链式调用的原理 
在对象上的方法最后 加上return this 
把对象再返回回来，对象就继续调用方法了，所以就可以链式操作了。 

实现链式的基本条件就是要实例对象先创建好，调用自己的方法。
它能让你通过重用一个初始操作来达到用少量代码表达复杂操作的目的。 

优缺点：

1：维护性强

2：对方法的返回类型无要求 

3：代码整洁

4. 所有对象的方法返回的都是对象本身，也就是说没有返回值，所以这种方法不一定在任何环境下都适合



二、什么是原型，什么是原型链，什么是实例，什么是构造函数，他们之间的区别？

三、什么是闭包？闭包的好处与坏处？
闭包的原理是作用域链
闭包是就是函数中的函数，能够读取其他函数内部变量的函数。。

为什么要使用闭包？

出于种种原因，我们有时候需要得到函数内的局部变量

好处：

1.使用闭包可以访问函数中的变量。

2.可以使变量长期保存在内存中，生命周期比较长。

3.模拟块级作用域，模拟私有变量


坏处：
    
闭包不能滥用，否则会导致内存泄露，影响网页的性能。闭包使用完了后，要立即释放资源，将引用变量指向null。

论编程抽象能力的重要性....

```js
//从前：有一位公主......
function princess() {
//她生活在一个充满奇幻冒险的世界里, 她遇到了她的白马王子,带着他骑着独角兽开始周游这个世界，与巨龙战斗，巧遇会说话的动物，还有其他一些新奇的事物。   
 	var adventures = [];

    function princeCharming() { /* ... */ } //白马王子

    var unicorn = { /* ... */ },          //独角兽
        dragons = [ /* ... */ ],         //龙
        squirrel = "Hello!";            //松鼠

    adventures.push(unicorn, dragons, squirrel, ....);
		//但是她不得不回到她的王国里，面对那些年老的大臣。
	return {
		//她会经常给那些大臣们分享她作为公主最近在外面充满奇幻的冒险经历。       
		 story: function() {
            return adventures[adventures.length - 1];
        }
    };
}
       //但是在大臣们的眼里，总是认为她只是个小女孩......
		var littleGirl = princess();
        //....讲的是一些不切实际，充满想象的故事
		littleGirl.story();
        //即便所有大臣们知道他们眼前的小女孩是真的公主，但是他们却不会相信有巨龙或独角兽，因为他们自己从来没有见到过。大臣们只会觉得它们只存在于小女孩的想象之中。但是我们却知道小女孩述说的是事实.......
```

三、如何取消冒泡？

    在IE的模型中，你必须设置事件的cancelBubble的属性为true：
    window.event.cancelBubble = true

    阻止冒泡事件 e.stopPropagation()
    阻止浏览器默认行为 e.preventDefault()

四、JQuery的父、子、兄弟节点查找方法
jQuery.parent(expr)           //找父元素

jQuery.parents(expr)          //找到所有祖先元素，不限于父元素

jQuery.children(expr)        //查找所有子元素，只会找到直接的孩子节点，不会返回所有子孙

jQuery.contents()            //查找下面的所有内容，包括节点和文本。

jQuery.prev()                //查找上一个兄弟节点，不是所有的兄弟节点

jQuery.prevAll()             //查找所有之前的兄弟节点

jQuery.next()                //查找下一个兄弟节点，不是所有的兄弟节点

jQuery.nextAll()             //查找所有之后的兄弟节点

jQuery.siblings()            //查找兄弟节点，不分前后

jQuery.find(expr)            //跟jQuery.filter(expr)完全不一样，jQuery.filter(expr)是从初始的

                          　　　　 jQuery对象集合中筛选出一部分，而jQuery.find()的返回结果，不会有初始集中

                          　　　　 筛选出一部分，比如：

                         　　　　$("p").find("span")是从元素开始找，等于$("p span")

四、html，xhtml和xml的定义：

　　1、html即是超文本标记语言（Hyper Text Markup Language），是最早写网页的语言，但是由于时间早，规范不是很好，大小写混写且编码不规范；
　　2、xhtml即是升级版的html（Extensible Hyper Text Markup Language），对html进行了规范，编码更加严谨纯洁，也是一种过渡语言，html向xml过渡的语言；
　　3、xml即时可扩展标记语言（Extensible Markup Language），是一种跨平台语言，编码更自由，可以自由创建标签。
　　4、网页编码从html >> xhtml>> xml 这个过程发展。

html，xhtml和xml的区别：

　　1、xhtml对比与html，xhtml文档具有良好完整的排版，体现在两方面：a、元素必须要有结束标签；b、元素必须嵌套；
　　2、对于html的元素和属性，xhtml必须小写，因为xml是严格区分大小写的，<li>和<LI>是不同的标签；
　　3、xhtml的属性值必须在引号之中；
　　4、xhtml不支持属性最小化，什么是属性最小化了？
　　正确:非最小化属性(unminimized attributes)
　　<input checked="checked">
　　不正确:最小化属性(minimized attributes)
　　<input checked>
　　5、 在xhtml中，name属性是不赞成使用的，在以后的版本中将被删除。

再说说为什么网页编码要从html>>xhtml>>xml这么发展？

　　话说早起的网页使用html语言编写的，但是它拥有三个严重的缺点：

　　1、编码不规范，结构混乱臃肿，需要智能的终端才能很好的显示；
　　2、表现和结构混乱，不利于开发和维护；
　　3、不能使用更多的网络设备，比如手机、PDA等；
　　因此HTML需要发展才能解决这个问题，于是W3C又制定了XHTML，XHTML是HTML向XML 过度的一个桥梁。而xml是web发展的趋势。

五、什么是ajax？ajax的好处与坏处？

AJAX全称为“Asynchronous JavaScript and XML”（异步JavaScript和XML），是一种创建交互式网页应用的网页开发技术

使用XHTML+CSS来标准化呈现；
使用XML和XSLT进行数据交换及相关操作；
使用XMLHttpRequest对象与Web服务器进行异步数据通信； 
使用Javascript操作DOM进行动态显示及交互； 
使用JavaScript绑定和处理所有数据。

AJAX的工作原理
Ajax的工作原理相当于在用户和服务器之间加了—个中间层(AJAX引擎),使用户操作与服务器响应异步化。并不是所有的用户请求都提交给服务器,像—些数据验证和数据处理等都交给Ajax引擎自己来做, 只有确定需要从服务器读取新数据时再由Ajax引擎代为向服务器提交请求。

Ajax其核心有JavaScript、XMLHTTPRequest、DOM对象组成，通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用JavaScript来操作DOM而更新页面。这其中最关键的一步就是从服务器获得请求数据。让我们来了解这几个对象。
(1).XMLHTTPRequest对象
Ajax的一个最大的特点是无需刷新页面便可向服务器传输或读写数据(又称无刷新更新页面),这一特点主要得益于XMLHTTP组件XMLHTTPRequest对象。

XMLHttpRequest 对象方法描述 
Ajax引擎，实际上是一个比较复杂的JavaScript应用程序，用来处理用户请求，读写服务器和更改DOM内容。JavaScript的Ajax引擎读取信息，并且互动地重写DOM，这使网页能无缝化重构，也就是在页面已经下载完毕后改变页面内容，这是我们一直在通过JavaScript和DOM在广泛使用的方法，但要使网页真正动态起来，不仅要内部的互动，还需要从外部获取数据，在以前，我们是让用户来输入数据并通过DOM来改变网页内容的，但现在，XMLHTTPRequest，可以让我们在不重载页面的情况下读写服务器上的数据，使用户的输入达到最少。

Ajax使WEB中的界面与应用分离（也可以说是数据与呈现分离），而在以前两者是没有清晰的界限的，数据与呈现分离的分离，有利于分工合作、减少非技术人员对页面的修改造成的WEB应用程序错误、提高效率、也更加适用于现在的发布系统。也可以把以前的一些服务器负担的工作转嫁到客户端，利于客户端闲置的处理能力来处理。

Ajax的优点
1.无需刷新页面更新数据
2.基于规范广泛支持
3.界面与应用分离
4.异步与服务器通信
5.前后端负载平衡

Ajax的缺点
<1>.AJAX干掉了Back和History功能，即对浏览器机制的破坏。
<2>.AJAX的安全问题
诸如跨站点脚步攻击、SQL注入攻击和基于Credentials的安全漏洞等等。
<3>.对搜索引擎支持较弱。
<4>.破坏程序的异常处理机制。
<5>.违背URL和资源定位的初衷。
<6>.AJAX不能很好支持移动设备。
<7>.客户端过肥，太多客户端代码造成开发上的成本。

AJAX注意点及适用和不适用场景
(1).注意点
Ajax开发时，网络延迟——即用户发出请求到服务器发出响应之间的间隔——需要慎重考虑。不给予用户明确的回应，没有恰当的预读数据，或者对XMLHttpRequest的不恰当处理，都会使用户感到延迟，这是用户不希望看到的，也是他们无法理解的。通常的解决方案是，使用一个可视化的组件来告诉用户系统正在进行后台操作并且正在读取数据和内容。
(2).Ajax适用场景
<1>.表单驱动的交互
<2>.深层次的树的导航
<3>.快速的用户与用户间的交流响应
<4>.类似投票、yes/no等无关痛痒的场景
<5>.对数据进行过滤和操纵相关数据的场景
<6>.普通的文本输入提示和自动完成的场景
(3).Ajax不适用场景
<1>.部分简单的表单
<2>.搜索
<3>.基本的导航
<4>.替换大量的文本
<5>.对呈现的操纵

六、什么是jsonp？jsonp的好处与坏处？
JSONP(JSON with Padding)是JSON的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题

>JSONP的原理
	利用动态创建`<script>`标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。
    当需要通讯时，本站脚本创建一个`<script>`元素，地址指向第三方的API网址，形如:`<script src="http://www.example.net/api?param1=1&param2=2"></script>` 并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。     第三方产生的响应为json数据的包装（故称之为jsonp，即json padding），形如：`callback({"name":"hax","gender":"Male"})`     这样浏览器会调用callback函数，并传递解析后json对象作为参数。本站脚本可在callback函数里处理所传入的数据。

JSONP的优缺点
        1.优点
            1.1它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制，JSONP可以跨越同源策略；
            1.2它的兼容性更好，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支持
            1.3在请求完毕后可以通过调用callback的方式回传结果。将回调方法的权限给了调用方。这个就相当于将controller层和view层终于分 开了。我提供的jsonp服务只提供纯服务的数据，至于提供服务以 后的页面渲染和后续view操作都由调用者来自己定义就好了。如果有两个页面需要渲染同一份数据，你们只需要有不同的渲染逻辑就可以了，逻辑都可以使用同 一个jsonp服务。
        2.缺点
            2.1它只支持GET请求而不支持POST等其它类型的HTTP请求
            2.2它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。
            2.3 jsonp在调用失败的时候不会返回各种HTTP状态码。
            2.4缺点是安全性。万一假如提供jsonp的服务存在页面注入漏洞，即它返回的javascript的内容被人控制的。那么结果是什么？所有调用这个 jsonp的网站都会存在漏洞。于是无法把危险控制在一个域名下…所以在使用jsonp的时候必须要保证使用的jsonp服务必须是安全可信的

安全防范:

1.防止callback参数意外截断js代码,特殊字符单引号双引号,换行符存在风险.

2.防止callback参数恶意添加script标签,造成xss漏洞

3.防止跨域请求滥用,阻止非法站点恶意调用


七、rem，em,px的区别？
PX
px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。
PX特点
1. IE无法调整那些使用px作为单位的字体大小；
2. 国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位；
3. Firefox能够调整px和em，rem，但是96%以上的中国网民使用IE浏览器

EM
em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。
EM特点
1. em的值并不是固定的；
2. em会继承父级元素的字体大小。

Rem
其实rem布局的本质是等比缩放，一般是基于宽度
rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。
rem是css3 的一个长度单位 ，相对文档跟元素 html；比如设置html font-size=100px;那么1rem=100px;之后的所有元素都可以用这个基准值来设置大小；


五个gulp命令:
gulp.task(name[, deps], fn) 定义任务 name：任务名称 deps：依赖任务名称 fn：回调函数
gulp.run(tasks…)：尽可能多的并行运行多个task
gulp.watch(glob, fn)：当glob内容发生改变时，执行fn
gulp.src(glob)：置需要处理的文件的路径，可以是多个文件以数组的形式，也可以是正则
gulp.dest(path[, options])：设置生成文件的路径


八、zepto与jquery的区别

Zepto更轻量级Zepto是jQuery的精简，针对移动端去除了大量jQuery的兼容代码部分API的实现方式不同详情针对移动端程序，Zepto有一些基本的触摸事件可以用来做触摸屏交互（tap事件、swipe事件），Zepto是不支持IE浏览器的。

DOM操作的区别：
添加id时jQuery不会生效而Zepto会生效事件触发的区别：使用jquery时load事件的处理函数不会执行；

使用zepto时load事件的处理函数会执行事件委托的区别：
zepto中，选择器上所有的委托事件都依次放入到一个队列中，而在jquery中则委托成独立的多个事件

width() 与 height()的区别：
zepto由盒模型（box-sizing）决定，用.width()返回赋值的width，用.css('width')返回border等的结果；
jquery会忽略盒模型，始终返回内容区域的宽/高（不包含padding、border）

.offset()的区别：
zepto返回{top,left,width,height}; jquery返回{width,height}。

zepto无法获取隐藏元素宽高，jquery可以zepto中没有为原型定义extend方法而jquery有

zepto的each方法只能遍历数组，不能遍历JSON对象。

九、box-sizing:
box-sizing 属性可以被用来调整这些表现:

content-box  是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。

border-box  告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，内容区的实际宽度会是width减去border + padding的计算值。大多数情况下这使得我们更容易的去设定一个元素的宽高。

一些专家甚至建议所有的Web开发者们将所有的元素的box-sizing都设为border-box。


十、webpack的工作原理

webpack核心概念

entry 一个可执行模块或库的入口文件。
chunk 多个文件组成的一个代码块，例如把一个可执行模块和它所有依赖的模块组合和一个 chunk 这体现了webpack的打包机制。
loader 文件转换器，例如把es6转换为es5，scss转换为css。
plugin 插件，用于扩展webpack的功能，在webpack构建生命周期的节点上加入扩展hook为webpack加入功能。

webpack构建流程
从启动webpack构建到输出结果经历了一系列过程，它们是：

1.解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生产最后的配置结果。
2.注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。
3.从配置的entry入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。
4.在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。
5.递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk。
6.输出所有chunk到文件系统。

需要注意的是，在构建生命周期中有一系列插件在合适的时机做了合适的事情，比如UglifyJsPlugin会在loader转换递归完后对结果再使用UglifyJs压缩覆盖之前的结果

webpack是一个打包模块化js的工具，可以通过loader转换文件，通过plugin扩展功能。