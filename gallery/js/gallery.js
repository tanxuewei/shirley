
addLoadEvent(prepareGallery);

function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof oldonload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function showPic(whichPic){
    if (!document.getElementById('placeholder')){
        return;
    }

    var source = whichPic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    if(placeholder.nodeName != 'IMG') return false;
    placeholder.setAttribute('src', source);

    if (document.getElementById('description')){
        
        var descp = document.getElementById('description');
        var title = whichPic.getAttribute('title')?whichPic.getAttribute('title'):'';

        descp.innerText = title;
    }
    return true;
}
function prepareGallery(){
    if (!document.getElementsByTagName){
        return;
    }
    if (!document.getElementById){
        return;
    }
    if (!document.getElementById('imagegallery')){
        return;
    }
    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');

    for (var i=0; i<links.length; i++){
        links[i].onclick = function(){
            return !showPic(this);
        }
    }
}