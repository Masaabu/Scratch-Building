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

var commentJSsetting_ContentSafety=getCookieSettingContent(`f7056b58-05c9-464c-be1c-770d0060e8b8`);
var commentJSsetting_preReleaseContent=getCookieSettingContent(`9948b366-53fe-42f6-b7dd-eafeafad0e65`);



const apiURL = 'https://script.google.com/macros/s/AKfycbxIpIEEnwh2STkLNqF7yHzb_wD6RosNN_l7DgIYeqtM6oyJF_Lw2RJkkbcoEJl2AnE48Q/exec';

var commentCount = 0;
var commentShowC = 0;
var commentListLoadSetC = 20;//この変数に初めの表示するコメント数を設定
commentListLoadSetC - 0;
var repCommentsCount = 0;
var repComments=(JSON.parse(`{}`));
var allCommentsCount = 0;
var allComments=(JSON.parse(`{}`));
var commentShowIdObjC = 0;
var commentShowIdObj=(JSON.parse(`{}`));
var LinkLocationCommentContent = (window.location.hash);
var LinkLocationCommentContentON = false;


var F_repgroup="";
var F_repid="";
var F_box="false";


//console.log(repComments)

async function loadCommentListData(Load_mode,Load_value) {
    const commentsContainer = document.getElementById('commentsContainer');
    const response = await fetch(apiURL);
    var data = await response.json();
    data.reverse().forEach(entry => {
        allComments[`${entry.uuid}`]=({"timestamp":entry.timestamp,"name":entry.name,"comment":entry.comment,"repgroup":entry.repgroup,"rep":entry.rep,"uuid":entry.uuid,"check":entry.check});
        if(entry.rep) {
            repComments[`${repCommentsCount}`]=({"timestamp":entry.timestamp,"name":entry.name,"comment":entry.comment,"repgroup":entry.repgroup,"rep":entry.rep,"uuid":entry.uuid,"check":entry.check});
            repCommentsCount=repCommentsCount+1;
        }else{
        };
        allCommentsCount=allCommentsCount+1;
    });

    let checkBatchDev=((`<svg style="margin: auto 0;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-blue-500 stroke-white"><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" fill="currentColor" stroke-width="0"></path></svg>`));
    let checkBatchCre=((`<svg style="margin: auto 0; color:#f26b30;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-blue-500 stroke-white"><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" fill="currentColor" stroke-width="0"></path></svg>`));
    //console.log(allComments)
    //console.log(repComments)
    data.reverse().forEach(entry => {});
    commentsContainer.innerHTML=(``);
    data.reverse().forEach(entry => {
        //console.log(entry);
        if(entry.rep){
        }else{
            commentShowIdObj[`${entry.uuid}`]={showId:commentCount};
            const commentLi = document.createElement('li');
            commentLi.id = (`comment_${commentCount}`);
            commentLi.classList.add('list-item');
        
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment','fadeUp');
            commentDiv.id=(`commentContent_${entry.uuid}`);
            if(LinkLocationCommentContent===`#commentContent_${entry.uuid}`){
                LinkLocationCommentContentON=true;
                commentDiv.style.backgroundColor=(`var(--background-1)`);
                commentDiv.style.border=(`solid`);
                commentDiv.style.borderColor=(`rgb(96 148 248)`)
            };
        
            const commentRepDiv = document.createElement('div');
            commentRepDiv.id = (`comment_${entry.uuid}`)
        
            const usernamePara = document.createElement('p');
            usernamePara.classList.add('username');


            const usernameParaDiv = document.createElement('div');
            usernameParaDiv.style.display=('flex');
            var batchCheck = (entry.check);
            var batchName = (`${entry.name}`);
            if(commentJSsetting_preReleaseContent){
                var commentCountId=`<p style="margin:auto 8px;color:var(--background-2);">#${commentCount}</p>`;
            }else{
                var commentCountId=``
            }
            var batchDiv = usernameParaDiv;
            if(batchCheck==='dev') {
                batchDiv.innerHTML = (`${batchName}${checkBatchDev}${(commentCountId)}`);
            }else{if(batchCheck==='cre') {
                batchDiv.innerHTML = (`${batchName}${checkBatchCre}${(commentCountId)}`);
            }else{
                batchDiv.innerHTML = (`${batchName}${commentCountId}`);
            };};
            usernamePara.appendChild(usernameParaDiv);
        
        
            const timestampPara = document.createElement('p');
            timestampPara.classList.add('timestamp');
            timestampPara.textContent = new Date(entry.timestamp).toLocaleString();
        
            const commentPara = document.createElement('p');
            if(linkCheck(entry.comment)){
                if(batchCheck==='dev') {
                    commentPara.innerHTML = (`${autoLink(entry.comment,`text-[#6094F8]`)}`);
                }else{
                    if(commentJSsetting_ContentSafety===true){
                        commentPara.style.color=(`red`)
                        commentPara.innerHTML=(`URLが検出された為コメントを非表示にしています`);
                    }else{
                        commentPara.textContent = ((entry.comment));
                    }
                };
            }else{
                if(batchCheck==='dev') {
                    commentPara.innerHTML = (entry.comment);
                }else{
                    commentPara.textContent = ((entry.comment));
                };
            };

            const uuidDivSpe = document.createElement('p');
            uuidDivSpe.classList.add('reportSpace');
        
            const uuidDiv = document.createElement('p');
            uuidDiv.style.textAlign=('right');
            uuidDiv.classList.add('report');

            const idCopyBtn = document.createElement('button');
            idCopyBtn.innerHTML = `<span class="tooltip icon-tooltip material-symbols-outlined"><i class="fa-solid fa-copy"><span id="commentIdCopyText_${entry.uuid}" class="tooltip-content">コメントIDをコピー</span></span></i>`;
            idCopyBtn.style.margin = `0 0 0 10px`;
            idCopyBtn.style.color = `var(--text-2)`;
            idCopyBtn.addEventListener('click', () => {
                copyToClipboard(entry.uuid);
                document.getElementById(`commentIdCopyText_${entry.uuid}`).innerHTML=(`コピー完了！`);
                document.getElementById(`commentIdCopyText_${entry.uuid}`).style.color=(`#ffff`);
                document.getElementById(`commentIdCopyText_${entry.uuid}`).style.backgroundColor=(`#10b981`);
                window.setTimeout(function(){
                    document.getElementById(`commentIdCopyText_${entry.uuid}`).innerHTML=(`コメントIDをコピー`);
                    document.getElementById(`commentIdCopyText_${entry.uuid}`).style.color=(``);
                    document.getElementById(`commentIdCopyText_${entry.uuid}`).style.backgroundColor=(``);
                }, 1500);
            });
            uuidDiv.appendChild(idCopyBtn);
        
            const repBtn = document.createElement('button');
            repBtn.textContent = `返信する`;
            repBtn.style.margin = `0 0 0 10px`;
            repBtn.style.color = `var(--text-2)`;
            repBtn.addEventListener('click', () => {
                commentRep((entry.uuid),(entry.uuid));
            });
            uuidDiv.appendChild(repBtn);
        
            const uuidBtn = document.createElement('button');
            uuidBtn.textContent = `通報する`;
            uuidBtn.style.margin = `0 0 0 10px`;
            uuidBtn.style.color = `var(--text-2)`;
            uuidBtn.addEventListener('click', () => {
                commentReport(entry.uuid);
            });
            uuidDiv.appendChild(uuidBtn);
        
            commentDiv.appendChild(usernamePara);
            commentDiv.appendChild(timestampPara);
            commentDiv.appendChild(commentPara);
            commentDiv.appendChild(uuidDivSpe);
            commentDiv.appendChild(uuidDiv);
            commentLi.appendChild(commentDiv);
            commentLi.appendChild(commentRepDiv);
            commentsContainer.appendChild(commentLi);
            commentCount = commentCount+1;
        };

        let repCommentsCountFor=(repCommentsCount-1);
        for(let i = (repCommentsCountFor-1); i > (repCommentsCountFor-repCommentsCount); i--){
            if((repComments[i].repgroup)===entry.uuid){
                commentShowIdObj[`${repComments[i].uuid}`]={showId:commentCount};
                const REPcommentsContainer = document.getElementById(`comment_${repComments[i].repgroup}`);
                const REPcommentLi = document.createElement('li');
                REPcommentLi.id = (`comment_${commentCount}`);
                REPcommentLi.classList.add('list-item');
                const REPcommentDiv = document.createElement('div');
                REPcommentDiv.classList.add('comment','commentRep','fadeUp0.85');
                REPcommentDiv.id=(`commentContent_${repComments[i].uuid}`);
                if(LinkLocationCommentContent===`#commentContent_${repComments[i].uuid}`){
                    REPcommentDiv.style.backgroundColor=(`var(--background-1)`);
                    REPcommentDiv.style.border=(`solid`);
                    REPcommentDiv.style.borderColor=(`rgb(96 148 248)`);
                };
                const REPcommentRepDiv = document.createElement('div');
                REPcommentRepDiv.id = (`comment_${repComments[i].uuid}`);
                const REPusernamePara = document.createElement('p');
                REPusernamePara.classList.add('username');
                const REPusernameParaDiv = document.createElement('div');
                REPusernameParaDiv.style.display=('flex');
                var batchCheck = (repComments[i].check);
                var batchName = (`${repComments[i].name}`);
                if(commentJSsetting_preReleaseContent){
                    var commentCountId=`<p style="margin:auto 0px;color:var(--background-2);">#${commentCount}</p>`;
                }else{
                    var commentCountId=``
                }
                var batchDiv = REPusernameParaDiv;
                if(batchCheck==='dev') {
                    batchDiv.innerHTML = (`${batchName}${checkBatchDev}${(commentCountId)}`);
                }else{if(batchCheck==='cre') {
                    batchDiv.innerHTML = (`${batchName}${checkBatchCre}${(commentCountId)}`);
                }else{
                    batchDiv.innerHTML = (`${batchName}${commentCountId}`);
                };};
                REPusernamePara.appendChild(REPusernameParaDiv);
                const REPcheckDiv = document.createElement('p');
                // if (repComments[i].check) {
                //     REPcheckDiv.style.color = '#f26b30';
                //     REPcheckDiv.textContent = "認証済み";
                // };
                const REPtimestampPara = document.createElement('p');
                REPtimestampPara.classList.add('timestamp');
                REPtimestampPara.textContent = new Date(repComments[i].timestamp).toLocaleString();
                const REPcommentPara = document.createElement('p');
                if(linkCheck(repComments[i].comment)){
                    if(batchCheck==='dev') {
                        REPcommentPara.innerHTML = (`${autoLink(repComments[i].comment,`text-[#6094F8]`)}`);
                    }else{
                        if(commentJSsetting_ContentSafety===true){
                            REPcommentPara.style.color=(`red`)
                            REPcommentPara.innerHTML=(`URLが検出された為コメントを非表示にしています`);
                        }else{
                            REPcommentPara.textContent = ((repComments[i].comment));
                        }
                    };
                }else{
                    if(batchCheck==='dev') {
                        REPcommentPara.innerHTML = (repComments[i].comment);
                    }else{
                        REPcommentPara.textContent = ((entry.comment));
                    };
                };

                const REPuuidDivSpe = document.createElement('p');
                REPuuidDivSpe.classList.add('reportSpace');
                const REPuuidDiv = document.createElement('p');
                REPuuidDiv.style.textAlign=('right');
                REPuuidDiv.classList.add('report');
                const REPidCopyBtn = document.createElement('button');
                REPidCopyBtn.innerHTML = `<span class="tooltip icon-tooltip material-symbols-outlined"><i class="fa-solid fa-copy"><span id="rep_commentIdCopyText_${repComments[i].uuid}" class="tooltip-content">コメントIDをコピー</span></i></span>`;
                REPidCopyBtn.style.margin = `0 0 0 10px`;
                REPidCopyBtn.style.color = `var(--text-2)`;
                REPidCopyBtn.addEventListener('click', () => {
                    copyToClipboard(repComments[i].uuid);
                    document.getElementById(`rep_commentIdCopyText_${repComments[i].uuid}`).innerHTML=(`コピー完了！`);
                    document.getElementById(`rep_commentIdCopyText_${repComments[i].uuid}`).style.color=(`#ffff`);
                    document.getElementById(`rep_commentIdCopyText_${repComments[i].uuid}`).style.backgroundColor=(`#10b981`);
                    window.setTimeout(function(){
                        document.getElementById(`rep_commentIdCopyText_${repComments[i].uuid}`).innerHTML=(`コメントIDをコピー`);
                        document.getElementById(`rep_commentIdCopyText_${repComments[i].uuid}`).style.color=(``);
                        document.getElementById(`rep_commentIdCopyText_${repComments[i].uuid}`).style.backgroundColor=(``);
                    }, 1500);
                });
                REPuuidDiv.appendChild(REPidCopyBtn);
                const REPrepBtn = document.createElement('button');
                REPrepBtn.textContent = `返信する`;
                REPrepBtn.style.margin = `0 0 0 10px`;
                REPrepBtn.style.color = `var(--text-2)`;
                REPrepBtn.addEventListener('click', () => {
                    commentRep((repComments[i].repgroup),(repComments[i].uuid));
                });
                REPuuidDiv.appendChild(REPrepBtn);
                const REPuuidBtn = document.createElement('button');
                REPuuidBtn.textContent = `通報する`;
                REPuuidBtn.style.margin = `0 0 0 10px`;
                REPuuidBtn.style.color = `var(--text-2)`;
                REPuuidBtn.addEventListener('click', () => {
                    commentReport(repComments[i].uuid);
                });
                REPuuidDiv.appendChild(REPuuidBtn);

                var REPcommentRepCommentIdDiv = document.createElement(`div`);
                REPcommentRepCommentIdDiv.style.display=('flex');
                const REPcommentRepCommentID = document.createElement('a');
                if(allComments[repComments[i].rep]){
                    REPcommentRepCommentID.classList.add(`text-[#6094F8]`);
                    REPcommentRepCommentID.textContent=`@${(allComments[repComments[i].rep].name)}`;
                    REPcommentRepCommentIdDiv.appendChild(REPcommentRepCommentID);
                }else{
                    REPcommentRepCommentID.style.color=(`var(--red-500)`);
                    REPcommentRepCommentID.textContent=`返信元のコメントは削除されています`;
                };
                if(commentJSsetting_preReleaseContent){
                    //console.log(commentJSsetting_preReleaseContent)
                    var REPcommentRepCommentShowID=document.createElement(`p`);
                    REPcommentRepCommentShowID.style.margin=(`auto 3px`);
                    REPcommentRepCommentShowID.style.color=(`var(--background-2)`);
                    //console.log(commentShowIdObj)
                    //REPcommentRepCommentShowID.innerHTML=`#${commentShowIdObj[repComments[i].rep].showId}`;
                }else{
                    var REPcommentRepCommentShowID=document.createElement(`p`);
                }
                REPcommentRepCommentIdDiv.appendChild(REPcommentRepCommentShowID)

                REPcommentDiv.appendChild(REPcommentRepCommentIdDiv);
                REPusernamePara.appendChild(REPcheckDiv);
                REPcommentDiv.appendChild(REPusernamePara);
                REPcommentDiv.appendChild(REPtimestampPara);
                REPcommentDiv.appendChild(REPcommentPara);
                REPcommentDiv.appendChild(REPuuidDivSpe);
                REPcommentDiv.appendChild(REPuuidDiv);
                REPcommentLi.appendChild(REPcommentDiv);
                REPcommentLi.appendChild(REPcommentRepDiv);
                REPcommentsContainer.appendChild(REPcommentLi);
                commentCount = commentCount+1;
            };
        };
    });
    if(Load_mode){
        if(Load_value==='max'){
            loadAddComment('set',commentCount);
        }else{
            if(commentCount >　commentListLoadSetC){
                loadAddComment('set',commentListLoadSetC);
            }else{
                loadAddComment('set',commentCount);
            };
        }
    }else{
        if(commentCount >　commentListLoadSetC){
            loadAddComment('set',commentListLoadSetC);
        }else{
            loadAddComment('set',commentCount);
        };
    }
    document.getElementById('commentListAddLoadBox').style.display=(`block`);
    if(LinkLocationCommentContentON){
        window.location=(`./${LinkLocationCommentContent}`)
    }
};

// コメントをさらに読み込むボタン

function loadAddComment(mode,value){
    value=value-0;
    if(mode === 'set'){
        commentShowC = value - 0;
        for (let i = commentShowC; i < commentCount; i++) {
            document.getElementById(`comment_${i}`).style.display=('none');
        };
    }else{if(mode === 'add'){
        commentShowC = commentShowC + value;
        if(commentShowC > commentCount){
            commentShowC = commentCount;
        };
        //console.log(commentShowC)
        for (let i = 0; i < commentShowC -1; i++) {
        document.getElementById(`comment_${i}`).style.display=('block');
        };
            //console.log('displayComment = '+commentShowC+'/'+commentCount);
    }else{
        console.error('The requested mode does not exist.');
    };
    };
};

setInterval(() => {
    document.getElementById('commentShowCHtml').innerHTML=(`表示中のコメント：${commentShowC}/${commentCount}`)
    if(commentShowC === commentCount){
        document.getElementById('loadAddComment').style.display=('none');
    }else{
        document.getElementById('loadAddComment').style.display=('block');
    };
}, 500);

// コメントを通報する機能

function commentReport(id){
    window.open(`https://docs.google.com/forms/d/e/1FAIpQLSeFAxN_udXf9poLY-WpVBAppy6F_MTDkjJr4bUXvP6B56Xzzg/viewform?entry.749474196=${id}`);
};

function commentRep(repgroup,repid){
    if(F_box!=='false'){
        //console.warn(repgroup)
        let F_repForm = document.getElementById(`repForm_${F_box}`);
        F_repForm.remove();
        F_box='false';
    };
    F_box=repgroup;
    F_repgroup=repgroup;
    F_repid=repid;

    var repForm = document.getElementById(`comment_${repgroup}`);

    let repFormDiv = document.createElement('div');
    repFormDiv.id=(`repForm_${repgroup}`);
    repFormDiv.classList.add('fadeUp','comment','commentRep');

    let repFormDivBtnDiv = document.createElement('div');
    repFormDivBtnDiv.classList.add('c-form__submit');

    let repFormDivCloseBtn = document.createElement('button');
    repFormDivCloseBtn.style.marginRight=(`8px`)
    repFormDivCloseBtn.textContent=(`キャンセル`);
    repFormDivCloseBtn.addEventListener('click', () => {
        commentRepFormBoxRem(repgroup,repid);
    });
    let repFormDivSubmitBtn = document.createElement('button');
    repFormDivSubmitBtn.style.marginRight=(`8px`)
    repFormDivSubmitBtn.textContent=(`送信する`);
    repFormDivSubmitBtn.addEventListener('click', () => {
        commentRepFormBoxRemSubmit(repgroup,repid);
    });
    repFormDivBtnDiv.appendChild(repFormDivSubmitBtn);
    repFormDivBtnDiv.appendChild(repFormDivCloseBtn);


    let repFormDivContent = document.createElement('div');
    repFormDivContent.innerHTML=(`
    <form id="rep_commentForm" class="c-form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIJL-coat1Tl92nVowE17bfkMAnAekuWskkGwNd3h8rX-aIg/formResponse" method="POST" target="rep_hidden_iframe" onsubmit="submitted=true;">
        <div class="c-form__item" style="width:100%;"><p class="c-form__input" style="width:100%;" id="rep_form_rep_data"></p></div>
        <div class="c-form__item" style="width:100%;">
            <input name="entry.1738713134" style="width:100%;" class="c-form__input" id="rep_field_name" type="text" required="required"  placeholder="名前を入力" autocomplete="nickname"/>
        </div>
        <p id="rep_name_error" style="color: var(--red-500);font:bold;"></p>
        <div class="c-form__item" style="width:100%;">
            <textarea name="entry.975792514" style="width:100%;" class="c-form__input" id="rep_field_message" placeholder="素敵なコメントを入力" required="required" autocomplete="off"></textarea>
        </div>
        <p id="rep_message_error" style="color: var(--red-500);font:bold;"></p>
        <div class="c-form__item" style="width:100%;">
            <input name="entry.537780005" class="c-form__input" style="width:100%;background-color: var(--background-2);align-items: right;display: none;" id="rep_field_repgroup" type="text" required="required" placeholder="返信コメントグループID"/>
        </div>
        <p id="rep_group_error" style="color: var(--red-500);font:bold;"></p>
        <div class="c-form__item">
            <input name="entry.1032562646" class="c-form__input" style="width:100%;background-color: var(--background-2);align-items: right;display: none;" id="rep_field_rep" type="text" required="required" placeholder="返信コメントID" />
        </div>
        <p id="rep_id_error" style="color: var(--red-500);font:bold;"></p>
    </form>
    <iframe name="rep_hidden_iframe" id="rep_hidden_iframe" style="display: none" onload="if(submitted){window.location='./';}"></iframe>
    `);

    repFormDiv.appendChild(repFormDivContent)
    repFormDiv.appendChild(repFormDivBtnDiv)
    repForm.appendChild(repFormDiv);

    document.getElementById('rep_form_rep_data').innerHTML=((allComments[`${repid}`].name)+'のコメントを選択中')
    document.getElementById('rep_field_repgroup').value=`${repgroup}`;
    document.getElementById('rep_field_rep').value=`${repid}`;

    var field_name = document.getElementById("rep_field_name");
    field_name.addEventListener('change', function(){
        document.getElementById('rep_field_name').setAttribute(`minlength`,`3`);
        document.getElementById('rep_field_name').setAttribute(`maxlength`,`13`);
        document.getElementById('rep_field_name').value=((document.getElementById('rep_field_name').value).replace(/\s+/g, ""));
    });
    var field_message = document.getElementById("rep_field_message");
    field_message.addEventListener('change', function(){
        document.getElementById('rep_field_message').setAttribute(`minlength`,`1`);
        document.getElementById('rep_field_message').setAttribute(`maxlength`,`100`);
    });

    window.location=(`#comment_${F_box}`);
};

function commentRepReset(){
    document.getElementById('form_rep_data').innerHTML=('通常コメントモード');
};

function commentRepFormBoxRemSubmit(repgroup,repid){
    var formError = 0;
    if(document.getElementById('rep_field_name').value.length > 2){
        if(document.getElementById('rep_field_name').value.length < 13){
            document.getElementById('rep_name_error').innerHTML=(``);
            
            if(document.getElementById('rep_field_message').value.length > 0){
                if(document.getElementById('rep_field_message').value.length < 101){
                    if(((document.getElementById('rep_field_message').value).replace(/\s|/g, "").length) > 0){
                        document.getElementById('rep_message_error').innerHTML=(``);

                        if(document.getElementById('rep_field_repgroup').value.length > 35){
                            if(document.getElementById('rep_field_repgroup').value.length < 101){
                                document.getElementById('rep_group_error').innerHTML=(``);
    
                                if(document.getElementById('rep_field_rep').value.length > 35){
                                    if(document.getElementById('rep_field_rep').value.length < 101){
                                        document.getElementById('rep_id_error').innerHTML=(``);
                                    }else{
                                        formError=formError+1
                                        document.getElementById('rep_id_error').innerHTML=(`返信コメントIDは100文字以内`);
                                    };
                                }else{
                                    formError=formError+1
                                    document.getElementById('rep_id_error').innerHTML=(`返信コメントIDは35文字以上`);
                                };
                            }else{
                                formError=formError+1
                                document.getElementById('rep_group_error').innerHTML=(`返信グループIDは100文字以内`);
                            };
                        }else{
                            formError=formError+1
                            document.getElementById('rep_group_error').innerHTML=(`返信グループIDは35文字以上`);
                        };
                    }else{
                        formError=formError+1
                        document.getElementById('rep_message_error').innerHTML=(`スペース以外の文字を最低1文字入力してください`);
                    };
                }else{
                    formError=formError+1
                    document.getElementById('rep_message_error').innerHTML=(`メッセージは100文字以内`);
                };
            }else{
                formError=formError+1
                document.getElementById('rep_message_error').innerHTML=(`メッセージは1文字以上`);
            };
        }else{
            formError=formError+1
            document.getElementById('rep_name_error').innerHTML=(`名前は13文字以内`);
        };
    }else{
        formError=formError+1
        document.getElementById('rep_name_error').innerHTML=(`名前は3文字以上`);
    };
    if(formError===0){
        document.getElementById("rep_commentForm").onsubmit = function(){ return true };
        let form_url = (`https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIJL-coat1Tl92nVowE17bfkMAnAekuWskkGwNd3h8rX-aIg/formResponse`);
        var fetch_url = (`${form_url}?entry.1738713134=${document.getElementById('rep_field_name').value}&entry.975792514=${document.getElementById('rep_field_message').value}&entry.537780005=${document.getElementById('rep_field_repgroup').value}&entry.1032562646=${document.getElementById('rep_field_rep').value}`);
    
        /// FormData作成
        const formData = new FormData();
        formData.append('entry.1738713134', `${document.getElementById('rep_field_name').value}`);
        formData.append('entry.975792514', `${document.getElementById('rep_field_message').value}`);
        formData.append('entry.537780005', `${document.getElementById('rep_field_repgroup').value}`);
        formData.append('entry.1032562646', `${document.getElementById('rep_field_rep').value}`);
        //console.log(fetch_url)
        fetch(form_url,{
            mode: "no-cors",
            method: 'POST',
            
            /// OK : FormDataでパラメータ指定
            body: formData
            }).then(async (response)=>{
            //console.log('response : ',await response.json());
            }).then((data)=>{
            //console.log('data : ', data);
            }).catch((error) => {
            console.error('error : ', error);
        });
        window.location=('#');
        alert('返信コメントを送信しました');
        commentRepFormBoxRem(repgroup,repid);
    }else{
        document.getElementById("rep_commentForm").onsubmit = function(){ return false };
    }
};

function commentRepFormBoxRem(repgroup,repid){
    var repForm = document.getElementById(`repForm_${repgroup}`);
    repForm.remove();
    F_box='false';
};


function copyToClipboard(text){
    // テキストコピー用の一時要素を作成
    const pre = document.createElement('pre');

    // テキストを選択可能にしてテキストセット
    pre.style.webkitUserSelect = 'auto';
    pre.style.userSelect = 'auto';
    pre.textContent = text;

    // 要素を追加、選択してクリップボードにコピー
    document.body.appendChild(pre);
    document.getSelection().selectAllChildren(pre);
    const result = document.execCommand('copy');

    // 要素を削除
    document.body.removeChild(pre);

    return result;
};

function autoLink(str,liClass) {
    const regexp_url = /(https?|ftp):\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3001-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g;
    var regexp_makeLink = function(url) {
        return '<a class="'+liClass+'" href="' + url + '" target="_blank" rel="noopener">' + url + '</a>';
    }
    if (str.match(regexp_url) != null) {
        const urlAllMatches = str.match(regexp_url);
        if(urlAllMatches){
            const urlMatches = new Set(urlAllMatches);
            urlMatches.forEach(url => {
                str = str.replaceAll(url, regexp_makeLink(url));
            });
        }
    }
    return str;
};

function linkCheck(str) {
    var linkCheckCount = false;
    const regexp_url = /(https?|ftp):\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3001-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g;
    var regexp_makeLink = function(url) {
        return '<a href="' + url + '" target="_blank" rel="noopener">' + url + '</a>';
    }
    if (str.match(regexp_url) != null) {
        linkCheckCount=true;
    }
    return linkCheckCount;
};

//document.getElementById('formBtn').addEventListener('click', () => {});
function offadadw(){
    
    document.getElementById('formBtn').addEventListener('click', () => {
        document.getElementById("commentForm").onsubmit = function(){ return false };
        var formErrorCount = 0;
        document.getElementById('field_name').value=((document.getElementById('field_name').value).replace(/\s+/g, ""));
        if(((document.getElementById('field_name').value).replace(/\s|/g, "").length) > 2){

            document.getElementById('form_name_error').innerHTML=(``);
        }else{
            formErrorCount+=1;
            document.getElementById('form_name_error').innerHTML=(`スペース以外の文字を最低3文字入力してください`);
        };
        if(((document.getElementById('field_message').value).replace(/\s|/g, "").length) > 0){
            document.getElementById('form_message_error').innerHTML=(``);
        }else{
            formErrorCount+=1;
            document.getElementById('form_message_error').innerHTML=(`スペース以外の文字を最低一文字入力してください`);
        };
        if(formErrorCount===0){
            fetch(`https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIJL-coat1Tl92nVowE17bfkMAnAekuWskkGwNd3h8rX-aIg/formResponse?entry.1738713134=${document.getElementById('field_name').value}&entry.975792514=${document.getElementById('field_message').value}`)
            document.getElementById("commentForm").onsubmit = function(){ return true };
            alert('コメントを送信しました');window.location='./';
        }else{
            document.getElementById("commentForm").onsubmit = function(){ return false };
        };
    });
};

function togglePop(mode,title,description,button) {
    if(mode==='displayShow'){
        document.getElementById('popAlert_title').innerHTML=title;
        document.getElementById('popAlert_description').innerHTML=description;
        document.getElementById('popAlert_button').innerHTML=button;
    }else{if(mode==='button'){

    };};
    let popup = document.getElementById('popAlert');
    popup.classList.toggle('active');
};