
如何理解JS是单线程这一说法？为什么不会卡住？
Javascript除了一个主线程外,还配有一个代码队列,这个队列用以存放定时器、HTTP请求、事件响应的回调。


什么是浏览器事件模型？请描述js的事件冒泡和捕获(event bubble and capturing), 如何停止冒泡(bubble)?

Netscape主张元素1的事件首先发生，这种事件发生顺序被称为捕获型
微软则保持元素2具有优先权，这种事件顺序被称为冒泡型


W3c明智的在这场争斗中选择了一个择中的方案。任何发生在w3c事件模型中的事件，首是进入捕获阶段，直到达到目标元素，再进入冒泡阶段

你可以选择是在捕获阶段还是冒泡阶段绑定事件处理函数，这是通过addEventListener()方法实现的，如果这个函数的最后一个参数是true，则在捕获阶段绑定函数，反之false，在冒泡阶段绑定函数。


在js中我们为什么需要event delegation？简要描述一下事件委托？

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
var person = {
    name: 'ifcode',
    setName: function(theName) {
        this.name = theName;
    }
}
3.构造函数一般都符合factory pattern，根据默认的规则，构造函数应当首字母大写：
Person = function(defaultName) {
    this.name = defaultName;
    this.setName = function(theName) {
        this.name = theName;
    }
}
person = new Person('ifcode');  // new是调用构造函数

4.利用 prototype的构造函数：

Person = function(defaultName) {
    this.name = defaultName;
}
 

Person.prototype.setName = function(theName) {
    this.name = theName;
}
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


