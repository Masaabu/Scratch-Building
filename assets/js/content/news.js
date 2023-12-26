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

if(navigator.cookieEnabled){
    var SettingCookieObj = convertCookieToObject(document.cookie);
    if(SettingCookieObj.USERSETTINGDATA==='' || SettingCookieObj.USERSETTINGDATA===undefined){
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
    }
    SettingCookieObj=(JSON.parse(SettingCookieObj.USERSETTINGDATA));
    var newsJSsetting_news = (SettingCookieObj[`ae71d4c5-8c8c-4e1c-85fe-a25276e3c243`].checked)
}else{
    console.error('cookieを許可してください')
}

// js 処理
var serverJsonData = "";
var newsObj=(JSON.parse(`
{

}
`));
function jsonListLoad(page){
    var tomorrow={};
    var tomorrowD = new Date()
    tomorrow.getFullYear=(tomorrowD.getFullYear());
    tomorrow.getMonth=(tomorrowD.getMonth() + 1);
    tomorrow.getDate=(tomorrowD.getDate());
    tomorrow.getHours=(tomorrowD.getHours());
    tomorrow.getMinutes=(tomorrowD.getMinutes());
    tomorrow.getSeconds=(tomorrowD.getSeconds());
    tomorrow.getAllPluDateNnY=(tomorrow.getMonth+tomorrow.getDate+tomorrow.getHours+tomorrow.getMinutes+tomorrow.getSeconds);
    // データを取得
    var req = new XMLHttpRequest();// XMLHttpRequest オブジェクトを生成する
    req.onreadystatechange = function() {// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
        if(req.readyState == 4 && req.status == 200){// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
            serverJsonData = (JSON.parse(req.responseText));// 取得した JSON を変数に
        }
    };
    req.open("GET", `${windowFileDirectlyPass}/data/json/news.json`, false);// HTTPメソッドとアクセスするサーバーの　URL　を指定
    req.send(null);

    // 処理を開始
    let dayDataSpell = 'YEMODAHOMISE';
    let HtmlNewsDiv = document.getElementById('news');

    var news_i = 0;
    for(let content_list_i = 0; content_list_i < (serverJsonData.content_list.length); content_list_i++){
        let startDay = (serverJsonData.content_list[content_list_i].start);
        let endDay = (serverJsonData.content_list[content_list_i].end);
        let startDayObj={};
        let endDayObj={};
        var positionZ=0;
        for(let startDay_i = 0; startDay_i < (dayDataSpell.length); startDay_i=startDay_i+2){
            var key=(`${dayDataSpell[startDay_i]}${dayDataSpell[startDay_i+1]}`);
            let position = startDay.indexOf(key);
            startDayObj[`${key}`]=(startDay.substring(positionZ, position));
            positionZ=position+2;
        };
        var positionZ=0;
        for(let startDay_i = 0; startDay_i < (dayDataSpell.length); startDay_i=startDay_i+2){
            var key=(`${dayDataSpell[startDay_i]}${dayDataSpell[startDay_i+1]}`)
            let position = endDay.indexOf(key);
            endDayObj[`${key}`]=(endDay.substring(positionZ, position));
            positionZ=position+2;
        };
        var show = "";
        var obj = convertCookieToObject(document.cookie);
        var news_cookieData = (`news_pop_${serverJsonData.content_list[content_list_i].id}`)
        //console.log(news_cookieData);
        if(obj[news_cookieData] === 'true'){

        }else{
            if(startDayObj.YE === 'n' && startDayObj.MO === 'n' && startDayObj.DA === 'n' && startDayObj.HO === 'n' && startDayObj.MI === 'n' && startDayObj.SE === 'n'){
                show='true';
            }else{
                if(startDayObj.YE === 'n' && (startDayObj.MO+startDayObj.DA+startDayObj.HO+startDayObj.MI+startDayObj.SE) >= tomorrow.getAllPluDateNnY){
                    show='true';
                }else{
                    show='false';
                };
            };
            if(show==='true'){
                if(endDayObj.YE === 'n' && endDayObj.MO === 'n' && endDayObj.DA === 'n' && endDayObj.HO === 'n' && endDayObj.MI === 'n' && endDayObj.SE === 'n'){
                    show='true';
                }else{
                    if(endDayObj.YE === 'n' && (endDayObj.MO+endDayObj.DA+endDayObj.HO+endDayObj.MI+endDayObj.SE) <= tomorrow.getAllPluDateNnY){
                        show='false';
                    }else{
                        show='true';
                    };
                };
            };
            const today = new Date(Date.now());

            const deadline = new Date(`${tomorrow.getFullYear},${endDayObj.MO},${endDayObj.DA},${endDayObj.HO},${endDayObj.MI},${endDayObj.SE}`);
            //console.log(today)
            if(today > deadline){
                //console.log('締切日を過ぎています。');
            } else {
                //console.log('締切日はまだ過ぎていません。');
            };

            showDiffDate((tomorrow.getFullYear),(endDayObj.MO),(endDayObj.DA))

            function showDiffDate( tYear, tMonth, tDay) {
                // 現在日時を数値に変換
                var nowDate = new Date();
                var dnumNow = nowDate.getTime();

                // 指定日時を数値に変換
                var targetDate = new Date( tYear, tMonth-1, tDay );  // 月の値は 1 を引く必要がある点に注意。(※1月は0、2月は1、……12月は11)
                var dnumTarget = targetDate.getTime();

                // 引き算して残日数を計算
                var diffMSec = dnumTarget - dnumNow;
                var diffDays = diffMSec / ( 1000 * 60 * 60 * 24 );
                var showDays = Math.ceil( diffDays ); // 小数点以下を切り上げる

                // 表示
                var Msg;
                if( showDays >= 0 ) {
                    Msg = "指定日まであと " + showDays + "日です。";
                }
                else {
                   Msg = "指定日は " + (showDays * -1) + "日前に過ぎました。";
                }
                return Msg;
            }
        }
        let HtmlNewsGroupDiv = document.createElement('div');
        let HtmlNewsContentGroupDiv = `<div class="modal-content newspaper">`
        for(let HtmlNewsContentGroupDiv_i = 0; HtmlNewsContentGroupDiv_i < serverJsonData.content_list[content_list_i].content.length; HtmlNewsContentGroupDiv_i++){
            let HtmlNewsContentDescriptionDiv = ``;
            if(HtmlNewsContentGroupDiv_i === 0){
                HtmlNewsContentDescriptionDiv=(`
                    <div style="margin-bottom:10px;">
                        <h1 class="h1"><strong>${serverJsonData.content_list[content_list_i].content[HtmlNewsContentGroupDiv_i].title}</strong></h1>
                        <p>${serverJsonData.content_list[content_list_i].content[HtmlNewsContentGroupDiv_i].description}</p>
                    </div>
                `);
            }else{
                HtmlNewsContentDescriptionDiv=(`
                    <div style="margin-bottom:10px;">
                        <h2 style="font-size: 23px;"><strong>${serverJsonData.content_list[content_list_i].content[HtmlNewsContentGroupDiv_i].title}</strong></h2>
                        <p>${serverJsonData.content_list[content_list_i].content[HtmlNewsContentGroupDiv_i].description}</p>
                    </div>
                `);
            };
            HtmlNewsContentGroupDiv=HtmlNewsContentGroupDiv+(HtmlNewsContentDescriptionDiv);
        };
        HtmlNewsContentGroupDiv=HtmlNewsContentGroupDiv+'</div>';
        HtmlNewsGroupDiv.innerHTML=(`
            <div data-ml-modal id="${serverJsonData.content_list[content_list_i].id}" class="fadeIn">
                <audio src="${windowFileDirectlyPass}/assets/sounds/cursor.mp3" id="btn-sound"></audio>
                <audio src="${windowFileDirectlyPass}/assets/sounds/checkBtn40.mp3" id="pushSound"></audio>
                <a id="news_url_1_${serverJsonData.content_list[content_list_i].id}" href="#!" class="modal-overlay"></a>
                <div class="fadeDown modal-dialog modal-dialog-lg">
                    <a id="news_url_2_${serverJsonData.content_list[content_list_i].id}" href="#!" class="modal-close">&times;</a>
                    <h3><strong>${serverJsonData.content_list[content_list_i].title}</strong></h3>
                    <div>${HtmlNewsContentGroupDiv}</div>
                </div>  
            </div>
        `);

        const sample = window.location.pathname;
        const result = sample.indexOf('/page/user/setting/');
        //console.log(result);
        //console.log(window.location)
        if(show==='true' || show===true){
            if((serverJsonData.content_list[content_list_i].page) === 'all'){
                HtmlNewsDiv.appendChild(HtmlNewsGroupDiv);
                newsObj[`${news_i}`] = {id:serverJsonData.content_list[content_list_i].id,show:show,saveTime:serverJsonData.content_list[content_list_i].saveTime};
                news_i = news_i+1;
            }else{
                if(serverJsonData.content_list[content_list_i].page === page){
                    HtmlNewsDiv.appendChild(HtmlNewsGroupDiv);
                    newsObj[`${news_i}`] = {id:serverJsonData.content_list[content_list_i].id,show:show,saveTime:serverJsonData.content_list[content_list_i].saveTime};
                    news_i = news_i+1;
                }
            }
        }
    };
    newsObj.length=news_i;
    newsload();
};

