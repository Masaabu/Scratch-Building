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

document.getElementById('page_header_mobile').innerHTML = (`
    <div class="block md:hidden">
        <div class="fixed top-4 w-full z-50 ">
            <div class="items-center justify-between px-4 w-full flex">
                <div class="w-full flex items-center justify-between  backdrop-blur-md border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-full ">
                    <a class="flex items-center space-x-2 flex-shrink-0 relative z-50" href="`+windowFileDirectlyPass+`/">
                        <img alt="Cursor Logo" loading="lazy" width="10" height="10" decoding="async" data-nimg="1" class="transition duration-300 transform blur-0 scale-100 h-5 w-5" style="color:transparent" src="`+windowFileDlCPass+`/assets/image/@Masaabu-YT_icon.png">
                        <span class="text-lg text-[#CCCCCC] font-medium">ビル経営ゲーム</span>
                    </a>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-white h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
`)