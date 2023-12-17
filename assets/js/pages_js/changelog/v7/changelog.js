let changelog_data = (JSON.parse(`
{
    "createdBy": "Fun117",
    "version": "0.0.1",
    "release_time": "2023-12-02",
    "last_change_time": "2023-12-04",
    "changelog": [
        {
            "version": "7.2.0",
            "time": "2023-12-04",
            "content": [
                {
                    "text": "他のユーザーのビルを見る機能を追加"
                },
                {
                    "text": "ビル経営ゲームへの参加日表示を更新"
                },
                {
                    "text": "チャットの追加"
                },
                {
                    "text": "猫の種類(speed) を追加"
                },
                {
                    "text": "クリエイティブ-コマンドを追加"
                }
            ]
        },
        {
            "version": "7.1.0",
            "time": "2023-12-03",
            "content": [
                {
                    "text": "ビルハブの追加"
                },
                {
                    "text": "クリエイティブの仮実装（タブレット）"
                }
            ]
        }
    ]
}
`));

function load_changelog(){
    let cash_html = ``;
    let release_time = (changelog_data.release_time);
    let last_change_time = (changelog_data.last_change_time);
    cash_html = `<h1 class="text-xl font-semibold text-[#D1D7E1] md:text-4xl">ビル経営ゲームv7 <span class="text-[#6094F8]">変更履歴</span></h1><p class="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg">公開日：`+release_time+`<br>最終更新：`+last_change_time+`</p><div class="mt-10 w-full"><div class="relative flex w-full flex-col rounded-xl border border-[#3D84F529] bg-[#101624] transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl p-10"><div class="mb-8 flex flex-col gap-2" style="width: 100%;">`;
    for (let i = 0; i < (changelog_data.changelog.length); i++) {
        let cash_html_2 = ``;
        let cash_version = (changelog_data.changelog[i].version);
        let cash_time = (changelog_data.changelog[i].time);
        cash_html_2 = `<h3 class="text-xl font-medium text-white md:text-3xl">v`+cash_version+`</h3>`;
        let cash_li = ``;
        for (let i2 = 0; i2 < (changelog_data.changelog[i].content.length); i2++) {
            cash_li = cash_li + `<li>`+(changelog_data.changelog[i].content[i2].text)+`</li>`;
        };
        cash_html = cash_html + cash_html_2 + `<p class="text-base font-medium text-[#FFFFFF]/[0.64]">`+cash_time+cash_li+`</p>`;
    };
    document.getElementById('changelog_list').innerHTML = (cash_html + `</div></div></div>`);
};

load_changelog();