window.addEventListener('DOMContentLoaded', function(){
    // 0.5秒ごとに実行
    setInterval(() => {
        console.log(window.innerWidth)
        if((window.innerWidth) > 1000){
            document.getElementById('page_header_pc').style.display = ('block')
            document.getElementById('page_header_mobile').style.display = ('none')
        }else{
            document.getElementById('page_header_pc').style.display = ('none')
            document.getElementById('page_header_mobile').style.display = ('block')
        }
    }, 100);
});