function newsload(){
    //console.log(newsObj)
    var newsPushObj={};
    if(newsObj.length > 0){
        var obj = convertCookieToObject(document.cookie);
        for(let news_si = 0; news_si < newsObj.length; news_si++){
            newsPushObj[`${newsObj[news_si].id}`]=(newsObj[news_si].saveTime);
            newsPushObj[`show_${newsObj[news_si].id}`]=(newsObj[news_si].show);
            newsObj[`${news_si}`].cookie=(`${newsObj[news_si].id}`);
            var count = news_si + 1;
            var btnC1 = document.getElementById(`news_url_1_${newsObj[news_si].id}`);
            var btnC2 = document.getElementById(`news_url_2_${newsObj[news_si].id}`);
            if(news_si < (newsObj.length-1)){
                btnC1.setAttribute('href',`#${newsObj[count].id}`);
                btnC2.setAttribute('href',`#${newsObj[count].id}`);
            }else{
                btnC2.setAttribute(`href`,`#!`);
                btnC2.setAttribute(`href`,`#!`);
            };
            btnC1.addEventListener('click', () => {
                audioPlay('btn-sound','0');
                if(newsObj[news_si].show === 'true'){
                    document.cookie = `news_pop_${newsObj[news_si].id}=true; max-age=${newsObj[news_si].saveTime}; path=/`;
                }
            });
            btnC2.addEventListener('click', () => {
                audioPlay('btn-sound','0');
                if(newsObj[news_si].show === 'true'){
                    document.cookie = `news_pop_${newsObj[news_si].id}=true; max-age=${newsObj[news_si].saveTime}; path=/`;
                }
            });
        };
        window.location.href=(`#${newsObj["0"].id}`);
        var SeOneHash='';
        var puC=newsObj.length;
        //console.log(newsPushObj);
        setInterval(() => {
            if(SeOneHash!==(window.location.hash)){
                if(puC > 0){
                    SeOneHash = (window.location.hash);
                    audioPlay('pushSound','0');
                    puC=puC-1;
                };
            };
        }, 100);
    }else{
        window.location.href=(`#`);
    };
};

