
/**Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
*Array.from(arrayLike[, mapFn[, thisArg]])
*参数
*arrayLike
 想要转换成数组的伪数组对象或可迭代对象。
*mapFn (可选参数)
 如果指定了该参数，新数组中的每个元素会执行该回调函数。
*thisArg (可选参数)
 可选参数，执行回调函数 mapFn 时 this 对象。
*返回值
 一个新的数组实例
*/

const bar = ['a','b','c'];
Array.from(bar);// ["a", "b", "c"]


/**
*Array.isArray(obj) 用于确定传递的值是否是一个 Array
*/

const bar = ['a','b'];
Array.isArray(bar); //true;


/**
*Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
*Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个包含 7 个 undefined 元素的数组。
*Array.of(element0[, element1[, ...[, elementN]]])
*/

Array.of(1,2,3);//[1,2,3]


/**
*concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
*var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
* valueN 将数组或值连接成新数组
*concat方法不会改变this或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。 原始数组的元素将复制到新数组中
*/

const a = [1,2,3];
const b = [4,5,6];
a.concat(b);//[1,2,3,4,5,6]

/**
*copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
*arr.copyWithin(target,start,end]])
*target
	0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。
	如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。
*start
	0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
	如果 start 被忽略，copyWithin 将会从0开始复制。
*end
	0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。
	如果 end 被忽略，copyWithin 将会复制到 arr.length。
*返回值：改变了的数组。	
*参数target,start和end 必须为整数。
*/

[1,2,3,4,5].copyWithin(2);//[1,2,3,1,2]
[1,2,3,4,5].copyWithin(0,3);//[4,5,3,4,5]
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);//[1,2,3,3,4]


/**entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
*arr.entries()
*一个新的 Array 迭代器对象。Array Iterator是对象，它的原型（__proto__:Array Iterator）上有一个next方法，可用用于遍历迭代器取得原数组的[key,value]。
*/

var arr = ['a','b','c'];
var iterator = arr.entries();
for(var e of iterator){
	console.log(e);
}


/**
*Array.prototype.every()方法测试数组的所有元素是否都通过了指定函数的测试。
*arr.every(callback[, thisArg])
*callback 被调用时传入三个参数：元素值，元素的索引，原数组。
*/
function testNum(element,index,array){
	return (element >= 10);
}
var passed = [1,2,3,4,5].every(testNum);

/**
*fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
*arr.fill(value ，start ，end)
*value用来填充数组元素的值。
*start 可选 起始索引，默认值为0。
*end 可选 终止索引，默认值为 this.length
*如果 start 是个负数, 则开始索引会被自动计算成为 length+start, 其中 length 是 this 对象的 length 属性值. 如果 end 是个负数, 则结束索引会被自动计算成为 length+end
*/
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]

/**
*filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
*var new_array = arr.filter(callback[, thisArg])
*参数 callback
 用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。
 返回true表示保留该元素（通过测试），false则不保留。
*/

function testNum(element){
	return element >= 10;
}

var test = [10,421,1,23,4].filter(testNum) //test is [10,421,23]

/**
*find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
*参数
 callback在数组每一项上执行的函数，接收 3 个参数：
 element当前遍历到的元素。
 index当前遍历到的索引。
 array数组本身。
*/

function testNum(element){
	return element >= 10;
}

var test = [10,421,1,23,4].find(testNum); //10

/**
*findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
*callback针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数:
	element当前元素。
	index当前元素的索引。
	array调用findIndex的数组。
*/ 


function testNum(element){
	return element >= 10;
}

var test = [10,421,1,23,4].findIndex(testNum); //0

/**
*forEach() 方法对数组的每个元素执行一次提供的函数。
*array.forEach(callback(currentValue, index, array){
    //do something
}, this)
*callback 为数组中每个元素执行的函数，该函数接收三个参数：
	currentValue(当前值) 数组中正在处理的当前元素。
	index(索引)数组中正在处理的当前元素的索引。
	arrayforEach()方法正在操作的数组。
*/
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

// 注意索引2被跳过了，因为在数组的这个位置没有项
[2, 5, ,9].forEach(logArrayElements);// a[0] = 2 // a[1] = 5 // a[3] = 9

/**
*includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
*arr.includes(searchElement, fromIndex)
	searchElement 需要查找的元素值。
	fromIndex 可选 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。

*/
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false

/**
indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
searchElement
	要查找的元素
fromIndex
	开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.
*/

var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

/***
join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
str = arr.join(separator)
// 分隔符
*/
let a = ['Wind', 'Rain', 'Fire'];

