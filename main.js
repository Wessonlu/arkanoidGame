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
    var ArkanoidGame = function(opt) {
        this.opt = opt
        var wrapEl = this.getWrapEl()
        console.log(wrapEl)
    }
    ArkanoidGame.prototype.getWrapEl = function() {
        var el = this.opt.el || document.body
        if(!utils.isString(el)) {
            el = document.getElementById(el)
        }
        return el
    }
    w.ArkanoidGame = ArkanoidGame
}(window)
