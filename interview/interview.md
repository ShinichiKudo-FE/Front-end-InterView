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


如何理解JS是单线程这一说法？为什么不会卡住？
Javascript除了一个主线程外,还配有一个代码队列,这个队列用以存放定时器、HTTP请求、事件响应的回调。


什么是浏览器事件模型？请描述js的事件冒泡和捕获(event bubble and capturing), 如何停止冒泡(bubble)?

Netscape主张元素1的事件首先发生，这种事件发生顺序被称为捕获型
微软则保持元素2具有优先权，这种事件顺序被称为冒泡型


W3c明智的在这场争斗中选择了一个择中的方案。任何发生在w3c事件模型中的事件，首是进入捕获阶段，直到达到目标元素，再进入冒泡阶段

你可以选择是在捕获阶段还是冒泡阶段绑定事件处理函数，这是通过addEventListener()方法实现的，如果这个函数的最后一个参数是true，则在捕获阶段绑定函数，反之false，在冒泡阶段绑定函数。


在js中我们为什么需要事件委托？简要描述一下事件委托？

如今的JavaScript技术界里最火热的一项技术应该是‘事件委托(event delegation)’了。使用事件委托技术能让你避免对特定的每个节点添加事件监听器；相反，事件监听器是被添加到它们的父元素上。事件监听器会分析从子元素冒泡上来的事件，找到是哪个子元素的事件。 也就是说把监听子元素上的事件监听函数放在它的父元素上来。

 
Ajax的全称？原理？优点？

全称：Asynchronous  js and xml

原理：Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。

把服务器端看成一个数据接口(只负责吐数据)，它返回的是一个纯文本流，当然，这个文本流可以是XML格式，可以是Html，可以是Javascript代码，也可以只是一个字符串。这时候，XMLHttpRequest向服务器端请求这个页面，服务器端将文本的结果写入页面，这和普通的web开发流程是一样的，不同的是，客户端在异步获取这个结果后，不是直接显示在页面，而是先由javascript来处理，然后再显示在页面。

优点： 局部刷新，避免重新刷新整个页面。

什么是XMLHTTPRequest对象？

XMLHttpRequest是ajax的核心机制，是JavaScript的一个内置对象。它是在IE5中首先引入的，是一种支持异步请求的技术。简单的说，也就是javascript可以及时向服务器提出请求和处理响应，而不阻塞用户。达到无刷新的效果。

 
Null与undefined的区别是什么？
undefined 表示一个变量声明但未赋值:
null这是一个对象，但是为空。因为是对象，所以 typeof null  返回 'object' 。


深入理解js单线程：

JavaScript引擎是单线程运行的,浏览器无论在什么时候都只且只有一个线程在运行JavaScript程序。

一、浏览器的内核是多线程的，它们在内核制控下相互配合以保持同步，一个浏览器至少实现三个常驻线程：javascript引擎线程，GUI渲染线程，浏览器事件触发线程。

1. javascript引擎是基于事件驱动单线程执行的，JS引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行JS程序。

2. GUI渲染线程负责渲染浏览器界面，当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时,该线程就会执行。但需要注意 GUI渲染线程与JS引擎是互斥的，当JS引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。

3. 事件触发线程，当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理。这些事件可来自JavaScript引擎当前执行的代码块如setTimeOut、也可来自浏览器内核的其他线程如鼠标点击、AJAX异步请求等，但由于JS的单线程关系所有这些事件都得排队等待JS引擎处理。（当线程中没有执行任何同步代码的前提下才会执行异步代码）


实际上，js并没有移动任何代码，你需要理解js的执行上下文(context):  context分为两个阶段：创建阶段和执行阶段。 在创建阶段，为这些变量和函数创建内存空间，人们往往把这个阶段与variable hoisting混淆起来。 对于变量的赋值，是在执行上下文的执行阶段进行的。当你对变量a赋值“Hello World”的时候，js引擎只有在执行阶段才知道a的值，在创建阶段，js只是把一个undefined的占位符放在那里，所以所有的变量都是被初始化为undefined的。 所以建议永远把变量声明和函数放在你的代码的顶部。

列出js中创建对象的方法，并写出一个js中的继承关系的实现。

应该知道4种常见创建对象的方法：


