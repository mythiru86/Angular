var Calculator = function () {

    var numbers = [];

    this.addToList = function (value) {
        if (!isNaN(value)) {
            numbers.push(value);
            return true;
        } else
            return false;
    }

    this.sum = function () {
        var result = 0;
        for (var i = 0; i < numbers.length; i++)
            result += numbers[i];
        return result;
    }

    this.avg = function () {
        return this.sum() / numbers.length;
    }

    this.clear = function () {
        numbers = [];
    }
}
