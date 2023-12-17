// TAGIDの説明
// 一般アドオン = 0
// 公式アドオン = 1
// 前提アドオン = 2
let addons_data = (JSON.parse(`
{
    "createdBy": "Fun117",
    "version": "0.0.1",
    "release_time": "no data found",
    "last_change_time": "2023-12-03",
    "addons_list": [
        {
            "addonGroupName": "SB MOD [v7]",
            "description": "使い方は<a href='../../pages/guides/mods/sbmod/' class='text-[#6094F8]'>こちら</a>",
            "createdUserName": "@Masaabu-YT",
            "addons": [
                {
                    "addonName": "SB MOD v1.0",
                    "description": "",
                    "createdUserName": "Masaabu-YT",
                    "clickUrl": "https://scratch.mit.edu/projects/940232456",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/940232456_480x360.png",
                    "tags": [
                        {
                            "tagId": "1",
                            "name": "公式"
                        }
                    ]
                }
            ]
        },
        {
            "addonGroupName": "SBAPI [v7]",
            "description": "使い方は<a href='https://note.com/metaroro/n/n8a8ed937bb04' class='text-[#6094F8]'>こちら</a>",
            "createdUserName": "@dmmo-com-jp",
            "addons": [
                {
                    "addonName": "SBAPI",
                    "description": "ビル経営ゲームの拡張性を上げるツール",
                    "createdUserName": "dmmo-com-jp",
                    "clickUrl": "https://scratch.mit.edu/projects/933515639",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/933515639_480x360.png",
                    "tags": [
                        {
                            "tagId": "2",
                            "name": "前提"
                        }
                    ]
                },
                {
                    "addonName": "cmdplus",
                    "description": "SBAPIのpostに依存した、コマンド強化modです。",
                    "createdUserName": "dmmo-com-jp",
                    "clickUrl": "https://scratch.mit.edu/projects/939787547",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/939787547_480x360.png",
                    "tags": [
                    ]
                },
                {
                    "addonName": "隕石経営ゲーム",
                    "description": "隕石！！",
                    "createdUserName": "banana_877_",
                    "clickUrl": "https://scratch.mit.edu/projects/933713134",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/933713134_480x360.png",
                    "tags": [
                    ]
                }
            ]
        },
        {
            "addonGroupName": "SB Addons [v6]",
            "description": "GUIがあり、機能のon/offを切り替えられるため、簡単に利用できる。オーバーレイなどもあるため、色々な情報を画面に表示することもできる。",
            "createdUserName": "@-Masaabu-",
            "addons": [
                {
                    "addonName": "SB Addons",
                    "description": "ビル経営ゲームの拡張性を上げるツール",
                    "createdUserName": "Masaabu-YT",
                    "clickUrl": "https://scratch.mit.edu/projects/790969288",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/790969288_480x360.png",
                    "tags": [
                        {
                            "tagId": "1",
                            "name": "公式"
                        }
                    ]
                },
                {
                    "addonName": "SB Addons+",
                    "description": "",
                    "createdUserName": "dmmo-com-jp",
                    "clickUrl": "https://scratch.mit.edu/projects/791408146",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/791408146_480x360.png",
                    "tags": [
                    ]
                },
                {
                    "addonName": "隕石アドオン",
                    "description": "隕石！！",
                    "createdUserName": "dmmo-com-jp",
                    "clickUrl": "https://scratch.mit.edu/projects/792121597",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/792121597_480x360.png",
                    "tags": [
                    ]
                },
                {
                    "addonName": "Re:BN addon",
                    "description": "",
                    "createdUserName": "banana_877_",
                    "clickUrl": "https://scratch.mit.edu/projects/817892400",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/817892400_480x360.png",
                    "tags": [
                    ]
                },
                {
                    "addonName": "SB Addons Remix",
                    "description": "",
                    "createdUserName": "yoshikunTA",
                    "clickUrl": "https://scratch.mit.edu/projects/795165690",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/795165690_480x360.png",
                    "tags": [
                    ]
                }
            ]
        },
        {
            "addonGroupName": "SB Addon API [v6]",
            "description": "使い方は<a href='https://note.com/metaroro/n/n8a8ed937bb04' class='text-[#6094F8]'>こちら</a>",
            "createdUserName": "@dmmo-com-jp",
            "addons": [
                {
                    "addonName": "SBAPI",
                    "description": "お金の管理や幸福度の管理を簡単に行えます。",
                    "createdUserName": "dmmo-com-jp",
                    "clickUrl": "https://scratch.mit.edu/projects/926411096",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/926411096_480x360.png",
                    "tags": [
                        {
                            "tagId": "2",
                            "name": "前提"
                        }
                    ]
                },
                {
                    "addonName": "天候復活アドオン",
                    "description": "天候を6.0に復活させます",
                    "createdUserName": "dmmo-com-jp",
                    "clickUrl": "https://scratch.mit.edu/projects/933340996",
                    "imageIconUrl": "https://uploads.scratch.mit.edu/get_image/project/933340996_480x360.png",
                    "tags": [
                    ]
                }
            ]
        }
    ]
}
`));


