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

let account_apiURL = false;

function togglePop(mode,title,description,button) {
    if(mode==='displayShow'){
        document.getElementById('popAlert_title').innerHTML=title;
        document.getElementById('popAlert_description').innerHTML=description;
        document.getElementById('popAlert_button').innerHTML=button;
    }else{if(mode==='button'){

    };};
    let popup = document.getElementById('popAlert');
    popup.classList.toggle('active');
};

function account_form_passwordShow(){
    let account_form_password = document.getElementById('account_form_password');
    if(account_form_password.type===`password`){
        document.getElementById('account_form_passwordShowButton').innerHTML=`<i class="fa-solid fa-eye-slash"></i>`;
        account_form_password.setAttribute(`type`,`text`);
    }else{
        document.getElementById('account_form_passwordShowButton').innerHTML=`<i class="fa-solid fa-eye"></i>`;
        account_form_password.setAttribute(`type`,`password`);
    };
}

function accountSignup(){
    if(account_form_check()){
        var request_name = document.getElementById('account_form_name');
        var request_password = document.getElementById('account_form_password');
        document.getElementById('account_form_content').innerHTML=(`
        <div style="text-align: center;">
            <div class="loaderBallWrapper" style="margin: 20px auto;">
                <div class="loaderBallCircle"></div>
                <div class="loaderBallCircle"></div>
                <div class="loaderBallCircle"></div>
                <div class="loaderBallShadow"></div>
                <div class="loaderBallShadow"></div>
                <div class="loaderBallShadow"></div>
            </div>
        </div>
        `)
        accountSignupRequest(request_name.value,request_password.value);
    }else{
        togglePop(`displayShow`,`フォームエラー！`,`フォームに正しい記述方法で情報を入力してください。`,`<button type="button" onclick="togglePop('button')">閉じる</button>`);
    };
};

function accountLogin(){
    if(account_form_check()){
        var request_name = document.getElementById('account_form_name');
        var request_password = document.getElementById('account_form_password');
        document.getElementById('account_form_content').innerHTML=(`
        <div style="text-align: center;">
            <div class="loaderBallWrapper" style="margin: 20px auto;">
                <div class="loaderBallCircle"></div>
                <div class="loaderBallCircle"></div>
                <div class="loaderBallCircle"></div>
                <div class="loaderBallShadow"></div>
                <div class="loaderBallShadow"></div>
                <div class="loaderBallShadow"></div>
            </div>
        </div>
        `)
        accountLoginRequest(request_name.value,request_password.value);
    }else{
        togglePop(`displayShow`,`フォームエラー！`,`フォームに正しい記述方法で情報を入力してください。`,`<button type="button" onclick="togglePop('button')">閉じる</button>`);
    };
};

function accountLogout(){
    
};

function account_form_check(){
    var request_name = document.getElementById('account_form_name');
    var request_password = document.getElementById('account_form_password');
    var request_name_error = document.getElementById('account_form_name_error');
    var request_password_error = document.getElementById('account_form_password_error');
    //request_name.value=request_name.value.replace(/\s+/g, "|");
    request_name.value=request_name.value.replace(/[^0-9a-zA-Z\-_]|\s+/g, "");
    request_password.value=request_password.value.replace(/[^0-9a-z|@]/gi, "");
    var errorCount = 0;
    if(request_name.value.length < 3){
        request_name_error.innerHTML=`名前は最低3字必要です。現在${request_name.value.length}文字`;
        errorCount+=1;
    }else{request_name_error.innerHTML=``;};
    if(request_password.value.length < 10){
        request_password_error.innerHTML=`パスワードは最低10字必要です。現在${request_password.value.length}文字`;
        errorCount+=1;
    }else{request_password_error.innerHTML=``;};
    if(errorCount<1){
        return true;
    }else{
        return false;
    };
};

