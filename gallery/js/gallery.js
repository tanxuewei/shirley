(function(){
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
            var source = whichPic.getAttribute('href');

            placeholder.setAttribute('src', source);
        }
    }
})();
