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

var allSettingDataCount = 0;
var allSettingData=(JSON.parse(`{}`));
let USERSETTINGDATA = "{}";
// js 処理
var serverJsonData_settingJs = "";
settingDataLoad()
function settingDataLoad(){
    if(navigator.cookieEnabled){
        var cookieObj = convertCookieToObject(document.cookie);
        // データを取得
        var req = new XMLHttpRequest();// XMLHttpRequest オブジェクトを生成する
        req.onreadystatechange = function() {// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
            if(req.readyState == 4 && req.status == 200){// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
                serverJsonData_settingJs = (JSON.parse(req.responseText));// 取得した JSON を変数に
            }
        };
        req.open("GET", `${windowFileDirectlyPass}/data/json/setting.json`, false);// HTTPメソッドとアクセスするサーバーの　URL　を指定
        req.send(null);	

        //console.log(serverJsonData_settingJs);
        var settingJson = (JSON.parse(`{}`));
        settingJson[`version`]=(`${serverJsonData_settingJs.version}`);
        for(let settingJsonCountChe = 0; settingJsonCountChe < (serverJsonData_settingJs.content_list.length); settingJsonCountChe++){
            settingJson[`${serverJsonData_settingJs.content_list[settingJsonCountChe].id}`]=({"release":serverJsonData_settingJs.content_list[settingJsonCountChe].release,"initial_value":serverJsonData_settingJs.content_list[settingJsonCountChe].initial_value,"checked":serverJsonData_settingJs.content_list[settingJsonCountChe].initial_value});
        };
        //console.log(settingJson)
        if(cookieObj.USERSETTINGDATA!=='' && cookieObj.USERSETTINGDATA !== undefined){
            USERSETTINGDATA = (JSON.parse(cookieObj.USERSETTINGDATA));
        }else{
            document.cookie = `USERSETTINGDATA=${JSON.stringify(settingJson)}; path=/`;
            USERSETTINGDATA = ((settingJson));
        };
        if((USERSETTINGDATA.version).replace(/\./g,'') < (serverJsonData_settingJs.version).replace(/\./g,'')){
            settingDataReset();
            alert('設定項目がアップデートされた為、過去に設定を行なったデータが削除されました')
            console.warn('settingJsonUpdate');
        }else{
            if(cookieObj.USERSETTINGDATA==='' || cookieObj.USERSETTINGDATA === undefined){
                //console.error('SETTING LOAD ERROR');
                document.cookie = `USERSETTINGDATA=${JSON.stringify(settingJson)}; path=/`;
                USERSETTINGDATA = ((settingJson));
            }else{
                //console.warn('settingJsonLoad');
                USERSETTINGDATA=(JSON.parse(cookieObj.USERSETTINGDATA));
            }
        };
    }else{
        alert('cookieを有効にしてください')
    }
}

