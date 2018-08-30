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

URL对应Location对象，而UI是由react的 components来决定的，这样就转变成location与components之间的同步问题。

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

keys 是什么帮助 React 跟踪哪些项目已更改、添加或从列表中删除。

```js
  return (
    <ul>
      {this.state.todoItems.map(({task, uid}) => {
        return <li key={uid}>{task}</li>
      })}
    </ul>
  )
}
```

每个keys 在兄弟元素之间是独一无二的。我们已经谈过几次关于和解（reconciliation）的过程，而且这个和解过程（reconciliation）中的一部分正在执行一个新的元素树与最前一个的差异。keys 使处理列表时更加高效，因为 React 可以使用子元素上的 keys 快速知道元素是新的还是在比较树时才被移动。

而且 keys 不仅使这个过程更有效率，而且没有keys，React 不知道哪个本地状态对应于移动中的哪个项目。所以当你 map 的时候，不要忽略了 keys 。

[key](http://taobaofed.org/blog/2016/08/25/react-key/)
[key](https://juejin.im/post/59abb01c518825243f1b6dad)


## 在 React 当中 Element 和 Component 有何区别？

简单地说，一个 `React element` 描述了你想在屏幕上看到什么。换个说法就是，一个 `React element` 是一些 UI 的对象表示。

一个 `React Componen` 是一个函数或一个类，它可以接受输入并返回一个 `React element`（通常是通过 JSX ，它被转化成一个 createElement 调用

有关更多信息，请查看 [React Elements vs React Components](https://tylermcginnis.com/react-elements-vs-react-components/)

## 看下面的代码: 如果您在 `<Twitter />` 下创建了一个 React 元素，`<Twitter />`的组件定义将如何

```js
<Twitter username='tylermcginnis33'>
  {(user) => user === null
    ? <Loading />
    : <Badge info={user} />}
</Twitter>
```

```js
import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'
// fetchUser接收用户名返回 promise
// 当得到 用户的数据的时候 ，返回resolve 状态

class Twitter extends Component {
  // 在这里写下你的代码
}
```

如果你不熟悉渲染回调模式（render callback pattern），这将看起来有点奇怪。在这种模式中，一个组件接收一个函数作为它的 child。注意上面包含在 `<Twitter>`标签内的内容。Twitter 组件的 child 是一个函数，而不是你曾经习以为常的一个组件。 这意味着在实现 Twitter 组件时，我们需要将 `props.children` 作为一个函数来处理。

```js
import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'

class Twitter extends Component {
    state = {
        user: null,
    }
    static propTypes = {
      username: PropTypes.string.isRequired,
    }
    componentDidMount () {
        fetchUser(this.props.username)
            .then((user) => this.setState({user}))
    }
    render () {
         return this.props.children(this.state.user)
    }
}
```

值得注意的是，正如我上面提到的，我通过调用它并传递给 user 来把`props.children` 处理为为一个函数。

这种模式的好处是我们已经将我们的父组件与我们的子组件分离了。父组件管理状态，父组件的消费者可以决定以何种方式将从父级接收的参数应用于他们的 UI。

为了演示这一点，我们假设在另一个文件中，我们要渲染一个 Profile 而不是一个 Badge,，因为我们使用渲染回调模式，所以我们可以轻松地交换 UI ，而不用改变我们对父（Twitter）组件的实现。

```js
<Twitter username='tylermcginnis33'>
  {(user) => user === null
    ? <Loading />
    : <Profile info={user} />}
</Twitter>
```

## 受控组件( controlled component )与不受控制的组件( uncontrolled component )有什么区别？

当我们将 native HTML 表单元素（ input, select, textarea 等）投入到组合中时会发生什么？我们是否应该使用 React 作为“单一的真理来源”，就像我们习惯使用React一样？ 或者我们是否允许表单数据存在 DOM 中，就像我们习惯使用HTML表单元素一样？ 这两个问题是受控（controlled） VS 不受控制（uncontrolled）组件的核心。

**受控组件**是React控制的组件，也是表单数据的唯一真理来源。

如下所示，username 不存在于 DOM 中，而是以我们的组件状态存在。每当我们想要更新 username 时，我们就像以前一样调用setState。

```js
class ControlledForm extends Component {
  state = {
    username: ''
  }
  updateUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }
  handleSubmit = () => {}
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.username}
          onChange={this.updateUsername} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
```

不受控制( uncontrolled component )的组件是您的表单数据由 DOM 处理，而不是您的 React 组件。

我们使用 **refs** 来完成这个。

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

虽然不受控制的组件通常更容易实现，因为您只需使用引用从DOM获取值，但是通常**建议您通过不受控制的组件来支持受控组件**。

主要原因是受控组件支持即时字段验证，允许您有条件地禁用/启用按钮，强制输入格式，并且更多的是 『the React way』。

## shouldComponentUpdate 应该做什么，为什么它很重要？

上面我们讨论了 reconciliation ，什么是 React 在 setState 被调用时所做的。在生命周期方法 shouldComponentUpdate 中，**允许我们选择退出某些组件（和他们的子组件）的 reconciliation 过程**。

我们为什么要这样做？

如上所述，“和解（ reconciliation ）的最终目标是以最有效的方式，根据新的状态更新用户界面”。*如果我们知道我们的用户界面（UI）的某一部分不会改变，那么没有理由让 React 很麻烦地试图去弄清楚它是否应该渲染*。通过从 shouldComponentUpdate 返回 false，React 将假定当前组件及其所有子组件将保持与当前组件相同。

## 您如何告诉React 构建（build）生产模式，该做什么？

通常，您将使用Webpack的 DefinePlugin 方法将 NODE_ENV 设置为 production。这将剥离像 propType 验证和额外的警告。除此之外，还有一个好主意，可以减少你的代码，因为React使用 Uglify 的 dead-code 来消除开发代码和注释，这将大大减少你的包的大小。

## 为什么要使用 `React.Children.map（props.children，（）=>）` 而不是 `props.children.map（（）=>)`

**因为不能保证props.children将是一个数组。**

以此代码为例，

```html
<Parent>
  <h1>Welcome.</h1>
</Parent>
```

在父组件内部，如果我们尝试使用 props.children.map 映射孩子，则会抛出错误，因为 props.children 是一个对象，而不是一个数组。

如果有多个子元素，React 只会使`props.children`成为一个数组。就像下面这样：

```html
<Parent>
  <h1>Welcome.</h1>
  <h2>props.children will now be an array</h2>
</Parent>
```

这就是为什么你喜欢 React.Children.map，因为它的实现考虑到 props.children 可能是一个数组或一个对象。

## 描述事件在React中的处理方式。

为了解决跨浏览器兼容性问题，您的 React 中的事件处理程序将传递`SyntheticEvent` 的实例，它是 React 的浏览器本机事件的跨浏览器包装器。

这些 `SyntheticEvent` 与您习惯的原生事件具有相同的接口，除了它们在所有浏览器中都兼容。有趣的是，React 实际上并没有将事件附加到子节点本身。React 将使用单个事件监听器监听顶层的所有事件。这对于性能是有好处的，这也意味着在更新DOM时，React 不需要担心跟踪事件监听器。

## createElement 和 cloneElement 有什么区别？

createElement 是 JSX 被转载到的，是 React 用来创建 React Elements 的内容(一些 UI 的对象表示)cloneElement用于克隆元素并传递新的 props。他们钉住了这两个?的命名。

## 可以选择性地传递给 setState 的第二个参数是什么，它的目的是什么？

一个回调函数，当setState结束并`re-rendered`该组件时将被调用。一些没有说出来的东西是 setState 是异步的，这就是为什么它需要一个第二个回调函数。通常最好使用另一个生命周期方法，而不是依赖这个回调函数，但是很高兴知道它存在。

```js
this.setState(
  { username: 'tylermcginnis33' },
  () => console.log('setState has finished and the component has re-rendered.')
)
```

## 这段代码有什么问题？

```js
this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count
  }
})
```

没毛病。但是这种写法很少被使用，并不是众所周知的，就是你也可以传递一个函数给setState，它接收到先前的状态和道具并返回一个新的状态，正如我们在上面所做的那样。它不仅没有什么问题，而且如果您根据以前的状态（state）设置状态，推荐使用这种写法。  

## redux中间件

中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。

变为 `action -> middlewares -> reducer` 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能。

常见的中间件：
redux-logger：提供日志输出
redux-thunk：处理异步操作
redux-promise：处理异步操作，actionCreator的返回值是promise

## redux有什么缺点

1.一个组件所需要的数据，必须由父组件传过来，而不能像flux中直接从store取。

2.当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新render，可能会有效率影响，或者需要写复杂的shouldComponentUpdate进行判断。

## react组件的划分业务组件和技术组件？

根据组件的职责通常把组件分为UI组件和容器组件。UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。两者通过React-Redux 提供connect方法联系起来。具体使用可以参照如下链接：

[http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)

## react性能优化是哪个周期函数？

shouldComponentUpdate 这个方法用来判断是否需要调用render方法重新描绘dom。因为dom的描绘非常消耗性能，如果我们能在shouldComponentUpdate方法中能够写出更优化的dom diff算法，可以极大的提高性能。详细参考：[shouldComponentUpdate](https//segmentfault.com/a/1190000006254212)

## 为什么虚拟dom会提高性能?

虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。具体实现步骤如下：用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了。

[虚拟DOM](https://www.zhihu.com/question/29504639?sort=created)

## react性能优化方案

（1）重写shouldComponentUpdate来避免不必要的dom操作。
（2）使用 production 版本的react.js。
（3）使用key来帮助React识别列表中所有子组件的最小变化。

[参考链接](https://segmentfault.com/a/1190000006254212)

## 简述flux 思想

Flux 的最大特点，就是数据的"单向流动"。

1.用户访问 View
2.View 发出用户的 Action
3.Dispatcher 收到 Action，要求 Store 进行相应的更新
4.Store 更新后，发出一个"change"事件
5.View 收到"change"事件后，更新页面

[参考链接](http://www.ruanyifeng.com/blog/2016/01/flux.html)

## 组件的Render函数在何时被调用

如果单纯、侠义的回答这个问题，毫无疑问Render是在组件 state 发生改变时候被调用。无论是通过 setState 函数改变组件自身的state值，还是继承的 props 属性发生改变都会造成render函数被调用，即使改变的前后值都是一样的。

React组件中存在两类DOM，一类是众所周知的Virtual DOM，相信大家也耳熟能详了；另一类就是浏览器中的真实DOM（Real DOM/Native DOM）。React的Render函数被调用之后，React立即根据props或者state重新创建了一颗Virtual DOM Tree，虽然每一次调用时都重新创建，但因为在内存中创建DOM树其实是非常快且不影响性能的，所以这一步的开销并不大。而Virtual DOM的更新并不意味这Real DOM的更新，接下来的事情也是大家知道的，React采用算法将Virtual DOM和Real DOM进行对比，找出需要更新的最小步骤，此时Real DOM才可能发生修改。 每一次的state更改都会使得render函数被调用，但页面的DOM不一定会发生修改

## this.props.children是什么？ 

它表示组件的所有子节点，值有三种可能：

如果当前组件没有子节点，它就是 undefined;
如果有一个子节点，数据类型是 object ；
如果有多个子节点，数据类型就是 array。

React 提供一个工具方法 `React.Childre`n 来处理 `this.props.children` 。我们可以用 `React.Children.map` 来遍历子节点，而不用担心 `this.props.children` 的数据类型是 undefined 还是 object 

## 在什么情况下你会优先选择使用 Class Component 而不是 Functional Component？ 

在组件需要包含内部状态或者使用到生命周期函数的时候使用 Class Component ，否则使用函数式组件。

## React组件还有哪些具体的设计模式?

* Higher-Order Components (HOC高阶组件) 通过函数向现有组件类添加逻辑，就是高阶组件。

* Container Components 我们把数据逻辑部分分离出来成为独立的组件，这类组件就是Container Components，而展现部分组件则是Presentational Components。 

* Stateless Components 自己不维护状态而是依靠外部传入的状态

## React和Vue对比

> 相同点:

数据驱动视图，提供响应式的视图组件
都有Virtual DOM，组件化开发，通过props参数进行父子组件数据的传递，都实现webComponents规范
数据流动单向
都支持服务端渲染
都有支持native的方案，React的React native，Vue的weex

> ` 不同点：

社区：React社区还是要比vue大很多；

开发模式：React在view层侵入性还是要比Vue大很多的,React严格上只针对MVC的view层，Vue则是MVVM模式的一种实现；

数据绑定：Vue有实现了双向数据绑定，React数据流动是单向的

数据渲染：对于大规模数据渲染，React要比Vue更快，渲染机制启动时候要做的工作比较多；

数据更新方面：Vue 由于采用依赖追踪，默认就是优化状态：你动了多少数据，就触发多少更新，不多也不少。React在复杂的应用里有两个选择:

(1). 手动添加 shouldComponentUpdate 来避免不需要的 vdom re-render。 (2).Components 尽可能都用 pureRenderMixin，然后采用 redux 结构 + Immutable.js；

开发风格的偏好：React 推荐的做法是 JSX + inline style，也就是把 HTML 和 CSS 全都写进 JavaScript 了，即"all in js"；Vue进阶之后推荐的是使用 webpack + vue-loader 的单文件组件格式，即html,css,js写在同一个文件；

使用场景：React配合Redux架构适合超大规模多人协作的复杂项目;Vue则适合小快灵的项目。对于需要对 DOM 进行很多自定义操作的项目，Vue 的灵活性优于 React；

Vue要比React更好上手，具体可能体现在很多人不熟悉React的JSX语法和函数式编程的思想，以及想要发挥出React的最大威力需要学习它一系列生态的缘故；

Vue着重提高开发效率,让前端程序员更快速方便的开发应用。React着重于变革开发思想，提升前端程序员编程的深度与创造力,让前端工程师成为真正的程序员而不是UI的构建者；

## gulp和webpack区别

gulp是一种工具，我们可以用它来优化前端的工作流程，比如自动刷新页面、combo、压缩css、js、编译less等等。具体体现为：在gulp的配置文件中书写一个个的task，webpack则是一种打包工具，或者说是一种模块化解决方案，实际上很大一部分人刚开始使用webpack的方式就是通过gulp-webpack这个插件，写好task来使用webpack对前端的一些文件进行打包;

gulp的处理任务需要自己去写，webpack则有现成的解决方案，只需要在webpack.config.js配置好即可;

## react中setState的原理

题目:

```js
import React from 'react'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }
  componentDidMount() {
    this.setState({value: this.state.value + 1});
    console.log(this.state.value);
    this.setState({value: this.state.value + 1});
    console.log(this.state.value);
    this.setState({value: this.state.value + 1});
    console.log(this.state.value);
    setTimeout(() => {
      this.setState({value: this.state.value + 1});
      console.log(this.state.value);
      this.setState({value: this.state.value + 1});
      console.log(this.state.value);
    }, 0)
  }
}
```

答案: **0、0、0、2、3**；

分析:

当setState方法调用的时候React就会重新调用render方法来重新渲染组件；setState通过一个队列来更新state,当调用setState方法的时候会将需要更新的state放入这个状态队列中，这个队列会高效的批量更新state;

![setState](https://user-gold-cdn.xitu.io/2017/5/16/4873ebbe3d9795c702eb50c2a8ad3085)

源码地址:[enqueueUpdate](https://github.com/facebook/react/blob/35962a00084382b49d1f9e3bd36612925f360e5b/src/renderers/shared/reconciler/ReactUpdates.js)

```js
function enqueueUpdate(component) {
  ensureInjected();
  //判断是否处于批量更新模式
  if (!batchingStrategy.isBatchingUpdates) {
    //关键！下面的代码片段是这个方法的源码
    batchingStrategy.batchedUpdates(enqueueUpdate, component);
    return;
  }
  //如果处于批量更新模式，则将这个组件保存在dirtyComponents
  dirtyComponents.push(component);
}
```

源码地址:[ReactDefaultBatchingStrategy](https://github.com/facebook/react/blob/35962a00084382b49d1f9e3bd36612925f360e5b/src/renderers/shared/reconciler/ReactDefaultBatchingStrategy.js)

```js
//batchingStrategy对象
var ReactDefaultBatchingStrategy = {
  //注意默认为false
  isBatchingUpdates: false,
  batchedUpdates: function(callback, a, b, c, d, e) {
    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
    ReactDefaultBatchingStrategy.isBatchingUpdates = true;
    if (alreadyBatchingUpdates) {
      callback(a, b, c, d, e);
    } else {
      //关键！！！事务的理解
      transaction.perform(callback, null, a, b, c, d, e);
    }
  },
};
```

源码地址：[Transaction](https://github.com/facebook/react/blob/401e6f10587b09d4e725763984957cf309dfdc30/src/shared/utils/Transaction.js)

事务流程图
![Transaction](https://user-gold-cdn.xitu.io/2017/5/16/2ebeb77de02eb09c3f69f038afacc2d2)

如图：事务会将所需要执行的方法(图中的anyMethod)使用wrapper封装起来，再通过perform方法执行该方法，但在perform执行之前会先执行所有wrapper中的initialize方法，perform方法执行结束后，再执行所有的close方法；

```js
var Transaction = require('./Transaction');
// 我们自己定义的
var MyTransaction = function() {  
  //do something
};
Object.assign(MyTransaction.prototype, Transaction.Mixin, {
      //需要自定义一个getTransactionWrappers对象，获取所有需要封装的initialize方法和close方法
      getTransactionWrappers: function() {    
          return [{      
              initialize: function() {        
              console.log('before method perform');      
            },      
              close: function() {        
              console.log('after method perform');      
            }    
        }];  
    };
});
//实例化一个transaction
var transaction = new MyTransaction();
//需要调用的方法
var testMethod = function() {
  console.log('test');
}
transaction.perform(testMethod);
//before method perform
//test
//after method perform
```

理解题目的关键是，整个组件渲染到DOM中的过程就已经处于一次大的事务中了，因此在componentDidMount方法中调用setState的时候`ReactDefaultBatchingStrategy.isBatchingUpdates = true`;这句代码已经执行过了，所以setState的结果并没有立即生效，而是扔进了dirtyComponent;因此执行三次setState的结果this.state.value的值依然是0,而setTimeout中的两次setState由于没有调用过batchedUpdates方法(isBatchingUpdates默认为false)，所以setState方法立即生效，第二次setSState同理

## react开发中遇到的问题

[react开发中遇到的问题](https://juejin.im/post/5aead38c6fb9a07aab29b190)