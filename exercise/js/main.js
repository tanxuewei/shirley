/*
 * @file:main.js
 * @overview:主js
 * @author:Tan-Xuewei
 */

(function(){
    var MyBlog = {
        myBlog: $('#my-blog'),
        assignDialog: $('#assign-dialog'),
        _init: function(){
            var assignDialog = this.assignDialog;

            assignDialog.dialog({
                title: '课程安排',
                width: 400,
                autoOpen: false,
                modal: true
            })
        },
        bindEvent: function(){
            var _self = this;
            var myBlog = _self.myBlog;
            var assignDialog = _self.assignDialog;

            myBlog.find('.assign-btn').click(function(){
               assignDialog.dialog('open'); 
            });
            
            $('#content div').mouseover(function(){
                this.css('background', '#000');
            });
        },
        init: function(){
            var _self = this;

            this._init();
            this.bindEvent();
        }
    }

    MyBlog.init();
})();