function settingLListLoad(){
    settingDataLoad();
    if(navigator.cookieEnabled){
        var cookieObj = convertCookieToObject(document.cookie);
        // データを取得
        var req = new XMLHttpRequest();// XMLHttpRequest オブジェクトを生成する
        req.onreadystatechange = function() {// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
            if(req.readyState == 4 && req.status == 200){// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
                serverJsonData_settingJs = (JSON.parse(req.responseText));// 取得した JSON を変数に
            }
        };
        req.open("GET", `${windowFileDirectlyPass}/data/json/setting.json`, false);// HTTPメソッドとアクセスするサーバーの　URL　を指定
        req.send(null);	

        //console.log(serverJsonData_settingJs);
        var settingJson = (JSON.parse(`{}`));
        settingJson[`version`]=(`${serverJsonData_settingJs.version}`);
        for(let settingJsonCountChe = 0; settingJsonCountChe < (serverJsonData_settingJs.content_list.length); settingJsonCountChe++){
            settingJson[`${serverJsonData_settingJs.content_list[settingJsonCountChe].id}`]=({"release":serverJsonData_settingJs.content_list[settingJsonCountChe].release,"initial_value":serverJsonData_settingJs.content_list[settingJsonCountChe].initial_value,"checked":serverJsonData_settingJs.content_list[settingJsonCountChe].initial_value});
        };
        //console.log(settingJson)
        if(cookieObj.USERSETTINGDATA!=='' && cookieObj.USERSETTINGDATA !== undefined){
            USERSETTINGDATA = (JSON.parse(cookieObj.USERSETTINGDATA));
        }else{
            document.cookie = `USERSETTINGDATA=${JSON.stringify(settingJson)}; path=/`;
            USERSETTINGDATA = ((settingJson));
        };
        if((USERSETTINGDATA.version).replace(/\./g,'') < (serverJsonData_settingJs.version).replace(/\./g,'')){
            document.cookie = `USERSETTINGDATA=${JSON.stringify(settingJson)}; path=/`;
            USERSETTINGDATA = (JSON.parse(settingJson));
            console.warn('settingJsonUpdate');
        }else{
            if(cookieObj.USERSETTINGDATA==='' || cookieObj.USERSETTINGDATA === undefined){
                //console.error('SETTING LOAD ERROR');
                document.cookie = `USERSETTINGDATA=${JSON.stringify(settingJson)}; path=/`;
                USERSETTINGDATA = ((settingJson));
            }else{
                //console.warn('settingJsonLoad');
                USERSETTINGDATA=(JSON.parse(cookieObj.USERSETTINGDATA));
            }
        };
        //console.log(USERSETTINGDATA);
        //console.log(serverJsonData);
        // 処理を開始
        let jsonContentGroup = document.getElementById('settingAllBox');
        jsonContentGroup.classList.add(`setting_group_box`,'fadeUp');
        let HtmlTitleContentDiv = document.createElement('div');
        HtmlTitleContentDiv.style.display=(`flex`);
        HtmlTitleContentDiv.style.flexWrap=(`wrap`)
        let HtmlTitleContent = document.createElement('h1');
        HtmlTitleContent.classList.add(`fadeUp0.15`);
        HtmlTitleContent.style.margin=(`0 10px 0 0`)
        HtmlTitleContent.innerHTML=(`<audio src="${windowFileDirectlyPass}/assets/sounds/cursor.mp3" id="btn-sound"></audio>${serverJsonData_settingJs.title}`);
        HtmlTitleContentDiv.appendChild(HtmlTitleContent);
        jsonContentGroup.appendChild(HtmlTitleContentDiv);

        for (let i = 0; i < (serverJsonData_settingJs.content_list.length); i++) {
            let HtmlTitleContentDiv = document.createElement('div');
            HtmlTitleContentDiv.classList.add(`setting_group`,'fadeUp0.35');
            if(USERSETTINGDATA[serverJsonData_settingJs.content_list[i].id].release==='false' || USERSETTINGDATA[serverJsonData_settingJs.content_list[i].id].release===false){
                HtmlTitleContentDiv.classList.add('setting_groupOff')
            };
            HtmlTitleContentDiv.id=(`setting_group_${serverJsonData_settingJs.content_list[i].id}`)
            let HtmlGroupContentTitle = document.createElement('h2');
            HtmlGroupContentTitle.classList.add(`fadeUp0.65`);
            HtmlGroupContentTitle.innerHTML=(`${serverJsonData_settingJs.content_list[i].title}`);
            HtmlTitleContentDiv.appendChild(HtmlGroupContentTitle);
            for(let i2 = 0; i2 < (serverJsonData_settingJs.content_list[i].content.length); i2++){
                let HtmlSettingContentDiv = document.createElement(`div`)
                HtmlSettingContentDiv.classList.add(`setting_content`);

                HtmlSettingContentDiv.innerHTML=(`
                <p class="fadeUp0.75 switch_title">${serverJsonData_settingJs.content_list[i].content[i2].title}</p>
                <label for="setting_content_${serverJsonData_settingJs.content_list[i].id}" class="fadeLeft switch" style="width: 64px;margin: 10px 0 10px 0;text-align:right;" >
                    <input id="setting_content_${serverJsonData_settingJs.content_list[i].id}" ${USERSETTINGDATA[serverJsonData_settingJs.content_list[i].id].checked} type="checkbox" onclick="PPP('${serverJsonData_settingJs.content_list[i].id}')">
                    <div class="slider">
                        <div class="circle">
                            <svg class="cross" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 365.696 365.696" y="0" x="0" height="6" width="6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path data-original="#000000" fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                                </g>
                            </svg>
                            <svg class="checkmark" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 24 24" y="0" x="0" height="10" width="10" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path class="" data-original="#000000" fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </label>
                `);
                HtmlTitleContentDiv.appendChild(HtmlSettingContentDiv);
            };
            jsonContentGroup.appendChild(HtmlTitleContentDiv);
        };
        let HtmlTitleContentDivDeleteBtnDiv = document.createElement(`div`);
        HtmlTitleContentDivDeleteBtnDiv.style.margin=(`10px auto`);
        let HtmlTitleContentDivDeleteBtn = document.createElement(`button`);
        HtmlTitleContentDivDeleteBtn.classList.add(`button`);
        HtmlTitleContentDivDeleteBtn.style.margin=(`auto`);
        HtmlTitleContentDivDeleteBtn.setAttribute('onclick', 'togglePop()');
        HtmlTitleContentDivDeleteBtn.innerHTML=(`
            <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
        `);
        HtmlTitleContentDivDeleteBtnDiv.appendChild(HtmlTitleContentDivDeleteBtn);
        jsonContentGroup.appendChild(HtmlTitleContentDivDeleteBtnDiv);
        //console.log(allSettingData);
    }else{
        alert('cookieを有効にしてください')
    }
};

