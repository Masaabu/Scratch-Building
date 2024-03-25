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
        "link_app_logo": (windowFileDirectlyPass + "/assets/image/Masaabu_yticon.webp"),
        "link_home": (windowFileDirectlyPass + "/"),
        "link_play": (windowFileDirectlyPass + "/pages/game/"),
        "link_mod": (windowFileDirectlyPass + "/pages/mods/"),
        "link_wiki": (windowFileDirectlyPass + "/pages/wiki/"),
        "link_login": (windowFileDirectlyPass + "/pages/account/login/"),
        "link_signup": (windowFileDirectlyPass + "/pages/account/signup/"),
        "link_setting": (windowFileDirectlyPass + "/pages/user/setting/"),
        "link_discord": ("https://discord.gg/KhAd9zBrBk"),
        "link_source_code_on": ("https://github.com/Masaabu/Scratch-Building"),
    }
];
file_path_data=(file_path_data["0"]);

document.getElementById('page_header_pc').innerHTML=(`
<div class="hidden md:block">
    <div class="fixed inset-x-0 top-4 z-50 w-full" >
        <div class="fadeDown flex justify-between text-white max-w-7xl gap-4 mx-auto border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-lg w-[95%] inset-x-0 backdrop-blur-md z-50" style="backdrop-filter: blur(10px) brightness(var(--blur-brightness));">
            <a id="link_href_header_pc_home_logo" class="flex items-center space-x-2 flex-shrink-0 relative z-50" href="${file_path_data.link_home}">
                <img id="link_href_header_pc_app_logo" alt="Cursor Logo" loading="lazy" width="10" height="10" decoding="async" data-nimg="1" class="transition duration-300 transform blur-0 scale-100 h-5 w-5" style="color:transparent" src="${file_path_data.link_app_logo}">
                <span class="text-lg text-[#CCCCCC] font-medium">ビル経営ゲーム</span>
            </a>
            <div class="flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 py-2 space-x-6 text-sm items-center justify-center px-3 font-medium overflow-hidden">
                <a id="link_href_header_pc_home" rel="noopener noreferrer" href="${file_path_data.link_home}" class="relative group bg-transparent hover:text-white/[0.64] transition duration-200">ホーム</a>
                <a id="link_href_header_pc_play" rel="noopener noreferrer" href="${file_path_data.link_play}" class="relative group bg-transparent hover:text-white/[0.64] transition duration-200">プレイ</a>
                <a id="link_href_header_pc_mod" rel="noopener noreferrer" href="${file_path_data.link_mod}" class="relative group bg-transparent hover:text-white/[0.64] transition duration-200">MOD</a>
                <a id="link_href_header_pc_wiki" rel="noopener noreferrer" href="${file_path_data.link_wiki}" class="relative group bg-transparent hover:text-white/[0.64] transition duration-200">Wiki</a>
                <a id="link_href_header_pc_wiki" rel="noopener noreferrer" href="${file_path_data.link_setting}" class="relative group bg-transparent hover:text-white/[0.64] transition duration-200">設定</a>
            </div>
            <div class="flex space-x-4 items-center">
                <a href="${file_path_data.link_login}" class="text-sm font-medium text-white text-opacity-60 hover:text-opacity-80 transition" style="font-size:18px;margin:auto 0;"><i class="fa-solid fa-circle-user text-sm font-medium text-white hover:text-opacity-80 transition" style="font-size:18px;margin:auto 0;"></i></a>
                <a href="#" class="text-sm font-medium text-white text-opacity-60 hover:text-opacity-80 transition" onclick="toggleTheme()" style="font-size:18px;margin-top:auto;margin-bottom:auto"><i class="fa-solid fa-circle-half-stroke" style="font-size:18px;margin:auto 0;"></i></a>
                <button></button>
            </div>
        </div>
    </div>
</div>
`);

