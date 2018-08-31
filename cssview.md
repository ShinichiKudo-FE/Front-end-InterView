# css

## CSS 中类 (class) 和ID 的区别

id一个页面只可以使用一次；class可以多次引用。
权重不同，id比class权重高

## 请问 “resetting” 和 “normalizing” CSS 之间的区别？你会如何选择，为什么？

reset.css能够重置浏览器的默认属性。不同的浏览器具有不同的样式，重置能够使其统一。

比如说ie浏览器和FF浏览器下button显示不同，通过reset能够统一样式，显示相同的想过。

但是很多reset是没必要的，多写了会增加浏览器在渲染页面的负担。 比如说，　　

我们不应该对行内元素设置无效的属性，对span设置width和height，margin都不会生效的。

对于absolute和fixed定位的固定尺寸（设置了width和height属性），如果设置了top和left属性，那么bottom和right，margin和float就没有作用。

后面设置的属性将会覆盖前面重复设置的属性。

期待能够指出它的负面影响，或者提到它的一个更好的替换者“normalize”

normalize.css是一个可以定制的css文件，它让不同的浏览器在渲染元素时形式更统一。

## 请解释浮动 (Floats) 及其工作原理

原理
“浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。
由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。”

> 浮动布局：
浮动布局是CSS中规定的第二种定位机制。 (CSS 有三种基本的定位机制：普通流、浮动和绝对定位。)
能够实现横向多列布局。（常见的为横向两列布局，横向三列布局）
通过设置float属性实现。

闭合浮动的方法：
 方法一（差）：添加额外标签
 方法二（差）：使用br标签及自身html属性
 方法三（差）：父元素设置overflow属性
 方法四（差）：父元素也设置浮动
 方法五（差）：父元素设置display:table
 方法六（可）：使用:after伪元素

闭合浮动的原理：

Block formatting contexts （块级格式化上下文），以下简称 BFC。
CSS3里面对这个规范做了改动，称之为： flow root ，并且对触发条件进行了进一步说明。

## 描述z-index和叠加上下文是如何形成的？

层叠上下文，就是在呈现的时候决定哪个元素在上、哪个元素在下

在W3C是这样描述的：每个元素都具有三维空间位置，除了水平和垂直位置外，还能在 "Z轴" 上层层相叠、排列。元素在 "Z轴" 方向上的呈现顺序，由层叠上下文和层叠级别决定。

在文档中，每个元素仅属于一个层叠上下文。元素的层叠级别为整型，它描述了在相同层叠上下文中元素在 "Z轴" 上的呈现顺序。同一层叠上下文中，层叠级别大的显示在上，层叠级别小的显示在下，相同层叠级别时，遵循后来居上的原则，即其在HTML文档中的顺序。不同层叠上下文中，元素呈现顺序以父级层叠上下文的层叠级别来决定呈现的先后顺序，与自身的层叠级别无关。

需要注意的是 z-index 虽然很给力，却只能应用于 **定位元素**（即设置了 position 属性为非 static 值），其它情况下，z-index 将被忽略。

> 为什么内联元素的层叠顺序要比块状元素高？

内联元素一般都是基于语义级(semantic)的基本元素，它只能容纳文本或者其他内联元素，通常被包括在块元素中使用，常见内联元素有“a、b、br”等,基本上可以说成内联元素变成了块状元素的子元素，所以 **子元素也就是内联元素要高于块状元素**。

行内块的级别比块级元素的层级高，行内块能覆盖块
z-index不能和和folat一起使用，因为他的层级已经规定在z-index：0；和z-index负数之间,folat在z-index负数  和z-index为0 之间

## 请描述 BFC(Block Formatting Context) 及其如何工作？

> BFC是什么
定义：一个块级格式化上下文[BFC]是可视化CSS渲染网页的一部分，它是一个区域，块级布局，相互浮动在这个区域发生。它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。

怎样才能形成BFC
float的值不为none。
overflow的值不为visible
display的值为table-cell, table-caption, inline-block中的任何一个
position的值不为relative和static
css3中flex boxes
fieldset元素

## CSS sprites优缺点

通常被意译为“CSS图像拼合”或“CSS贴图定位”，CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景 图片的位置。