function settingDataReset(){
    if(navigator.cookieEnabled){
        var cookieObj = convertCookieToObject(document.cookie);
        // データを取得
        var req = new XMLHttpRequest();// XMLHttpRequest オブジェクトを生成する
        req.onreadystatechange = function() {// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
            if(req.readyState == 4 && req.status == 200){// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
                serverJsonData_settingJs = (JSON.parse(req.responseText));// 取得した JSON を変数に
            }
        };
        req.open("GET", `${windowFileDirectlyPass}/data/json/setting.json`, false);// HTTPメソッドとアクセスするサーバーの　URL　を指定
        req.send(null);	

        //console.log(serverJsonData_settingJs);
        var settingJson = (JSON.parse(`{}`));
        settingJson[`version`]=(`${serverJsonData_settingJs.version}`);
        for(let settingJsonCountChe = 0; settingJsonCountChe < (serverJsonData_settingJs.content_list.length); settingJsonCountChe++){
            settingJson[`${serverJsonData_settingJs.content_list[settingJsonCountChe].id}`]=({"release":serverJsonData_settingJs.content_list[settingJsonCountChe].release,"initial_value":serverJsonData_settingJs.content_list[settingJsonCountChe].initial_value,"checked":serverJsonData_settingJs.content_list[settingJsonCountChe].initial_value});
        };
        console.log(`${JSON.stringify(settingJson)}`)
        document.cookie = `USERSETTINGDATA=${JSON.stringify(settingJson)}; path=/`;
        window.location.href=(`./`)
    }else{
        alert('cookieを有効にしてください')
    }
};


function PPP(id){
    var cookieObj = convertCookieToObject(document.cookie);
    if(document.getElementById(`setting_content_${id}`).checked==='true' || document.getElementById(`setting_content_${id}`).checked===true){
        USERSETTINGDATA[id].checked='checked';
    }else{
        USERSETTINGDATA[id].checked='false';
    };
    document.cookie = `USERSETTINGDATA=${JSON.stringify(USERSETTINGDATA)}; path=/`;
    audioPlay('btn-sound','0');
    //console.log(USERSETTINGDATA);
    //console.log(serverJsonData_settingJs);
}

function audioPlay(id,time){
    if(navigator.cookieEnabled){
        var SettingCookieObj = convertCookieToObject(document.cookie);
        SettingCookieObj=(JSON.parse(SettingCookieObj.USERSETTINGDATA));
    
        var newsJSsetting_news = (SettingCookieObj[`ae71d4c5-8c8c-4e1c-85fe-a25276e3c243`].checked)
    }else{
        console.error('cookieを許可してください')
    }
    if(newsJSsetting_news==='checked'){
        document.getElementById(id).currentTime = time;
        document.getElementById(id).play();
    };
};


function funcLocalStorage(mode,key,value){
    if(mode==='get'){
        localStorage.getItem(key,value);
    }else{if(mode==='set'){
        localStorage.setItem(key,value);
    };};
};

function getCookieSettingContent(key){
    if(navigator.cookieEnabled){
        var getCookieSetting = convertCookieToObject(document.cookie);
        getCookieSetting=(JSON.parse(getCookieSetting.USERSETTINGDATA));
        if((getCookieSetting[`${key}`].checked)==='checked'){
            return true;
        }else{
            return false;
        };
    }else{
        return false;
    };
};

function convertCookieToObject(cookies){//クッキーの解析
    const cookieItem = cookies.split(';');
    const obj = {};
    cookieItem.forEach((item) => {
        // 「=」で分解
        const element = item.split('=');
        // キーを取得
        const key = element[0].trim();
        // バリューを取得
        const value = decodeURIComponent(element[1]);
        // 保存
        obj[key] = value;
    });
    return obj;
}