// 基础类型有哪些
// 基础类型：undefined,null,string,number,boolean,bigint,symbol
// 引用类型：Obejct

// 堆栈的区别
// 1.栈：先进后出，存放简单类型数据
// 2.堆：根据优先级大小规定，存放引用类型

// Cookie、LocalStorage、SessionStorage区别
// 1.cookie：cookie 最多能存储 4 k 数据，它的生存时间由 expires 属性指定，并且 cookie 只能被同源的页面访问共享
// 2.localStorage:大小为5M左右，存在用户本地，除非用户主动清理，否则会一直存在
// 3.sessionStorage:存在浏览器中，大小为5M左右，关闭浏览器时清除

// 什么是同源策略
// 协议，域名，端口三者必须一致，违反同源策略就会出现跨域

// 如何解决跨域问题
// 1、JSONP:实现简单，兼容性好，但是只支持GET请求
// 2、node中间件代理（proxy代理）
// 3、nginx反向代理（跳板机）

// 浏览器渲染步骤
// 1、HTML解析生成DOM树
// 2、同时解析CSS生成样式树
// 3、DOM树和样式树结合生成渲染树
// 4、进行布局，将每个节点放在确切位置（重排）
// 5、进行绘制，渲染每一个树节点，将元素绘制出来（重绘）

// 什么是原型链
// 每个对象上都有一个属性叫proto,叫做该对象的原型，它的proto和它的构造函数的prototype是同一个东西，它的构造函数也会有proto，一直往上寻找最终会指向Object对象

// flex 1 的具体属性
// flex属性是 flex-grow：1,flex-shrink：1,flex-basis：auto的集合

// 文本超出部分变成省略号
// text-overflow:ellipsis;
// overflow:hidden;
// white-space:nowrap
