$(function(){
    //工具提示需要调用
    $('[data-toggle="tooltip"]').tooltip();

    // 给一个监听事件,监听电脑屏幕大小
    $(window).on("resize",function(){
        //获取电脑宽度
        var windowWidth = $(this).width();
        // console.log(windowWidth);
        if(windowWidth > 640){
            //获取到所有自定义属性里存的大图的路径
            //jQuery中遍历元素用each
            $("#slide .item").each(function(index,value){
                // 获取到里面的路径
                var imgSrc = $(value).data("big-img");
                // console.log(imgSrc);
                // 动态生成元素,他路径添加进去
                $(value).html("<a href='#' class='big-img' style='background-image:url("+imgSrc+")'></a>");
                
            })
            
        }else {
            $("#slide .item").each(function(index,value){
                // 获取小图片路径
                var imgSrc = $(value).data("small-img");
                // 动态添加进去
                $(value).html("<a href='#' class='small-img'><img src="+imgSrc+" alt=''></a>");
            })
        }
        
    }).trigger("resize");
})