# html计算机基础

1.简述线程与进程的区别？

进程由线程组成，线程是CPU调度的基本单元。

2.请从插入删除与查询的效率角度，对链表与数组进行比较。

链表插入删除的效率高，为常量时间复杂度O(1)，但查询效率低，为线性时间复杂度O(n)；
数组查询效率高，为常量时间复杂度O(1)，但插入删除效率低，为线性时间复杂度O(n)

3.简述栈和队列的区别？
栈是先入后出，队列是先入先出。

## 5.27

### 一

> div, span, a, strong, form, em, label, p, h1, input, ol, ul ,select, textarea, img, table

* 上述块级元素有:div form  p h1 ul ol table
* 行内元素有:span a strong em label input select textarea

### 二

> H5的新特性有哪些
语义标签 header footer nav aside hgroup
音频 video audio
本地存储 loalStorage sessionStorage indexedDB
离线web应用 manifest
canvas svg
地理定位 geolocation

### 三

DOM1级
创建节点 createElement
查找节点 getElementsByTagName getElementById
追加节点 appendChild
删除节点 removeChild
替换节点 replaceChild
复制节点 cloneNode
向后追加节点 appendChild()
向前追加节点 inserBefore()

## 5.28

### DOCTYPE有什么作用？标准模式与混杂模式如何区分？它们有何意义？

告诉浏览器使用哪个版本的HTML规范来渲染文档。
DOCTYPE不存在或形式不正确会导致HTML文档以混杂模式呈现。
标准模式（Standards mode）以浏览器支持的最高标准运行；混杂模式（Quirks mode）中页面是一种比较宽松的向后兼容的方式显示。

### 页面导入样式时，使用link和@import有什么区别？

相同之处：都是外部引用Css方式
区别：
1.link是xhtml标签，除了加载css外，还可以定义RSS等其他事务；@import 属于css范畴，只能加载css
2.link引用CSS时候，页面载入时同时加载；@import需要在页面完全加载以后加载，而且@import被引用的CSS会等到引用它的CSS文件被加载完才加载
3.link是xhtml标签，无兼容问题；@import是在css2.1提出来的，低版本的浏览器不支持
4.link支持使用javascript控制去改变样式，而@import不支持
5.link方式的样式的权重高于@import的权重
6.import在html使用时候需要`<style type="text/css">`标签

### 介绍一下你对浏览器内核的理解？常见的浏览器内核有？

主要分成两部分：渲染引擎(Layout Engine或Rendering Engine)和JS引擎。

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。
JS引擎：解析和执行javascript来实现网页的动态效果。

最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

常见的浏览器内核：
Trident( MSHTML )：IE MaxThon TT The World 360 搜狗浏览器
Geckos：Netscape6及以上版本 FireFox Mozilla Suite/SeaMonkey
Presto：Opera7及以上(Opera内核原为：Presto，现为：Blink)
Webkit：Safari Chrome