document.getElementById('page_header_mobile').innerHTML=(`
<div class="block md:hidden">
    <div id="headerMobBoxsMaser" class="fixed top-4 w-full z-50 ">
        <div class="items-center justify-between px-4 w-full flex">
            <div class="fadeDown w-full flex items-center justify-between  backdrop-blur-md border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-full" style="backdrop-filter: blur(10px) brightness(var(--blur-brightness));">
                <a id="link_href_header_mobile_home_logo" class="flex items-center space-x-2 flex-shrink-0 relative z-50" href="${file_path_data.link_home}">
                    <img id="link_href_header_mobile_app_logo" alt="Cursor Logo" loading="lazy" width="10" height="10" decoding="async" data-nimg="1" class="transition duration-300 transform blur-0 scale-100 h-5 w-5" style="color:transparent" src="${file_path_data.link_app_logo}">
                    <span class="text-lg text-[#CCCCCC] font-medium">ビル経営ゲーム</span>
                </a>
                <div style="display:flex; gap:10px;">
                    <a href="#" onclick="headerMobBoxs();set_file_path_mobile()">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-white h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="headerMobBoxsAA" style="display: none;">
            <div class="fadeIn fixed inset-0 bg-background z-50 flex flex-col justify-center items-center space-y-10  text-xl font-bold text-zinc-600  hover:text-zinc-800 transition duration-200" style="opacity: 1; height: 100vh;">
                <div class="absolute right-8 top-6 h-5 w-5 text-white/[0.64] flex" style="gap:10px;right:5rem;">
                    <a href="#" class="flex items-center space-x-2 flex-shrink-0 relative z-50" onclick="class_change();headerMobBoxs()">
                        <i class="fa-solid fa-circle-half-stroke text-sm font-medium text-white hover:text-opacity-80 transition" style="font-size:18px;margin-top:auto;margin-bottom:auto"></i>
                    </a>
                    <a style="" class="flex items-center space-x-2 flex-shrink-0 relative z-50" href="${file_path_data.link_login}">
                        <i class="fa-solid fa-circle-user text-sm font-medium text-white hover:text-opacity-80 transition" style="font-size:18px;margin-top:auto;margin-bottom:auto"></i>
                    </a>
                    <a href="#" class="flex items-center space-x-2 flex-shrink-0 relative z-50" onclick="headerMobBoxs()">
                        <i class="fa-regular fa-circle-xmark text-sm font-medium text-white hover:text-opacity-80 transition" style="font-size:18px;margin-top:auto;margin-bottom:auto"></i>
                    </a>
                </div>
                <a id="link_href_header_mobile_home" class="fadeDown1 relative" href="${file_path_data.link_home}">
                    <span class="block text-white/[0.64]" style="opacity: 1; transform: translateX(0vw) translateZ(0px);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ホーム</font></font> </span>
                </a>
                <a id="link_href_header_mobile_play" class="fadeDown2 relative" href="${file_path_data.link_play}">
                    <span class="block text-white/[0.64]" style="opacity: 1; transform: translateX(0vw) translateZ(0px);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">プレイ</font></font> </span>
                </a>
                <a id="link_href_header_mobile_mod" class="fadeDown3 relative" href="${file_path_data.link_mod}">
                    <span class="block text-white/[0.64]" style="opacity: 1; transform: translateX(0vw) translateZ(0px);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MOD</font></font> </span>
                </a>
                <a id="link_href_header_mobile_wiki" class="fadeDown4 relative" href="${file_path_data.link_wiki}">
                    <span class="block text-white/[0.64]" style="opacity: 1; transform: translateX(0vw) translateZ(0px);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Wiki</font></font> </span>
                </a>
                <a id="link_href_header_mobile_wiki" class="fadeDown4 relative" href="${file_path_data.link_setting}">
                    <span class="block text-white/[0.64]" style="opacity: 1; transform: translateX(0vw) translateZ(0px);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">設定</font></font> </span>
                </a>
                <a id="link_href_header_mobile_discord" class="fadeDown5 relative" href="${file_path_data.link_discord}" target="__blank">
                    <span class="block text-white/[0.64]" style="opacity: 1; transform: translateX(0vw) translateZ(0px);"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Discord</font></font> </span>
                </a>
            </div>
        </div>
    </div>
</div>
`);

function headerMobBoxs(){
    if((document.getElementById('headerMobBoxsAA').style.display) === 'none'){
        document.getElementById('headerMobBoxsAA').style.display = ('block')
    }else{
        document.getElementById('headerMobBoxsAA').style.display = ('none')
    }
}