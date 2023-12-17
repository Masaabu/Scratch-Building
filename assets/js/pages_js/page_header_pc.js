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

document.getElementById('page_header_pc').innerHTML = (`
    <div class="hidden md:block">
        <div class="fixed inset-x-0 top-4 z-50 w-full">
            <div class="flex justify-between text-white max-w-7xl gap-4 mx-auto border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-lg w-[95%] inset-x-0 backdrop-blur-md z-50">
                <a class="flex items-center space-x-2 flex-shrink-0 relative z-50" href="`+windowFileDirectlyPass+`/">
                    <img alt="Cursor Logo" loading="lazy" width="10" height="10" decoding="async" data-nimg="1" class="transition duration-300 transform blur-0 scale-100 h-5 w-5" style="color:transparent" src="`+windowFileDlCPass+`/assets/image/@Masaabu-YT_icon.png">
                    <span class="text-lg text-[#CCCCCC] font-medium">ビル経営ゲーム</span>
                </a>
                <div class="flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 py-2 space-x-6 text-sm items-center justify-center px-6 font-medium overflow-hidden">
                    <a target="__blank" rel="noopener noreferrer" href="https://scratch.mit.edu/studios/31959115/" class="relative group bg-transparent hover:text-white/[0.64] transition duration-200">Scratch</a>
                    <a target="__blank" rel="noopener noreferrer" href="https://discord.gg/KhAd9zBrBk" class="relative group bg-transparent hover:text-white/[0.64] transition duration-200">Discord</a>
                    <a target="__blank" rel="noopener noreferrer" href="https://github.com/Masaabu/Scratch-Building" class="relative group bg-transparent hover:text-white/[0.64] transition duration-200">GitHub</a>
                </div>
                <div class="flex space-x-4 items-center">
                    <a href="/api/auth/login" class="text-sm font-medium text-white text-opacity-60 hover:text-opacity-80 transition">Sign in</a>
                    <button class="group relative rounded-full p-px text-[0.8125rem] font-semibold leading-6 shadow-xl shadow-zinc-950 text-white">
                        <span class="absolute inset-0 overflow-hidden rounded-full">
                            <span class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
`)