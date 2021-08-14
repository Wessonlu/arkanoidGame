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
        var el = opt.el || document.body
        if(utils.isElement(el)) {
            
        }
    }
    w.ArkanoidGame = ArkanoidGame
}(window)
