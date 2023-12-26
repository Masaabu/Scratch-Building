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

// Configuration of link elements in this directory
var file_path_data = [
    {
        "link_Masaabu_github": 'https://github.com/Masaabu',
        "link_Masaabu_youtube": 'https://youtube.com/@masaabu_',
        "link_app_logo": (windowFileDirectlyPass + "/assets/image/Masaabu_yticon.png"),
        "link_home": (windowFileDirectlyPass + "/"),
        "link_play": (windowFileDirectlyPass + "/pages/game/"),
        "link_mod": (windowFileDirectlyPass + "/pages/mods/"),
        "link_wiki": (windowFileDirectlyPass + "/pages/wiki/"),
        "link_discord": ("https://discord.gg/KhAd9zBrBk"),
        "link_source_code_on": ("https://github.com/Masaabu/Scratch-Building"),
    }
];
file_path_data=(file_path_data["0"]);

document.getElementById('page_footer').innerHTML=(`
<div class="border-t border-[#FFFFFF]/[0.16] bg-[#0B0F17] pt-20 pb-10 px-4 relative overflow-hidden  z-50" style="background-color: var(--background-4);">
    <svg viewBox="0 0 1024 1024" class="absolute z-30 left-1/2  top-0  h-[100rem] w-[100rem] opacity-50 pointer-events-none -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle>
        <defs>
            <radialGradient class="blur-lg" id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stop-color="var(--cyan-800)"></stop>
                <stop offset="1" stop-color="var(--cyan-800)"></stop>
            </radialGradient>
        </defs>
    </svg>
    <div class="flex md:flex-row flex-col w-full max-w-7xl mx-auto justify-between">
        <div class="lg:w-[50%] flex flex-col justify-between ">
            <div>
                <a id="link_href_header_footer_home_logo" class="flex items-center space-x-2 flex-shrink-0 relative z-50" href="${file_path_data.link_home}">
                    <img id="link_href_header_footer_app_logo" alt="logo" loading="lazy" width="10" height="10" decoding="async" data-nimg="1" class="transition duration-300 transform blur-0 scale-100 h-5 w-5" style="color:transparent" src="${file_path_data.link_app_logo}">
                    <span class="text-lg text-[#CCCCCC] font-medium" style="color: var(--text-1);">ビル経営ゲーム</span>
                </a>
                <p class="text-[#FFFFFF]/[0.64] text-sm mt-2 max-w-sm font-normal" style="color: var(--text-1);">ビル経営ゲームはScratchで作られたビルを作るシミュレーションゲームです。</p>
            </div>
            <div>
                <p class="text-[#FFFFFF]/[0.64] text-sm mt-2 max-w-sm font-normal" style="color: var(--text-1);">@Masaabu-YT</p>
                <div class="flex space-x-2">
                    <a id="link_href_header_footer_Masaabu_github" target="__blank" rel="noopener noreferrer" href="${file_path_data.link_Masaabu_github}" class="font-normal mt-4 text-white/[0.64] flex space-x-2 items-center" style="color: var(--text-1);">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a id="link_href_header_footer_Masaabu_youtube" target="__blank" rel="noopener noreferrer" href="${file_path_data.link_Masaabu_youtube}" class="font-normal mt-4 text-white/[0.64] flex space-x-2 items-center" style="color: var(--text-1);">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2  md:flex">
            <div class="flex flex-col text-sm md:px-4 mb-4">
                <a id="link_href_header_footer_home" rel="noopener noreferrer" href="${file_path_data.link_home}" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all" style="color: var(--text-1);">ホーム</a>
                <a id="link_href_header_footer_play" rel="noopener noreferrer" href="${file_path_data.link_play}" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all" style="color: var(--text-1);">プレイ</a>
                <a id="link_href_header_footer_mod" rel="noopener noreferrer" href="${file_path_data.link_mod}" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all" style="color: var(--text-1);">MOD</a>
                <a id="link_href_header_footer_wiki" rel="noopener noreferrer" href="${file_path_data.link_wiki}" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all" style="color: var(--text-1);">Wiki</a>
                <a id="link_href_header_footer_discord" rel="noopener noreferrer" target="_blank" href="${file_path_data.link_discord}" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all" style="color: var(--text-1);">Discord</a>
            </div>
            <div class="flex flex-col text-sm md:px-4 mb-4">
                <a id="null" rel="noopener noreferrer" href="${windowFileDirectlyPass}/pages/development/" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all" style="color: var(--text-1);">開発する</a>
                <a id="link_href_header_footer_source_code_on" rel="noopener noreferrer" target="_blank" href="${file_path_data.link_source_code_on}" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all" style="color: var(--text-1);">ソースコードGitHub</a>
            </div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto pt-20 pb-10">
        <div class="h-px w-full bg-gradient-to-r from-transparent via-[#989AA6]/[0.5] to-transparent"></div>
        <div class="text-sm pt-4 text-center text-white/[0.64] flex items-center flex-wrap justify-center">
            <a target="__blank" rel="noopener noreferrer" href="https://github.com/Fun117" style="color: var(--text-1);">fun117.kun@gmail.com / Made with by<span style="width:3px"></span>Fun117</a>
        </div>
    </div>
</div>
`);