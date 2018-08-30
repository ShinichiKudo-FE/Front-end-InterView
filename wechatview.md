# 微信小程序面试问题

## 简单描述下微信小程序的相关文件类型？

答：微信小程序项目结构主要有四个文件类型,如下

一、WXML （WeiXin Markup Language）是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。内部主要是微信自己定义的一套组件。

二、WXSS (WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式，

二、js 逻辑处理，网络请求

三、json 小程序设置，如页面注册，页面标题及tabBar。

## 你是怎么封装微信小程序的数据请求的？

答：
一、将所有的接口放在统一的js文件中并导出

二、在app.js中创建封装请求数据的方法

三、在子页面中调用封装的方法请求数据

## 有哪些参数传值的方法？
答：
一、给HTML元素添加data-*属性来传递我们需要的值，然后通过`e.currentTarget.dataset`或onload的param参数获取。但data-名称不能有大写字母和不可以存放对象
二、设置id 的方法标识来传值通过e.currentTarget.id获取设置的id的值,然后通过设置全局对象的方式来传递数值
三、在navigator中添加参数传值

## 你使用过哪些方法，来提高微信小程序的应用速度？
答：
一、提高页面加载速度
二、用户行为预测
三、减少默认data的大小
四、组件化方案

## 小程序与原生App哪个好？ 
答： 小程序除了拥有公众号的低开发成本、低获客成本低以及无需下载等优势，在服务请求延时与用户使用体验是都得到了较大幅度  的提升，使得其能够承载跟复杂的服务功能以及使用户获得更好的用户体验。

## 简述微信小程序原理？ 
答：微信小程序采用JavaScript、WXML、WXSS三种技术进行开发，从技术讲和现有的前端开发差不多，但深入挖掘的话却又有所不同。

JavaScript：首先JavaScript的代码是运行在微信App中的，并不是运行在浏览器中，因此一些H5技术的应用，需要微信App提供对应的API支持，而这限制住了H5技术的应用，且其不能称为严格的H5，可以称其为伪H5，同理，微信提供的独有的某些API，H5也不支持或支持的不是特别好。

WXML：WXML微信自己基于XML语法开发的，因此开发时，只能使用微信提供的现有标签，HTML的标签是无法使用的。

WXSS：WXSS具有CSS的大部分特性，但并不是所有的都支持，而且支持哪些，不支持哪些并没有详细的文档。

微信的架构，是数据驱动的架构模式，它的UI和数据是分离的，所有的页面更新，都需要通过对数据的更改来实现。

小程序分为两个部分webview和appService。其中webview主要用来展现UI，appService有来处理业务逻辑、数据及接口调用。它们在两个进程中运行，通过系统层JSBridge实现通信，实现UI的渲染、事件的处理

## 分析下微信小程序的优劣势？

小程序是在微信生态发展过程中新出现的一种应用形态，小程序的小，从某种程度上已经说明了它的体量不会很大，但是可以实现一些功能相对简单、交互相对简单的服务需求，同时解决了App长期以来多平台适配、多应用市场分发、开发成本居高不下等诸多方面的问题。所以小程序【密件】依靠微信平台和自身“阅后即焚”的功能，获得众多年轻人的好评

优势：

1）容易上手，只要之前有HTML+CSS+JS基础知识，写小程序基本上没有大问题；当然如果了解ES6+CSS3则完全可以编写出即精简又动感的小程序；

2）基本上不需要考虑兼容性问题，只要微信可以正常运行的机器，就可以运行小程序；

3）基本组件库已经比较齐全：Toast,Loading框,Picker,定位及地图,Image,Input,Checkbox,Text,TextArea,ScrollView等常用的组件都有，而且使用也挺简单、方便；

4）发布、审核高效，基本上上午发布审核，下午就审核通过，升级简单，而且支持灰度发布；

5 ) 微信官方提供使用人数、频率等数据统计，小程序js脚本执行错误日志；

6）开发文档比较完善，开发社区比较活跃；

7）最近刚开放的牛x功能，新增webview组件，可以展示网页啦，这个比较爽；

8）支持插件式开发，一些基本功能可以开发成插件，供多个小程序调用；

劣势：

1）后台调试麻烦，因为API接口必须https请求，且公网地址，也就是说后台代码必须发布到远程服务器上；当然我们可以修改host进行dns映射把远程服务器转到本地，或者开启tomcat远程调试；不管怎么说终归调试比较麻烦。

2）前台测试有诸多坑，最头疼莫过于模拟器与真机显示不一致（之前碰到一个案例，后续单独讲解）

