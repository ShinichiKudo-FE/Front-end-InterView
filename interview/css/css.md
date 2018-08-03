# Css

## 5.27

### 一

标准盒子模型
左右margin + 左右padding + border + (width)

IE盒子
(padding + border + width) + margin

### 二

box-sizing属性

content-box *W3C的标准盒子模型*，设置元素的 height/width 属性指的是content部分的高/宽
border-box *IE传统盒子模型*。设置元素的height/width属性指的是border + padding + content部分的高/宽

### 三

css选择器有哪些？哪些属性可以继承？

id选择器(#myid)、类选择器(.myclassname)、标签选择器(div, h1, p)、相邻选择器(h1 + p)、子选择器（ul > li）、后代选择器（li a）、通配符选择器（*）、属性选择器（a[rel="external"]）、伪类选择器（a:hover, li:nth-child）

可继承的属性
font-size color font-family

不可继承的属性
broder margin paddind height width

优先级
!important>行内>[id>class>tag]

## 5.28

### 水平垂直居中方式

```css
/*1.margin*/
margin: 0 auto;
/*2.inline-block实现水平居中方法*/
text-align:center;
display:inline-block;
/*3.绝对定位实现水平居中*/
.ele {
position: absolute;
width: 宽度值;
left: 50%;
margin-left: -(宽度值/2);
}
/*4.CSS3的flex实现水平居中方法*/
display:flex;
justify-content: center;
/*5.CSS3的fit-content实现水平居中方法*/
width: fit-content;
```

### display有哪些值？说明他们的作用? position的值？

inline 内联
block  块显示
none 隐藏
table 表格显示
list-item 项目列表
inline-block

`position的值`
relative 相对定位 不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位；
absolute 参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位；
fixed 固定定位 所固定的参照对像是可视窗口
static 按照正常文档流进行排列
sticky 粘性定位 相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位

### 用纯CSS创建一个三角形的原理是什么？

首先，需要把元素的宽度、高度设为0。然后设置边框样式。

```css
width: 0;
height: 0;
border-top: 40px solid transparent;
border-left: 40px solid transparent;
border-right: 40px solid transparent;
border-bottom: 40px solid #ff0000;
```
