/**
 * Created by apuc0 on 23.09.2017.
 */
document.addEventListener('DOMContentLoaded', function(){
    var ttt = new Ttt();

    ttt.initBoard('tttWrap', {width:'350px', backgroundColorCell:'Yellow', borderColor:'red', borderStyle:'dotted', borderWidth:'2px', fontSize:'30px'});
    ttt.firstTurn();
});

