// 手写Object.create
function create(obj) {
    function fn() { }
    fn.prototype = obj
    return new fn()
}

// 手写instanceof
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left),
        protoType = right.protoType
    console.log(proto, protoType)
    while (true) {
        if (!proto) return false;
        if (proto === protoType) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

// 函数柯里化，函数中返回一个函数
function fn() {
    function add(...args) {
        console.log(...args)
        return add;
    };;
    return add;
};

// 