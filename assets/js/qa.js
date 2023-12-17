let qa_data = (JSON.parse(`
{
    "createdBy": "Fun117",
    "version": "0.0.1",
    "release_time": "2023-12-02",
    "last_change_time": "2023-12-03",
    "qa": [
        {
            "Q": "トンカチと猫のアイコンの物は何ですか？",
            "A": "モードです！それぞれ建築モード、猫モードという名前で、建築モードなら部屋をタップすることで建築ができます！猫モードなら猫をタップするとその猫のステータスを見ることができます！"
        },
        {
            "Q": "電気と水道とは？",
            "A": "右下にある黄色と水色のバーは電気と水道の使用量で、部屋ごとに使用量が変わります。使用量がオーバーしてしまうと猫達が部屋を使えなくなってしまいます！上限を増やすには地下に配電室や給水室などを建築しましょう！"
        },
        {
            "Q": "エレベーターとターミナルエレベーターの違いは？",
            "A": "猫達が早く移動できるようになります！"
        },
        {
            "Q": "ログインボタンの意味は？",
            "A": "ログインをすると設定の「データの管理」ページがサーバーから読み込まれたり自分のプロフィールが読み込まれます！"
        },
        {
            "Q": "プロフィールにある「UP!」ボタンは何ですか？",
            "A": "ビルハブで自分のステータスを共有できます！※v7.0.1~※ 共有をすることでギフト※実装予定※ などを受け取れます！"
        },
        {
            "Q": "広告を載せてください！",
            "A": "こちらから広告を申請できます！"
        },
        {
            "Q": "レベルとは",
            "A": "今後追加する予定の機能です！楽しみに待っていてください！"
        },
        {
            "Q": "他のバージョンのセーブコードは使えますか？",
            "A": "いいえ。セーブコード変換機などを使用してください。"
        }
    ]
}
`));

function load_qaData(){
    let cash_html = ``;
    let release_time = (qa_data.release_time);
    let last_change_time = (qa_data.last_change_time);
    cash_html = `<h1 class="text-xl font-semibold text-[#D1D7E1] md:text-4xl">ビル経営ゲームv7のよくある <span class="text-[#6094F8]">質問</span></h1>`;
    cash_html = cash_html + `<p class="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg">公開日：`+release_time+`<br>最終更新：`+last_change_time+`</p>`;
    cash_html = cash_html + `<div class="mt-10 w-full"><div class="relative flex w-full flex-col rounded-xl border border-[#3D84F529] bg-[#101624] transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl p-10"><div class="mb-8 flex flex-col gap-2" style="width: 100%;">`;
    for (let i = 0; i < (qa_data.qa.length); i++) {
        let cash_html_2 = ``;
        let cash_q = (qa_data.qa[i].Q);
        let cash_a = (qa_data.qa[i].A);
        cash_html_2 = `<h3 class="text-xl font-medium text-white md:text-3xl">Q. `+cash_q+`</h3>`;
        cash_html_2 = cash_html_2 + `<p class="text-base font-medium text-[#FFFFFF]/[0.64]">A. `+cash_a+`</p>`;
        cash_html = cash_html + cash_html_2;
    };
    document.getElementById('qa_list').innerHTML = (cash_html + `</div></div></div>`);
};

load_qaData()