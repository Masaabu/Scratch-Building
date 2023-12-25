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

// js 処理
var serverModsData = "";
var modsList = "";

function modsListLoad(){

    // データを取得
    var req = new XMLHttpRequest();// XMLHttpRequest オブジェクトを生成する
    req.onreadystatechange = function() {// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
        if(req.readyState == 4 && req.status == 200){// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
            serverModsData = (JSON.parse(req.responseText));// 取得した JSON を変数に
        }
    };
    req.open("GET", `${windowFileDirectlyPass}/data/json/mods.json`, false);// HTTPメソッドとアクセスするサーバーの　URL　を指定
    req.send(null);	

    // 処理を開始
    let modContentGroup = document.getElementById('mods')
    for (let i = 0; i < (serverModsData.content_list.length); i++) {
        let HtmlContentGroup = document.createElement('div');
        HtmlContentGroup.classList.add('section_bg');
        HtmlContentGroup.innerHTML=(`
            <div>
                <h1 style="font-size:20px;"><strong>${serverModsData.content_list[i].group}</strong></h1>
                <p>${serverModsData.content_list[i].description}</p>
            </div>
            <div class="project-container" id="group_${+i}">
                
            </div>
        `)
        modContentGroup.appendChild(HtmlContentGroup);
        let modsProjectsList = document.getElementById(`group_${+i}`);
        for (let i2 = 0; i2 < (serverModsData.content_list[i].content.length); i2++) {
            var HtmlTagsDate = "";
            if(serverModsData.content_list[i].content[i2].tags["0"].tagId === '1'){
                HtmlTagsDate = `<div class="textFrame orange">${serverModsData.content_list[i].content[i2].tags["0"].name}</div>`;
            }else{if((serverModsData.content_list[i].content[i2].tags["0"].tagId) === '2'){
                HtmlTagsDate = `<div class="textFrame blue">${serverModsData.content_list[i].content[i2].tags["0"].name}</div>`;
            };
            };
            var modsProject = document.createElement('div');
            modsProject.classList.add('project','fadeUp');
            modsProject.addEventListener('click', () => {
                openProject(serverModsData.content_list[i].content[i2].projectId);
            });
            modsProject.innerHTML=(`
                <img src="https://uploads.scratch.mit.edu/get_image/project/${serverModsData.content_list[i].content[i2].projectId}_480x360.png"/>
                <div class="project-desc" style="margin:5px;">
                    <h2 style="padding-top:0;">${serverModsData.content_list[i].content[i2].name}</h2>
                    ${HtmlTagsDate}
                </div>
                <p>${serverModsData.content_list[i].content[i2].description}<br>by ${serverModsData.content_list[i].content[i2].creator}</p>
            `);
            modsProjectsList.appendChild(modsProject);
        };
    };
};

function openProject(url) {
    window.open(`https://scratch.mit.edu/projects/${url}`, '_blank');
};

modsListLoad();