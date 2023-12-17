var windowUrl = window.location.pathname;
var windowUrlSr =  ( windowUrl.match( /[/]/g ) || [] ).length - 2;
var windowFileDlCPass = "";
if(windowUrlSr > 0){
    for (let i = 0; i < windowUrlSr; i++) {
        windowFileDlCPass = windowFileDlCPass + `./.`;
    }
    windowFileDlCPass = `.`+windowFileDlCPass+`.`;
}else{
    windowFileDlCPass = `.`;
};
var windowFileDirectlyPass = windowFileDlCPass;
// `+windowFileDirectlyPass+`


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



document.getElementById('page_changelog_v7_main').innerHTML = (`
    <main class="min-h-screen antialiased bg-background overflow-hidden relative __className_76c1ff">
        <div style="transform:translateY(-300px) translateZ(0)">
            <img alt="left gradient" loading="lazy" width="1023" height="1052" decoding="async" data-nimg="1" class="transition duration-1000 opacity-1 absolute left-0 select-none pointer-events-none bg-transparent border-none" style="color:transparent" srcset="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fleft-gradient%401x.png&w=1080&q=75 1x, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fleft-gradient%401x.png&w=1080&q=75 2x" src="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fleft-gradient%401x.png&w=1080&q=75">
            <img alt="left gradient" loading="lazy" width="1023" height="1052" decoding="async" data-nimg="1" class="transition duration-1000 opacity-1 absolute right-0 select-none pointer-events-none bg-transparent border-none" style="color:transparent" srcset="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fright-gradient%401x.png&w=1080&q=75 1x, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fright-gradient%401x.png&w=1080&q=75 2x" src="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fright-gradient%401x.png&w=1080&q=75">
        </div>
        <div class=" pt-32 md:pt-48 pb-10 md:pb-24 px-8 relative z-40">
            <div class="max-w-7xl mx-auto flex flex-col items-center">
                <div class="z-50" style="opacity: 1;">
                    <div class="w-full flex justify-center">
                        <div class="py-1 flex items-center space-x-2 border rounded-full border-[#8C8C8C]/[0.4] w-fit px-4 bg-[#8C8C8C]/[0.3] mb-8">
                            <span class="bg-clip-text text-transparent bg-white text-xs md:text-sm flex space-x-2 items-center">
                                <span>&copy; Created by Masaabu-YT & Fun117</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h1 class="__className_2272f2 text-white text-center text-3xl md:text-6xl mb-4 font-bold">ビル経営ゲームv7.0</h1><!-- Title -->
                    </div>
                    <div>
                        <div class="text-center font-medium text-base md:text-lg text-[#FFFFFF]/[.48] mb-8">Scratchで公開中！</div><!-- sub title -->
                    </div>
                    <div class="w-full">
                        <div class="flex md:flex-row flex-col space-x-0 space-y-4 md:space-y-0 items-center justify-center md:space-x-4 pb-20 w-full relative z-40">
                            <button class="group md:w-fit group w-fit flex justify-center relative rounded-full p-px text-[0.8125rem] font-semibold leading-6 shadow-xl shadow-zinc-950 text-white">
                                <span class="absolute inset-0 overflow-hidden rounded-lg">
                                    <span class="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                </span>
                                <a href="https://scratch.mit.edu/projects/927111186/">
                                    <div class="relative z-10 w-full flex justify-center rounded-lg bg-[#3887FD] bg-opacity-50 hover:bg-opacity-60 transition py-3 px-6 ring-1 items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-white h-4 w-4">
                                            <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z"></path>
                                            <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"></path>
                                        </svg>
                                        <span>Scratchでプレイ</span>
                                    </div>    
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="relative w-full opacity-100" style="transform: none;">
                    <div class="absolute inset-x-0 z-[42] w-full sm:w-[80%] md:w-[50%] mx-auto rounded-md backdrop-blur-sm bg-[#526E89]/[0.2] mt-10 text-sm md:mt-20 flex items-center ">
                        <input placeholder="wikiの情報を検索" class="border-blue-200 border border-opacity-50 rounded-md pl-4 py-3 bg-transparent w-full text-white focus:outline-none focus:shadow-xl focus:shadow-blue-500/[0.1] placeholder:text-xs sm:placeholder:text-base text-sm sm:text-lag md:text-lg" name="input" value="">
                        <div class="absolute right-0 top-1/2 -translate-y-1/2 flex space-x-2 mr-4">
                            <button class="text-xs sm:text-sm px-4 rounded-md py-1 bg-[#FFFFFF] bg-opacity-10 hover:bg-opacity-20 transition text-[#FFFFFF]/[0.6]">
                                <span class="inline sm:hidden">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"></path>
                                    </svg>
                                </span>
                                <span class="hidden sm:inline">Enter</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img alt="Product Preview" loading="lazy" width="1200" height="600" decoding="async" data-nimg="1" class="img_ma invisible sm:visible mx-auto [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 h-full relative z-40 opacity-100" style="color:transparent">
                    </div>
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden">
            <div class="relative mx-auto max-w-7xl px-4">
                <div class="mx-auto block max-w-7xl py-16 md:flex">
                    <div class="md:h-14 md:w-14 h-10 w-10 border border-[#4FAAFF]/[0.2] bg-background flex flex-shrink-0 items-center justify-center rounded-full relative mb-4 mr-2 md:mr-10">
                        <div class="h-8 md:h-14 md:w-14 w-8 rounded-full  border-2 border-[#145088] relative overflow-hidden  flex items-center justify-center">
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" class="absolute inset-0 h-[36px] w-[36px]" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <rect x="-6.5" y="-6.5" width="21.6667" height="21.6667" fill="#132872"></rect>
                                    <rect x="-6.22917" y="-6.22917" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect>
                                    <path d="M15.166 -5.95833H36.8327V-7.04167H15.166V-5.95833ZM36.8327 14.625H15.166V15.7083H36.8327V14.625Z" fill="#3360A3" mask="url(#path-3-inside-1_295_3315)"></path>
                                    <rect x="36.834" y="-6.5" width="21.6667" height="21.6667" fill="#132872"></rect>
                                    <rect x="37.1048" y="-6.22917" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect>
                                    <path d="M14.625 15.1666V36.8333H15.7083V15.1666H14.625ZM-5.95833 36.8333V15.1666H-7.04167V36.8333H-5.95833Z" fill="#3360A3" mask="url(#path-7-inside-2_295_3315)"></path>
                                    <path d="M15.166 15.1666H36.8327V36.8333H15.166V15.1666Z" fill="#132872"></path>
                                    <path d="M57.959 15.1666V36.8333H59.0423V15.1666H57.959ZM37.3757 36.8333V15.1666H36.2923V36.8333H37.3757Z" fill="#3360A3" mask="url(#path-10-inside-3_295_3315)"></path>
                                    <rect x="-6.5" y="36.8334" width="21.6667" height="21.6667" fill="#132872"></rect>
                                    <rect x="-6.22917" y="37.1042" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect>
                                    <path d="M15.166 37.375H36.8327V36.2917H15.166V37.375ZM36.8327 57.9584H15.166V59.0417H36.8327V57.9584Z" fill="#3360A3" mask="url(#path-14-inside-4_295_3315)"></path>
                                    <rect x="36.834" y="36.8334" width="21.6667" height="21.6667" fill="#132872"></rect>
                                    <rect x="37.1048" y="37.1042" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect>
                                </g>
                            </svg>
                            <div class="absolute h-full w-full bg-[#145088]/[0.5]"></div>
                            <span class="relative z-40">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="h-4 w-4 text-white md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="7.62016" y="2.47807" width="17.9014" height="27.0443" rx="8.95071" fill="#275B8B" stroke="#DBE5FF" stroke-width="2.67"></rect>
                                    <rect x="13.1426" y="10.9998" width="6.85714" height="2.67" rx="1.335" fill="#DBE5FF"></rect>
                                    <rect x="13.1426" y="17.6697" width="6.85714" height="2.67" rx="1.335" fill="#DBE5FF"></rect>
                                    <path d="M24.5723 8.00024H28.9516C29.6889 8.00024 30.2866 8.59794 30.2866 9.33524C30.2866 10.0725 29.6889 10.6702 28.9516 10.6702H24.5723V8.00024Z" fill="#DBE5FF"></path>
                                    <path d="M24.5723 14.6702H28.9516C29.6889 14.6702 30.2866 15.2679 30.2866 16.0052C30.2866 16.7425 29.6889 17.3402 28.9516 17.3402H24.5723V14.6702Z" fill="#DBE5FF"></path>
                                    <path d="M24.5723 21.3403H28.9516C29.6889 21.3403 30.2866 21.938 30.2866 22.6753C30.2866 23.4126 29.6889 24.0103 28.9516 24.0103H24.5723V21.3403Z" fill="#DBE5FF"></path>
                                    <path d="M7.42773 8.00024H3.04845C2.31115 8.00024 1.71345 8.59794 1.71345 9.33524C1.71345 10.0725 2.31115 10.6702 3.04845 10.6702H7.42773V8.00024Z" fill="#DBE5FF"></path>
                                    <path d="M7.42773 14.6702H3.04845C2.31115 14.6702 1.71345 15.2679 1.71345 16.0052C1.71345 16.7425 2.31115 17.3402 3.04845 17.3402H7.42773V14.6702Z" fill="#DBE5FF"></path>
                                    <path d="M7.42773 21.3403H3.04845C2.31115 21.3403 1.71345 21.938 1.71345 22.6753C1.71345 23.4126 2.31115 24.0103 3.04845 24.0103H7.42773V21.3403Z" fill="#DBE5FF"></path>
                                </svg>
                            </span>
                        </div>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" class="absolute inset-0 md:h-14 md:w-14 h-10 w-10 animate-spin-slower" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.934 17.3986C60.169 17.2758 60.2602 16.9856 60.1339 16.7525C57.3457 11.608 53.1986 7.32344 48.1407 4.36888C43.0828 1.41433 37.3137 -0.0937062 31.4631 0.00450389C31.198 0.00895321 30.99 0.230954 30.9984 0.495917C31.0068 0.76088 31.2285 0.968456 31.4936 0.96413C37.1638 0.871578 42.7545 2.33432 47.6565 5.19782C52.5585 8.06132 56.5786 12.2127 59.283 17.1973C59.4094 17.4303 59.6991 17.5214 59.934 17.3986Z" fill="url(#paint0_linear_295_3336)"></path>
                            <path d="M0.728977 35.9539C0.465974 35.9872 0.279361 36.2275 0.316556 36.4899C1.13755 42.2835 3.53209 47.7445 7.24366 52.2762C10.9552 56.8078 15.8374 60.2314 21.3557 62.1778C21.6057 62.266 21.878 62.1303 21.9624 61.879C22.0468 61.6278 21.9114 61.356 21.6614 61.2677C16.3143 59.3788 11.5835 56.0599 7.98635 51.6679C4.38917 47.2759 2.06735 41.984 1.26908 36.3695C1.23176 36.107 0.991979 35.9207 0.728977 35.9539Z" fill="url(#paint1_linear_295_3336)"></path>
                            <defs>
                                <linearGradient id="paint0_linear_295_3336" x1="61.5" y1="24.5" x2="31.8785" y2="25.4481" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4FAAFF"></stop>
                                    <stop offset="1" stop-color="#4FAAFF" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_295_3336" x1="-1" y1="27" x2="35" y2="64" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4FAAFF"></stop><stop offset="1" stop-color="#4FAAFF" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div id="changelog_list" class="w-full">
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-40 overflow-hidden relative flex flex-col z-40 items-center justify-center px-4">
            <span class="w-full block absolute top-1/2 transform -translate-y-1/2 h-full">
                <span class="absolute block " style="top: 51%; left: 22%; opacity: 0; transform: scale(0) rotate(360deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 74%; left: 18%; opacity: 0; transform: scale(0) rotate(360deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 31%; left: 74%; opacity: 0.408541; transform: scale(0.00685174) rotate(359.22deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 45%; left: 89%; opacity: 0.370587; transform: scale(0.0503366) rotate(353.529deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 79%; left: 89%; opacity: 0.495239; transform: scale(0.444767) rotate(320.321deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 26%; left: 47%; opacity: 0.408541; transform: scale(0.367414) rotate(318deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 40%; left: 14%; opacity: 0.452821; transform: scale(0.681928) rotate(291.815deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 56%; left: 82%; opacity: 0.509155; transform: scale(1.18149) rotate(257.998deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 89%; left: 70%; opacity: 0.437523; transform: scale(1.23389) rotate(230.847deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 37%; left: 54%; opacity: 0.408541; transform: scale(1.43756) rotate(195.669deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 53%; left: 33%; opacity: 0.481327; transform: scale(2.46084) rotate(132.567deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 24%; left: 31%; opacity: 0.393432; transform: scale(2.01871) rotate(119.303deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 29%; left: 45%; opacity: 0; transform: scale(2.54237) rotate(76.271deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 64%; left: 43%; opacity: 0; transform: scale(2.18099) rotate(65.4296deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 76%; left: 82%; opacity: 0; transform: scale(0.979031) rotate(29.2705deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <span class="absolute block " style="top: 27%; left: 24%; opacity: 0; transform: scale(0.390207) rotate(11.7062deg) translateZ(0px);">
                    <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                        <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                        <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                        <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                    </svg>
                </span>
                <strong class="relative z-10 font-bold"></strong>
            </span>
            <svg width="1258" height="1256" viewBox="0 0 1258 1256" fill="none" class="absolute -bottom-4 z-20 h-full w-full transform scale-125 select-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_423_2552)">
                    <path d="M1094 399.581C789.759 633.875 177.822 1106.17 164 1121L720.648 164L1094 399.581Z" fill="url(#paint0_linear_423_2552)"></path>
                </g>
                <defs>
                    <filter id="filter0_f_423_2552" x="0" y="0" width="1258" height="1285" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feGaussianBlur stdDeviation="82" result="effect1_foregroundBlur_423_2552"></feGaussianBlur>
                    </filter>
                    <linearGradient id="paint0_linear_423_2552" x1="149.727" y1="1138.77" x2="943.659" y2="331.272" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00BFFF"></stop>
                        <stop offset="1" stop-color="#4A58FB" stop-opacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </main>
`);

load_changelog();