> CSS Sprites优点：
* 大大减少了HTTP请求的次数，减轻服务器压力，同时缩短了悬停加载图片所需要的时间延迟，使效果更流畅，不会停顿
* 能减少图片的字节，我曾经比较过多次3张图片合并成1张图片的字节总是小于这3张图片的字节总和。

> CSS Sprites 缺点：
* 在宽屏，高分辨率的屏幕下的自适应页面，你的图片如果不够宽，很容易出现背景断裂；
* 通过photoshop或其他工具测量计算每一个背景单元的精确位置，这是针线活，没什么难度，但是很繁琐；不过网上已经有高手开发出“CSS Sprites 样式生成工具”
* 如果页面背景有少许改动，一般就要改这张合并的图片，无需改的地方最好不要动，这样避 免改动更多的css
* 由于图片 的位置需要固定为某个绝对数值，这就失去了诸如center之类的灵活性。

## 三栏布局，两边固定，中间自适应

[三栏布局，两边固定，中间自适应](https://segmentfault.com/a/1190000008705541)

## 图片替换文字方案

> Fahrner Image Replacement (FIR)
*HTML 代码:

```HTML
<h2> <span>Hello World </h2>
```

*CSS 代码

```CSS
<style type="text/css"> h2 { background:url(hello_world.gif) no-repeat; width: 150px; height: 35px; } span { display: none; } </style>
```

代码非常明白:先将图片应用在 H2 的背景中,然后将 SPAN 的标签隐藏。但是这种方式有个问题,就是当图片无法显示时,将导致这个区域没有任何内容。同时,使用 display:none 的方式隐藏的内容,将被许多主流屏幕阅读器忽略,从而造成可用性问题,因此,应该尽量避免使用。

> Phark 的方法
*HTML 代码:

```HTML
<h2> <span>Hello World </h2>
```

*CSS 代码

```CSS
<style type="text/css"> h2 { text-indent: -5000px; background:url(hello_world.gif) no-repeat; width: 150px; height:35px; } </style>
```

代码也非常简单,通过文本缩进,将文字隐藏,但是,当图片无法显示时,依然存在 FIR 的问题

> Gilder/Levin 的方法 (推荐)
*HTML 代码:

```HTML
<h2> <span>Hello World </h2>
```

*CSS 代码

```CSS
<style type="text/css"> h2 { width: 150px; height: 35px; position: relative; } h2 span { background: url(hello_world.gif) no-repeat; position: absolute; width: 100%; height: 100%; } </style>
```

首先,将 H2 的 position 设为 relative ,这样将使 H2 里面的元素定位以 H2 为参照,然后将 SPAN 元素绝对定位,撑满整个 H2 区域,同时将背景图应用在 SPAN 标签里面;这种方法的原理是将 SPAN 标签覆盖在文字内容上面,一旦 SPAN 里面的背景图无法显示,将显示下层的文字内容,不影响正常使用。但是,此方法也有一个缺陷,就是背景图不能透明,否则将透出下面的文字。

## 你会如何解决特定浏览器的样式问题

1.针对IE浏览器，新建一个css文件
2.在ＨＴＭＬ文档头部添加　条件注释　代码

![css](https://upload-images.jianshu.io/upload_images/5017428-a292b4441fb251d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/535)

渐进增强，优雅降级等等等等

## 有哪些的隐藏内容的方法

1.display:none;的缺陷

搜索引擎可能认为被隐藏的文字属于垃圾信息而被忽略

屏幕阅读器（是为视觉上有障碍的人设计的读取屏幕内容的程序）会忽略被隐藏的文字，同时不利于搜索引擎。

2.visibility: hidden ;的缺陷

这个大家应该比较熟悉就是隐藏的内容会占据他所应该占据物理空间

3.overflow:hidden;一个比较合理的方法
将宽度和高度设定为0，然后超过部分隐藏，就会弥补上述一、二方法中的缺陷，也达到了隐藏内容的目的。

## 你用过媒体查询，或针对移动端的布局/CSS 吗？

通过媒体查询可以为不同大小和尺寸的媒体定义不同的css，适合相应的设备显示；即响应式布局

```css
@media screen and (min-width: 400px) and (max-width: 700px) { … }

@media handheld and (min-width: 20em), screen and (min-width: 20em) { … }
```

## 如何优化网页的打印样式？

1、指定媒体的两种方法：
方法A:Media属性

```html
<link rel="stylesheet" type="text/css" media="screen" href="screenstyles.css" />
```

方法B:@media或@import

```html
<style type="text/css">
@import url("screenstyles.css") screen;
 @media print {
     /* 打印时使用的样式放置在此 *
}
</style>
```

2、分开屏幕显示与打印的样式

3、设计一份打印样式表

## 在书写高效 CSS 时会有哪些问题需要考虑

 1.样式是：浏览器是从右向左来解析一个选择器的
 2.ID最快，Universal最慢 有四种类型的key selector，解析速度由快到慢依次是：ID、class、tag和universal
 3.不要tag-qualify （永远不要这样做 ul#main-navigation { } ID已经是唯一的，不需要Tag来标识，这样做会让选择器变慢。）
 4.后代选择器最糟糕（换句话说，下面这个选择器是很低效的： html body ul li a { }）
 5.想清楚你为什么这样写
 6.CSS3的效率问题（CSS3选择器（比如 :nth-child）能够漂亮的定位我们想要的元素，又能保证我们的CSS整洁易读。但是这些神奇的选择器会浪费很多的浏览器资源。）
 7.我们知道#ID速度是最快的，那么我们都用ID，是不是很快。但是我们不应该为了效率而牺牲可读性和可维护性

## 使用 CSS 预处理器的优缺点有哪些？(SASS，Compass，Stylus，LESS) 描述下你曾经使用过的 CSS 预处理的优缺点。

> *优点：用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。通俗的说，CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件，以供项目使用。CSS预处理器为CSS增加一些编程的特性，无需考虑浏览器的兼容性问题，例如你可以在CSS中使用变量、简单的逻辑程序、函数等等在编程语言中的一些基本特性，可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

* 缺点：简单来说CSS预处理器语言较CSS玩法变得更高级了，但同时降低了自己对最终代码的控制力。更致命的是提高了门槛，首先是上手门槛，其次是维护门槛，再来是团队整体水平和规范的门槛。这也造成了初学学习成本的昂贵。

Sass、Stylus是在服务区端运行的，而less是在客户端运行的

## 三种纯CSS实现三角形的方法

利用 border 属性实现三角形

```css
.triangle{
    width:0;
    height:0;
    border-width:20px;
    border-style:solid dashed dashed dashed;
    border-color:#e66161 transparent transparent transparent;
}
```

利用 CSS3 transfrom 旋转 45 度实现三角形

```css
.message-box {
    position:relative;
    width:240px;
    height:60px;
    line-height:60px;
    background:#E9FBE4;
    box-shadow:1px 2px 3px #E9FBE4;
    border:1px solid #C9E9C0;
    border-radius:4px;
    text-align:center;
    color:#0C7823;
}
.triangle-css3 {
    position:absolute;
    bottom:-8px;
    bottom:-6px;
    left:30px;
    overflow:hidden;
    width:13px;
    height:13px;
    background:#E9FBE4;
    border-bottom:1px solid #C9E9C0;
    border-right:1px solid #C9E9C0;
}
.transform {
    -webkit-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    -o-transform:rotate(45deg);
    transform:rotate(45deg);
}
```

## 如果设计中使用了非标准的字体，你该如何去实现？

方法：1、用图片代替

2、web fonts在线字库，如[Google Webfonts，Typekit 等等](http://www.chinaz.com/free/2012/0815/269267.shtml)

3、[@font-face](http://www.qianduan.net/google-font-api-web-font-and-chinese.html)

## 请解释浏览器是如何判断元素是否匹配某个 CSS 选择器？

先产生一个元素集合，然后从后往前判断；

浏览器先产生一个元素集合，这个集合往往由最后一个部分的索引产生（如果没有索引就是所有元素的集合）。然后向上匹配，如果不符合上一个部分，就把元素从集合中删除，直到真个选择器都匹配完，还在集合中的元素就匹配这个选择器了。

## 请描述伪元素 (pseudo-elements) 及其用途

css引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分

伪类(:first-child，:hover等)用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过:hover来描述这个元素的状态。虽然它和普通的css类相似，可以为已有的元素添加样式，但是它只有处于dom树无法描述的状态下才能为元素添加样式，所以将其称为伪类。

伪元素(::after,::before等)用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过:before来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

## 解释一下你对盒模型的理解，以及如何在 CSS 中告诉浏览器使用不同的盒模型来渲染你的布局。

盒子模型分为两类：W3C标准盒子模型和IE盒子模型 （微软确实不喜欢服从他家的标准）

这两者的关键差别就在于：

W3C盒子模型——属性高（height）和属性宽（width）这两个值不包含 填充（padding）和边框（border）
IE盒子模型——属性高（height）和属性宽（width）这两个值包含 填充（padding）和边框（border）
我们在编写页面代码的时候应该尽量使用标准的W3C盒子模型（需要在页面中声明DOCTYPE类型）。

> 因而解决兼容型为题最简洁和值得推荐的方式是

* 将页面设为“标准模式”。

添加对应的dtd标识，如：

```html
<!DOCTYPE html>
```

* 使用hack或者在外面套上一层wrapper。

## 列出你所知道的display的值

/* `<display-outside>` values */
display: block;
display: inline;
display: run-in;

/* `<display-inside>` values */
display: flow;
display: flow-root;
display: table;
display: flex;
display: grid;
display: ruby;
display: subgrid;

/* `<display-outside>` plus `<display-inside>` values */
display: block flow;
display: inline table;
display: flex run-in;

/* `<display-listitem>` values */
display: list-item;
display: list-item block;
display: list-item inline;
display: list-item flow;
display: list-item flow-root;
display: list-item block flow;
display: list-item block flow-root;
display: flow list-item block;

/* `<display-internal>` values */
display: table-row-group;
display: table-header-group;
display: table-footer-group;
display: table-row;
display: table-cell;
display: table-column-group;
display: table-column;
display: table-caption;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;

/* `<display-box>` values */
display: contents;
display: none;

/* `<display-legacy>` values */
display: inline-block;
display: inline-table;
display: inline-flex;
display: inline-grid;

/* Global values */
display: inherit;
display: initial;
display: unset;

## 请解释inline 和inline-block 的区别

* display:block

block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。
block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。
block元素可以设置margin和padding属性。

* display:inline

inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
inline元素设置width,height属性无效。
inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。

* display:inline-block

简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性。

## 请解释relative、fixed、absolute 和 static 元素的区别

1、static（静态定位）：默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

2、relative（相对定位）：生成相对定位的元素，通过top,bottom,left,right的设置相对于其正常（原先本身）位置进行定位。可通过z-index进行层次分级。　　

3、absolute（绝对定位）：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。可通过z-index进行层次分级。

4、fixed（固定定位）：生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。可通过z-index进行层次分级。

## 为什么响应式设计 (responsive design) 和自适应设计 (adaptive design) 不同？

![design](https://ccdn.goodq.top/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMWZhZTcyOGZkYmIzNDUxY2Y4NDkyMDhjYzI3N2NhYmQucG5nP2F0dGFjaG1lbnRfaWQ9MzIwMTc_p_p100_p_3D.png)

响应式（RWD） = 所有设备的代码是一样的
自适应（AWD）= 不同设备的代码是不一样的

## 你有兼容 retina 屏幕的经历吗？如果有，在什么地方使用了何种技术？

* 当一个图像在标准设备下全屏显示时，一位图像素对应的就是一设备像素，导致一个完全保真的显示，因为一个位置像素不能进一步分裂。而当在Retina屏幕下时，他要放大四倍来保持相同的物理像素的大小，这样就会丢失很多细节，造成失真的情形.因此Retina屏幕下的图片是普通屏幕的两倍像素

* 解决方法 1.直接加载2倍大小的图片 2.Image-set控制 假如要显示的图片大小为200x300，图片应有两张：一张大小为200x300，命名为pic.png；另一张大小为400x600，命名为pic@2x.png（@2x是Retina图标的标准命名方式），然后使用以下css代码控制：

## 请问为何要使用 translate() 而非 absolute position，或反之的理由？为什么？

使用 transform 或 position 实现动画效果时是有很大差别。
使用 transform 时，可以让 GPU 参与运算，动画的 FPS 更高。
使用 position 时，最小的动画变化的单位是 1px，而使用 transform 参与时，可以做到更小（动画效果更加平滑）
功能都一样。但是translate不会引起浏览器的重绘和重排，这就相当nice了。

## 如果实现一个高性能的CSS动画效果？

浏览器的“硬件加速”

```css
div {
    transform: translate3d(0, 0, 0);
}
```
在移动端，我们经常用到如上的CSS代码实现所谓的“硬件加速”，来提高动画的流畅度。在部分情况下，我们的CSS动画的确变的更加流畅。但这个方法并不是万能药。当页面中加速的元素越来越多时，网页的性能便会下降。为了更详细的了解原因，我们有必要了解下浏览器的内部机制。

为了得到更流畅的CSS动画效果，你需要尽量做到如下条件：

动画中尽量少使用能触发layout和paint的CSS属性，使用更低耗的transform、opacity等属性
尽量减少或者固定层的数量，不要在动画过程中创建层
尽量减少层的更新（paint）次数

## css3动画

@keyframes 规定动画。
animation 所有动画属性的简写属性，除了 animation-play-state 属性。 3
animation-name 规定 @keyframes 动画的名称。 3
animation-duration 规定动画完成一个周期所花费的秒或毫秒。默认是 0。 3
animation-timing-function 规定动画的速度曲线。默认是 "ease"。 3
animation-delay 规定动画何时开始。默认是 0。 3
animation-iteration-count 规定动画被播放的次数。默认是 1。 3
animation-direction 规定动画是否在下一周期逆向地播放。默认是 "normal"。 3
animation-play-state 规定动画是否正在运行或暂停。默认是 "running"。 3
animation-fill-mode 规定对象动画时间之外的状态。

## 布局之：左边定宽，右边自适应

方法一：浮动布局

```css
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }

    #left {
        float: left;
        width: 220px;
        background-color: green;
    }

    #content {
        background-color: orange;
        margin-left: 220px;/*==等于左边栏宽度==*/
    }
</style>
```

方法二：浮动和负边距实现

```html
<div id="left">
    Left Sidebar
</div>
<div id="content">
    <div id="contentInner">
        Main Content
    </div>
</div>

```

```css
*{
    margin: 0;
    padding: 0;
}
#left {
    background-color: green;
    float: left;
    width: 220px;
    margin-right: -100%;
}

#content {
    float: left;
    width: 100%;
}

#contentInner {
    margin-left: 220px;/*==等于左边栏宽度值==*/
    background-color: orange;
}

```

方法三：flex实现

## 圣杯布局，双飞翼布局

圣杯布局

```html
<div class="header"></div>
    <div class="content">
    <div class="middle"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
<div class="footer"></div>
```

```css
.header {
    width: 100%;
    height: 30px;
    background: red;
}

.content {
    overflow: hidden;
    padding: 0 100px;
}

.footer {
    width: 100%;
    height: 30px;
    background: red;
}

.middle {
    position:relative;
    width: 100%;
    float: left;
    height: 80px;
    background: green;
}

.left {
    position:relative;
    width: 100px;
    float: left;
    left:-100px;
    height: 80px;
    margin-left: -100%;
    background: yellow;
}

.right {
    position:relative;
    width: 100px;
    float: left;
    right:-100px;
    height: 80px;
    margin-left: -100px;
    background: pink
}
```

双飞翼布局

```html
<div class="header"></div>
<div class="content">
    <div class="middle">
        <div class="inner-middle"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
</div>
<div class="footer"></div>
```

```css
 .header {
    width: 100%;
    height: 30px;
    background: red;
}

.content {
    overflow: hidden;
}

.footer {
    width: 100%;
    height: 30px;
    background: red;
}

.middle {
    width: 100%;
    float: left;
}
.inner-middle{
    width:100%;
    height: 80px;

background: green;
}
.left {
    width: 100px;
    float: left;
    height: 80px;
    margin-left: -100%;
    background: yellow;
}

.right {
    width: 100px;
    float: left;
    height: 80px;
    margin-left: -100px;
    background: pink
}

```

就是middle的实现不一样，圣杯布局是middle+padding，双飞翼采用子元素+margin，最主要的还是负边距的使用

## 实现垂直居中和水平居中
[16种方法实现水平居中垂直居中](https://juejin.im/post/58f818bbb123db006233ab2a)