async function accountLoginRequest(name,password) {
    if(account_apiURL===false){
        togglePop(`displayShow`,`サーバーエラー`,`現在アカウントを管理するサーバーに接続できません。`,`<button type="button" onclick="togglePop('button')">閉じる</button>`);
        document.getElementById('account_form_content').innerHTML=(`
        <div class="account_form_input_area">
            <input id="account_form_name" type="text" placeholder="名前" class="account_form_input" />
            <p id="account_form_name_error" class="account_form_input_error"></p>
            <div class="account_form_input" style="position: relative;">
                <input id="account_form_password" type="password" placeholder="パスワード" class="account_form_input_password" />
                <button id="account_form_passwordShowButton" class="account_form_input_password_Show" onclick="account_form_passwordShow()"><i class="fa-solid fa-eye"></i></button>
            </div>
            <p id="account_form_password_error" class="account_form_input_error"></p>
        </div>
        <div class="account_form_input_area">
            <button class="account_form_button" onclick="accountLogin()">ログイン</button>
        </div>
        <div class="account_form_input_area" style="text-align: center;">
            <p>アカウントをお持ちでない場合は<a href="../signup/" class="text-[#6094F8]">作成</a>をする。</p>
        </div>
        `);
    }else{
        const response = await fetch(`${account_apiURL}?mode=login&name=${name}&password=${password}`);
        var data = await response.json();
        var requestResponseMode=``;
        var requestResponse=``;
        var requestResponseDescription=``;
        data.reverse().forEach(entry => {
            console.log(entry)
            requestResponseMode=entry.request_mode;
            requestResponse=entry.response;
            requestResponseDescription=entry.response_description;
        });
        if(requestResponse===true){
            document.getElementById('account_form_content').innerHTML=``;
            var obj = convertCookieToObject(document.cookie);
            document.cookie = `ACCOUNT=${html_class}; path=/`;
        }else{
            togglePop(`displayShow`,`${requestResponseMode}`,`${requestResponseDescription}`,`<button type="button" onclick="togglePop('button')">閉じる</button>`);
            document.getElementById('account_form_content').innerHTML=(`
            <div class="account_form_input_area">
                <input id="account_form_name" type="text" placeholder="名前" class="account_form_input" />
                <p id="account_form_name_error" class="account_form_input_error"></p>
                <div class="account_form_input" style="position: relative;">
                    <input id="account_form_password" type="password" placeholder="パスワード" class="account_form_input_password" />
                    <button id="account_form_passwordShowButton" class="account_form_input_password_Show" onclick="account_form_passwordShow()"><i class="fa-solid fa-eye"></i></button>
                </div>
                <p id="account_form_password_error" class="account_form_input_error"></p>
            </div>
            <div class="account_form_input_area">
                <button class="account_form_button" onclick="accountLogin()">ログイン</button>
            </div>
            <div class="account_form_input_area" style="text-align: center;">
                <p>アカウントをお持ちでない場合は<a href="../signup/" class="text-[#6094F8]">作成</a>をする。</p>
            </div>
            `);
        };
    }
};

async function accountSignupRequest(name,password) {
    if(account_apiURL===false){
        togglePop(`displayShow`,`サーバーエラー`,`現在アカウントを管理するサーバーに接続できません。`,`<button type="button" onclick="togglePop('button')">閉じる</button>`);
        document.getElementById('account_form_content').innerHTML=(`
        <div class="account_form_input_area">
            <input id="account_form_name" type="text" placeholder="名前" class="account_form_input" />
            <p id="account_form_name_error" class="account_form_input_error"></p>
            <div class="account_form_input" style="position: relative;">
                <input id="account_form_password" type="password" placeholder="パスワード" class="account_form_input_password" />
                <button id="account_form_passwordShowButton" class="account_form_input_password_Show" onclick="account_form_passwordShow()"><i class="fa-solid fa-eye"></i></button>
            </div>
            <p id="account_form_password_error" class="account_form_input_error"></p>
        </div>
        <div class="account_form_input_area">
            <button class="account_form_button" onclick="accountSignup()">アカウント作成</button>
        </div>
        <div class="account_form_input_area" style="text-align: center;">
            <p>アカウントをお持ちの場合は<a href="../login/" class="text-[#6094F8]">ログイン</a>する。</p>
        </div>
        `);
    }else{
        const response = await fetch(`${account_apiURL}?mode=signup&name=${name}&password=${password}`);
        var data = await response.json();
        var requestResponseMode=``;
        var requestResponse=``;
        var requestResponseDescription=``;
        data.reverse().forEach(entry => {
            console.log(entry)
            requestResponseMode=entry.request_mode;
            requestResponse=entry.response;
            requestResponseDescription=entry.response_description;
        });
        if(requestResponse===true){
            document.getElementById('account_form_content').innerHTML=``;
            var obj = convertCookieToObject(document.cookie);
            document.cookie = `ACCOUNT=${html_class}; path=/`;
        }else{
            togglePop(`displayShow`,`${requestResponseMode}`,`${requestResponseDescription}`,`<button type="button" onclick="togglePop('button')">閉じる</button>`);
            document.getElementById('account_form_content').innerHTML=(`
            <div class="account_form_input_area">
                <input id="account_form_name" type="text" placeholder="名前" class="account_form_input" />
                <p id="account_form_name_error" class="account_form_input_error"></p>
                <div class="account_form_input" style="position: relative;">
                    <input id="account_form_password" type="password" placeholder="パスワード" class="account_form_input_password" />
                    <button id="account_form_passwordShowButton" class="account_form_input_password_Show" onclick="account_form_passwordShow()"><i class="fa-solid fa-eye"></i></button>
                </div>
                <p id="account_form_password_error" class="account_form_input_error"></p>
            </div>
            <div class="account_form_input_area">
                <button class="account_form_button" onclick="accountSignup()">アカウント作成</button>
            </div>
            <div class="account_form_input_area" style="text-align: center;">
                <p>アカウントをお持ちの場合は<a href="../login/" class="text-[#6094F8]">ログイン</a>する。</p>
            </div>
            `);
        };
    }
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