
var io=(function(){

    var Input = function (id) {
        var el = document.getElementById(id);
    
        this.read = function () {
            return el.value;
        }
    
        this.readNumber = function () {
            return parseFloat(el.value);
        }
    
        this.clear = function () {
            el.value = '';
        }
    }
    
    
    var Writer = function (id, tag) {
    
        if (!tag)
            tag = 'p';
    
        var start = '<' + tag + '>';
        var end = '</' + tag + '>';
    
        var el = document.getElementById(id);
    
        this.write = function (content) {
    
            el.innerHTML += (start + content + end);
    
        }
    
        this.clear = function () {
            el.innerHTML = '';
        }
    
    }

    return {
        Input:Input,
        Writer:Writer
    };


})();