function load_addonsData(){
    let cash_html_1 = ``;
    let cash_html_2 = ``;
    let cash_html_3 = ``;
    let cash_html_4 = ``;

    for (let i = 0; i < (addons_data.addons_list.length); i++) {
        let cash_2_addonGroupName = (addons_data.addons_list[i].addonGroupName);
        let cash_2_description = (addons_data.addons_list[i].description);
        let cash_2_createdUserName = (addons_data.addons_list[i].createdUserName);

        cash_html_2=cash_html_2+`<div style="margin: 50px 0 20px 0"><h1 class="text-xl font-semibold text-[#D1D7E1] md:text-4xl">`+cash_2_addonGroupName+`</h1>`;
        cash_html_2=cash_html_2+`<p class="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg">`+cash_2_description+`<br>by `+cash_2_createdUserName+`</p>`;

        for (let i2 = 0; i2 < (addons_data.addons_list[i].addons.length); i2++) {
            let cash_3_addonName = (addons_data.addons_list[i].addons[i2].addonName);
            let cash_3_description = (addons_data.addons_list[i].addons[i2].description);
            let cash_3_createdUserName = (addons_data.addons_list[i].addons[i2].createdUserName);
            let cash_3_clickUrl = (addons_data.addons_list[i].addons[i2].clickUrl);
            let cash_3_imageIconUrl = (addons_data.addons_list[i].addons[i2].imageIconUrl);

            cash_html_3=cash_html_3+`<a href="`+cash_3_clickUrl+`">`;
            cash_html_3=cash_html_3+`<div class="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl pl-5 pr-5">`;
            cash_html_3=cash_html_3+`<div class="mb-8 flex max-w-md flex-col gap-2" style="width: 100%; height: auto; margin: auto">`;
            cash_html_3=cash_html_3+`<img style="width: 100%; height: auto; margin: auto; border-radius:15px;" src="`+cash_3_imageIconUrl+`">`;
            cash_html_3=cash_html_3+`<h3 class="text-xl font-medium text-white md:text-3xl">`+cash_3_addonName+`</h3>`;
            cash_html_3=cash_html_3+`<p class=" text-base font-medium text-[#FFFFFF]/[0.64]">`+cash_3_description+`<br>`+cash_3_createdUserName+`</p>`;

            for (let i3 = 0; i3 < (addons_data.addons_list[i].addons[i2].tags.length); i3++) {
                if((addons_data.addons_list[i].addons[i2].tags.length) >= 0){
                    let cash_4_tagId = (addons_data.addons_list[i].addons[i2].tags[i3].tagId);
                    let cash_4_name = (addons_data.addons_list[i].addons[i2].tags[i3].name);

                    cash_html_4=`<div class="tagId_`+cash_4_tagId+`"><p>`+cash_4_name+`</p></div>`;
                }
            };
            cash_html_3=cash_html_3+cash_html_4+`</div>`;
            cash_html_4=``;
            cash_html_3=cash_html_3+`<div class="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]"></div>`;
            cash_html_3=cash_html_3+`<div class="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]"></div>`;
            cash_html_3=cash_html_3+`<div class="aspect-1 relative h-full w-full" style="opacity: 1; transform: none;">`;
            cash_html_3=cash_html_3+`<div class="aspect-[inherit] absolute left-0 top-0 h-full w-full" style="background: url(<!--&quot;/landing/features/card-examples/browse.png&quot;-->) center top / cover no-repeat; opacity: 1;"></div></div></div></a>`;
        };

        cash_html_2=cash_html_2+`<div class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">`+cash_html_3+`</div></div>`;
        cash_html_3 = ``;
    };

    cash_html_1=cash_html_1+cash_html_2;
    document.getElementById('addons_list').innerHTML = (cash_html_1);
};

load_addonsData();