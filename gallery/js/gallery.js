window.onload = function(){
    prepareGallery();
    
    function showPic(whichPic){

        var placeholder = document.getElementById('placeholder');
        var descp = document.getElementById('description');
        var source = whichPic.getAttribute('href');
        var title = whichPic.getAttribute('title');

        placeholder.setAttribute('src', source);
        descp.innerText = title;
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
                showPic(this);
                return false;
            }
        }
    }
}