1.用{}  ， 对象字面量。
2.JS good parts中推荐这种写法:
```js
var person = {
    name: 'ifcode',
    setName: function(theName) {
        this.name = theName;
    }
}
```
3.构造函数一般都符合factory pattern，根据默认的规则，构造函数应当首字母大写：
```js
Person = function(defaultName) {
    this.name = defaultName;
    this.setName = function(theName) {
        this.name = theName;
    }
}
person = new Person('ifcode');  // new是调用构造函数
```
4.利用 prototype的构造函数：

```js
Person = function(defaultName) {
    this.name = defaultName;
}
 

Person.prototype.setName = function(theName) {
    this.name = theName;
}
```
所有创建在prototype上得属性和方法，都将被所有对象实例分享。


js中继承关系的实现：

JavaScript中要实现继承，其实就是实现三层含义：
1、子类的实例可以共享父类的方法；
2、子类可以覆盖父类的方法或者扩展新的方法；
3、子类和父类都是子类实例的“类型”

什么是prototype？ 原型?

什么是原型链?

JavaScript 是基于原型的语言。当我们调用一个对象的属性时，如果对象没有该属性，JavaScript 解释器就会从对象的原型对象上去找该属性，如果原型上也没有该属性，那就去找原型的原型。这种属性查找的方式被称为原型链（prototype chain）。

ES6 并没有改变 JavaScript 基于原型的本质，只是在此之上提供了一些语法糖。class 就是其中之一。其他的还有 extends，super 和 static 。它们大多数都可以转换成等价的 ES5 语法。


请描述Git中merge和rebase的区别(选做)

git merge和git rebase从最终效果来看没有任何区别，都是将不同分支的代码融合在一起，但是生成的代码树就稍微有些不同。rebase操作不会生成新的节点，是将两个分支融合成一个线性的提交。而merge操作生成的代码树会显得比较乱。

什么是mock? (选做)

mock测试就是在测试过程中，对于某些不容易构造或者不容易获取的对象，用一个虚拟的对象来创建以便测试的测试方法。

延伸问题：什么是冒烟测试（smoke test）?

冒烟测试源自硬件行业，对一个硬件或者硬件组件改动后，直接给设备加电，看看设备会不会冒烟，没冒烟，就表示待测组件是通过了测试。    在软件开发过程中，一直有高内聚，低耦合这样的说法，各个功能模块之间的耦合还是存在的，因此一个功能的改动，还是会影响到其他功能模块。    因此在开发人员修复了先前测试中发现的bug后，想知道这个bug的修复是否会影响到其他功能模块，需要做的就是冒烟测试。


## 基本数据类型与引用数据类型的区别

JS基本数据类型的变量存放的是基本类型数据的实际值；而引用数据类型的变量保存对它的引用，即指针。

## 说说了解nodejs什么 

概念
    1. Node.js是一个基于Chrome V8引擎的javascipt的运行环境。
    2. Node.js使用了一个事件驱动、非阻塞I/O的模型，
    3. Node.js轻量又高效,能够使我们在本地运行javascript

NodeJS能做什么？
1、提供数据给浏览器展示
2、保存用户提交过来的数据
3、数据统计与分析

为什么说Node.js适合做高并发的互联网应用？
Node.js采用一系列“非阻塞”库来支持事件循环的方式。本质上就是为文件系统、数据库之类的资源提供接口。
Node.js使用事件驱动，非阻塞I/O模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用。

服务器Node.js和浏览器js的区别是什么？
1.node.js是平台，JavaScript是编程语言；
2.javascript是客户端编程语言，需要浏览器的javascript解释器进行解释执行；
3.node.js是一个基于Chrome JavaScript运行时建立的平台，它是对Google V8引擎进行了封装的运行环境；
4.node.js就是把浏览器的解释器封装起来作为服务器运行平台，用类似javascript的结构语法进行编程，在node.js上运行。

NodeJS中五大核心的模块
模块        作用
http      开启一个Web服务，给浏览器提供服务
url       给浏览器发送请求用，还可以传递参数(GET)
querystring 处理浏览器通过GET/POST发送过来的参数
path      查找文件的路径
fs        在服务器端读取文件用的

Node.js把js从客户端迁移到服务端，主要做了哪些工作？
1. 运行node.js
2. 开启主线程，I/O线程
3. 运行js文件，在内存中开启一个REPL环境用来执行js代码

express框架
基于 Node.js 平台，快速、开放、极简的 web 开发框架。