3）真机测试，个别功能安卓和苹果表现迥异，我们的小程序里有很多页面有定位功能，模拟器和iphone定位瞬间完成，然而安卓手机就蛋疼了，老显示“定位中...”要很久才能定位好。后来没办法只能优化，减少定位次数。

4）native组件，展示很不好，比如textarea，不能在滚动页面出现，而且至于顶层，经常其它组件会被它遮挡，点击其它组件时，就进入textarea输入框；画布组件也是如此；

5）页面跳转深度不能超过5个页面，这个比较麻烦，有些复杂的页面跳转没法实现，不过太复杂的话也有悖小程序简单易用的原则啦；

6）小程序升级问题，官方文档说会自动更新，实际情况往往是要先把原来的小程序删除掉，重新搜索添加，才能加载最新版本；

7）页面渲染稳定性有待提高，已经好几次出现部分用户的页面显示异常，整个页面被放大了好几倍，先删除原来小程序再添加回来，如此重复好几次，才能显示正常；

8）js引用只能使用绝对路径，很蛋疼；基于安全性及MINA框架实现原理，小程序中对js使用做了很多限制，不能使用：new Function，eval，Generator，不能操作cookie，不能操作DOM；

9）开发工具bug比较多且效率比较低，三天两头升级，解决老问题的同时又出现问题；文件查找、资源定位、代码编辑较eclipse有一定差距。经常出现把a.js当做b.js来修改

## 微信小程序与H5的区别？

答：

第一条是运行环境的不同

传统的HTML5的运行环境是浏览器，包括webview，而微信小程序的运行环境并非完整的浏览器，是微信开发团队基于浏览器内核完全重构的一个内置解析器，针对小程序专门做了优化，配合自己定义的开发语言标准，提升了小程序的性能。


第二条是开发成本的不同

只在微信中运行，所以不用再去顾虑浏览器兼容性，不用担心生产环境中出现不可预料的奇妙BUG


第三条是获取系统级权限的不同

系统级权限都可以和微信小程序无缝衔接


第四条便是应用在生产环境的运行流畅度

长久以来，当HTML5应用面对复杂的业务逻辑或者丰富的页面交互时，它的体验总是不尽人意，需要不断的对项目优化来提升用户体验。但是由于微信小程序运行环境独立

## 怎么解决小程序的异步请求问题？ 
答：
在回调函数中调用下一个组件的函数：

```js
// app.js
success: function (info) {            
    that.apirtnCallback(info)
}

// index.js
 onLoad: function () {
    app.apirtnCallback = res => {
     console.log(res) 
    }
｝
```

## 小程序的双向绑定和vue哪里不一样？

答：
小程序直接this.data的属性是不可以同步到视图的，必须调用：
 

```js
this.setData({
          noBind:true
 })
```

## 小程序的wxss和css有哪些不一样的地方？

答：一、wxss的图片引入需使用外链地址；二、没有Body；样式可直接使用import导入

## webview中的页面怎么跳回小程序中？

答：首先要引入最新版的jweixin-1.3.2.js，然后

```JS
wx.miniProgram.navigateTo({

    url: '/pages/login/login'+'$params'
})
```

## 小程序关联微信公众号如何确定用户的唯一性？

答：使用wx.getUserInfo方法withCredentials为 true 时 可获取encryptedData，里面有 union_id。后端需要进行对称解密

## 如何实现下拉刷新？
答：用view代替scroll-view,,设置onPullDownRefresh函数实现

## 使用webview直接加载要注意哪些事项？
答：一、必须要在小程序后台使用管理员添加业务域名；二、h5页面跳转至小程序的脚本必须是1.3.1以上；三、微信分享只可以都是小程序的主名称了，如果要自定义分享的内容，需小程序版本在1.7.1以上；四、h5的支付不可以是微信公众号的appid，必须是小程序的appid，而且用户的openid也必须是用户和小程序的

## 小程序调用后台接口遇到哪些问题？

1、数据的大小有限制，超过范围会直接导致整个小程序崩溃，除非重启小程序；
2、小程序不可以直接渲染文章内容页这类型的html文本内容，若需显示要借助插件，但插件渲染会导致页面加载变慢，所以最好在后台对文章内容的html进行过滤，后台直接处理批量替换p标签div标签为view标签，然后其它的标签让插件来做，减轻前端的时间。

## webview的页面怎么跳转到小程序导航的页面？
答：小程序导航的页面可以通过switchTab，但默认情况是不会重新加载数据的。
若需加载新数据，则在success属性中加入以下代码即可：

