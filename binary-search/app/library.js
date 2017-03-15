Object.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}

Array.method('toTwenty', function () {
    var arr = [];
    for (var i=1; i<=20; ++i) arr.push(i);
    return arr;
});

Array.method ('toForty', function () {
    var arr = [];
    for (var i=2; i<=40; i+=2) arr.push(i);
    return arr;
});

Array.method('toOneThousand', function () {
    var arr = [];
    for (var i=10; i<=1000; i+=10) arr.push(i);
    return arr;
});

Array.method('search', function (data) {
    var upperBound = this.length-1;
    var lowerBound = 0;
    var count = 0;
    var index;
    var mObj = {};

    while (lowerBound <= upperBound) {
        
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (this[upperBound] === data) {
            index = upperBound;
            break;
        }
        else if (this[lowerBound] === data) {
            index = lowerBound;
            break;
        }

        else if (this[mid] === data) {

            index = mid;
            break
        }
        else {
            if (this[mid] < data) {
                lowerBound = mid + 1;
            }
            else {
                upperBound = mid - 1;
            }
        }       
                
        count += 1;
    }

    if (index == undefined) {
        index = -1;
    }

    mObj['count'] = count;
    mObj['index'] = index;
    mObj['length'] = this.length;
    return mObj;
});

module.exports = Array;