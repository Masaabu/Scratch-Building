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
var windowFileDirectlyPass_JS_page_footer = windowFileDlCPass;
// `+windowFileDirectlyPass+`

document.getElementById('page_footer').innerHTML = (`
    <div class="border-t border-[#FFFFFF]/[0.16] bg-[#0B0F17] pt-20 pb-10 px-4 relative overflow-hidden  z-50">
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
                    <a class="flex items-center space-x-2 flex-shrink-0 relative z-50" href="/">
                        <img alt="logo" loading="lazy" width="10" height="10" decoding="async" data-nimg="1" class="transition duration-300 transform blur-0 scale-100 h-5 w-5" style="color:transparent" src="`+windowFileDirectlyPass_JS_page_footer+`/assets/image/@Masaabu-YT_icon.png">
                        <span class="text-lg text-[#CCCCCC] font-medium">ビル経営ゲーム</span>
                    </a>
                    <p class="text-[#FFFFFF]/[0.64] text-sm mt-2 max-w-sm font-normal">ビル経営ゲームはScratchで作られたビルを作るシミュレーションゲームです。</p>
                </div>
                <div>
                    <p class="text-[#FFFFFF]/[0.64] text-sm mt-2 max-w-sm font-normal">@Masaabu-YT</p>
                    <div class="flex space-x-2">
                        <a target="__blank" rel="noopener noreferrer" href="https://github.com/Masaabu" class="font-normal mt-4 text-white/[0.64] flex space-x-2 items-center">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a target="__blank" rel="noopener noreferrer" href="https://youtube.com/@masaabu_" class="font-normal mt-4 text-white/[0.64] flex space-x-2 items-center">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2  md:flex">
                <div class="flex flex-col text-sm md:px-4 mb-4">
                    <a rel="noopener noreferrer" href="`+windowFileDirectlyPass_JS_page_footer+`/" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all">Home</a>
                    <a rel="noopener noreferrer" href="`+windowFileDirectlyPass_JS_page_footer+`/pages/mods/" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all">mods</a>
                    <a rel="noopener noreferrer" href="`+windowFileDirectlyPass_JS_page_footer+`/pages/guides/mods/sbmod/" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all">Guides</a>
                    <a rel="noopener noreferrer" href="`+windowFileDirectlyPass_JS_page_footer+`/pages/qa/v7/" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all">Q&A</a>
                    <a rel="noopener noreferrer" href="`+windowFileDirectlyPass_JS_page_footer+`/pages/changelog/v7/" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all">changelog</a>
                    <a target="__blank" rel="noopener noreferrer" href="https://discord.gg/KhAd9zBrBk" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all">Discord</a>
                    <a target="__blank" rel="noopener noreferrer" href="https://github.com/Masaabu/Scratch-Building" class="font-normal mt-4 text-white/[0.64] hover:text-white transition-all">Source code on GitHub</a>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto pt-20 pb-10">
            <div class="h-px w-full bg-gradient-to-r from-transparent via-[#989AA6]/[0.5] to-transparent"></div>
            <div class="text-sm pt-4 text-center text-white/[0.64] flex items-center flex-wrap justify-center">
                <a target="__blank" rel="noopener noreferrer" href="https://github.com/Fun117">fun117.kun@gmail.com / Made with by<span style="width:3px"></span>Fun117</a>
            </div>
        </div>
    </div>
`)