window.onload = function(){
    var ul = document.getElementsByTagName('ul')[0];
    var li = document.getElementsByTagName('a');

    for (var i=0; i<li.length; i++){
        li[i].onclick = function(){
            showPic(this);
            return false;
        }
    }
    function showPic(whichPic){

        var placeholder = document.getElementById('placeholder');
        var descp = document.getElementById('description');
        var source = whichPic.getAttribute('href');
        var title = whichPic.getAttribute('title');

        placeholder.setAttribute('src', source);
        descp.innerText = title;
    }
}