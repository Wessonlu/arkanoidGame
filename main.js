!function (w) {
    var utils = {
        isElement: function(type) {
            var isDOM = ( typeof HTMLElement === 'object' ) ?
            function(obj){
                return obj instanceof HTMLElement;
            } :
            function(obj){
                return obj && typeof obj === 'object' && (obj.nodeType === 1 || obj.nodeType === 9) && typeof obj.nodeName === 'string';
            }
            return isDOM(type)
        },
        isString: function(type) {
            return this.getType(type) === '[object String]'
        },
        getType: function(type) {
            return Object.prototype.toString.call(type)
        }
    }
    function draw () {

    }
    function createCanvas () {

    }
    
    var ArkanoidGame = function(opt) {
        this.opt = opt
    }
    ArkanoidGame.prototype.start = function() {
        var wrapEl = this.getWrapEl()
        this.canvas = this.initCanvas()
        var ctx = this.getCtx()
        ctx.fillStyle="#FF0000";
        ctx.fillRect(0,0,150,75);
        wrapEl.appendChild(this.canvas);
    }
    ArkanoidGame.prototype.initCanvas = function() {
        var canvas = document.createElement('canvas')
        var width = '100%'
        var height = '100%'
        canvas.style.width = width
        canvas.style.height = height
        window.addEventListener('resize', this.resize(canvas))
        return canvas
    }
    ArkanoidGame.prototype.resize = function(canvas) {
        var wrapEl = this.getWrapEl()
        canvas.width = wrapEl.offsetWidth
        canvas.height = wrapEl.offsetHeight
        return function() {
            canvas.width = wrapEl.offsetWidth
            canvas.height = wrapEl.offsetHeight
        }
    }
    ArkanoidGame.prototype.getCtx = function() {
        return this.canvas.getContext('2d')
    }
    // 获取外层容器元素
    ArkanoidGame.prototype.getWrapEl = function() {
        var el = this.opt.el || document.body
        if(utils.isString(el)) {
            var reg = /(^\.|#)\w/
            if(reg.test(el)) {
                el = document.querySelector(el)
            } else {
                el = document.getElementById(el)
            }
        }
        return el
    }
    w.ArkanoidGame = ArkanoidGame
}(window)
