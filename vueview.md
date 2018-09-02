## vue的生命周期

### 什么是vue生命周期？
Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

### vue生命周期的作用是什么？
它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。

### 第一次页面加载会触发哪几个钩子？
第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子

### DOM 渲染在 哪个周期中就已经完成？
DOM 渲染在 mounted 中就已经完成了

### 简单描述每个周期具体适合哪些场景？

生命周期钩子的一些使用方法： beforecreate : 可以在这加个loading事件，在加载实例时触发 created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用 mounted : 挂载元素，获取到DOM节点 updated : 如果对数据统一处理，在这里写上相应函数 beforeDestroy : 可以做一个确认停止事件的确认框 nextTick : 更新数据后立即操作dom

### 总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后

创建前/后： 在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。

载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。

更新前/后：当data变化时，会触发beforeUpdate和updated方法。

销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在

## vue与angular的区别?

1.vue仅仅是mvvm中的view层，只是一个如jquery般的工具库，而不是框架，而angular而是mvvm框架。
2.vue的双向邦定是基于ES5 中的 getter/setter来实现的，而angular而是由自己实现一套模版编译规则，需要进行所谓的“脏”检查，vue则不需要。因此，vue在性能上更高效，但是代价是对于ie9以下的浏览器无法支持。
3.vue需要提供一个el对象进行实例化，后续的所有作用范围也是在el对象之下，而angular而是整个html页面。一个页面，可以有多个vue实例，而angular好像不是这么玩的。
4.vue真的很容易上手，学习成本相对低，不过可以参考的资料不是很丰富，官方文档比较简单，缺少全面的使用案例。高级的用法，需要自己去研究源码，至少目前是这样。

## active-class是哪个组件的属性？

vue-router模块的router-link组件。

## 怎么定义vue-router的动态路由？怎么获取传过来的动态参数？

在router目录下的index.js文件中，对path属性加上/:id。
使用router对象的params.id。

## vue-router有哪几种导航钩子？
三种，
第一种：是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。
第二种：组件内的钩子
第三种：单独路由独享组件

## mint-ui是什么？怎么使用？说出至少三个组件使用方法？

基于vue的前端组件库。npm安装，然后import样式和js，vue.use（mintUi）全局引入。在单个组件局部引入：import {Toast} from ‘mint-ui’。组件一：Toast(‘登录成功’)；组件二：mint-header；组件三：mint-swiper

## v-model是什么？怎么使用？ vue中标签怎么绑定事件？

可以实现双向绑定，指令（v-class、v-for、v-if、v-show、v-on）。vue的model层的data属性。绑定事件：<input @click=doLog()/>

## axios是什么？怎么使用？描述使用它实现登录功能的流程？

请求后台资源的模块。npm install axios -S装好，然后发送的是跨域，需在配置文件中config/index.js进行设置。后台如果是Tp5则定义一个资源路由。js中使用import进来，然后.get或.post。返回在.then函数中如果成功，失败则是在.catch函数中

## axios+tp5进阶中，调用axios.post(‘api/user’)是进行的什么操作？axios.put(‘api/user/8′)呢？

跨域，添加用户操作，更新操作。

## vuex是什么？怎么使用？哪种功能场景使用它？
vue框架中状态管理。在main.js引入store，注入。新建了一个目录store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

## mvvm框架是什么？它和其它框架（jquery）的区别是什么？哪些场景适合？

一个model+view+viewModel框架，数据模型model，viewModel连接两个
区别：vue数据驱动，通过数据来显示视图层而不是节点操作。
场景：数据操作比较多的场景，更加便捷

## 自定义指令（v-check、v-focus）的方法有哪些？它有哪些钩子函数？还有哪些钩子函数参数？

全局定义指令：在vue对象的directive方法里面有两个参数，一个是指令名称，另外一个是函数。组件内定义指令：directives

钩子函数：bind（绑定事件触发）、inserted(节点插入的时候触发)、update（组件内相关更新）

钩子函数参数：el、binding

## 说出至少4种vue当中的指令和它的用法？
v-if：判断是否隐藏；v-for：数据循环出来；v-bind:class：绑定一个属性；v-model：实现双向绑定

## vue-router是什么？它有哪些组件？
vue用来写路由一个插件。router-link、router-view

