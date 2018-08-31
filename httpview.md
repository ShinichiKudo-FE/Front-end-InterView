# http

## 为什么传统上利用多个域名来提供网站资源会更有效

1. CDN缓存更方便
2. 突破浏览器并发限制 (你随便挑一个 G家的 url: `https://lh4.googleusercontent.com/-si4dh2myPWk/T81YkSi__AI/AAAAAAAAQ5o/LlwbBRpp58Q/w497-h373/IMG_20120603_163233.jpg`, 把前面的 lh4换成 lh3,lh6啥的，都照样能够访问，像地图之类的需要大量并发下载图片的站点，这个非常重要。)
3. Cookieless, 节省带宽，尤其是上行带宽 一般比下行要慢。。。

还有另外两个非常规原因: 
4. 对于UGC的内容和主站隔离，防止不必要的安全问题( 上传js窃取主站cookie之类的) 。
正是这个原因要求用户内容的域名必须不是自己主站的子域名，而是一个完全独立的第三方域名。

5.数据做了划分，甚至切到了不同的物理集群，通过子域名来分流比较省事.^_^ 这个可能被用的不多。

PS: 关于Cookie的问题，带宽是次要的，安全隔离才是主要的。
关于多域名，也不是越多越好，虽然服务器端可以做泛解释，浏览器做dns解释也是耗时间的，而且太多域名，如果要走 https的话，还有要多买证书和部署的问题，^_^。

## Long-Polling、Websockets 和 Server-Sent Event

