// Set the file path for this directory
var windowFileDirectlyPass = "";
if (window.location.href.startsWith("https://masaabu.github.io/")) windowFileDirectlyPass += "/Scratch-Building"
/*
var windowUrl = window.location.pathname;
var windowUrlSr = 0;
if((window.location.protocol) === 'https:'){
    windowUrlSr =  ( windowUrl.match( /[/]/g ) || [] ).length - 3;
}else{
    console.warn('Runs in editor mode because the protocol is not "https".')
    windowUrlSr =  ( windowUrl.match( /[/]/g ) || [] ).length - 2;
};
var windowFileDirectlyPass = "";
if(windowUrlSr > 0){
    for (let i = 0; i < windowUrlSr; i++) {
        windowFileDirectlyPass = windowFileDirectlyPass + `./.`;
    }
    windowFileDirectlyPass = `.`+windowFileDirectlyPass+`.`;
}else{
    windowFileDirectlyPass = `.`;
};
*/

// <img class="homebanner" src="${windowFileDirectlyPass}/assets/image/banner.png" alt="Banner Image">
document.getElementById('topGameImage').innerHTML=(`
<img class="homebanner" src="${windowFileDirectlyPass}/assets/image/banner.webp" alt="Banner Image">
<div class="overlay">
    <p class="overlay-text fadeLeft">ビル経営ゲームv7.0<br>Scratchで公開中！<br><a class="button" style="padding: 0 14px;font-size: 26px;" href='https://scratch.mit.edu/projects/927111186/'>Scratchでプレイ</a>
</div>
`)  