console.log(a.join()); 
// 默认为 ","
// 'Wind,Rain,Fire'

console.log(a.join("")); 
// 分隔符 === 空字符串 ""
// "WindRainFire"

console.log(a.join("-")); 
// 分隔符 "-"
// 'Wind-Rain-Fire'

/**
*keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键。
返回值  一个新的 Array 迭代器对象
*/
var arr = ["a", "b", "c"];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

/**
lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
*arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
*lastIndexOf 使用严格相等（strict equality，即 ===）比较 searchElement 和数组中的元素。
*/

// 使用 lastIndexOf 查找到一个元素在数组中所有的索引（下标），并使用 push 将所有添加到另一个数组中。
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);

while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);// [4, 2, 0];

/**
*map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
*/
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]

/**
pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
*/

let a = [1, 2, 3];
a.length; // 3

a.pop(); // 3

/**
*push() 方法将一个或多个元素添加到数组的末尾，并返回新数组的长度。
*/
var numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]

/**
*reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
* arr.reduce(callback[, initialValue])
*callback 执行数组中每个值的函数，包含四个参数：
	accumulator 累加器累加回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（如下所示）。
	currentValue 数组中正在处理的元素。
	currentIndex可选 数组中正在处理的当前元素的索引。 如果提供了initialValue，则索引号为0，否则为索引为1。
	array可选 调用reduce的数组
*initialValue可选
用作第一个调用 callback的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。

*/
let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current)=>{
    if(init.length===0 || init[init.length-1]!==current){
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]

/**
*reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
* 与  Array.prototype.reduce() 的执行方向相反
*/
let flattened = [
    [0, 1], 
    [2, 3], 
    [4, 5]
].reduceRight((a, b) => {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]

/**
reverse() 方法将数组中元素的位置颠倒。
*/
var myArray = ['one', 'two', 'three'];
myArray.reverse(); 

console.log(myArray) // ['three', 'two', 'one']


/**
*shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
*/

let a = [1, 2, 3];
let b = a.shift();

console.log(a); // [2, 3]


/**
slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
arr.slice();
// [0, end]

arr.slice(begin);
// [begin, end]

arr.slice(begin, end);
// [begin, end)


begin 可选 从该索引处开始提取原数组中的元素（从0开始）。
end 可选 在该索引处结束提取原数组元素（从0开始）
返回值 一个含有提取元素的新数组

slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上。 一个函数中的 arguments 就是一个类数组对象的例子。
*/

function list() {
  return Array.prototype.slice.call(arguments);
}
// 除了使用 Array.prototype.slice.call(arguments)，你也可以简单的使用 [].slice.call(arguments) 来代替
var list1 = list(1, 2, 3); // [1, 2, 3]

/**
some() 方法测试数组中的某些元素是否通过由提供的函数实现的测试。
some 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，some 将会立即返回 true。否则，some 返回 false。
callback 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。

some 遍历的元素的范围在第一次调用 callback. 时就已经确定了。在调用 some 后被添加到数组中的值不会被 callback 访问到。如果
*/

function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough);// passed is false
passed = [12, 5, 8, 1, 4].some(isBigEnough);// passed is true

/**
sort() 方法用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。
*/
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); 
// ['apples', 'bananas', 'cherries']

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

/**
splice() 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。
start​ 指定修改的开始位置（从0计数）。
deleteCount 可选 整数，表示要移除的数组元素的个数。
item1, item2, ... 可选 要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
*/
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // 在索引为2的位置插入'drum'
// myFish 变为 ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // 从索引为2的位置删除一项（也就是'drum'这一项）
// myFish 变为 ["angel", "clown", "mandarin", "sturgeon"]


/**
toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
*/

var number = 1337;
var date = new Date();
var myArr = [number, date, "foo"];

var str = myArr.toLocaleString(); 

console.log(str); 
// 输出 "1,337,2017/8/13 下午8:32:24,foo"
// 假定运行在中文（zh-CN）环境，北京时区

/**
toString() 返回一个字符串，表示指定的数组及其元素。
*Array 对象覆盖了 Object 的 toString 方法。对于数组对象，toString 方法返回一个字符串，该字符串由数组中的每个元素的 toString() 返回值经调用 join() 方法连接（由逗号隔开）组成
*/
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var myVar = monthNames.toString(); // assigns "Jan,Feb,Mar,Apr" to myVar.

/**
unshift() 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。
*/
let a = [1, 2, 3];
a.unshift(4, 5);

console.log(a);
// [4, 5, 1, 2, 3]