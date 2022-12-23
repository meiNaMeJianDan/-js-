// 中划线改小驼峰
let foo = (str)=>str?.replace(/-[a-z]/g, (match)=>match.replace('-', '').toUpperCase())
// 小驼峰改中划线
foo = (str)=>str?.replace(/[A-Z]/g,(a)=>"-"+a?.toLowerCase())

// 前端性能优化
// 1.页面渲染：避免css,js渲染阻塞，降低css选择器复杂度，减少重绘和回流。
// 2.js优化：多使用事件指派，尽量避免使用js动画，防抖和节流
// 3.图片优化：雪碧图，图片懒加载，放第三方服务器上
// 4.webpack优化：代码压缩，Tree shaking去除死代码，babel-plugin-transform-runtime 减少ES6->es5的冗余，提高打包速度
// 5.框架优化：map循环增加key,路由懒加载，使用scu,memo和pureComponent减少不必要的渲染

// 箭头函数和普通函数的区别
// 1.语法更加简洁清晰
// 2.没有this，从作用域链的上一级继承this
// 3.继承的this不会改变
// 4..call()/.apply()/.bind()无法改变this的指向
// 5.箭头函数不能作为构造函数使用
// 6.没有arguments
// 7.没有原型prototype

// 输入网址之后发生了什么
// 1.DNS解析，查询对应的IP
// 2.通过IP，查询到对应的服务器，浏览器和服务器建立链接
// 3.浏览器给服务器发送请求
// 4.服务器接收处理请求，并返回响应
// 5.浏览器渲染接收到的页面

// 客服端如何和服务端建立链接
// 1：三次握手：a.客服端发送连接请求，b.服务器收到连接请求回复，返回消息给客服端。c.客服端想服务端发送同意连接请求 

// 防抖与节流
// 防抖：在n秒之后在发起一次回调，n秒之间再次触发都会重新计时
// 节流：n秒之中只会触发一次回调。
// //防抖
let debounce = (fn, date)=> {
    let timer //声明接收定时器的变量
    return function (...arg) { // 获取参数
        timer && clearTimeout(timer) // 清空定时器
        timer = setTimeout(() => { //  生成新的定时器
            //因为箭头函数里的this指向上层作用域的this,所以这里可以直接用this，不需要声明其他的变量来接收
            fn.apply(this, arg) // fn()
        }, date)
    }
}
//--------------------------------
// 节流
debounce = (fn, date)=> {
    let timer = +new Date() // 声明初始时间
    return function (...arg) { // 获取参数
        let newTimer = +new Date() // 获取触发事件的时间
        if (newTimer - timer >= date) { // 时间判断,是否满足条件
            fn.apply(this, arg) // 调用需要执行的函数,修改this值,并且传入参数
            timer = +new Date() // 重置初始时间
        }
    }
}

// 什么是webpack
// webpack是静态模块打包工具，主要作用是进行代码的分析，压缩，打包，其中主要参数有入口entry,输出output,加载器loader,插件plugin,模式mode

// 创建对象的方法
// 1.Object构造函数创建
const a = new Object()
// 2.Object的create方法
const b = Object.create(null)
// 3.字面量的方式
const c = {}
// 4.函数构造器
function Person(name){
    let obj = {}
    obj.name = name
    return obj
}
const d = new Person("hello")
// 5.带有原型函数的构造函数
Person.prototype.name = "hahaha"
const e = new Person()
// 6.ES6语法
class Car{
    constructor(name){
        this.name = name
    }
}
const f = new Car("benci")
