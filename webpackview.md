# webpack

## 自己如何写一个loader

[webpack](https://webpack.docschina.org/contribute/writing-a-loader/)

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。

loader本质就是接收字符串(或者buffer)，再返回处理完的字符串(或者buffer)的过程。webpack会将加载的资源作为参数传入loader方法，交于loader处理，再返回。

[loader](https://cloud.tencent.com/developer/article/1145409)

## 如何写一个plugin

[plugin](https://blog.csdn.net/qiqingjin/article/details/71335943)

## 深入理解 webpack 文件打包机制

[webpack 文件打包机制](https://github.com/happylindz/blog/issues/6)

## webpack构建流程

* compile 开始编译
* make 从入口点分析模块及其依赖的模块，创建这些模块对象
* build-module 构建模块
* after-compile 完成构建
* seal 封装构建结果
* emit 把各个chunk输出到结果文件
* after-emit 完成输出

[webpack构建](http://taobaofed.org/blog/2016/09/09/webpack-flow/)

## webpack模块化的理解

[webpack模块化](https://segmentfault.com/a/1190000010409465)[webpack模块化](https://juejin.im/entry/576d66b879bc44005bec938a)

## 打包很慢，怎么解决？

> 技巧1
webpack在打包的时候第一次总是会做很长的准备工作，包括加载插件之类的。在刚接触webpack的时候总是webpack一下-测一下-改一下-再webpack一下，这种方式最后让很多人崩溃了觉得webpack一点都不好用。其实这是错误的使用方式。
正确的方式应直接执行webpack --watch 这样webpack会自动编译，第一回的时候确实很慢，但之后的自动编译就要快了好多，打包时间相差几倍。

> 技巧2
webpack配合的react，jquery一些共有的库去使用，虽然没写几行代码却发现我靠打个文件居然好几M了。能不能不让这些共有库打入我们的文件呢？

```js
externals:
        {
            'antd':true,
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
```

在webpack配置文件的根上加上这些内容。告诉webpack在require(“react”)的时候不要去加载模块，直接去读（这里还不是很明白，有的说“：”后面是window.React，写了后面可以直接使用无需require，待确定后再补充，一般写true就可以了），当然这种方式要在html入口手动引入js文件：

```html
<script src="node_modules/react/dist/react-with-addons.js"></script>
<script src="node_modules/react-dom/dist/react-dom.min.js"></script>
<script src="node_modules/antd/dist/antd.min.js"></script>
```

在项目中正常使用require(“react”)试试，不会被打进去了，文件变为了几k，突然感觉webpack这东西还是能用的。

> 技巧3
大部分情况下通过技巧2已经可以搞定大部分问题了，但是在用MaterialUI的时候，点击事件总是报一个错误，大概意思是重复的引入了react什么的。如果出现这个问题，那么请使用技巧3。将那些共有的模块打进另外一个文件中，然后使用CommonsChunkPlugin插件，在webpack –watch非第一编打包的时候就不会重复的打另外一个文件了。

```js
entry: {
        //这是我自己文件的入口，换成自己的
        main: './apps/main.jsx',
        //这个是把外面的东西打包成common.js
        'common':['./node_modules/react/dist/react-with-addons.min.js','./node_modules/react-dom/dist/react-dom.min.js']

    },
plugins: [
        //把common.js变为共有的，除第一遍打包后就不会再打包了
        new webpack.optimize.CommonsChunkPlugin('common',  'common.js')
    ]
output: {
        path: path.resolve(containerPath,'dist/'),
        filename: '[name].js'
    }
```

在webpack配置文件的根上加上这些内容，在html入口处需要引入common.js

//确认一下是不是第一回打包后这个文件已经有了

```html
<script src="dist/common.js"></script>
```

这种方式在webpack -watch后第一遍依旧很慢（因为要打common） 之后修改默认打包是就不会再打common了。而且还有一个优点就是不用再引React，jquery一堆文件了，只引common一个文件就ok。

## 打包出来的文件很大，怎么解决？

[ webpack 打包文件体积](https://www.jianshu.com/p/a64735eb0e2b)