function audioPlay(id,time){
    if(navigator.cookieEnabled){
        var SettingCookieObj = convertCookieToObject(document.cookie);
        SettingCookieObj=(JSON.parse(SettingCookieObj.USERSETTINGDATA));
    
        var newsJSsetting_news = (SettingCookieObj[`ae71d4c5-8c8c-4e1c-85fe-a25276e3c243`].checked)
    }else{
        console.error('cookieを許可してください')
    };
    if(newsJSsetting_news==='checked'){
        document.getElementById(id).currentTime = time;
        document.getElementById(id).play();
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
};

function a(){
    let HtmlNewsContentGroupDiv = document.createElement('div');
    HtmlNewsContentGroupDiv.classList.add('modal-content','newspaper');
    for(let HtmlNewsContentGroupDiv_i = 0; HtmlNewsContentGroupDiv_i < serverJsonData.content_list[content_list_i].content.length; HtmlNewsContentGroupDiv_i++){
        let HtmlNewsContentDescriptionDiv = document.createElement('div');
        HtmlNewsContentDescriptionDiv.style.marginBottom=('10px');
        if(HtmlNewsContentGroupDiv_i === 0){
            HtmlNewsContentDescriptionDiv.innerHTML=(`
                <h1 class="h1"><strong>${serverJsonData.content_list[content_list_i].content[HtmlNewsContentGroupDiv_i].title}</strong></h1>
                <p>${serverJsonData.content_list[content_list_i].content[HtmlNewsContentGroupDiv_i].description}</p>
            `);
        }else{
            HtmlNewsContentDescriptionDiv.innerHTML=(`
                <h2 style="font-size: 23px;"><strong>${serverJsonData.content_list[content_list_i].content[HtmlNewsContentGroupDiv_i].title}</strong></h2>
                <p>${serverJsonData.content_list[content_list_i].content[HtmlNewsContentGroupDiv_i].description}</p>
            `);
        };
        HtmlNewsContentGroupDiv.appendChild(HtmlNewsContentDescriptionDiv);
    };
};