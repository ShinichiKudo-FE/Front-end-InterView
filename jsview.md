# Javascript

## JavaScript事件代理和委托（Delegation）

**JavaScript事件代理**
首先介绍一下JavaScript的事件代理。事件代理在JS世界中一个非常有用也很有趣的功能。当我们需要对很多元素添加事件的时候，可以通过将事件添加到它们的父节点而将事件委托给父节点来触发处理函数。这主要得益于浏览器的事件冒泡机制

假设有一个 UL 的父节点，包含了很多个 Li 的子节点：

```html
<ul id="parent-list">
  <li id="post-1">Item 1</li>
  <li id="post-2">Item 2</li>
  <li id="post-3">Item 3</li>
  <li id="post-4">Item 4</li>
  <li id="post-5">Item 5</li>
  <li id="post-6">Item 6</li>
</ul>
```

当我们的鼠标移到Li上的时候，需要获取此Li的相关信息并飘出悬浮窗以显示详细信息，或者当某个Li被点击的时候需要触发相应的处理事件。我们通常的写法，是为每个Li都添加一些类似onMouseOver或者onClick之类的事件监听。

```js
// 获取父节点，并为它添加一个click事件
document.getElementById("parent-list").addEventListener("click",function(e) {
  // 检查事件源e.targe是否为Li
  if(e.target && e.target.nodeName.toUpperCase == "LI") {
    // 真正的处理过程在这里
    console.log("List item ",e.target.id.replace("post-")," was clicked!");
  }
});
```

