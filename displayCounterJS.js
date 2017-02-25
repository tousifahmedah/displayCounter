$.extend({
    fndisplayCounter:function(s){
        //var s = "displayCounter";
    var d = (document.querySelector('#' + s) !== undefined) ? document.querySelector('#' + s) : document.querySelector('.' + s);
    var min = parseInt((d.attributes['min'].value !== 0) ? d.attributes['min'].value : 0);
    var max = parseInt((d.attributes['max'].value !== 0) ? d.attributes['max'].value : 0);
    var increment = parseInt((d.attributes['increment'].value !== 0) ? d.attributes['increment'].value : 0);
    var delay = parseInt((d.attributes['delay'].value !== 0) ? d.attributes['delay'].value : 0);
    var cnt = min;
    var counter = setInterval(function () {
        if (cnt <= max) {
            $('#displayCounter').html(cnt);
            console.log(cnt);
            cnt = cnt + increment;
        } else {
            clearInterval(counter);
        }
    }, delay);
    }
});