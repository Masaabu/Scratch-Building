// TAGIDの説明
// 一般 = 0
// 公式 = 1
// 前提 = 2
let serverModsData = (JSON.parse(`
{
    "createdBy": "Fun117",
    "version": "0.0.1",
    "release_time": "null",
    "last_change_time": "2023-12-03",
    "content_list": [
        {
            "group": "SB MOD [v7]",
            "description": "使い方は<a href='' class='text-[#6094F8]' target='_blank'>こちら</a>",
            "creator": "@Masaabu-YT",
            "content": [
                {
                    "name": "SB MOD v1.0",
                    "description": "",
                    "creator": "Masaabu-YT",
                    "projectId": "940232456",
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
            "group": "SBAPI [v7]",
            "description": "使い方は<a href='https://note.com/metaroro/n/n8a8ed937bb04' class='text-[#6094F8]' target='_blank'>こちら</a>",
            "creator": "@dmmo-com-jp",
            "content": [
                {
                    "name": "SBAPI",
                    "description": "ビル経営ゲームの拡張性を上げるツール",
                    "creator": "dmmo-com-jp",
                    "projectId": "933515639",
                    "tags": [
                        {
                            "tagId": "2",
                            "name": "前提"
                        }
                    ]
                },
                {
                    "name": "cmdplus",
                    "description": "SBAPIのpostに依存した、コマンド強化modです。",
                    "creator": "dmmo-com-jp",
                    "projectId": "939787547",
                    "tags": [
                        {
                            "tagId": "0"
                        }
                    ]
                },
                {
                    "name": "隕石経営ゲーム",
                    "description": "隕石！！",
                    "creator": "banana_877_",
                    "projectId": "933713134",
                    "tags": [
                        {
                            "tagId": "0"
                        }
                    ]
                }
            ]
        },
        {
            "group": "SB Addons [v6]",
            "description": "GUIがあり、機能のon/offを切り替えられるため、簡単に利用できる。オーバーレイなどもあるため、色々な情報を画面に表示することもできる。",
            "creator": "@-Masaabu-",
            "content": [
                {
                    "name": "SB Addons",
                    "description": "ビル経営ゲームの拡張性を上げるツール",
                    "creator": "Masaabu-YT",
                    "projectId": "790969288",
                    "tags": [
                        {
                            "tagId": "1",
                            "name": "公式"
                        }
                    ]
                },
                {
                    "name": "SB Addons+",
                    "description": "",
                    "creator": "dmmo-com-jp",
                    "projectId": "791408146",
                    "tags": [
                        {
                            "tagId": "0"
                        }
                    ]
                },
                {
                    "name": "隕石アドオン",
                    "description": "隕石！！",
                    "creator": "dmmo-com-jp",
                    "projectId": "792121597",
                    "tags": [
                        {
                            "tagId": "0"
                        }
                    ]
                },
                {
                    "name": "Re:BN addon",
                    "description": "",
                    "creator": "banana_877_",
                    "projectId": "817892400",
                    "tags": [
                        {
                            "tagId": "0"
                        }
                    ]
                },
                {
                    "name": "SB Addons Remix",
                    "description": "",
                    "creator": "yoshikunTA",
                    "projectId": "795165690",
                    "tags": [
                        {
                            "tagId": "0"
                        }
                    ]
                }
            ]
        },
        {
            "group": "SB Addon API [v6]",
            "description": "使い方は<a href='https://note.com/metaroro/n/n8a8ed937bb04' class='text-[#6094F8]' target='_blank'>こちら</a>",
            "creator": "@dmmo-com-jp",
            "content": [
                {
                    "name": "SBAPI",
                    "description": "お金の管理や幸福度の管理を簡単に行えます。",
                    "creator": "dmmo-com-jp",
                    "projectId": "926411096",
                    "tags": [
                        {
                            "tagId": "2",
                            "name": "前提"
                        }
                    ]
                },
                {
                    "name": "天候復活アドオン",
                    "description": "天候を6.0に復活させます",
                    "creator": "dmmo-com-jp",
                    "projectId": "933340996",
                    "tags": [
                        {
                            "tagId": "0"
                        }
                    ]
                }
            ]
        }
    ]
}
`));

var modsList = "";

function modsListLoad(){
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
            modsProject.classList.add('project');
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