[Long-Polling、Websockets 和 Server-Sent Event](https://www.cnblogs.com/laiqun/p/5478435.html)

## 常见的请求头和响应头

> 常见请求头

```html
Accept: text/html,image/*      -- 浏览器接受的数据类型
Accept-Charset: ISO-8859-1     -- 浏览器接受的编码格式
Accept-Encoding: gzip,compress  --浏览器接受的数据压缩格式
Accept-Language: en-us,zh-       --浏览器接受的语言
Host: www.it315.org:80          --（必须的）当前请求访问的目标地址（主机:端口）
If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT  --浏览器最后的缓存时间
Referer: http://www.it315.org/index.jsp      -- 当前请求来自于哪里
User-Agent: Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)  --浏览器类型
Cookie:name=eric                     -- 浏览器保存的cookie信息
Connection: close/Keep-Alive            -- 浏览器跟服务器连接状态。close: 连接关闭  keep-alive：保存连接。
Date: Tue, 11 Jul 2000 18:23:51 GMT      -- 请求发出的时间
```

> 常见响应头

```html
Location: http://www.it315.org/index.jsp   -表示重定向的地址，该头和302的状态码一起使用。
Server:apache tomcat                 ---表示服务器的类型
Content-Encoding: gzip                 -- 表示服务器发送给浏览器的数据压缩类型
Content-Length: 80                    --表示服务器发送给浏览器的数据长度
Content-Language: zh-cn               --表示服务器支持的语言
Content-Type: text/html; charset=GB2312   --表示服务器发送给浏览器的数据类型及内容编码
Last-Modified: Tue, 11 Jul 2000 18:23:51 GMT  --表示服务器资源的最后修改时间
Refresh: 1;url=http://www.it315.org     --表示定时刷新
Content-Disposition: attachment; filename=aaa.zip --表示告诉浏览器以下载方式打开资源（下载文件时用到）
Transfer-Encoding: chunked
Set-Cookie:SS=Q0=5Lb_nQ; path=/search   --表示服务器发送给浏览器的cookie信息（会话管理用到）
Expires: -1                           --表示通知浏览器不进行缓存
Cache-Control: no-cache
Pragma: no-cache
Connection: close/Keep-Alive           --表示服务器和浏览器的连接状态。close：关闭连接 keep-alive:保存连接
```

## 和缓存有关的HTTP首部字段(重要)

[HTTP缓存控制小结](http://imweb.io/topic/5795dcb6fb312541492eda8c)

## HTTP method

> 请求方法

```html
GET
GET方法请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据.
HEAD
HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体.
POST
POST方法用于将实体提交到指定的资源，通常导致状态或服务器上的副作用的更改. 
PUT
PUT方法用请求有效载荷替换目标资源的所有当前表示。
DELETE
DELETE方法删除指定的资源。
CONNECT
CONNECT方法建立一个到由目标资源标识的服务器的隧道。
OPTIONS
OPTIONS方法用于描述目标资源的通信选项。
TRACE
TRACE方法沿着到目标资源的路径执行一个消息环回测试。
PATCH
PATCH方法用于对资源应用部分修改。
```

## http状态码

```html
100	Continue	继续。客户端应继续其请求
101	Switching Protocols	切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议
200	OK	请求成功。一般用于GET与POST请求
201	Created	已创建。成功请求并创建了新的资源
202	Accepted	已接受。已经接受请求，但未处理完成
203	Non-Authoritative Information	非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本
204	No Content	无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
205	Reset Content	重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域
206	Partial Content	部分内容。服务器成功处理了部分GET请求
300	Multiple Choices	多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
301	Moved Permanently	永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
302	Found	临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI
303	See Other	查看其它地址。与301类似。使用GET和POST请求查看
304	Not Modified	未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
305	Use Proxy	使用代理。所请求的资源必须通过代理访问
306	Unused	已经被废弃的HTTP状态码
307	Temporary Redirect	临时重定向。与302类似。使用GET请求重定向
400	Bad Request	客户端请求的语法错误，服务器无法理解
401	Unauthorized	请求要求用户的身份认证
402	Payment Required	保留，将来使用
403	Forbidden	服务器理解请求客户端的请求，但是拒绝执行此请求
404	Not Found	服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
405	Method Not Allowed	客户端请求中的方法被禁止
406	Not Acceptable	服务器无法根据客户端请求的内容特性完成请求
407	Proxy Authentication Required	请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权
408	Request Time-out	服务器等待客户端发送的请求时间过长，超时
409	Conflict	服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突
410	Gone	客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置
411	Length Required	服务器无法处理客户端发送的不带Content-Length的请求信息
412	Precondition Failed	客户端请求信息的先决条件错误
413	Request Entity Too Large	由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息
414	Request-URI Too Large	请求的URI过长（URI通常为网址），服务器无法处理
415	Unsupported Media Type	服务器无法处理请求附带的媒体格式
416	Requested range not satisfiable	客户端请求的范围无效
417	Expectation Failed	服务器无法满足Expect的请求头信息
500	Internal Server Error	服务器内部错误，无法完成请求
501	Not Implemented	服务器不支持请求的功能，无法完成请求
502	Bad Gateway	充当网关或代理的服务器，从远端服务器接收到了一个无效的请求
503	Service Unavailable	由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
504	Gateway Time-out	充当网关或代理的服务器，未及时从远端服务器获取请求
505	HTTP Version not supported	服务器不支持请求的HTTP协议的版本，无法完成处理
```

## https 加密过程

[https原理](https://blog.csdn.net/clh604/article/details/22179907)

## http2新特性

HTTP2.0大幅度的提高了web性能，在HTTP1.1完全语意兼容的基础上，进一步减少了网络的延迟。实现低延迟高吞吐量。对于前端开发者而言，减少了优化工作。本文将重点围绕以下几点新特性的作用、工作过程以及如何更出色的完成了优化工作来介绍HTTP2.0

二进制分帧
首部压缩
流量控制
多路复用
请求优先级
服务器推送

[链接](https://juejin.im/post/5a4dfb2ef265da43305ee2d0)

## http 与 https的区别

[http 与 https的区别](https://juejin.im/entry/58d7635e5c497d0057fae036)

HTTPS和HTTP的区别主要如下：

1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。

2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。

3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

## TCP三次握手和四次挥手

建立TCP需要三次握手才能建立，而断开连接则需要四次握手。整个过程如下图所示：

![tcp](http://hi.csdn.net/attachment/201108/7/0_131271823564Rx.gif)

先来看看如何建立连接的。

![握手](https://img-blog.csdn.net/20170104214009596?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2h1c2xlaQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

首先Client端发送连接请求报文，Server段接受连接后回复ACK报文，并为这次连接分配资源。Client端接收到ACK报文后也向Server段发生ACK报文，并分配资源，这样TCP连接就建立了

那如何断开连接呢？简单的过程如下：

![挥手](http://hi.csdn.net/attachment/201108/7/0_1312718564tZXD.gif)

【注意】中断连接端可以是Client端，也可以是Server端。

假设Client端发起中断连接请求，也就是发送FIN报文。Server端接到FIN报文后，意思是说"我Client端没有数据要发给你了"，但是如果你还有数据没有发送完成，则不必急着关闭Socket，可以继续发送数据。所以你先发送ACK，"告诉Client端，你的请求我收到了，但是我还没准备好，请继续你等我的消息"。这个时候Client端就进入FIN_WAIT状态，继续等待Server端的FIN报文。当Server端确定数据已发送完成，则向Client端发送FIN报文，"告诉Client端，好了，我这边数据发完了，准备好关闭连接了"。Client端收到FIN报文后，"就知道可以关闭连接了，但是他还是不相信网络，怕Server端不知道要关闭，所以发送ACK后进入TIME_WAIT状态，如果Server端没有收到ACK则可以重传。“，Server端收到ACK后，"就知道可以断开连接了"。Client端等待了2MSL后依然没有收到回复，则证明Server端已正常关闭，那好，我Client端也可以关闭连接了。Ok，TCP连接就这样关闭了！


整个过程Client端所经历的状态如下：

![client端](http://hi.csdn.net/attachment/201108/7/0_1312719804oSkK.gif)

而Server端所经历的过程如下

![server端](http://hi.csdn.net/attachment/201108/7/0_1312719833030b.gif)

**【注意】 在TIME_WAIT状态中，如果TCP client端最后一次发送的ACK丢失了，它将重新发送。TIME_WAIT状态中所需要的时间是依赖于实现方法的。典型的值为30秒、1分钟和2分钟。等待之后连接正式关闭，并且所有的资源(包括端口号)都被释放。**

**【问题1】为什么连接的时候是三次握手，关闭的时候却是四次握手？**
答：因为当Server端收到Client端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当Server端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉Client端，"你发的FIN报文我收到了"。只有等到我Server端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送。故需要四步握手。

**【问题2】为什么TIME_WAIT状态需要经过2MSL(最大报文段生存时间)才能返回到CLOSE状态？**

答：虽然按道理，四个报文都发送完毕，我们可以直接进入CLOSE状态了，但是我们必须假象网络是不可靠的，有可以最后一个ACK丢失。所以TIME_WAIT状态就是用来重发可能丢失的ACK报文。

## TCP、UDP协议的区别

1、TCP面向连接（如打电话要先拨号建立连接）;UDP是无连接的，即发送数据之前不需要建立连接
2、TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保   证可靠交付
3、TCP面向字节流，实际上是TCP把数据看成一连串无结构的字节流;UDP是面向报文的
  UDP没有拥塞控制，因此网络出现拥塞不会使源主机的发送速率降低（对实时应用很有用，如IP电话，实时视频会议等）
4、每一条TCP连接只能是点到点的;UDP支持一对一，一对多，多对一和多对多的交互通信
5、TCP首部开销20字节;UDP的首部开销小，只有8个字节
6、TCP的逻辑通信信道是全双工的可靠信道，UDP则是不可靠信道

## HTTP/1.1和HTTP/1.0的区别

[HTTP1.0 HTTP 1.1 HTTP 2.0主要区别](https://blog.csdn.net/linsongbin1/article/details/54980801)

## 浏览器缓存

[浏览器缓存](http://jixianqianduan.com/frontend-javascript/2015/12/28/nine-browser-cache-methods.html)

## cache-control的值有哪些？

[cache-control的值有哪些？](http://www.cnblogs.com/cuixiping/archive/2008/05/04/1181056.html)