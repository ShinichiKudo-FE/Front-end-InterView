# react

## 虚拟DOM是啥？以及diff算法原理

在React中，render执行的结果得到的并不是真正的DOM节点，结果仅仅是轻量级的JavaScript对象，我们称之为`virtual DOM`。

虚拟DOM是React的一大亮点，具有batching(批处理)和高效的Diff算法。这让我们可以无需担心性能问题而”毫无顾忌”的随时“刷新”整个页面，由虚拟 DOM来确保只对界面上真正变化的部分进行实际的DOM操作。在实际开发中基本无需关心虚拟DOM是如何运作的，但是理解其运行机制不仅有助于更好的理解React组件的生命周期，而且对于进一步优化 React程序也会有很大帮助。

React.js 相对于直接操作原生DOM有很大的性能优势， 很大程度上都要归功于virtual DOM的batching 和diff。batching把所有的DOM操作搜集起来，一次性提交给真实的DOM。diff算法时间复杂度也从标准的的Diff算法的O(n^3)降到了O(n)。这里留到下一次博客单独讲。

相比起 React，其他 MVVM 系框架比如 Angular, Knockout 以及 Vue、Avalon 采用的都是数据绑定：通过 Directive/Binding 对象，观察数据变化并保留对实际 DOM 元素的引用，当有数据变化时进行对应的操作。MVVM 的变化检查是数据层面的，而 React 的检查是 DOM 结构层面的。MVVM 的性能也根据变动检测的实现原理有所不同：Angular 的脏检查使得任何变动都有固定的 O(watcher count) 的代价；Knockout/Vue/Avalon 都采用了依赖收集，在 js 和 DOM 层面都是 O(change)：

**diff算法**
即给定任意两棵树，找到最少的转换步骤。但是标准的的Diff算法复杂度需要O(n^3)，这显然无法满足性能要求。要达到每次界面都可以整体刷新界面的目的，势必需要对算法进行优化。这看上去非常有难度，然而Facebook工程师却做到了，他们结合Web界面的特点做出了两个简单的假设，使得Diff算法复杂度直接降低到O(n)

* 两个相同组件产生类似的DOM结构，不同的组件产生不同的DOM结构；
* 对于同一层次的一组子节点，它们可以通过唯一的id进行区分。