```js
success: function (e) {
    var page = getCurrentPages().pop();
    if (page == undefined || page == null) return;
    page.onLoad();
}

//  webview的页面，则通过

wx.miniProgram.switchTab({
    url: '/pages/index/index'
})
```

## 小程序和Vue写法的区别？
答：
一、循环遍历的时候：小程序是wx:for="list"，而Vue是v-for="info in list"
二、调用data模型的时候：小程序是this.data.uinfo，而Vue是this.uinfo；给模型赋值也不一样，小程序是this.setData({uinfo:1})，而Vue是直接this.uinfo=1
(责任编辑：admin)

## 微信小程序如何跨页面获取值？

依据上面的方式设置要传递的值，页面跳转后，我们就需要在下一个页面拿到传递的数据（这个数据在传递前，就已经被设置成全局变量）

在跳转后的js页面，接收传递过来的数据detail.js

同样通过全局额方式取值出来，（即和app.js中取某个变量的值是一样的）

```js
var movieid=getApp().MovieDetailid;
console.log(movieid);
```

## 微信小程序开发中经常遇到的问题

[开发中经常遇到的问题](https://juejin.im/post/5ab8772851882521d6578f15)

## 如果需要用户授权，用户选择拒绝授权，此时应该如何处理？

在微信小程序开发时，当我们调用API  `wx.getUserInfo(OBJECT)` 时，需要用户授权。但如果用户拒绝授权，我们如何兼容用户拒绝授权状态，拥有更好的用户体验呢？

`wx.getUserInfo(OBJECT)`
获取用户信息，需要先调用 wx.login 接口。

### 1. tip: wx.getUserInfo 接口需要用户授权，请兼容用户拒绝授权的场景。

我们就是要在用户点击拒绝的时候，弹出提示框，提示用户以提升用户体验。像下面这样的。

![弹出提示框](https://img-blog.csdn.net/20180408002349785?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjQ2MjQ5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

用具体代码实现就是，将弹窗写在 wx.getUserInfo 的fail回调函数中，像下面这样：

```js
wx.getUserInfo({

success: function (resuser) {

console.log(success)

},

fail: function () {// 调用微信弹窗接口

wx.showModal({

    title: '警告',

    content: '您点击了拒绝授权，将无法正常使用******的功能体验。请10分钟后再次点击授权，或者删除小程序重新进入。',

    success: function (res) {

    if (res.confirm) {

    console.log('用户点击确定')

    }

}

})

}

})
```

这样用户就获得了提示信息，但此时，用户还是停留在页面的，如果某些展示信息，还是给要给用户展示的，只是在进行某些操作的时候要对授权进行验证的话，那就得继续修改我们的代码，保存用户的登录态，在其他地方做验证使用。

#### 第一种思路：

保存登录态这里是这样的，将用户的登录信息传给后台，后台保存用户信息，同时用 open_id 在后台换取一个SessionId 用换取的这个SessionId 存在缓存，做为登录态验证。

```js
wx.getUserInfo({

success: function (resuser) {

let userInfo = resuser.userInfo

that.healthApi.login(code, userInfo).then(logindata => {   // 这里将微信的请求封装成Promiese 风格

    if (logindata.code === 0) {

        var sessionId = logindata.data// 调用微信wechat.setStorage将换回来的 SessionId 存在本地缓存

        that.wechat.setStorage('sessionId', sessionId).then(() => {

        that.globalData.userInfo = userInfo

        typeof cb == "function" && cb(that.globalData.userInfo)

        })

    }

})

},

    fail: function () {

    wx.showModal({

            title: '警告',

            content: '您点击了拒绝授权，将无法正常使用*****的功能体验。请10分钟后再次点击授权，或者删除小程序重新进入。',

            success: function (res) {

                if (res.confirm) {

                    console.log('用户点击确定')

                }

            }
        })

    }

})
```

这样我们将登录态保存在了 SessionId 中，在每次登录的时候我们只需要再调用一个 检查 SessionId的接口就行，检查不通过再调微信登录接口。此处不做延伸了。

#### 第二种思路：

在3.29微信小程序更新的版本中，加入了这样一条属性

withCredentials 字段基础库版本 1.1.0 开始支持，低版本需做兼容处理

这个字段的意思就是调用 wx.getUserInfo(OBJECT) 是否带上 登录态  的信息。

官方文档是这样解释的：

withCredentials 字段基础库版本 1.1.0 开始支持，低版本需做兼容处理

注：需要兼容微信低版本，向后兼容。

那么利用这个接口，我们可以直接拿到 登录状态，在其他需要验证登录的地方进行提示，而在不需要授权的地方还可以让用户浏览小程序。

回到前面的问题，在用户点击拒绝授权后，在某些操作时需要验证用户是否授权过，弹出交互信息，那么就利用上面的 SessionId或者 withCredentials 登录态进行下面的操作：

```js
applyIn: function applyIn() {

if (wx.getStorageSync('sessionId')) {  // 根据储存的sessionId 进行验证

    wx.navigateTo({

        url: 'familyDoctorApply/familyDoctorApply?Oid=' + this.data.params.Oid + '&title=' + this.data.params.title + '&serviceCity=' + this.data.array[this.data.index].name + '&productPrice=' + this.data.product.productPrice

    });

    } else {

        wx.showModal({

        title: '警告',

        content: '您点击了拒绝授权，无法使用此功能。',

        success: function (res) {

            if (res.confirm) {

            console.log('用户点击确定')

            }

        }

        })

}
```
![授权状态](https://img-blog.csdn.net/20180408002421185?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjQ2MjQ5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

这样一个简单完整的登录及授权，登录态保存等前端微信小程序解决方案就完成了，还可以继续扩展到登录有效期，退出登录，用户权限等跟多扩展的地方

## 如何分包加载？分包加载的优势在哪？

### 分包加载的介绍
大部分小程序都会由某几个功能组成，通常这几个功能之间是独立的，但会依赖一些公共的逻辑，并且这些功能通常会对应某几个独立的页面。那么小程序代码的打包，大可不必一定要打成一个，可以按照功能的划分，拆分成几个分包，当需要用到某个功能时，才加载这个功能对应的分包。
对于用户来说，小程序加载流程变成了：
1.首次启动时，先下载小程序主包，显示主包内的页面；
2.如果用户进入了某个分包的页面，再下载这个对应分包，下载完毕后，显示分包的页面。
采用分包加载，对开发者而言，能使小程序有更大的代码体积，承载更多的功能与服务；而对用户而言，可以更快地打开小程序，同时在不影响启动速度前提下使用更多功能。

### 分包的划分
在配置前首先需要开发者规划下各个分包需要容纳的内容，我们建议开发者按照功能划分的的原则，将同一个功能下的页面和逻辑放置于同一个目录下，对于一些跨功能之间公共逻辑，将其放置于主包下，这样可以确保在分包引用这部分功能时，这部分的逻辑一定存在。
在分包划分时，应该注意以下事项：
1.避免分包与分包之间引用上的耦合。因为分包的加载是由用户操作触发的，并不能确保某分包加载时，另外一个分包就一定存在，这个时候可能会导致 JS 逻辑异常的情况，例如报「"xxx.js" is not defined」这样的错误；
2.一些公共用到的自定义组件，需要放在主包内。

### 分包的配置
当理清了分包的划分后，就可以进行分包的配置了，这一步并不复杂。

假设支持分包的小程序目录结构如下：

![分包](https://img-blog.csdn.net/20180408002507635?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjQ2MjQ5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

开发者通过在 app.json subPackages 字段声明项目分包结构：

![分包1](https://img-blog.csdn.net/20180408002522478?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNjQ2MjQ5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 分包加载的低版本兼容问题

微信 6.6.0 版本开始支持分包加载，而对于低于这个版本的客户端，我们做了兼容处理，开发者不需要对老版本微信客户端做兼容。对于老版本的客户端，编译后台会将所有的分包打包成一个整包，老版本的客户端依然按照整包的方式进行加载。
所以在老版本的微信客户端下，是依然采取整包加载的方式加载的，建议开发者尽量控制代码包的大小。

目前小程序分包大小的限制：
    整个小程序所有分包大小不超过 4M
    单个分包/主包大小不能超过 2M
    随着时间推移，老版本覆盖率降低，我们会考虑进一步扩大代码包的大小。


## 在你开发小程序的过程中遇到过什么坑？ 你是怎么解决的？

### 我们使用app.json文件来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 的时候

在pages中写注释的时候回报错

```js
{

  "pages":[

      //这是首页面

    "pages/welcome/welcome"

  ]}
```

### 在json文件中没有写内容的时候也要加一对大括号{ }，不然的话也会报错 

### 对页面json文件进行配置的时候只可以配置设置默认页面的窗口表现（即只能对window进行配置），但是在此时可以直接省略window，如果加window则没有效果，也不会报错

### 此前一直没有注意vertical-align: middle和height：40rpx;line-height:40rpx进行设置垂直剧中的区别，这次主要说一下vertical-align: middle 