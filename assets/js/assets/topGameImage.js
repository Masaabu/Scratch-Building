// Set the file path for this directory
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
// <img class="homebanner" src="${windowFileDirectlyPass}/assets/image/banner.png" alt="Banner Image">
document.getElementById('topGameImage').innerHTML=(`
<img class="homebanner" src="https://cdn.discordapp.com/attachments/1187984825458638859/1188420679423492146/image.png?ex=659a7601&is=65880101&hm=999767d62e8f483b9593e4817941286df5a840fa5977f0939a7406b8761bee72&" alt="Banner Image">
<div class="overlay">
    <p class="overlay-text">ビル経営ゲームv7.0<br>Scratchで公開中！<br><a class="nav" href='https://scratch.mit.edu/projects/927111186/'>Scratchでプレイ</a>
</div>
`)  