[diff](http://www.infoq.com/cn/articles/react-dom-diff)
[虚拟dom](https://blog.csdn.net/c_kite/article/details/80428411)

## react 事件绑定

> 手动绑定

* bind方法

```js
class test extends Component {
    handleEdit(param) {
        console.log(param)
    }

    render() {
        return <button onClick={this.handleEdit.bind(this, param)}>编辑</button>
    }
}
// 如果不传参可用双冒号::
<button onClick={::this.handleEdit}>编辑</button>

```

* 构造器内声明

```js
class test extends Component {
    constructor(props){
        super(props);
         this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit(param) {
        console.log(param)
    }

    render() {
        return <button onClick={this.handleEdit}>编辑</button>
    }
}

```

* 箭头函数

```js
//方法1
class test extends Component {
    const handleEdit = (e) => {
        console.log(e)
    }

    render() {
        return <button onClick={this.handleEdit}>编辑</button>
    }
}

// 方法2
class test extends Component {
    handleEdit(param) {
        console.log(param)
    }

    render() {
        return <button onClick={() => this.handleEdit(param)}>编辑</button>
    }
}

```

> 自动绑定
es5写法， React.createClass

## react 生命周期

[react 生命周期](https://juejin.im/post/5a062fb551882535cd4a4ce3)

[react 生命周期](http://imweb.io/topic/5a08fafdef79bc941c30d8de)
React的组件的生命周期分为三个过程：

装载过程(Mount)：第一次把组件渲染到DOM树的过程；
更新过程(Update)：组件进行渲染更新的过程；
卸载过程(Unmount)：组件从DOM树种删除的过程。

## 函数式编程，纯函数

纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用

副作用’是在计算结果的过程中，系统状态的一种变化，或者与外部世界进行可观察的交互。概括来讲，只要跟函数外部环境发生的交互就都是副作用。函数式编程的哲学就是假定副作用是造成不正当行为的主要原因。并不是说，要禁止使用一切副作用，而是，要让他们在可控的范围内发生。从定义上来说，纯函数必须能根据相同的输入返回相同的输出；如果函数需要跟外部事物打交道，那么就无法保证这一点了。意味着函数要与外部系统状态打交道，提倡函数式编程的人认为，这种共享状态导致的混乱是绝大多数bug的万恶之源

[函数式编程，纯函数](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch3.html#%E8%BF%BD%E6%B1%82%E2%80%9C%E7%BA%AF%E2%80%9D%E7%9A%84%E7%90%86%E7%94%B1)

## React创建组件的方式

> 无状态函数式组件
创建纯展示组件，只负责根据传入的props来展示，不涉及到要state状态的操作，是一个只带有一个render方法的组件类

创建形式如下：

```js
function HelloComponent(props) {
  return <div>Hello {props.name}</div>
}
ReactDOM.render(<HelloComponent name="yourName" />, mountNode)
```

* 特点：

组件不会被实例化，整体渲染性能得到提升
组件不能访问this对象
组件无法访问生命周期的方法
无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用
无状态组件使得代码结构更加清晰，减少代码冗余，在开发过程中，尽量使用无状态组件

> React.createClass
是ES5的原生的JavaScript来实现的React组件
该例子实现了一个交互列表，用户输入信息，按回车后触发键盘事件将获取到的输入值渲染生成列表项，输入信息的数量可以是任意多个

具体形式如下：

```js
var Greeting = React.createClass({
    getInitialState: function () {
        return {
            work_list: []
        };
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="myWork" placeholder="What need to be done?" onKeyUp={this.Enter}/>

                <ul>
                    {
                        this.state.work_list.map(function (textValue) {
                            return <li key={textValue}>{textValue}</li>;
                        })
                    }
                </ul>

            </div>
        );
    },
    Enter: function (event) {
        var works = this.state.work_list;
        var work = this.refs.myWork.value;
        if (event.keyCode == 13) {
            works.push(work);
            this.setState({work_list: works});
            this.refs.myWork.value = "";
        }


    }
});
```

* 特点：

React.createClass会自绑定函数方法导致不必要的性能开销
React.createClass的mixins不够自然、直观

> React.Component
React.Component是以ES6的形式来创建react的组件的，是React目前极为推荐的创建有状态组件的方式，相对于 React.createClass可以更好实现代码复用。将上面React.createClass的形式改为React.Component形式如下：

```js
class Greeting extends React.Component{
   constructor (props) {
       super(props);
       this.state={
            work_list: []
        }

        this.Enter=this.Enter.bind(this); //绑定this
    }
    render() {
        return (
            <div>
                <input type="text" ref="myWork" placeholder="What need to be done?" onKeyUp={this.Enter}/>

                <ul>
                    {
                        this.state.work_list.map(function (textValue) {
                            return <li key={textValue}>{textValue}</li>;
                        })
                    }
                </ul>

            </div>
        );
    }
    Enter(event) {
        var works = this.state.work_list;
        var work = this.refs.myWork.value;
        if (event.keyCode == 13) {
            works.push(work);
            this.setState({work_list: works});
            this.refs.myWork.value = "";
        }


    }
}
```

## 组件性能优化

shuouldComponentUpdate

pureComponent

不可变数据

key

等等优化方法，每一点的优点和缺点

## 如何设计一个好组件

[如何设计一个好组件](https://segmentfault.com/a/1190000011939560)

## 哪里进行网络请求？为什么

> 这与React组件的生命周期有关，组件挂载时有关的生命周期有以下几个:

constructor()
componentWillMount()
render()
componentDidMount()

上面这些方法的调用是有次序的，由上而下，也就是当说如果你要获取外部数据并加载到组件上，只能在组件"已经"挂载到真实的网页上才能作这事情，其它情况你是加载不到组件的。

componentDidMount方法中的代码，是在组件已经完全挂载到网页上才会调用被执行，所以可以保证数据的加载。此外，在这方法中调用setState方法，会触发重渲染。所以，官方设计这个方法就是用来加载外部数据用的，或处理其他的副作用代码。

constructor被调用是在组件准备要挂载的最一开始，所以此时组件尚未挂载到网页上。

componentWillMount方法的调用在constructor之后，在render之前，在这方法里的代码调用setState方法不会触发重渲染，所以它一般不会用来作加载数据之用，它也很少被使用到。

一般的从后台(服务器)获取的数据，都会与组件上要用的数据加载有关，所以都在componentDidMount方法里面作。虽然与组件上的数据无关的加载，也可以在constructor里作，但constructor是作组件state初绐化工作，并不是设计来作加载数据这工作的，所以所有有副作用的代码都会集中在componentDidMount方法里。

补充一下，Redux作初始数据载入时，是可以不需透过React组件的生命周期方法，

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

// reducer
function items(state = [], action) {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return [...action.payload]
    default:
      return state
  }
}

// 创建store
const store = createStore(items)

fetch('http://localhost:8888/items', {
  method: 'GET'
})
.then((response) => {
  // ok代表状态码在200-299
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
})
.then((itemList) => {
  // 作dispatch动作，载入外部数据完成之后
  store.dispatch({ type: 'LOAD_ITEMS', payload: itemList })
})
.catch((error) => { throw new Error(error.message) })

// React组件加载到真实DOM上
ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>, document.getElementById('root'))
```

为何可以这样作的原因，是Redux的store中的状态有一个最初始的值(reducer上传参里的默认值)，组件先初始化完成，接著异步的fetch用promise语法，在作完外部数据加载后，发送动作出来，此时reducer更动store里的状态，react-redux绑定器会触发React组件的重渲染，所以组件上数据会自动更新。

## 调用setState之后发生了什么

[react](https://blog.csdn.net/Fuohua/article/details/80117075)
当调用 setState 时，React会做的第一件事情是将传递给 setState 的对象合并到组件的当前状态。这将启动一个称为和解（reconciliation）的过程。和解（reconciliation）的最终目标是以最有效的方式，根据这个新的状态来更新UI。 为此，React将构建一个新的 React 元素树（您可以将其视为 UI 的对象表示）。

一旦有了这个树，为了弄清 UI 如何响应新的状态而改变，React 会将这个新树与上一个元素树相比较（ diff ）。

通过这样做， React 将会知道发生的确切变化，并且通过了解发生什么变化，只需在绝对必要的情况下进行更新即可最小化 UI 的占用空间。

## refs

refs就像是一个逃生舱口，允许您直接访问DOM元素或组件实例。为了使用它们，您可以向组件添加一个 ref 属性，该属性的值是一个回调函数，它将接收底层的 DOM 元素或组件的已挂接实例，作为其第一个参数。

```js
class UnControlledForm extends Component {
  handleSubmit = () => {
    console.log("Input Value: ", this.input.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          ref={(input) => this.input = input} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

```

以上注意到我们的输入字段有一个 ref 属性，其值是一个函数。该函数接收我们然后放在实例上的实际的 DOM 元素，以便在 handleSubmit 函数内部访问它。经常误解的是，您需要使用类组件才能使用 ref ，但 ref 也可以通过利用 JavaScript 中的 闭包 与 功能组件( functional components )一起使用。

## react16新特性

尤其理解time slice和suspense

## 在 React 当中 Element 和 Component 有何区别

React 元素（React element），它是 React 中最小基本单位，我们可以使用 JSX 语法轻松地创建一个 React 元素:

```JS
const element = <div className="element">I'm element</div>
```

React 元素不是真实的 DOM 元素，它仅仅是 js 的普通对象（plain objects），所以也没办法直接调用 DOM 原生的 API。上面的 JSX 转译后的对象大概是这样的：

```js
{
    _context: Object,
    _owner: null,
    key: null,
    props: {
    className: 'element'，
    children: 'I'm element'
  },
    ref: null,
    type: "div"
}
```

除了使用 JSX 语法，我们还可以使用 React.createElement() 和 React.cloneElement() 来构建 React 元素。

React 组件
React 中有三种构建组件的方式。React.createClass()、ES6 class和无状态函数。

> 区别

组件是由元素构成的。元素数据结构是普通对象，而组件数据结构是类或纯函数

* this.props.children

在 JSX 中，被元素嵌套的元素会以属性 children 的方式传入该元素的组件。当仅嵌套一个元素时，children 是一个 React 元素，当嵌套多个元素时，children 是一个 React 元素的数组。可以直接把 children 写入 JSX 的中，但如果要给它们传入新属性，就要用到React.cloneElement()来构建新的元素

* 用户组件

有的时候，组件可以让用户以属性的方式传入自定义的组件，来提升组件的灵活性。这个属性传入的就应该是 React 元素，而非 React 组件。使用 React 元素可以让用户传入自定义组件的同时，为组件添加属性。同样，可以使用React.cloneElement()为自定义组件添加更多属性，或替换子元素。

## React 容器组件和展示组件

[容器组件和展示组件](https://ivweb.io/topic/583f21cd270eedfd10a0f5e7)

## props.children

在React中，当涉及组件嵌套，在父组件中使用props.children把所有子组件显示出来'如下：

```js
function ParentComponent(props){
    return (
        <div>
            {props.children}
        </div>
    )
}
```

## react 路由实现原理

[react-router](http://zhenhua-lee.github.io/react/history.html)

## react的setState同步还是异步？

既可能是同步的，也可能是异步的。 准确地说，在React内部机制能检测到的地方， setState就是异步的；在React检测不到的地方，例如setInterval,setTimeout里，setState就是同步更新的。

[setState同步还是异步](https://juejin.im/post/5a6f440a51882573336652af)

## Redux，react-redux等原理

[Redux](http://zhenhua-lee.github.io/react/redux.html)
[react-redux原理分析](https://www.cnblogs.com/hhhyaaon/p/5863408.html)

## 如何实现异步网络请求的？

[ReactJs中的网络请求fetch 使用及封装](https://blog.csdn.net/Wu_shuxuan/article/details/78740312)
[react fetch](http://blog.51cto.com/zhuxianzhong/2125523)

## react 组件间通信

在使用 React 的过程中，不可避免的需要组件间进行消息传递（通信），组件间通信大体有下面几种情况：

父组件向子组件通信
子组件向父组件通信
跨级组件之间通信
非嵌套组件间通信

[react 组件间通信](https://www.jianshu.com/p/fb915d9c99c4)

## react 高阶组件是什么和常见的高阶组件

React高阶组件，即 Higher-Order Component，其官方解释是：

> A higher-order component is a function that takes a component and returns a new component.

一个传入一个组件，返回另一个组件的函数，其概念与高阶函数的将函数作为参数传入类似。

用代码来解释就是：const EnhancedComponent = higherOrderComponent(WrappedComponent);复制代码以上通过 higherOrderComponent 函数返回的 EnhancedComponent 就是一个高阶组件。所以简单来说，高阶只是一种设计模式（pattern），并非一种新的组件类型。

[高阶组件](https://juejin.im/post/59b36b416fb9a00a636a207e)

## React key是干嘛的？

[key](http://taobaofed.org/blog/2016/08/25/react-key/)
[key](https://juejin.im/post/59abb01c518825243f1b6dad)