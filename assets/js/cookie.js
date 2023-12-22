const obj = convertCookieToObject(document.cookie);//クッキーを読み出す
let html_class = obj.html_class;//クッキーの中の""html_class"を取得
document.getElementById('html').className = (html_class)//htmlのclassを変更

function class_change(){
    if(convertCookieToObject(document.cookie).html_class === 'dark'){//クッキーの"html_class"が"dark"なら
        document.getElementById('html').className = ('light')//"html"のclassを"light"
    }else{//ではない
        document.getElementById('html').className = ('dark')//"html"のclassを"dark"
    }
    class_modeCiikiesSeve()
}

function class_modeCiikiesSeve(){//クラスモード変更検知
    if(navigator.cookieEnabled){//クッキーがクッキーが使えるか確認
        let rootElement = document.documentElement;
        html_class =(rootElement.className);
        document.cookie = 'html_class=' + html_class+'; path=/';
        const obj = convertCookieToObject(document.cookie);//クッキーを読み出す
    }
}

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