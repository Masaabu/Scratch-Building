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

// js 処理
var serverJsonData = "";

function jsonListLoad(){

    // データを取得
    var req = new XMLHttpRequest();// XMLHttpRequest オブジェクトを生成する
    req.onreadystatechange = function() {// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
        if(req.readyState == 4 && req.status == 200){// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
            serverJsonData = (JSON.parse(req.responseText));// 取得した JSON を変数に
        }
    };
    req.open("GET", `${windowFileDirectlyPass}/data/json/qa.json`, false);// HTTPメソッドとアクセスするサーバーの　URL　を指定
    req.send(null);	

    // 処理を開始
    let jsonContentGroup = document.getElementById('qa')

    let HtmlTitleContent = document.createElement('div');
    HtmlTitleContent.classList.add('section_bg');
    HtmlTitleContent.innerHTML=(`
        <div>
            <h1 style="font-size:20px;"><strong>${serverJsonData.title}</strong></h1>
            <p>公開日：${serverJsonData.release_time}<br>最終更新：${serverJsonData.last_change_time}</p>
        </div>
    `);
    jsonContentGroup.appendChild(HtmlTitleContent);

    for (let i = 0; i < (serverJsonData.content_list.length); i++) {
        let HtmlGroupContent = document.createElement('div');

        let HtmlGroupContentTitle = document.createElement('div');
        HtmlGroupContentTitle.classList.add('section_bg');
        HtmlGroupContentTitle.innerHTML=(`
            <h1 style="font-size:20px;"><strong>${serverJsonData.content_list[i].title}</strong></h1>
            <p>公開日：${serverJsonData.content_list[i].release_time}<br>最終更新：${serverJsonData.content_list[i].last_change_time}</p>
        `);
        let HtmlGroupContentQA = document.createElement('div');
        HtmlGroupContentQA.style.marginTop=('35px');
        //HtmlGroupContentQA.classList.add('section_bg');
        for (let i2 = 0; i2 < (serverJsonData.content_list[i].content.length); i2++) {
            let HtmlGroupContentQAData = document.createElement('div');
            HtmlGroupContentQAData.style.margin=('20px 0');
            HtmlGroupContentQAData.innerHTML=(`
                <div class="faq-question">Q. ${serverJsonData.content_list[i].content[i2].q}</div>
                <div class="faq-answer">A. ${serverJsonData.content_list[i].content[i2].a}</div>
            `)
            HtmlGroupContentQA.appendChild(HtmlGroupContentQAData)
        };


        HtmlGroupContentTitle.appendChild(HtmlGroupContentQA)
        HtmlGroupContent.appendChild(HtmlGroupContentTitle);
        //HtmlGroupContent.appendChild(HtmlGroupContentQA);
        jsonContentGroup.appendChild(HtmlGroupContent);
    };
};

jsonListLoad();