## 导航钩子有哪些？它们有哪些参数？
导航钩子有：

a/全局钩子和组件内独享的钩子。b/beforeRouteEnter、afterEnter、beforeRouterUpdate、beforeRouteLeave

参数：

有to（去的那个路由）、from（离开的路由）、next（一定要用这个函数才能去到下一个路由，如果不用就拦截）最常用就这几种


## Vue的双向数据绑定原理是什么？

vue.js 是 **采用数据劫持结合发布者-订阅者模式**的方式，通过`Object.defineProperty()`来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

具体步骤：

第一步：需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化

第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:1、在自身实例化时往属性订阅器(dep)里面添加自己2、自身必须有一个update()方法3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。

第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。

[实现双向绑定Proxy比defineproperty优劣如何?](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf)

[Vue的双向数据绑定](https://juejin.im/post/5acc17cb51882555745a03f8)

## 请说下封装 vue 组件的过程？

首先，组件可以提升整个项目的开发效率。能够把页面抽象成多个相对独立的模块，解决了我们传统项目开发：效率低、难维护、复用性等问题。
然后，使用Vue.extend方法创建一个组件，然后使用Vue.component方法注册组件。子组件需要数据，可以在props中接受定义。而子组件修改好数据后，想把数据传递给父组件。可以采用emit方法。

## 你是怎么认识vuex的

vuex可以理解为一种开发模式或框架。比如PHP有thinkphp，java有spring等。通过状态（数据源）集中管理驱动组件的变化（好比spring的IOC容器对bean进行集中管理）。
应用级的状态集中放在store中； 改变状态的方式是提交mutations，这是个同步的事物； 异步逻辑应该封装在action中。

## vue-loader是什么？使用它的用途有哪些？
解析.vue文件的一个加载器，跟template/js/style转换成js模块。

用途：js可以写es6、style样式可以scss或less、template可以加jade等

## 请说出vue.cli项目中src目录每个文件夹和文件的用法？
assets文件夹是放静态资源；components是放组件；router是定义路由相关的配置;view视图；app.vue是一个应用主组件；main.js是入口文件

## vue.cli中怎样使用自定义的组件？有遇到过哪些问题吗？

第一步：在components目录新建你的组件文件（smithButton.vue），script一定要export default {
第二步：在需要用的页面（组件）中导入：import smithButton from ‘../components/smithButton.vue’
第三步：注入到vue的子组件的components属性上面,components:{smithButton}
第四步：在template视图view中使用，`<smith-button>  </smith-button>`问题有：smithButton命名，使用的时候则smith-button。

## 聊聊你对Vue.js的template编译的理解？
简而言之，就是先转化成AST树，再得到的render函数返回VNode（Vue的虚拟DOM节点）

详情步骤：

首先，通过compile编译器把template编译成AST语法树（abstract syntax tree 即 源代码的抽象语法结构的树状表现形式），compile是createCompiler的返回值，createCompiler是用以创建编译器的。另外compile还负责合并option。
然后，AST会经过generate（将AST语法树转化成render funtion字符串的过程）得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点，里面有（标签名、子节点、文本等等）

## vuejs与angularjs以及react的区别？

**1.与AngularJS的区别**
*相同点：*

都支持指令：内置指令和自定义指令。
都支持过滤器：内置过滤器和自定义过滤器。
都支持双向数据绑定。
都不支持低端浏览器。

*不同点：*

1.AngularJS的学习成本高，比如增加了Dependency Injection特性，而Vue.js本身提供的API都比较简单、直观。
2.在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢。
Vue.js使用基于依赖追踪的观察并且使用异步队列更新。所有的数据都是独立触发的。
对于庞大的应用来说，这个优化差异还是比较明显的。

**2.与React的区别**
*相同点：*

React采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用。
中心思想相同：一切都是组件，组件实例之间可以嵌套。
都提供合理的钩子函数，可以让开发者定制化地去处理需求。
都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载。
在组件开发中都支持mixins的特性。

*不同点：*

React依赖Virtual DOM,而Vue.js使用的是DOM模板。React采用的Virtual DOM会对渲染出来的结果做脏检查。
Vue.js在模板中提供了指令，过滤器等，可以非常方便，快捷地操作DOM。

## Canvas 与 SVG 的比较

> Canvas
依赖分辨率
不支持事件处理器
弱的文本渲染能力
能够以 .png 或 .jpg 格式保存结果图像
最适合图像密集型的游戏，其中的许多对象会被频繁重绘复制代码
SVG
不依赖分辨率
支持事件处理器
最适合带有大型渲染区域的应用程序（比如谷歌地图）
复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
不适合游戏应用

## v-show和v-if指令的共同点和不同点?
v-show指令是通过修改元素的displayCSS属性让其显示或者隐藏
v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果

## 如何让CSS只在当前组件中起作用?
将当前组件的`<style>`修改为`<style scoped>`

## `<keep-alive></keep-alive>`的作用是什么?

`<keep-alive></keep-alive>`包裹动态组件时，会缓存不活动的组件实例,主要用于保留组件状态或避免重新渲染。

大白话: 比如有一个列表和一个详情，那么用户就会经常执行打开详情=>返回列表=>打开详情…这样的话列表和详情都是一个频率很高的页面，那么就可以对列表组件使用`<keep-alive></keep-alive>`进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染

##  指令v-el的作用是什么?
提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标.可以是 CSS 选择器，也可以是一个 HTMLElement 实例,

## 在Vue中使用插件的步骤
采用ES6的import ... from ...语法或CommonJSd的require()方法引入插件
使用全局方法Vue.use( plugin )使用插件,可以传入一个选项对象Vue.use(MyPlugin, { someOption: true })

## 请列举出3个Vue中常用的生命周期钩子函数?

created: 实例已经创建完成之后调用,在这一步,实例已经完成数据观测, 属性和方法的运算, watch/event事件回调. 然而, 挂载阶段还没有开始, $el属性目前还不可见

mounted: el被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

activated::keep-alive组件激活时调用

## 请简述下Vuex的原理和使用方法

![vuex](http://static.zybuluo.com/leeahui424/elsh8vspbji82keetlv4ck67/image_1bouhnodibep5jgk5tpb2siim.png)

一个应用可以看作是由上面三部分组成: View, Actions,State,数据的流动也是从View => Actions => State =>View 以此达到数据的单向流动.但是项目较大的, 组件嵌套过多的时候, 多组件共享同一个State会在数据传递时出现很多问题.Vuex就是为了解决这些问题而产生的.

Vuex可以被看作项目中所有组件的数据中心,我们将所有组件中共享的State抽离出来,任何组件都可以访问和操作我们的数据中心.

![vuex原理](https://upload-images.jianshu.io/upload_images/5318700-0f06ed280ca13a5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/837/format/webp)

state中保存着共有数据
改变state中的数据有且只有通过`mutations`中的方法,且mutations中的方法必须是同步的
如果要写异步的方法,需要些在actions中, 并通过commit到mutations中进行state中数据的更改.

## vue组件之间的通信

### 父传子（props）

> 父组件向子组件传递（props）
父组件引用子组件的时候利用v-bind去绑定mseeage，传递给子组件（对应就是msg）
子组件要创建props选项，注册传递的msg值，就可以直接使用msg这个值了

```html
<!-- **父组件** -->
 <template>
    <header-box :title-txt="showTitleTxt"></header-box>
</template>

<script>
import children from './children';
export default {
    components:{
        'header-box': children
    },
    data(){
        return{
            showTitleTxt: '我是来自于父组件的数据'
        }
    }
}
</script>
```

```html
<!-- **子组件** -->
<template>
    <div>{{propsData}}</div>
</template>

<script>
export default {
  props: {
    titleTxt: String
  },
  data() {
    return {
      propsData: this.titleTxt  
    };
  }
};
</script>
```

### 父组件直接获取子组件的数据（this.$refs.ref的名字.变量）

```js
// 假设我们要获取子组件<son></son>的数据target
// 第一：子组件son要设置ref
<son ref="sonComponent"></son>
// 第二：用下面的语句去获取，修改子组件的值
console.log(this.$refs.sonComponent.target); // 取值
this.$refs.sonComponent.target = '1'; // 修改值
```

### 子传父

> 子组件向父组件传递分为两种类型。

* 子组件改变父组件传递的props（你会发现通过props中的Object类型参数传输数据，可以通过子组件改变数据内容。这种方式是可行的，但是不推荐使用，因为官方定义prop是单向绑定）
* 通过$on和$emit

```html
<!-- *通过props实现传递*
**父组件** -->
<template>
    <header-box :title-txt="showTitleTxt"></header-box>
</template>

<script>
import children from './children';
export default {
    components:{
        'header-box': children
    },
    data(){
        return{
            showTitleTxt: {
                name: '我是来自于父组件的数据'
            }
        }
    }
}
</script>
```

```html
 <!-- **子组件** -->
<template>
    <div @click="change">{{propsData}}</div>
</template>

<script>
export default {
  props: {
    titleTxt: Object
  },
  data() {
    return {
      propsData: this.titleTxt.name  
    };
  },
  methods:{
      change(){
          this.titleTxt.name = "123"
      }
  }
};
</script>
```

```html
<!-- *通过$on,$emit*
**父组件** -->
<template>
    <div id="counter">
        <p>{{total}}</p>
        <children v-on:increment="incrementTotal"></children>
        <children v-on:increment="incrementTotal"></children>
    </div>
</template>
<script>
    import children from "./children";

    export default {
        components: {
            children
        },
        data() {
            return {
            total: 0
            };
        },
        methods: {
            incrementTotal() {
            this.total++;
            }
        }
    };
</script>
```

### 兄弟组件之间-通信（或者非兄弟，非父子组件）

> 适用于兄弟组件的情况 和 非父子，非兄弟组件的情况

方法一（使用简单的情况）：自己创建一个事件总线eventBus来作为通信的桥梁（也适用于非父子，非兄弟组件的情况）

方法二（程序比较复杂的情况）：那就用Vuex（也适用于非父子，非兄弟组件的情况）

方法三⚠️：如果仅仅是某一个页面，或者很少的页面有兄弟组件A，B（非兄弟组件不适用）通信的问题，推荐：**将该部分逻辑写在父组件内，通过this.emit()发送到父组件进行逻辑的编写，然后通过this.refs.子组件name(要自己提前设置)，来取到另一个子组件的值，具体如下

举例： 子组件A 要修改 子组件B 的time值？？？

```js
<son1 refs="son1" @changeElem = "change"></son1>
<son2 refs="son2"></son2>
```
思路：
    子组件son1：click触发一个$emit("changeElem", val);要将son2组件的time修改为val
    父组件： 通过@changeElem = "change"接收事件，编写change方法
    change(elem) {
        this.$refs.son2.time = elem;
    }

这里主要讲方法一
vue2中废弃了broadcast广播和分发事件的方法。
所以在vue2.0中可以通过实例一个vue实例Bus作为媒介，要相互通信的兄弟组件之中，都引入Bus，之后通过分别调用Bus事件触发和监听来实现组件之间的通信和参数传递

创建一个eventBus.js作为桥梁(例子直接把js文件放在与组件同一个目录下)，内容如下：

```js
import Vue from 'vue'
export default new Vue;
```

创建两个子组件，son1.vue 和 son2.vue

```html
// son1.vue 发送值

<template>
	<div class="ex">
		<button @click="sendMsg">点击我传送值</button>
	</div>
</template>

<script>
  import Bus from './eventBus' // 引入eventBus文件
  export default {
    data () {
      return {
	  }
    },
	methods: {
      sendMsg() {
        Bus.$emit('msg', '我要传给兄弟组件们，你收到没有');//传递msg，第二个参数就是msg的值
	  }
	}
  }
</script>
``` 

```html
// son2.vue 接受值

<template>
	<div class="ex">
		{{message}}
	</div>
</template>

<script>
  import Bus from './eventBus' // 引入eventBus文件
  export default {
    data () {
      return {
        message: '变化前'
	  }
    },
	mounted() {
        let self = this;
        // 利用$on来监听msg值
        Bus.$on('msg', (e) => {
            self.message = e;
            console.log(`传来的数据是：${e}`);
        });
	}
  }
</script>

```

## vue开发常见知识点及问题资料整理（持续更新）

[vue开发常见知识点及问题资料整理 1](https://www.cnblogs.com/moqiutao/p/8017340.html)

[vue开发常见知识点及问题资料整理 2](https://www.cnblogs.com/crazycode2/p/6507648.html)