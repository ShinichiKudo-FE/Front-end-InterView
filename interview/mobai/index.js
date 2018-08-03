// 重复字符串
function repeatStr(str,num){
	return num > 0 ? str.repeat(num) : '';
}
var a = 'abc'
console.log(repeatStr(a,3))

// 获取地址栏的参数
function getUrl(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

// 编写一个函数判断参数是否是数组类型，如果是返回 true

function isArray(arr){
	if(typeof arr === "Object" && arr.constructor === "Array"){
		return true;
	}
	return false;
}

// 编写一个 js 函数 jsonp 的处理函数

function jsonp(obj) {
        //定义一个处理Jsonp返回数据的回调函数
    window["callback"] = function(object) {
            obj.success(JSON.parse(object));
    }
    var script = document.createElement("script");
    //组合请求URL
    script.src = obj.url + "?fn=callback";
    for(key in obj.data){
        script.src +="&" + key + "=" + obj.data[key];
    }
    //将创建的新节点添加到BOM树上
    document.getElementsByTagName("body")[0].appendChild(script);  
}

//调用Jsonp函数发送jsonp请求
jsonp({
    url:"http://localhost/index.php",
    data:{
        name:"小明",
    },
    success:function(obj) {
        alert("性别" + obj.sex);
    }
});

// 如何获取一个元素节点（id 为 test）的父元素，找到之后如何删除这个元素节点（id 为 test）
var node=documentElementById("test1");
var parentnode=node.parentNode;
parentnode.removeChild(node);
