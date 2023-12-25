const apiURL = 'https://script.google.com/macros/s/AKfycbxIpIEEnwh2STkLNqF7yHzb_wD6RosNN_l7DgIYeqtM6oyJF_Lw2RJkkbcoEJl2AnE48Q/exec';

var commentCount = 0;
var commentShowC = 0;
var commentListLoadSetC = 20;//この変数に初めの表示するコメント数を設定
commentListLoadSetC - 0;
var repCommentsCount = 0;
var repComments=(JSON.parse(`{}`));
var allCommentsCount = 0;
var allComments=(JSON.parse(`{}`));

//console.log(repComments)

async function loadData() {
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
    //console.log(allComments)
    //console.log(repComments)
    data.reverse().forEach(entry => {});
    data.reverse().forEach(entry => {
        //console.log(entry);
        if(entry.rep){
        }else{
            const commentLi = document.createElement('li');
            commentLi.id = (`comment_${commentCount}`);
            commentLi.classList.add('list-item');
        
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
        
            const commentRepDiv = document.createElement('div');
            commentRepDiv.id = (`comment_${entry.uuid}`)
        
            const usernamePara = document.createElement('p');
            usernamePara.classList.add('username');
            usernamePara.textContent = (entry.name);
            //usernamePara.textContent = (entry.name+' #'+commentCount);//コメントの読み込み番号を表示
        
            const checkDiv = document.createElement('p');
            if (entry.check) {
                checkDiv.style.color = '#f26b30';
                checkDiv.textContent = "認証済み";
            };
        
            const timestampPara = document.createElement('p');
            timestampPara.classList.add('timestamp');
            timestampPara.textContent = new Date(entry.timestamp).toLocaleString();
        
            const commentPara = document.createElement('p');
            commentPara.textContent = entry.comment;
        
            const uuidDivSpe = document.createElement('p');
            uuidDivSpe.classList.add('reportSpace');
        
            const uuidDiv = document.createElement('p');
            uuidDiv.style.textAlign=('right');
            uuidDiv.classList.add('report');
        
        
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
        
            usernamePara.appendChild(checkDiv);
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
                const REPcommentsContainer = document.getElementById(`comment_${repComments[i].repgroup}`);
                //console.warn(`${i} / repG = ${repComments[i].repgroup}`);
                const REPcommentLi = document.createElement('li');
                REPcommentLi.id = (`comment_${commentCount}`);
                REPcommentLi.classList.add('list-item');
                const REPcommentDiv = document.createElement('div');
                REPcommentDiv.classList.add('comment','commentRep');
                const REPcommentRepDiv = document.createElement('div');
                REPcommentRepDiv.id = (`comment_${repComments[i].uuid}`);
                const REPusernamePara = document.createElement('p');
                REPusernamePara.classList.add('username');
                REPusernamePara.textContent = (repComments[i].name);
                //REPusernamePara.textContent = (repComments[i].name+' #'+repComments[i].rep);//コメントの読み込み番号を表示
                const REPcheckDiv = document.createElement('p');
                if (repComments[i].check) {
                    REPcheckDiv.style.color = '#f26b30';
                    REPcheckDiv.textContent = "認証済み";
                };
                const REPtimestampPara = document.createElement('p');
                REPtimestampPara.classList.add('timestamp');
                REPtimestampPara.textContent = new Date(repComments[i].timestamp).toLocaleString();
                const REPcommentPara = document.createElement('p');
                REPcommentPara.textContent = repComments[i].comment;
                const REPuuidDivSpe = document.createElement('p');
                REPuuidDivSpe.classList.add('reportSpace');
                const REPuuidDiv = document.createElement('p');
                REPuuidDiv.style.textAlign=('right');
                REPuuidDiv.classList.add('report');
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

                const REPcommentRepCommentID = document.createElement('a');
                REPcommentRepCommentID.classList.add(`text-[#6094F8]`);
                REPcommentRepCommentID.textContent=`@${allComments[repComments[i].rep].name}`

                REPcommentDiv.appendChild(REPcommentRepCommentID);
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
    if(commentCount >　commentListLoadSetC){
        loadAddComment('set',commentListLoadSetC);
    }else{
        loadAddComment('set',commentCount);
    };
};


loadData();


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
    }
}, 500);

// コメントを通報する機能

function commentReport(id){
    var name = prompt(`コメントを通報する場合、名前等が必要です。このフィールドにEmailを記入することで早期に対応することができます。\n（匿名可、英数字のみ）`, "名前またはメールアドレス").replace(/[^0-9a-z]/gi, '');
    if(name !== ''){
        var report = prompt(`コメントID: ${id}\nを通報しようとしています。`, "スパムに該当する");
        if(report!==null){
        var isBoss = confirm(`本当に通報しますか？`);
        if(isBoss===true){
            var url = (`https://script.google.com/macros/s/AKfycbzxk7ZaOOHWp3R_2EanQDC5PXgciDt4U3h9xvV9ZNPVQ859ZcDp8lSR9vekT9ZCPImn/exec?mode=post&name=${name}&report=${report}&reportId=${id}`);
            fetch(url, { mode: 'no-cors' });
        };
        };
    }else{
        alert('入力値が正しくありません！');
    }
};

function commentRep(repgroup,repid){
    window.location='#コメント欄';
    document.getElementById('field-repgroup').value=`${repgroup}`;
    document.getElementById('field-rep').value=`${repid}`;
};