为父节点添加一个click事件，当子节点被点击的时候，click事件会从子节点开始向上冒泡。父节点捕获到事件之后，通过判断e.target.nodeName来判断是否为我们需要处理的节点。并且通过e.target拿到了被点击的Li节点。从而可以获取到相应的信息，并作处理。
![事件](https://images0.cnblogs.com/blog/477973/201302/18141423-8bd09a9c1e184df9a13b6e26b88348f3.jpg)

## 请解释JavaScript 中this 是如何工作的

调用一个函数会暂停当前函数的执行，传递控制权和参数给新函数。除了声明时定义的形式参数，每个函数还接收两个附加的参数：this和arguments。参数this在面向对象编程中非常重要，它的值取决于调用的模式。在JavaScript中一个有4中调用模式：方法调用模式、函数调用模式、构造器调用模式和apply调用模式。这些模式在如何初始化关键参数this上存在差异。

* 1.方法调用模式

当一个函数被保存为一个对象的属性时，我们称它为一个方法。当一个方法被调用时，this被绑定到该对象。如果调用表达式包含一个提取属性的动作（即包含一个 . 点表达式或[subscript]下标表达式），那么它就是被当做一个方法来调用。

方法可以使用this访问自己所属的对象，所以它能从对象中取值或对对象进行修改。**this到对象的绑定发生在调用的时候**。这个“超级”延迟绑定(very late binding)使得函数可以对this高度复用。通过this可以取得它们所属对象的上下文的方法称为公共方法(public method)。

* 2.函数调用模式

当一个函数并非一个对象的属性时，那么它就是被当做一个函数来调用的：以此模式调用函数时，this被绑定到全局对象。

这是语言设计上的一个错误。倘若语言设计正确，那么当内部函数调用时，this应该仍然绑定到外部函数的this变量。这个错误设计的后果就是方法不能利用内部函数来帮助它工作，因为内部函数的this被绑定了错误的值，所以不能共享该方法对对象的访问权。幸运的是，有一个很容易的解决方案：如果该方法定义一个变量并给它赋值为this，那么内部函数就可以通过那个变量访问到this。按照约定，我把那个变量命名为that。

* 3.构造器调用模式

一个函数，如果创建的目的就是希望结合new前缀来调用，那它就被称为构造器函数。按照约定，它们保存在以大写格式命名的变量里。如果调用构造器函数时没有在前面加上new，可能会发生非常糟糕的事情，既没有编译时警告，也没有运行时警告，所以大写约定非常重要。如果在一个函数面前带上new来调用，那么背地里将会创建一个连接到该函数的prototype成员的新对象（新对象为构造函数的一个实例），同时this会被绑定到那个新对象上。

* 4.Apply调用模式

因为JavaScript是一门函数式的面向对象编程语言，所以函数可以拥有方法。apply方法让我们构建一个参数数组传递给调用函数。它允许我们选择this的值。apply方法接收两个参数，第1个是要绑定给this的值，第2个就是一个参数数组。call方法与apply类似，将apply第二参数拆开为单个的参数。

## javascript继承

**prototype与[[prototype]]**
在有面象对象基础的前提下，来看一段代码：

```js
function Animal(name){
    this.name = name;
}

Animal.prototype = {
    id: "dog",
    sleep: function(){
        alert("sleep")
    }
}

var dog = new Animal("旺财")
console.log(dog.name);//旺财
alert(dog.id);//dog
dog.sleep();//sleep
```

首先明确一点`[[prototype]]`与`prototype`并不是同一个东西。

　　那先来看`prototype`,每一个函数对象都有一个显示的prototype属性,它代表了对象的原型，更明确的说是代表了由函数对象(构造函数)所创建出来的对象的原型。结合本例，Animal.prototype就是dog的原型，dog所引用的那个对象将从Animal.prototype所引用的对象那继承属性与方法。

　　每个对象都有一个名为`[[Prototype]]`的内部属性，指向于它所对应的原型对象。在本例中dog的`[[prototype]]`指向Animal.prototype，大家都知道，Animal.prototype也是一个对象，即然是一个对象，那它必然也有`[[prototype]]`属性指向于它所对应的原型对象，由此便构成了一种链表的结构，这就是原型链的概念。额外要说的是:不同的JS引擎实现者可以将内部`[[Prototype]]`属性命名为任何名字，并且设置它的可见性，前且只在JS引擎内部使用。虽然无法在JS代码中访问到内部`[[Prototype]]`(FireFox中可以，名字为`__proto__`因为Mozilla将它公开了)，但可以使用对象的 isPrototypeOf()方法进行测试，注意这个方法会在整个Prototype链上进行判断。

**属性的访问规则**
使用obj.propName访问一个对象的属性时，按照下面的步骤进行处理(假设obj的内部[[Prototype]]属性名为__proto__):

1. 如果obj存在propName属性，返回属性的值，否则
2. 如果obj.__proto__为null，返回undefined，否则
3. 返回obj.__proto__.propName

调用对象的方法跟访问属性搜索过程一样，因为方法的函数对象就是对象的一个属性值。
提示: 上面步骤中隐含了一个递归过程，步骤3中obj.__proto__是另外一个对象，同样将采用1, 2, 3这样的步骤来搜索propName属性。

这就是基于Prototype的继承和共享。其中object1的方法fn2来自object2，概念上即object2重写了object3的方法fn2。
JavaScript对象应当都通过prototype链关联起来，最顶层是Object，即对象都派生自Object类型。

## javascript模块化

![模块化](https://zhanghao-web.github.io/2018/07/25/JavaScript%E6%A8%A1%E5%9D%97%E5%8C%96-Commonjs%E3%80%81AMD%E3%80%81CMD%E3%80%81ES6-modules/#more)

## IIFE 立即执行函数

IIFE（ 立即调用函数表达式）是一个在定义时就会立即执行的  JavaScript 函数。

这是一个被称为 自执行匿名函数 的设计模式，主要包含两部分。

* 第一部分是包围在 圆括号运算符() 里的一个匿名函数，这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域。
* 第二部分再一次使用 () 创建了一个立即执行函数表达式，JavaScript 引擎到此将直接执行函数。

*示例*
当函数变成立即执行的函数表达式时，表达式中的变量不能从外部访问。

```js
(function () {
    var name = "Barry";
})();
// 外部不能访问变量 name
name // undefined
```

将 IIFE 分配给一个变量，不是存储 IIFE 本身，而是存储 IIFE 执行后返回的结果。

```js
var result = (function () {
    var name = "Barry";
    return name;
})();
// IIFE 执行后返回的结果：
result; // "Barry"
```

## null 与 undefined的区别

null和undefined基本是同义的

> null表示"没有对象"，即该处不应该有值。典型用法是：

*（1） 作为函数的参数，表示该函数的参数不是对象。
*（2） 作为对象原型链的终点。

> undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义

*（1）变量被声明了，但没有赋值时，就等于undefined。
*（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
*（3）对象没有赋值的属性，该属性的值为undefined。
*（4）函数没有返回值时，默认返回undefined。

```js
var i;
i // undefined

function f(x){console.log(x)}
f() // undefined

var  o = new Object();
o.p // undefined

var x = f();
x // undefined
```

## 作用域和闭包

**作用域（Scope）**
作用域表示变量或函数能够被访问的范围，以及它们在什么样的上下文中被执行。一般来说，变量和函数可以被定义在全局和局部作用域范围中，变量有所谓的“函数作用域”，函数也有和变量一样的作用域。

**全局作用域（Global Scope）**
当某个东西是全局的，就意味着它可以在你代码中的任何地方被访问到，看下面的例子：

```js
//全局变量
var monkey = "Gorilla";

// 全局函数
function greetVisitor () {
    return alert("Hello dear blog reader!");
}
```

如果上面的代码运行在浏览器环境中，monkey 和 greetVisitor 的作用域将是 window 对象，因此跑在同一页面下的代码都能存取这两个变量。

**局部作用域(local scope)**
与全局作用域相反，局部作用域表示变量和函数定义在代码的某些区域中，也只能在这些区域中被访问到，例如在函数内部定义的变量或函数，举例来说：

```js
function talkDirty () {
    var saying = "Oh, you little VB lover, you";
    return alert(saying);
}
alert(saying); // 将抛出异常
```

**闭包（Closures）**
闭包是一些表达式，通常是函数，它可以使用特定作用域中的变量。说简单一点就是，当内层函数引用了外层函数中的变量就形成了闭包。看例子：

```js
function add (x) {
    return function (y) {
        return x + y;
    };
}
var add5 = add(5);
var no8 = add5(3);
alert(no8); // Returns 8
```

刚刚发生什么事了？我们一步步分解来看：

1.当调用 add 函数时，它返回了一个函数
2.这个返回的函数封闭了它的作用域，并记住了封闭时参数 x 的值（也就是上面代码中的 5）
3.用变量 add5 保存返回的函数，它将一直记得初始化时 x 的值
4.add5 这个变量就引用到一个永远会把传入的变量加上 5 的函数
5.当调用 add5 时，传入参数 3，它就会把 3 跟 5 相加，然后返回 8

## 匿名函数与闭包的区别

匿名函数：没有名称的函数叫做匿名函数

```js
(function() {
alert('water');
})();

```

闭包：一个可以使用另外一个函数作用域中的变量的函数。

如下面的代码函数b就是闭包，但是这个前提是：当函数a的内部函数b被函数a外的一个变量引用的时候，就创建了一个我们通常所谓的“闭包”。

```js
function a(){
   var i=1;
   function b(){
       ++i;
      return i;
   }
  return b;
}
var c=a();
alert(c());
```

## 你是如何组织自己的代码？是使用模块模式，还是使用经典继承的方法？

![组织代码](http://metaduck.com/08-module-pattern-inheritance.html)

## 宿主对象 (host objects) 和原生对象 (native objects)

![关系](https://img-blog.csdn.net/20130624221901250?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZm9hbWZsb3dlcg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

1、内置（Build-in）对象与原生（Naitve）对象的区别在于：前者总是在引擎初始化阶段就被创建好的对象，是后者的一个子集；而后者包括了一些在运行过程中动态创建的对象。

2、引擎扩展对象是一个并不太大的集合，一般来说比较确定，它们也属于引擎的原生对象（但不属于ECMA规范的原生对象）。

3、宿主对象不是引擎的原生对象，而是由宿主框架通过某种机制注册到JavaScript引擎中的对象。

4、一些宿主会把自己提供的对象／构造器也称为“原生对象”，例如Internet Explorer 7就把它提供的XMLHttpRequest()称为原生的——与此相对的是在它的更早先版本中通过“new ActiveXObject('Microsoft.XMLHTTP')”这样的方法创建的对象。这种情况下，读者应注意到“宿主的原生对象”与“引擎的原生对象”之间的差异

本地对象，就是那些官方定义好了的对象。内置对象是本地对象的一种，其只包含Global对象和Math对象。而宿主对象则是那些官方未定义，你自己构建的对象加上DOM和BOM对象组成的。

## 请指出以下代码的区别：`function Person(){}、var person = Person()、var person = new Person()？`s

* 第一个是定义了一个函数Person
* 第二个是把Person当普通函数执行，并把返回值赋值给person。
* 第三个是当做构造函数，通过new关键字创建一个实例对象，赋值给person

## apply call bind

[深入到源码如何实现这三个功能的。]
apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
apply 、 call 、bind 三者都可以利用后续参数传参；
bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。

* call和apply模拟实现

```js
/*
* 一句话介绍 call：
call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
call 改变了 this 的指向
* */
// this 参数可以传 null，当为 null 的时候，视为指向 window
// 函数是可以有返回值的！

/*var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call(foo);// 1*/


// 模拟call方法

Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length;i < len;i++){
        args.push('arguments['+ i +']');
    }
    var result = eval('context.fn('+ args +')');
    // context.fn();
    delete context.fn;

    return result;
};
var value = 1;

var foo = {
    value: 2
};

function bar(name,age){

    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null);

console.log(bar.call2(foo,'kevin',29));


// apply 模拟方法实现

Function.prototype.apply2 = function (context) {
    var context = Object(context) || window;
    context.fn = this;
    var result;
    if(!arr){
        return context.fn();
    }else{
        var args = [];
        for(var i = 1,len = arguments.length;i< len;i ++){
            args.push('arguments['+ i +']');
        }
        result = eval('context.fn('+ args +')')
    }
    delete context.fn;
    return result;
};

var foo = {
    value : 1
};

function bar() {
    console.log(this.value);
}

bar.apply(foo);
```

* bind模拟实现

```js
/*
* bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，
* 之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
*
* 由此我们可以首先得出 bind 函数的两个特点：
    返回一个函数
    可以传入参数
* */

var foo  ={
    value:1
};

function bar(name,age) {
   console.log(this.value);
   console.log(name);
   console.log(age);
}

var bindFoo = bar.bind2(foo,'hello');
bindFoo('18');//1

// bind 还有一个特点，就是
//
// 一个绑定函数也能使用new操作符创建对象：
// 这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
// 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器
// 意：尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，
// 如果大家了解 new 的模拟实现，就会知道这个时候的 this 已经指向了 obj。
Function.prototype.bind2 = function(context){
    if(typeof this !== 'function'){
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
    }

    // 获取bind2函数从第二个参数到最后一个参数
    var self = this,
        args = Array.prototype.slice.call(arguments,1);
    var fNOP = function(){};
    var fBound = function(){
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context,args.concat(bindArgs) )
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
};
```

## new

模拟new

```js
// new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一

// 模拟new关键字

function Otaku(name,age) {
    this.name = name;
    this.age = age;

    this.habit = "Game";
}

Otaku.prototype.strength = 60;

//方法模拟new

/*function objectFactory() {
    var obj = new Object(), //从Object.prototype上克隆一个对象
        Constructor = [].shift.call(arguments); //取得外部传入的构造器

    // var F = function () {};
    // F.prototype = Constructor.prototype;
    // obj = new F(); // 指向正确的原型
    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj,arguments); //借用外部传入的构造器给obj设置属性

    return typeof ret === 'object' ? ret || obj : obj; //确保构造器总是返回一个对象

}*/
function objectFactory() {
    // 使用objectFactory的时候,把arguments,转化为数组
    var args = Array.prototype.slice.call(arguments);
    //提取第1个构建对象
    var Constructor = args.shift();
    // 创建constructor实例 instance
    var instance = Object.create(Constructor.prototype);
    // 使用apply函数运行args, 把 instance 绑定到 this
    var temp = Constructor.apply(instance, args);
    //返回对象判断 是object 还是 null 还是实例
    return (typeof temp === 'object' && temp !== null) ? temp : instance;
}

//var person = new Otaku("kevin",18); //new 创建实例
var person = objectFactory(Otaku,"kevin",18); // new 创建实例

console.log(person.name);
console.log(person.age);
console.log(person.habit);
console.log(person.strength);
```

## document.write()

Web 性能测试工具比如 Google Page Speed 或者 Dareboost 已经指出：使用 document.write 注入一段脚本会引起严重的网站加载耗时问题

## Ajax工作原理(着重理解XMlHttpRequest)

Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。这其中最关键的一步就是从服务器获得请求数据。要清楚这个过程和原理，我们必须对 XMLHttpRequest有所了解。

XMLHttpRequest是ajax的核心机制，它是在IE5中首先引入的，是一种支持异步请求的技术。简单的说，也就是javascript可以及时向服务器提出请求和处理响应，而不阻塞用户。达到无刷新的效果。

![ajax](https://www.cnblogs.com/mingmingruyuedlut/archive/2011/10/18/2216553.html)

## 跨域

* 方式一：图片ping或script标签跨域

图片ping常用于跟踪用户点击页面或动态广告曝光次数。
script标签可以得到从其他来源数据，这也是JSONP依赖的根据。
**缺点**：只能发送Get请求 ，无法访问服务器的响应文本（单向请求）

* 方式二：JSONP跨域

​JSONP（JSON with Padding）是数据格式JSON的一种“使用模式”，可以让网页从别的网域要数据。根据 XmlHttpRequest 对象受到同源策略的影响，而利用 `<script>`元素的这个开放策略，网页可以得到从其他来源动态产生的JSON数据，而这种使用模式就是所谓的 JSONP。用JSONP抓到的数据并不是JSON，而是任意的JavaScript，用 JavaScript解释器运行而不是用JSON解析器解析。所有，通过Chrome查看所有JSONP发送的Get请求都是js类型，而非XHR。

**缺点**
只能使用Get请求
不能注册success、error等事件监听函数，不能很容易的确定JSONP请求是否失败
JSONP是从其他域中加载代码执行，容易受到跨站请求伪造的攻击，其安全性无法确保

* 方式三：CORS

​`Cross-Origin Resource Sharing（CORS）`跨域资源共享是一份浏览器技术的规范，提供了 Web 服务从不同域传来沙盒脚本的方法，以避开浏览器的同源策略，确保安全的跨域数据传输。现代浏览器使用CORS在API容器如XMLHttpRequest来减少HTTP请求的风险来源。与 JSONP 不同，CORS 除了 GET 要求方法以外也支持其他的 HTTP 要求。服务器一般需要增加如下响应头的一种或几种：

```js
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

跨域请求默认不会携带Cookie信息，如果需要携带，请配置下述参数：

```js
"Access-Control-Allow-Credentials": true
// Ajax设置
"withCredentials": true
```

* 方式四：window.name+iframe

​window.name通过在iframe（一般动态创建i）中加载跨域HTML文件来起作用。然后，HTML文件将传递给请求者的字符串内容赋值给window.name。然后，请求者可以检索window.name值作为响应。

> iframe标签的跨域能力；
window.name属性值在文档刷新后依旧存在的能力（且最大允许2M左右）。
每个iframe都有包裹它的window，而这个window是top window的子窗口。contentWindow属性返回`<iframe>`元素的Window对象。你可以使用这个Window对象来访问iframe的文档及其内部DOM。

* 方式五：window.postMessage()

​HTML5新特性，可以用来向其他所有的 window 对象发送消息。需要注意的是我们必须要保证所有的脚本执行完才发送 MessageEvent，如果在函数执行的过程中调用了它，就会让后面的函数超时无法执行。

* 方式六：修改document.domain跨子域

​前提条件：这两个域名必须属于同一个基础域名!而且所用的协议，端口都要一致，否则无法利用document.domain进行跨域，所以只能跨子域

​在根域范围内，允许把domain属性的值设置为它的上一级域。例如，在”aaa.xxx.com”域内，可以把domain设置为 “xxx.com” 但不能设置为 “xxx.org” 或者”com”。

* 方式七：WebSocket

WebSocket protocol 是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很棒的实现

* 方式八：代理

同源策略是针对浏览器端进行的限制，可以通过服务器端来解决该问题

DomainA客户端（浏览器） ==> DomainA服务器 ==> DomainB服务器 ==> DomainA客户端（浏览器）

## 声明提升

变量声明提升： 通过 var 声明的变量在代码执行之前被js引擎提升到了当前作用域的顶部。
函数声明提升： 通过函数声明的方式（非函数表达式）声明的函数在代码执行之前被js引擎提升到了当前作用域的顶部，而且函数声明提升优先于变量声明提升。

* js中变量没有声明就直接使用，是会导致引用错误的

* 变量声明提升

* 函数声明提升

* 函数声明提升优于变量声明提升

## 冒泡机制

![冒泡](https://img-blog.csdn.net/20140417152938734?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbHVhbmxvdWlz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## attribute和property的区别

attribute翻译成中文术语为“特性”，property翻译成中文术语为“属性”
attribute节点都是在HTML代码中可见的，而property只是一个普通的名值对属性。
attributes是会随着添加或删除attribute节点动态更新的。

property就是一个属性，如果把DOM元素看成是一个普通的Object对象，那么property就是一个以名值对(name=”value”)的形式存放在Object中的属性。要添加和删除property也简单多了，和普通的对象没啥分别：

## document load 和 document DOMContentLoaded

当onload事件触发时，页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了。

当DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。

在没有出现DOMContentLoaded事件出现以前，许多类库中都有模拟这个事件的方法，比如jQuery中著名的$(document).ready(function(){});。

## == 和 === 有什么不同

==， 两边值类型不同的时候，要先进行类型转换，再比较
===，不做类型转换，类型不同的一定不等。

## 同源策略 (same-origin policy)

简单介绍同源策略，即三个相同：
协议相同，域名相同，端口相同。

同源策略主要带来三个方面的行为限制：
1、cookie，localstorage和IndexDB无法读取
2、DOM无法获取
3、Ajax请求不能发送

## strict模式

* 设置严格模式几个目的

消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
消除代码运行的一些不安全之处，保证代码运行的安全；
提高编译器效率，增加运行速度；
为未来新版本的Javascript做好铺垫。

```js
"use strict";
```

## 为何通常会认为保留网站现有的全局作用域 (global scope) 不去改变它，是较好的选择

它的意思是: 尽量少在全局作用域定义变量。

目的:
减少名称冲突
利于模块化

## 为何你会使用 load 之类的事件 (event)？此事件有缺点吗？你是否知道其他替代品，以及为何使用它们？

使用load事件的话我理解的是因为js如果要操作dom元素的话要在dom树构建完成之后才可以操作。所以通常在js代码开头加window.onload或者jQuery的$(document).ready()。

替代品：DOMContentLoaded，document.readyState

## 请解释什么是单页应用 (single page app), 以及如何使其对搜索引擎友好 (SEO-friendly)

单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。

方法：

* 用更高效的方式完成两套页面

再回到那个简单的架构图，SPA这种架构，渲染是在客户端（浏览器）完成的，大致流程如下：
![spa](https://zhanzhang.bj.bcebos.com/files/016171426057276.jpg)

蜘蛛无法执行JS，相应的页面内容无从抓取，弊端还是那个弊端。但我们知道，传统的服务端生成页面，response里已经是服务器渲染组装好的HTML代码，浏览器只负责正确地展现，蜘蛛负责正确的解析，所以，我们需要给蜘蛛渲染完成的HTML，那么你的框架需要兼容如下流程的功能。

![spa](https://zhanzhang.bj.bcebos.com/files/073631426057276.jpg)

　我们看到，当访问为SEO所需页面的时候，数据传输到了SEO 服务器完成渲染和组装然后吐给浏览器和蜘蛛，那么蜘蛛拿到的即是完全可见且融合了SPA的页面——landing页都是蜘蛛可见的，接下去用户的点击都是SPA的页面。
　　需要注意的是，如果你是用URL来区分SPA架构与否，那么内链及入口要全部使用SEO URL,只为用户暴露SPA的链接，JS在这里阴差阳错地成为了优势，那些SPA的链接将比较难被抓取的。
　　其实可以不使用URL来区分，延伸想想。这样一个流程，也无多少高精尖元素，其实只是“依照条件”增加了一个服务端自动渲染的步骤，在架构方案上再细细夯实，可以实现一套代码两处运行、SEO页面可单独自定义功能、、同一张landing人和蜘蛛没有跳转，没有区别对待、全栈工程师的大量使用、SEO页面永远保持最新版等等省时省力的需求功能。

## Promise

[promise](https://github.com/xieranmaya/blog/issues/3)
Promise 是 ES6 新增的一个内置对象， 它是用来避免回调地狱的一种解决方案。

## 使用一种可以编译成 JavaScript 的语言来写JavaScript 代码有哪些优缺点？

可能切换成typescript，然后转成模块开发，需要另外学下打包构件，各种配置开头肯定会一头雾水。但是当你用熟练以后，就会发现，那些付出都是值得的。
多了可选的类型声明，看似在限制住了自由，但是，在多人协同开发不同的模块时候，写好type，在互相调用相互的功能，联调的时候带来的方便可不是一星半点。

## javascript调试工具

develop tools
firebug

## 对象遍历 和 数组遍历

遍历对象的方法：

```js
Object.keys(Object) | for(item in Object)| object.getOwnPropertyNames(o)
```

遍历数组的方法：

```js
Array.forEach() | Array.map() | Array.filter() | Array.some() | Array.every()
```

1.遍历对象，Object.keys(object)遍历出来的是键名，而不是键值，参数必须是对象。
2.遍历数组，前提必须是数组，才能用filter/map/every/some/forEach等这几个方法，且注意map()和filter()是有返回值的，map()有自己的缺陷，有可能返回undefined，而filter()返回的则是为true的某一项
3.join（）则是使用不同的分隔符来构建字符串，数组默认情况下以逗号分隔的形式返回数组项。
4.虽然数组也是对象的一种，但确是Array类型，检测数组的几种方法：

## 可变对象和不可变对象

可变对象
我们知道，JavaScript中对象是弱类型的。一般情况下，可以不受限制的为对象添加属性，修改属性，删除属性。大部分情况下，我们使用的都是可变对象。

不可变对象
对应的，我们不希望代码中某些对象被任意修改，比如添加、修改、删除等。这就是我们的不可变对象。JavaScript为我们提供了一些原生方法，借助它们可以讲一些可变对象转变成不可变对象。一共有三种：不可扩展，密封，冻结。

## 什么是事件循环 (event loop)

JavaScript是单线程的语言
Event Loop是javascript的执行机制
想要理解Event Loop，就要从程序的运行模式讲起。运行以后的程序叫做"进程"（process），一般情况下，一个进程一次只能执行一个任务。

微任务和宏任务皆为异步任务，它们都属于一个队列，主要区别在于他们的执行顺序，Event Loop的走向和取值。那么他们之间到底有什么区别呢？
![任务](https://user-gold-cdn.xitu.io/2018/7/14/164974fa4b42e4af?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

但是js异步有一个机制，就是遇到宏任务，先执行宏任务，将宏任务放入eventqueue，然后在执行微任务，将微任务放入eventqueue最骚的是，这两个queue不是一个queue。当你往外拿的时候先从微任务里拿这个回掉函数，然后再从宏任务的queue上拿宏任务的回掉函数。 我当时看到这我就服了还有这种骚操作。

* 而宏任务一般是：包括整体代码script，setTimeout，setInterval、setImmediate。
* 微任务：原生Promise(有些实现的promise将then方法放到了宏任务中)、process.nextTick、Object.observe(已废弃)、 MutationObserver记住就行了。
* [process是什么？](http://nodejs.cn/api/process.html)

## let var const

使用var声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象；
使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升；
使用const声明的是常量，在后面出现的代码中不能再修改该常量的值

## 数组的方法

```js
Array.from()
Array.isArray()
Array.observe()
Array.of()
Array.prototype.concat()
Array.prototype.copyWithin()
Array.prototype.entries()
Array.prototype.every()
Array.prototype.fill()
Array.prototype.filter()
Array.prototype.find()
Array.prototype.findIndex()
Array.prototype.flat()
Array.prototype.flatMap()
Array.prototype.forEach()
Array.prototype.includes()
Array.prototype.indexOf()
Array.prototype.join()
Array.prototype.keys()
Array.prototype.lastIndexOf()
Array.prototype.map()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString()
Array.prototype.toSource()
Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()
Array.prototype[@@iterator]()
```

## web worker

[web worker](http://www.alloyteam.com/2015/11/deep-in-web-worker/)

## 柯里化

是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

```js
//  curry 的这种用途可以理解为：参数复用。本质上是降低通用性，提高适用性。
//柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
// 通俗来讲 柯里化 用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数



//比如我们有这样一段数据：

var person = [{name: 'kevin'}, {name: 'daisy'}]
//如果我们要获取所有的 name 值，我们可以这样做：

var prop = curry(function(key,obj){
    return obj[key];
})

var name = person.map(prop('name'));

console.log(name)

function sub_curry(fn){
    var arg = [].slice.call(arguments,1);
        return function(){
        return fn.apply(this,arg.concat([].slice.call(arguments)));
    }
}

function curry(fn,length){
    length = length || fn.length;
    var slice = Array.prototype.slice;
    return function(){
        if(arguments.length < length){
            var combined = [fn].concat(slice.call(arguments));
            return curry(sub_curry.apply(this,combined),length - arguments.length);

        }else{
            return fn.apply(this,arguments);
        }
}
}

```

## 创建对象的3种方法

1. `var person = new Object();`

这行代码创建了Object引用类型的一个新实例，然后把该实例对象保存在变量person中。使用的构造函数是Object，它只为新对象定义了默认的属性和方法。

2.`var person={name: “Jerry”, age: 100};`

这种方法叫对象字面量表示法。（对象名也可以使用字符串，如”name”: Jerry）。在通过对象字面量定义对象时，实际上不会调用Object构造函数（FF2和早起Opera会调用，FF3之后不会）。但person的原型是Object，所以person.name.toString()等是可以用的。

3.`var anotherPerson= Object.create(person, {name:{value:”Greg”}});`

ECMAScript5新增的方法，为了规范化原型继承。这个方法接收两个参数，一个用作新对象原型的对象和(可选的)一个新对象定义额外属性的对象。

Object.create() 方法创建一个拥有指定原型和若干个指定属性的对象。

## 深拷贝和浅拷贝

 **对于原始类型如字符串，浅拷贝是对值的复制，对于引用类型如对象来说，浅拷贝是对对象地址的复制**。

```js
// 数组的浅拷贝 可以用concat和slice返回新数组的特性来实现拷贝

var arr = ['new',1,2,4];
var newArr = arr.concat();
newArr[0] = 'old';

console.log(arr)

// 数组的深拷贝

var arr1 = ['old', 1, true, ['old1', 'old2'], {old: 1}];

var newArr1 = JSON.parse(JSON.stringify(arr1));
console.log(newArr1);

// 但是不能拷贝函数

// 浅拷贝实现

function shallowCopy(obj){
  // 只拷贝对象
  if(typeof obj !== 'object');return;
  // 根据obj的类型判断是新建一个数组还是对象
  var newObj = obj instance Array ? [] : {};
  // 遍历obj，并且判断是obj的属性才拷贝
  for (key in obj){
    if(obj.hasownProperty(key){
      newObj[key] === obj[key]
    })
  }
  return newObj;
}


// 深拷贝实现

function deepCopy(obj){
  if(typeof obj === 'object');return;
  var newObj = obj instance Array ? [] : {};
  for (key in obj){
    if(obj.hasownProperty(key){
      // 我们在拷贝的时候判断一下属性值的类型，如果是对象，我们递归调用深拷贝函数不就好了~
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    })
  }
  reutrn newObj;
}
```

## 图片懒加载

**原理**
将页面中的img标签src指向一张小图片或者src为空，然后定义data-src（这个属性可以自定义命名，我才用data-src）属性指向真实的图片。src指向一张默认的图片，否则当src为空时也会向服务器发送一次请求。可以指向loading的地址。

使用节流函数优化懒加载

```js
// 简单的节流函数
//fun 要执行的函数
//delay 延迟
//time  在time时间内必须执行一次
var num = document.getElementsByTagName('img').length;
var img = document.getElementsByTagName("img");
var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历

lazyload(); //页面载入完毕加载可是区域内的图片

function throttle(fun, delay, time) {
    var timeout,
        startTime = new Date();

    return function() {
        var context = this,
            args = arguments,
            curTime = new Date();

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= time) {
            fun.apply(context, args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
        } else {
            timeout = setTimeout(fun, delay);
        }
    };
};
// 实际想绑定在 scroll 事件上的 handler
function lazyload(event) {
        for (var i = n; i < imgNum; i++) {
            if (img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
                if (img.eq(i).attr("src") == "default.jpg") {
                    var src = img.eq(i).attr("data-src");
                    img.eq(i).attr("src", src);

                    n = i + 1;
                }
            }
        }
    }
// 采用了节流函数
window.addEventListener('scroll',throttle(lazyload,500,1000));

```

## 网页各种高度

网页可见区域宽[仅针对body]：document.body.clientWidth

网页可见区域高[仅针对body]：document.body.clientHeight

网页可见区域宽[仅针对body]：document.body.offsetWidth(包括滚动条和边框，若滚动条和边框为0，则和clientWidth相等)

网页可见区域高[仅针对body]：document.body.offsetHeight(包括滚动条和边框，若滚动条和边框为0，则和clientHeight相等)

可视窗口宽度(包括滚动轴宽度)：window.innerWidth;//IE9+、Chrome、Firefox、Opera 以及 Safari可视窗口高度，不包括浏览器顶部工具栏：window.innerHeight;//IE9+、Chrome、Firefox、Opera 以及 Safari

网页正文全文宽(不包括滚动轴的宽度)：document.body.scrollWidth

网页正文全文高：document.body.scrollHeight//假如网页中没有滚动轴，document.body.scrollWidth和window.innerWidth相等，document.body.scrollHeight和window.innerHeight相等。

网页被卷去的高：document.body.scrollTop

网页被卷去的左：document.body.scrollLeft

网页正文部分上：window.screenTop

网页正文部分左：window.screenLeft

屏幕分辨率的高（整个屏幕的高度）：window.screen.height

屏幕分辨率的宽（整个屏幕的宽度）：window.screen.width

屏幕可用工作区高度：window.screen.availHeight

屏幕可用工作区宽度：window.screen.availWidth

整个浏览器可用工作区高度：window.outerHeight

整个浏览器可用工作区宽度：window.outerWidth

## 实现页面加载进度条

简单来讲实现的原理是 pushState + ajax。
pushState: 是一个操作浏览器 history 的 js 方法：window.history.pushState(...)
详细信息参见：History.pushState()

## 箭头函数ES5如何实现

箭头函数与普通函数的区别。

1.没有 this
箭头函数没有 this，所以需要通过查找作用域链来确定 this 的值。

2.没有 arguments
箭头函数没有自己的 arguments 对象，这不一定是件坏事，因为箭头函数可以访问外围函数的 arguments 对象：

3.不能通过 new 关键字调用
JavaScript 函数有两个内部方法：[[Call]] 和 [[Construct]]。
当通过 new 调用函数时，执行 [[Construct]] 方法，创建一个实例对象，然后再执行函数体，将 this 绑定到实例上。
当直接调用的时候，执行 [[Call]] 方法，直接执行函数体。
箭头函数并没有 [[Construct]] 方法，不能被用作构造函数，如果通过 new 的方式调用，会报错

4.没有 new.target
因为不能使用 new 调用，所以也没有 new.target 值。

5.没有原型
由于不能使用 new 调用箭头函数，所以也没有构建原型的需求，于是箭头函数也不存在 prototype 这个属性。

6.没有 super
连原型都没有，自然也不能通过 super 来访问原型的属性，所以箭头函数也是没有 super 的，不过跟 this、arguments、new.target 一样，这些值由外围最近一层非箭头函数决定。

