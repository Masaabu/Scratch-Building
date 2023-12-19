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
var windowFileDirectlyPass_JS_page_home = windowFileDlCPass;
// `+windowFileDirectlyPass+`

var game_title = `ビル経営ゲーム`;
var new_version = `7.0`;

var game_new_title = `ビル経営ゲームv7.0`;



document.getElementById('page_home_main').innerHTML = (`
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
            <div class="pb-10 text-white max-w-7xl mx-auto overflow-hidden">
            <h2 class="text-center text-lg md:text-lg font-medium text-[#FFFFFF]/[0.54] max-w-[16rem] md:max-w-none mx-auto">制作協力者 / クレジット</h2>
            <div class="relative py-10 md:py-12">
                <div class="max-w-6xl mx-auto flex flex-wrap justify-center sm:justify-center items-center">
                    <a class="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style="font-size: 30px;">@yossansan</a>
                    <a class="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style="font-size: 30px;">@banana_877_</a>
                    <a class="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style="font-size: 30px;">@dmmo-com-js</a>
                    <a class="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style="font-size: 30px;">@pasuta3252</a>
                    <a class="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style="font-size: 30px;">@wood_sword</a>
                    <a class="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style="font-size: 30px;">効果音ラボ</a>
                    <a class="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style="font-size: 30px;">@FF_01010010</a>
                    <a class="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style="font-size: 30px;">steakMC</a>
                    <a class="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style="font-size: 30px;">@TimMcCool</a>
                    <a class="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style="font-size: 30px;">@Fun117</a>
                </div>
            </div>
            </div>
            <div class="relative overflow-hidden">
            <div class="text-white  h-[30rem] relative overflow-hidden px-8">
                <div class="pointer-events-none">
                    <div class="absolute inset-0 rounded-2xl  opacity-100" style="mask-image:radial-gradient(700px 400px, white, transparent);-webkit-mask-image:radial-gradient(700px 400px, white, transparent)">
                        <span class="absolute z-30 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] style_meteor__WvYiw left-1/2" style="visibility: visible; --meteor-delay: 1s; --meteor-duration: 3s; --meteor-width: 150px;"></span>
                        <span class="absolute z-30 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] style_meteor__WvYiw left-[80%]" style="visibility: visible; --meteor-delay: 2s; --meteor-duration: 2s; --meteor-width: 150px;"></span>
                        <span class="absolute z-30 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] style_meteor__WvYiw left-[68.5%]" style="visibility: hidden; --meteor-delay: 1s; --meteor-duration: 2s; --meteor-width: 150px;"></span>
                        <span class="absolute z-30 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] style_meteor__WvYiw left-[38.4%]" style="visibility: visible; --meteor-delay: 2s; --meteor-duration: 2s; --meteor-width: 150px;"></span>
                        <span class="absolute z-30 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] style_meteor__WvYiw left-[29.2%]" style="visibility: visible; --meteor-delay: 0s; --meteor-duration: 2s; --meteor-width: 150px;"></span>
                        <div class="absolute top-0  h-20  opacity-100 w-full bg-gradient-to-b from-background to-transparent z-20"></div>
                        <svg width="1082" height="481" viewBox="0 0 1082 481" fill="none" class="absolute top-8 right-1/2 transform translate-x-1/2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 480.5L1082 480.5" stroke="url(#paint0_linear_295_2711)"></path>
                            <path d="M0 440.5L1082 440.5" stroke="url(#paint1_linear_295_2711)"></path>
                            <path d="M0 400.5L1082 400.5" stroke="url(#paint2_linear_295_2711)"></path>
                            <path d="M0 360.5L1082 360.5" stroke="url(#paint3_linear_295_2711)" stroke-dasharray="6 6"></path>
                            <path d="M0 320.5L1082 320.5" stroke="url(#paint4_linear_295_2711)"></path>
                            <path d="M0 280.5L1082 280.5" stroke="url(#paint5_linear_295_2711)" stroke-dasharray="6 6"></path>
                            <path d="M0 240.5L1082 240.5" stroke="url(#paint6_linear_295_2711)"></path>
                            <path d="M0 200.5L1082 200.5" stroke="url(#paint7_linear_295_2711)"></path>
                            <path d="M0 160.5L1082 160.5" stroke="url(#paint8_linear_295_2711)"></path>
                            <path d="M0 120.5L1082 120.5" stroke="url(#paint9_linear_295_2711)" stroke-dasharray="6 6"></path>
                            <path d="M0 80.5L1082 80.5" stroke="url(#paint10_linear_295_2711)"></path>
                            <path opacity="0.5" d="M0 40.5L1082 40.5" stroke="url(#paint11_linear_295_2711)"></path>
                            <path opacity="0.5" d="M0 0.5L1082 0.5" stroke="url(#paint12_linear_295_2711)" stroke-dasharray="6 6"></path>
                            <defs>
                                <linearGradient id="paint0_linear_295_2711" x1="0" y1="480" x2="1082" y2="480" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1B4060" stop-opacity="0"></stop><stop offset="0.520833" stop-color="#1B4060"></stop>
                                    <stop offset="1" stop-color="#1B4060" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_295_2711" x1="0" y1="440" x2="1082" y2="440" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1B4060" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#1B4060"></stop>
                                    <stop offset="1" stop-color="#1B4060" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint2_linear_295_2711" x1="0" y1="400" x2="1082" y2="400" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1B4060" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#1B4060"></stop>
                                    <stop offset="1" stop-color="#1B4060" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint3_linear_295_2711" x1="0" y1="360" x2="1082" y2="360" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1B4060" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#1B4060"></stop>
                                    <stop offset="1" stop-color="#1B4060" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint4_linear_295_2711" x1="0" y1="320" x2="1082" y2="320" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1B4060" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#1B4060"></stop>
                                    <stop offset="1" stop-color="#1B4060" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint5_linear_295_2711" x1="0" y1="280" x2="1082" y2="280" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1B4060" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#1B4060"></stop>
                                    <stop offset="1" stop-color="#1B4060" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint6_linear_295_2711" x1="0" y1="240" x2="1082" y2="240" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1B4060" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#1B4060"></stop>
                                    <stop offset="1" stop-color="#1B4060" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint7_linear_295_2711" x1="0" y1="200" x2="1082" y2="200" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1B4060" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#1B4060"></stop>
                                    <stop offset="1" stop-color="#1B4060" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint8_linear_295_2711" x1="0" y1="160" x2="1082" y2="160" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0364583" stop-color="#1B4060" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#1B4060"></stop>
                                    <stop offset="0.963542" stop-color="#1B4060" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint9_linear_295_2711" x1="0" y1="120" x2="1082" y2="120" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0416667" stop-color="#1366AE" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#0D3C65"></stop>
                                    <stop offset="0.947917" stop-color="#1366AE" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint10_linear_295_2711" x1="0" y1="80" x2="1082" y2="80" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0885417" stop-color="#1366AE" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#0D3C65"></stop>
                                    <stop offset="0.90625" stop-color="#1366AE" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint11_linear_295_2711" x1="0" y1="40" x2="1082" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0833333" stop-color="#1366AE" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#0D3C65"></stop>
                                    <stop offset="0.927083" stop-color="#1366AE" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint12_linear_295_2711" x1="0" y1="0" x2="1082" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0833333" stop-color="#1B4060" stop-opacity="0"></stop>
                                    <stop offset="0.520833" stop-color="#1B4060"></stop>
                                    <stop offset="0.927083" stop-color="#1B4060" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full  fill-[#FFFFFF]/[0.02] stroke-[#0D3C65]/[0.5] ">
                            <defs>
                                <pattern id="40-40-50%-16-0,1,1,1,1,3,-5,3,1,4" width="40" height="40" patternUnits="userSpaceOnUse" x="50%" y="16">
                                    <path d="M.5 40V.5H40" fill="none"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" stroke-width="0" fill="url(#40-40-50%-16-0,1,1,1,1,3,-5,3,1,4)"></rect>
                            <svg x="50%" y="16" class="overflow-visible" id="50%-16">
                                <rect stroke-width="0" width="41" height="41" x="0" y="40" id="50%-16-0-1"></rect>
                                <rect stroke-width="0" width="41" height="41" x="40" y="40" id="50%-16-1-1"></rect>
                                <rect stroke-width="0" width="41" height="41" x="40" y="120" id="50%-16-1-3"></rect>
                                <rect stroke-width="0" width="41" height="41" x="-200" y="120" id="50%-16--5-3"></rect>
                                <rect stroke-width="0" width="41" height="41" x="40" y="160" id="50%-16-1-4"></rect>
                            </svg>
                        </svg>
                    </div>
                </div>
                <div class="absolute  h-[70rem] w-[70rem] bg-gradient-to-b from-[#3887FD]/[0.5] to-[#9CB2FF]/[0.5] overflow-hidden rounded-full top-32 left-1/2 -translate-x-1/2  shadow-[0px_2px_40px_7px_#224EFF30]"></div>
                <div class="absolute   h-[70rem] w-[70rem] bg-gradient-to-b from-[#030A22] to-[#000000] left-1/2 -translate-x-1/2 rounded-full top-[129px] flex flex-col items-center justify-start"></div>
                <div class="absolute bottom-0 w-full h-20 bg-background [mask-image:linear-gradient(to_top,white,transparent)] pointer-events-none"></div>
                <div class="flex items-center mt-56 flex-col relative z-20">
                    <h1 class="__className_2272f2 text-white text-center text-3xl md:text-6xl mb-4 font-bold">気軽にMOD開発！</h1><!-- Title -->
                    <p class="text-center font-medium text-lg md:text-lg text-[#FFFFFF]/[.48] mb-8">ビル経営ゲームのMODを作りたいと思ったことはありませんか？<br>そんなあなたへ！誰でも簡単にMODを作れるプロジェクトを見てみましょう！</p><!-- sub title-->
                    <div class="w-full">
                        <div class="flex md:flex-row flex-col space-x-0 space-y-4 md:space-y-0 items-center justify-center md:space-x-4 pb-20 w-full relative z-40">
                            <button class="group md:w-fit group w-fit flex justify-center relative rounded-full p-px text-[0.8125rem] font-semibold leading-6 shadow-xl shadow-zinc-950 text-white">
                                <span class="absolute inset-0 overflow-hidden rounded-lg">
                                    <span class="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                </span>
                                <a href="./pages/mods/">
                                    <div class="relative z-10 w-full flex justify-center rounded-lg bg-[#3887FD] bg-opacity-50 hover:bg-opacity-60 transition py-3 px-6 ring-1 items-center space-x-2">
                                        <span>ページに移動</span>
                                    </div>    
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="absolute left-0 top-1/2" style="color:transparent" srcset="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-left.png&w=640&q=75 1x, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-left.png&w=640&q=75 2x" src="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-left.png&w=640&q=75">
            <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="absolute bottom-[10%] right-0" style="color:transparent" srcset="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-right.png&w=640&q=75 1x, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-right.png&w=640&q=75 2x" src="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-right.png&w=640&q=75">
            <div class="relative mx-auto max-w-7xl px-4"><svg width="1220" height="1687" viewBox="0 0 1220 1687" fill="none" class="pointer-events-none absolute left-10  top-28 hidden select-none md:block" xmlns="http://www.w3.org/2000/svg"><path d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048" stroke="#3887FD" stroke-opacity="0.15" stroke-width="3"></path><path d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048" stroke="var(--blue-500)" stroke-opacity="1" stroke-linecap="round" stroke-width="3" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path></svg>
                <div class="mx-auto max-w-7xl py-16 md:flex md:h-[816px]">
                    <div class="md:h-14 md:w-14 h-10 w-10 border border-[#4FAAFF]/[0.2] bg-background flex flex-shrink-0 items-center justify-center rounded-full relative mb-4 mr-2 md:mr-10">
                        <div class="h-8 md:h-14 md:w-14 w-8 rounded-full  border-2 border-[#145088] relative overflow-hidden  flex items-center justify-center"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" class="absolute inset-0 h-[36px] w-[36px]" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><rect x="-6.5" y="-6.5" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="-6.22917" y="-6.22917" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect><path d="M15.166 -5.95833H36.8327V-7.04167H15.166V-5.95833ZM36.8327 14.625H15.166V15.7083H36.8327V14.625Z" fill="#3360A3" mask="url(#path-3-inside-1_295_3315)"></path><rect x="36.834" y="-6.5" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="37.1048" y="-6.22917" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect><path d="M14.625 15.1666V36.8333H15.7083V15.1666H14.625ZM-5.95833 36.8333V15.1666H-7.04167V36.8333H-5.95833Z" fill="#3360A3" mask="url(#path-7-inside-2_295_3315)"></path><path d="M15.166 15.1666H36.8327V36.8333H15.166V15.1666Z" fill="#132872"></path><path d="M57.959 15.1666V36.8333H59.0423V15.1666H57.959ZM37.3757 36.8333V15.1666H36.2923V36.8333H37.3757Z" fill="#3360A3" mask="url(#path-10-inside-3_295_3315)"></path><rect x="-6.5" y="36.8334" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="-6.22917" y="37.1042" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect><path d="M15.166 37.375H36.8327V36.2917H15.166V37.375ZM36.8327 57.9584H15.166V59.0417H36.8327V57.9584Z" fill="#3360A3" mask="url(#path-14-inside-4_295_3315)"></path><rect x="36.834" y="36.8334" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="37.1048" y="37.1042" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect></g></svg>
                            <div class="absolute h-full w-full bg-[#145088]/[0.5]"></div>
                            <span class="relative z-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-white md:h-6 md:w-6">
                                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                                    <path d="M12 11l0 .01"></path>
                                    <path d="M8 11l0 .01"></path>
                                    <path d="M16 11l0 .01"></path>
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
                                    <stop stop-color="#4FAAFF"></stop>
                                    <stop offset="1" stop-color="#4FAAFF" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-xl font-semibold text-[#D1D7E1] md:text-4xl">お知らせ・<span class="text-[#6094F8]">新着情報</span></h1><!-- Title -->
                        <p class="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg">ビル経営ゲームでクラウドセーブを行った人の数が3000人を超えました！これからもビル経営ゲームをよろしくお願いします！</p><!-- sub title -->
                        <div class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                            <a href="./pages/changelog/v7/">
                                <div class="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl pl-5 pr-5">
                                    <div class="mb-8 flex max-w-md flex-col gap-2">
                                        <h3 class="text-xl font-medium text-white md:text-3xl">ビル経営ゲームv7 更新履歴</h3>
                                        <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">公開日：2023-12-02<br>最終更新：2023-12-04</p>
                                        <h3 class="text-xl font-medium text-white md:text-3xl">v7.0.2</h3>
                                        <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                            2023-12-04
                                            <li>他のユーザーのビルを見る機能を追加</li>
                                            <li>ビル経営ゲームへの参加日表示を更新</li>
                                            <li>チャットの追加</li>
                                            <li>猫の種類(speed) を追加</li>
                                            <li>クリエイティブ-コマンドを追加</li>
                                        </p>
                                        <h3 class="text-xl font-medium text-white md:text-3xl">v7.0.1</h3>
                                        <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                            2023-12-03
                                            <li>ビルハブの追加</li>
                                            <li>クリエイティブの仮実装（タブレット）</li>
                                        </p>
                                    </div>
                                    <div class="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]"></div>
                                    <div class="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]"></div>
                                    <div class="aspect-1 relative h-full w-full" style="opacity: 1; transform: none;">
                                        <div class="aspect-[inherit] absolute left-0 top-0 h-full w-full" style="background: url(&quot;/landing/features/card-examples/browse.png&quot;) center top / cover no-repeat; opacity: 1;"></div>
                                    </div>
                                </div>
                            </a>
                            <a href="./pages/mods/">
                                <div class="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl pl-5 pr-5">
                                    <div class="mb-8 flex max-w-md flex-col gap-2">
                                        <h3 class="text-xl font-medium text-white md:text-3xl">ビル経営ゲーム MOD</h3>
                                        <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">ビル経営ゲームのMODはゲームをより面白くできる拡張機能のようなものです！自分で作ることもできるので是非 [前提MOD] と書いてあるプロジェクトを見てみてください！</p>
                                        <h3 class="text-xl font-medium text-white md:text-3xl">SB MOD [v7]</h3>
                                        <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">
                                            by @Masaabu-YT
                                        </p>
                                        <h3 class="text-xl font-medium text-white md:text-3xl">SBAPI [v7]</h3>
                                        <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">
                                            by @dmmo-com-jp
                                        </p>
                                        <h3 class="text-xl font-medium text-white md:text-3xl">SB Addons [v6]</h3>
                                        <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">
                                            by @-Masaabu-
                                            <li>GUIがあり、機能のon/offを切り替えられるため、簡単に利用できる。オーバーレイなどもあるため、色々な情報を画面に表示することもできる。</li>
                                        </p>
                                        <h3 class="text-xl font-medium text-white md:text-3xl">SB Addon API [v6]</h3>
                                        <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">
                                            by @dmmo-com-jp
                                        </p>
                                    </div>
                                    <div class="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]"></div>
                                    <div class="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]"></div>
                                    <div class="aspect-1 relative h-full w-full" style="opacity: 1; transform: none;">
                                        <div class="aspect-[inherit] absolute left-0 top-0 h-full w-full" style="background: url(&quot;/landing/features/card-examples/browse.png&quot;) center top / cover no-repeat; opacity: 1;"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mx-auto block max-w-7xl py-16 md:-mr-4 md:mt-10 md:flex">
                    <div class="md:h-14 md:w-14 h-10 w-10 border border-[#4FAAFF]/[0.2] bg-background flex-shrink-0 items-center justify-center rounded-full relative mb-4 ml-auto block md:hidden">
                        <div class="h-8 md:h-14 md:w-14 w-8 rounded-full  border-2 border-[#145088] relative overflow-hidden  flex items-center justify-center"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" class="absolute inset-0 h-[36px] w-[36px]" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><rect x="-6.5" y="-6.5" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="-6.22917" y="-6.22917" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect><path d="M15.166 -5.95833H36.8327V-7.04167H15.166V-5.95833ZM36.8327 14.625H15.166V15.7083H36.8327V14.625Z" fill="#3360A3" mask="url(#path-3-inside-1_295_3315)"></path><rect x="36.834" y="-6.5" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="37.1048" y="-6.22917" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect><path d="M14.625 15.1666V36.8333H15.7083V15.1666H14.625ZM-5.95833 36.8333V15.1666H-7.04167V36.8333H-5.95833Z" fill="#3360A3" mask="url(#path-7-inside-2_295_3315)"></path><path d="M15.166 15.1666H36.8327V36.8333H15.166V15.1666Z" fill="#132872"></path><path d="M57.959 15.1666V36.8333H59.0423V15.1666H57.959ZM37.3757 36.8333V15.1666H36.2923V36.8333H37.3757Z" fill="#3360A3" mask="url(#path-10-inside-3_295_3315)"></path><rect x="-6.5" y="36.8334" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="-6.22917" y="37.1042" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect><path d="M15.166 37.375H36.8327V36.2917H15.166V37.375ZM36.8327 57.9584H15.166V59.0417H36.8327V57.9584Z" fill="#3360A3" mask="url(#path-14-inside-4_295_3315)"></path><rect x="36.834" y="36.8334" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="37.1048" y="37.1042" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect></g></svg>
                            <div class="absolute h-full w-full bg-[#145088]/[0.5]"></div>
                            <span class="relative z-40">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="h-4 w-4 text-white md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.83537 23.1543C1.89663 22.6029 1.92726 22.3273 2.01067 22.0696C2.08467 21.841 2.18923 21.6235 2.3215 21.4229C2.47059 21.1968 2.66671 21.0007 3.05896 20.6084L20.6674 3.00007C22.1401 1.52732 24.5279 1.52732 26.0007 3.00008C27.4734 4.47284 27.4734 6.86065 26.0007 8.33341L8.39229 25.9418C8.00004 26.334 7.80392 26.5301 7.57783 26.6792C7.37725 26.8115 7.15971 26.9161 6.93111 26.9901C6.67346 27.0735 6.3978 27.1041 5.84647 27.1654L1.33398 27.6667L1.83537 23.1543Z" fill="#275B8B"></path>
                                <path d="M22.0007 12.3334L16.6674 7.00008M1.33398 27.6667L5.84647 27.1654C6.3978 27.1041 6.67346 27.0735 6.93111 26.9901C7.15971 26.9161 7.37725 26.8115 7.57783 26.6792C7.80392 26.5301 8.00004 26.334 8.39229 25.9418L26.0007 8.33341C27.4734 6.86065 27.4734 4.47284 26.0007 3.00008C24.5279 1.52732 22.1401 1.52732 20.6674 3.00007L3.05896 20.6084C2.66671 21.0007 2.47059 21.1968 2.3215 21.4229C2.18923 21.6235 2.08467 21.841 2.01067 22.0696C1.92726 22.3273 1.89663 22.6029 1.83537 23.1543L1.33398 27.6667Z" stroke="#DBE5FF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path>
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
                                <stop stop-color="#4FAAFF"></stop>
                                <stop offset="1" stop-color="#4FAAFF" stop-opacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <!--
                <div>
                    <h1 class="text-xl font-semibold text-[#D1D7E1] md:text-4xl">SB MODの使い方</h1>
                    <p class="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg">公開日：2023-12-15<br>最終更新：2023-12-15</p>
                    <div class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                        <a href="./pages/changelog/v7/">
                            <div class="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl pl-5 pr-5">
                                <div class="mb-8 flex max-w-md flex-col gap-2">
                                    <h3 class="text-xl font-medium text-white md:text-3xl">ビル経営ゲームv7 更新履歴</h3>
                                    <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">公開日：2023-12-02<br>最終更新：2023-12-04</p>
                                    <h3 class="text-xl font-medium text-white md:text-3xl">v7.0.2</h3>
                                    <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                        2023-12-04
                                        <li>他のユーザーのビルを見る機能を追加</li>
                                        <li>ビル経営ゲームへの参加日表示を更新</li>
                                        <li>チャットの追加</li>
                                        <li>猫の種類(speed) を追加</li>
                                        <li>クリエイティブ-コマンドを追加</li>
                                    </p>
                                    <h3 class="text-xl font-medium text-white md:text-3xl">v7.0.1</h3>
                                    <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                        2023-12-03
                                        <li>ビルハブの追加</li>
                                        <li>クリエイティブの仮実装（タブレット）</li>
                                    </p>
                                </div>
                                <div class="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]"></div>
                                <div class="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]"></div>
                                <div class="aspect-1 relative h-full w-full" style="opacity: 1; transform: none;">
                                    <div class="aspect-[inherit] absolute left-0 top-0 h-full w-full" style="background: url(&quot;/landing/features/card-examples/browse.png&quot;) center top / cover no-repeat; opacity: 1;"></div>
                                </div>
                            </div>
                        </a>
                        <a href="./pages/mods/">
                            <div class="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl pl-5 pr-5">
                                <div class="mb-8 flex max-w-md flex-col gap-2">
                                    <h3 class="text-xl font-medium text-white md:text-3xl">ビル経営ゲーム MOD</h3>
                                    <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">ビル経営ゲームのMODはゲームをより面白くできる拡張機能のようなものです！自分で作ることもできるので是非 [前提MOD] と書いてあるプロジェクトを見てみてください！</p>
                                    <h3 class="text-xl font-medium text-white md:text-3xl">SB MOD [v7]</h3>
                                    <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">
                                        by @Masaabu-YT
                                    </p>
                                    <h3 class="text-xl font-medium text-white md:text-3xl">SBAPI [v7]</h3>
                                    <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">
                                        by @dmmo-com-jp
                                    </p>
                                    <h3 class="text-xl font-medium text-white md:text-3xl">SB Addons [v6]</h3>
                                    <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">
                                        by @-Masaabu-
                                        <li>GUIがあり、機能のon/offを切り替えられるため、簡単に利用できる。オーバーレイなどもあるため、色々な情報を画面に表示することもできる。</li>
                                    </p>
                                    <h3 class="text-xl font-medium text-white md:text-3xl">SB Addon API [v6]</h3>
                                    <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">
                                        by @dmmo-com-jp
                                    </p>
                                </div>
                                <div class="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]"></div>
                                <div class="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]"></div>
                                <div class="aspect-1 relative h-full w-full" style="opacity: 1; transform: none;">
                                    <div class="aspect-[inherit] absolute left-0 top-0 h-full w-full" style="background: url(&quot;/landing/features/card-examples/browse.png&quot;) center top / cover no-repeat; opacity: 1;"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>-->

                    <div class="w-full">
                        <h1 class="text-right text-xl font-semibold text-[#D1D7E1] md:text-4xl">プロジェクトの <span class="text-[#6094F8]">ガイド</span></h1>
                        <p class="ml-auto mt-2 max-w-lg text-right text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg">not fund 404 - Sub Title</p>
                        <div class="mt-10 grid grid-cols-1 gap-10  md:grid-cols-2">
                            <div class="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pl-10 pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl">
                                <div class="mb-8 flex max-w-md flex-col gap-2">
                                    <h3 class="text-xl font-medium text-white md:text-3xl">SB MODの使い方</h3>
                                    <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">公開日：2023-12-15<br>最終更新：2023-12-15</p>
                                    <h3 class="text-xl font-medium text-white md:text-3xl">初めに</h3>
                                    <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">SB MODとは、ビル経営ゲームv7でMODを作成する時に役に立つツールである。スプライトを好きなビル経営ゲームクライアントに追加することで自分の好きな要素を追加できる。</p>
                                    <h3 class="text-xl font-medium text-white md:text-3xl">導入方法</h3>
                                    <p class=" text-base font-medium text-[#FFFFFF]/[0.64]"><a href="https://scratch.mit.edu/projects/940232456/" target="_blank"><span class="text-[#6094F8]">こちらのプロジェクト</span></a>に "SB MOD" , "SB MOD GUI" というスプライトがある。スプライトは本体と、アドオン用のON/OFFを切り替えられる設定画面を出すものであり、ビル経営ゲームのデータを操作したい場合はSB MODを、設定画面なども作りたい場合は2つのスプライトを使う。</p>
                                    <h3 class="text-xl font-medium text-white md:text-3xl">メソッド - set</h3>
                                    <p class=" text-base font-medium text-[#FFFFFF]/[0.64]">このメソッドでは、ゲーム内のデータを操作できる。</p>
                                    <img src="`+windowFileDirectlyPass+`/assets/svg/block_2023_12_16-6_42_45.svg">
                                </div>
                                <div class="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]"></div>
                                <div class="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]"></div>
                                <div class="aspect-1 relative h-full w-full" style="opacity: 1; transform: none;">
                                    <div class="aspect-[inherit] absolute left-0 top-0 h-full w-full" style="background: url(&quot;/landing/features/card-examples/edit4.png&quot;) center top / cover no-repeat; opacity: 1;"></div>
                                </div>
                            </div>
                            <div class="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] pl-10 pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl">
                                <div class="mb-8 flex max-w-md flex-col gap-2" style="width=:100%;height=:500px">
                                    <img style="width:100%;height:500px" src="`+windowFileDirectlyPass+`/assets/svg/block_2023_12_16-6_42_45.svg">
                                </div>
                                <div class="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]"></div>
                                <div class="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]"></div>
                                <div class="aspect-1 relative h-full w-full" style="opacity: 1; transform: none;">
                                    <div class="aspect-[inherit] absolute left-0 top-0 h-full w-full" style="background: url(&quot;/landing/features/card-examples/generate.png&quot;) center top / cover no-repeat; opacity: 1;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:h-14 md:w-14 h-10 w-10 border border-[#4FAAFF]/[0.2] bg-background flex-shrink-0 items-center justify-center rounded-full relative mb-4 ml-2 hidden md:ml-10 md:block">
                        <div class="h-8 md:h-14 md:w-14 w-8 rounded-full  border-2 border-[#145088] relative overflow-hidden  flex items-center justify-center"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" class="absolute inset-0 h-[36px] w-[36px]" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><rect x="-6.5" y="-6.5" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="-6.22917" y="-6.22917" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect><path d="M15.166 -5.95833H36.8327V-7.04167H15.166V-5.95833ZM36.8327 14.625H15.166V15.7083H36.8327V14.625Z" fill="#3360A3" mask="url(#path-3-inside-1_295_3315)"></path><rect x="36.834" y="-6.5" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="37.1048" y="-6.22917" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect><path d="M14.625 15.1666V36.8333H15.7083V15.1666H14.625ZM-5.95833 36.8333V15.1666H-7.04167V36.8333H-5.95833Z" fill="#3360A3" mask="url(#path-7-inside-2_295_3315)"></path><path d="M15.166 15.1666H36.8327V36.8333H15.166V15.1666Z" fill="#132872"></path><path d="M57.959 15.1666V36.8333H59.0423V15.1666H57.959ZM37.3757 36.8333V15.1666H36.2923V36.8333H37.3757Z" fill="#3360A3" mask="url(#path-10-inside-3_295_3315)"></path><rect x="-6.5" y="36.8334" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="-6.22917" y="37.1042" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect><path d="M15.166 37.375H36.8327V36.2917H15.166V37.375ZM36.8327 57.9584H15.166V59.0417H36.8327V57.9584Z" fill="#3360A3" mask="url(#path-14-inside-4_295_3315)"></path><rect x="36.834" y="36.8334" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="37.1048" y="37.1042" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect></g></svg>
                            <div class="absolute h-full w-full bg-[#145088]/[0.5]"></div>
                            <span class="relative z-40">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="h-4 w-4 text-white md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83537 23.1543C1.89663 22.6029 1.92726 22.3273 2.01067 22.0696C2.08467 21.841 2.18923 21.6235 2.3215 21.4229C2.47059 21.1968 2.66671 21.0007 3.05896 20.6084L20.6674 3.00007C22.1401 1.52732 24.5279 1.52732 26.0007 3.00008C27.4734 4.47284 27.4734 6.86065 26.0007 8.33341L8.39229 25.9418C8.00004 26.334 7.80392 26.5301 7.57783 26.6792C7.37725 26.8115 7.15971 26.9161 6.93111 26.9901C6.67346 27.0735 6.3978 27.1041 5.84647 27.1654L1.33398 27.6667L1.83537 23.1543Z" fill="#275B8B"></path>
                                    <path d="M22.0007 12.3334L16.6674 7.00008M1.33398 27.6667L5.84647 27.1654C6.3978 27.1041 6.67346 27.0735 6.93111 26.9901C7.15971 26.9161 7.37725 26.8115 7.57783 26.6792C7.80392 26.5301 8.00004 26.334 8.39229 25.9418L26.0007 8.33341C27.4734 6.86065 27.4734 4.47284 26.0007 3.00008C24.5279 1.52732 22.1401 1.52732 20.6674 3.00007L3.05896 20.6084C2.66671 21.0007 2.47059 21.1968 2.3215 21.4229C2.18923 21.6235 2.08467 21.841 2.01067 22.0696C1.92726 22.3273 1.89663 22.6029 1.83537 23.1543L1.33398 27.6667Z" stroke="#DBE5FF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path>
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
                                    <stop stop-color="#4FAAFF"></stop>
                                    <stop offset="1" stop-color="#4FAAFF" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
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
                                    <rect x="36.834" y="36.8334" width="21.6667" height="21.6667" fill="#132872"></rect><rect x="37.1048" y="37.1042" width="21.125" height="21.125" stroke="white" stroke-opacity="0.2" stroke-width="0.541667"></rect>
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
                                        <stop stop-color="#4FAAFF"></stop>
                                        <stop offset="1" stop-color="#4FAAFF" stop-opacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div class="w-full">
                            <h1 class="text-xl font-semibold text-[#D1D7E1] md:text-4xl">ビル経営ゲームv7のよくある <span class="text-[#6094F8]">質問</span></h1>
                            <p class="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg">公開日：2023-12-02<br>最終更新：2023-12-03</p>
                            <div class="mt-10 w-full">
                                <a href="./pages/qa/v7/">
                                    <div class="relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[#3D84F529] bg-[#101624] transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] md:rounded-3xl p-10">
                                        <div class="mb-8 flex flex-col gap-2" style="width: 100%; height: 600px;">
                                            <h3 class="text-xl font-medium text-white md:text-3xl">Q. トンカチと猫のアイコンの物は何ですか？</h3>
                                            <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                                A. モードです！それぞれ建築モード、猫モードという名前で、建築モードなら部屋をタップすることで建築ができます！猫モードなら猫をタップするとその猫のステータスを見ることができます！
                                            </p>
                                            <h3 class="text-xl font-medium text-white md:text-3xl">Q. 電気と水道とは？</h3>
                                            <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                                A. 右下にある黄色と水色のバーは電気と水道の使用量で、部屋ごとに使用量が変わります。使用量がオーバーしてしまうと猫達が部屋を使えなくなってしまいます！上限を増やすには地下に配電室や給水室などを建築しましょう！
                                            </p>
                                            <h3 class="text-xl font-medium text-white md:text-3xl">Q. エレベーターとターミナルエレベーターの違いは？</h3>
                                            <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                                A. 猫達が早く移動できるようになります！
                                            </p>
                                            <h3 class="text-xl font-medium text-white md:text-3xl">Q. ログインボタンの意味は？</h3>
                                            <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                                A. ログインをすると設定の「データの管理」ページがサーバーから読み込まれたり自分のプロフィールが読み込まれます！
                                            </p>
                                            <h3 class="text-xl font-medium text-white md:text-3xl">Q. プロフィールにある「UP!」ボタンは何ですか？</h3>
                                            <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                                A. ビルハブで自分のステータスを共有できます！※v7.0.1~※ 共有をすることでギフト※実装予定※ などを受け取れます！
                                            </p>
                                            <h3 class="text-xl font-medium text-white md:text-3xl">Q. 広告を載せてください！</h3>
                                            <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                                A. こちらから広告を申請できます！
                                            </p>
                                            <h3 class="text-xl font-medium text-white md:text-3xl">Q. レベルとは</h3>
                                            <p class="text-base font-medium text-[#FFFFFF]/[0.64]">
                                                A. 今後追加する予定の機能です！楽しみに待っていてください！
                                            </p>
                                        </div>
                                        <div class="absolute -top-[20rem] left-auto z-0 -right-[20rem] h-auto w-[40rem] aspect-1 bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]"></div>
                                        <div class="absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#101624]"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden max-w-7xl mx-auto pt-32 pb-10 md:py-40">
            <div class="absolute h-[600px] w-[1000px] -top-0 left-1/2 -translate-x-1/2">
                <img alt="gradient" loading="lazy" decoding="async" data-nimg="fill" class="h-[1000px] w-[1000px] absolute inset-0 object-cover pointer-events-none select-none" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw" srcset="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Ftech-features-gradient.png&w=1920&q=75 640w, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Ftech-features-gradient.png&w=1920&q=75 750w, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Ftech-features-gradient.png&w=1920&q=75 828w, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Ftech-features-gradient.png&w=1920&q=75 1080w, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Ftech-features-gradient.png&w=1920&q=75 1200w, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Ftech-features-gradient.png&w=1920&q=75 1920w, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Ftech-features-gradient.png&w=1920&q=75 2048w, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Ftech-features-gradient.png&w=1920&q=75 3840w" src="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Ftech-features-gradient.png&w=1920&q=75">
            </div>
            <div class="flex items-center  flex-col z-20 relative px-4">
                <span class="w-full h-40 block absolute inset-0">
                    <span class="absolute block " style="top: 6%; left: 25%; opacity: 0.466697; transform: scale(0.00842539) rotate(357.564deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 9%; left: 48%; opacity: 0.466697; transform: scale(0.0501083) rotate(345.598deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 40%; left: 60%; opacity: 0.385553; transform: scale(0.04209) rotate(344.877deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 44%; left: 95%; opacity: 0.445531; transform: scale(0.0769359) rotate(335.841deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 75%; left: 100%; opacity: 0.415764; transform: scale(0.152242) rotate(309.029deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 37%; left: 25%; opacity: 0.408541; transform: scale(0.23382) rotate(280.165deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 47%; left: 66%; opacity: 0.452821; transform: scale(0.356538) rotate(254.575deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 15%; left: 17%; opacity: 0.466697; transform: scale(0.526042) rotate(210.622deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 52%; left: 18%; opacity: 0.516477; transform: scale(0.792056) rotate(162.477deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 1%; left: 83%; opacity: 0.400617; transform: scale(0.611184) rotate(146.199deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 41%; left: 64%; opacity: 0.466697; transform: scale(0.828672) rotate(119.901deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 33%; left: 46%; opacity: 0.36279; transform: scale(0.67489) rotate(93.5621deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 72%; left: 89%; opacity: 0; transform: scale(0.506623) rotate(45.5961deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 53%; left: 20%; opacity: 0; transform: scale(0.251782) rotate(22.6604deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <span class="absolute block " style="top: 16%; left: 6%; opacity: 0; transform: scale(0.182344) rotate(16.411deg) translateZ(0px);">
                        <svg class="block h-2 w-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.527 29.8867L16.4373 15.3762H14.5117L15.527 29.8867Z" fill="#FFFFFF"></path>
                            <path d="M15.4395 0.883957L14.5117 15.377H16.4373L15.4395 0.883957Z" fill="#FFFFFF"></path>
                            <path d="M30.0024 15.3394L15.4727 14.4128V16.3359L30.0024 15.3394Z" fill="#FFFFFF"></path>
                            <path d="M0.962891 15.4268L15.4752 16.3359V14.4128L0.962891 15.4268Z" fill="#FFFFFF"></path>
                        </svg>
                    </span>
                    <strong class="relative z-10 font-bold"></strong>
                </span>
                <h1 class="__className_2272f2 text-white text-center text-4xl md:text-6xl mb-4 capitalize font-bold relative z-40">コメントを送信する</h1>
                <p class="text-center font-medium text-lg md:text-lg text-[#FFFFFF]/[.48] mb-8 relative z-40">個人情報を共有もユーザー登録も必要ありません。誰でも安全にコメントできます。</p>
            </div>
            <form class="grid grid-cols-1 gap-10 mt-10 px-4" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIJL-coat1Tl92nVowE17bfkMAnAekuWskkGwNd3h8rX-aIg/formResponse" method="POST" target="hidden_iframe" onsubmit="submitted=true;">
                <div class="inset-x-0 z-[42] w-full sm:w-[80%] md:w-[50%] mx-auto rounded-md text-sm flex items-center" style="display: flex; flex-direction: column;margin: auto; margin-bottom: 10px; width: 100%;">
                    <div style="width: 100%; margin-bottom: 10px;">
                        <div class="inset-x-0 z-[42] w-full sm:w-[80%] md:w-[50%] mx-auto rounded-md backdrop-blur-sm bg-[#526E89]/[0.2] text-sm flex items-center">
                            <input name="entry.1738713134" class="border-blue-200 border border-opacity-50 rounded-md pl-4 py-3 bg-transparent w-full text-white focus:outline-none focus:shadow-xl focus:shadow-blue-500/[0.1] placeholder:text-xs sm:placeholder:text-base text-sm sm:text-lag md:text-lg" id="field-name" type="text" required="required"  placeholder="名前を入力"/>
                        </div>
                        <div style="margin-bottom: 10px;"></div>
                        <div class="inset-x-0 z-[42] w-full sm:w-[80%] md:w-[50%] mx-auto rounded-md backdrop-blur-sm bg-[#526E89]/[0.2] text-sm flex items-center">
                            <textarea name="entry.975792514" class="border-blue-200 border border-opacity-50 rounded-md pl-4 py-3 bg-transparent w-full text-white focus:outline-none focus:shadow-xl focus:shadow-blue-500/[0.1] placeholder:text-xs sm:placeholder:text-base text-sm sm:text-lag md:text-lg" id="field-message" placeholder="素敵なコメントを入力" required="required"></textarea>
                        </div>
                    </div>
                    <div style="width: 50%; margin: auto;">
                        <button type="submit" class="group md:w-fit group w-fit flex justify-center relative rounded-full p-px text-[0.8125rem] font-semibold leading-6 shadow-xl shadow-zinc-950 text-white" style="width: 100%;">
                            <span class="absolute inset-0 overflow-hidden rounded-lg">
                                <span class="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                            </span>
                            <div class="relative z-10 w-full flex justify-center rounded-lg bg-[#3887FD] bg-opacity-50 hover:bg-opacity-60 transition py-3 px-6 ring-1 items-center space-x-2">
                                <span>送信</span>
                            </div>
                            <span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 opacity-20 group-hover:opacity-80"></span>
                        </button>
                    </div>
                </div>
            </form>
            </div>
            <div class="relative">
            <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="absolute left-0 top-40" style="color:transparent" srcset="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-left.png&w=640&q=75 1x, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-left.png&w=640&q=75 2x" src="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-left.png&w=640&q=75">
            <img alt="left gradient" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="absolute right-0 bottom-[20%]" style="color:transparent" srcset="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-right.png&w=640&q=75 1x, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-right.png&w=640&q=75 2x" src="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fglow-right.png&w=640&q=75">
            <div class=" py-10 md:py-20 max-w-7xl mx-auto overflow-hidden min-h-screen relative">
                <svg width="812" height="811" viewBox="0 0 812 811" fill="none" class="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none select-none opacity-50 transform z-30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M406.014 1.5V1.5C406.014 224.681 225.089 405.605 1.9082 405.605V405.605" stroke="url(#paint0_linear_1_31)" stroke-width="2.52566" stroke-linecap="round"></path>
                    <path d="M406.014 1.5V1.5C406.014 224.681 586.938 405.605 810.119 405.605V405.605" stroke="url(#paint1_linear_1_31)" stroke-width="2.52566" stroke-linecap="round"></path>
                    <path opacity="0.6" d="M400.626 66.8304L406.014 29.7874L408.034 43.2576L411.402 68.8509L418.811 103.873L425.546 126.773L439.689 163.816L453.833 192.103L473.365 225.105L494.917 254.066L515.122 277.639L539.369 301.885L562.941 321.417L590.555 340.949L614.802 355.092L636.354 366.542L659.927 376.644L682.826 385.4L698.317 389.441L733.339 398.197L764.321 402.911L783.179 404.258L810.119 405.605H2.58203L27.5019 404.932L66.5654 400.217L97.5468 394.156L126.508 386.074L154.122 375.971L176.347 365.868L197.226 355.766L216.084 344.316L232.249 333.54L251.78 318.723L271.986 301.885L290.17 284.374L311.723 261.474L326.54 241.943L342.704 218.37L357.521 193.45L373.012 161.122L386.482 124.752L394.564 97.8118L400.626 66.8304Z" fill="url(#paint2_linear_1_31)"></path>
                    <g opacity="0.4">
                        <path d="M406.014 809.711V809.711C406.014 586.53 225.089 405.606 1.9082 405.606V405.606" stroke="url(#paint3_linear_1_31)" stroke-width="2.52566" stroke-linecap="round"></path>
                        <path d="M406.014 809.711V809.711C406.014 586.53 586.938 405.606 810.119 405.606V405.606" stroke="url(#paint4_linear_1_31)" stroke-width="2.52566" stroke-linecap="round"></path>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_1_31" x1="203.961" y1="-377.349" x2="203.961" y2="262.485" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#224EFF" stop-opacity="0"></stop>
                            <stop offset="1" stop-color="#0A1647"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1_31" x1="608.066" y1="-377.349" x2="608.066" y2="262.485" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#224EFF" stop-opacity="0"></stop>
                            <stop offset="1" stop-color="#0A1647"></stop>
                        </linearGradient>
                        <linearGradient id="paint2_linear_1_31" x1="406.014" y1="2.1735" x2="406.008" y2="421.096" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#62B4FF"></stop>
                            <stop offset="0.5" stop-color="#0075FF"></stop>
                            <stop offset="1" stop-color="#0B0F17" stop-opacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="paint3_linear_1_31" x1="203.961" y1="1188.56" x2="203.961" y2="548.726" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#224EFF" stop-opacity="0"></stop>
                            <stop offset="1" stop-color="#0A1647"></stop>
                        </linearGradient>
                        <linearGradient id="paint4_linear_1_31" x1="608.066" y1="1188.56" x2="608.066" y2="548.726" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#224EFF" stop-opacity="0"></stop>
                            <stop offset="1" stop-color="#0A1647"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <div class="flex items-center justify-center  relative  z-40 px-4">
                    <div class="flex flex-col items-center justify-center pt-60 relative z-20">
                        <h1 class="__className_2272f2 text-white font-bold text-center text-4xl md:text-5xl mb-4">ユーザー達のコメント</h1>
                        <p class="text-center font-medium text-lg text-[#FFFFFF]/[.48] mb-8 max-w-lg mx-auto">私たちは、世界中で何万人ものユーザーの方達にゲームを提供してきたことを誇りに思っています。</p>
                    </div>
                </div>
                <!-- comments area -->
                <div class="grid grid-cols-1 gap-4 items-start  z-30 py-10 md:py-20 px-4 relative">
                    <div class="absolute bottom-10 h-52 w-full bg-background z-40  [mask-image:linear-gradient(to_top,white,transparent)] select-none pointer-events-none"></div>
                    <!-- comments box -->
                    <div id="commentsContainer" class="grid" style="overflow:scroll;width: 100%;max-height:1000px;flex-wrap:wrap;display:flexbox;display:-webkit-flex;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start;">
                        <div class="loader_box"><div class="loader"></div></div>
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
            <a class="mb-10" href="`+windowFileDirectlyPass+`/">
                <div class="relative z-40">
                    <img alt="Logo" loading="lazy" width="117" height="124" decoding="async" data-nimg="1" style="color:transparent" src="./assets/image/@Masaabu-YT_icon.png">
                </div>
            </a>
            <h1 class="__className_2272f2 text-white relative font-bold z-40 text-center text-2xl md:text-6xl mb-4">ビル経営ゲームを無料で試す</h1>
            <p class="text-center relative z-40 font-medium text-sm md:text-lg text-[#FFFFFF]/[.48] mb-8"></p>
            <div class="flex md:flex-row flex-col space-x-0 space-y-4 md:space-y-0 items-center justify-center md:space-x-4 pb-20 w-full relative z-40">
                <button class="group md:w-fit group w-fit flex justify-center relative rounded-full p-px text-[0.8125rem] font-semibold leading-6 shadow-xl shadow-zinc-950 text-white">
                    <span class="absolute inset-0 overflow-hidden rounded-lg">
                        <span class="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <a href="https://scratch.mit.edu/projects/927111186/">
                        <div class="relative z-10 w-full flex justify-center rounded-lg bg-[#3887FD] bg-opacity-50 hover:bg-opacity-60 transition py-3 px-6 ring-1 items-center space-x-2">
                            <span>Scratchでプレイ</span>
                        </div>
                    <span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 opacity-20 group-hover:opacity-80"></span>
                    </a>
                </button>
            </div>
        </div>
    </main>
`)