const apiURL = 'https://script.google.com/macros/s/AKfycbxIpIEEnwh2STkLNqF7yHzb_wD6RosNN_l7DgIYeqtM6oyJF_Lw2RJkkbcoEJl2AnE48Q/exec';

var commentCount = 0;
var commentShowC = 0;
var commentListLoadSetC = 20;//この変数に初めの表示するコメント数を設定
commentListLoadSetC - 0;
var repCommentsCount = 0;
var repComments=(JSON.parse(`{}`));

//console.log(repComments)

async function loadData() {
  const commentsContainer = document.getElementById('commentsContainer');
  const response = await fetch(apiURL);
  var data = await response.json();
  data.reverse().forEach(entry => {

    if(entry.rep) {
      repComments[`${repCommentsCount}`]=({"timestamp":entry.timestamp,"name":entry.name,"comment":entry.comment,"rep":entry.rep,"uuid":entry.uuid,"check":entry.check});
      repCommentsCount=repCommentsCount+1;
    }else{
      const commentLi = document.createElement('li');
      commentLi.id = (`comment_${commentCount}`)
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
      }
  
      const timestampPara = document.createElement('p');
      timestampPara.classList.add('timestamp');
      timestampPara.textContent = new Date(entry.timestamp).toLocaleString();
  
      const commentPara = document.createElement('p');
      commentPara.textContent = entry.comment;
  
      const uuidDivSpe = document.createElement('p');
      uuidDivSpe.classList.add('reportSpace')
  
      const uuidDiv = document.createElement('p');
      uuidDiv.style.textAlign=('right')
      uuidDiv.classList.add('report')
  
  
      const repBtn = document.createElement('button');
      repBtn.textContent = `返信する`;
      repBtn.style.margin = `0 0 0 10px`;
      repBtn.style.color = `var(--text-2)`;
      repBtn.addEventListener('click', () => {
        commentRep(entry.uuid);
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
    }
  });
  if(commentCount >　commentListLoadSetC){
    loadAddComment('set',commentListLoadSetC);
  }else{
    loadAddComment('set',commentCount);
  };
  //repCommentLoadData();
};

function repCommentLoadData(){
  //repCommentsCount=repCommentsCount-1;
  for(let i = 0; i < repCommentsCount; i++){
    if(i===(repCommentsCount-1)){

    }else{
      let repHostComment = document.getElementById(`comment_${repComments[i].rep}`);
      console.log(i+' / '+repCommentsCount);
  
      const commentLi = document.createElement('li');
      commentLi.id = (`comment_0`);
      commentLi.classList.add('list-item');
  
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment','commentRep');
  
      const commentRepDiv = document.createElement('div');
      commentRepDiv.id = (`comment_${repComments[i].uuid}`);
  
      const usernamePara = document.createElement('p');
      usernamePara.classList.add('username');
      usernamePara.textContent = (repComments[i].name);
      //usernamePara.textContent = (repComments[i].name+' #'+commentCount);//コメントの読み込み番号を表示
  
      const checkDiv = document.createElement('p');
      if (repComments[i].check) {
        checkDiv.style.color = '#f26b30';
        checkDiv.textContent = "認証済み";
      }
  
      const timestampPara = document.createElement('p');
      timestampPara.classList.add('timestamp');
      timestampPara.textContent = new Date(repComments[i].timestamp).toLocaleString();
  
      const commentPara = document.createElement('p');
      commentPara.textContent = repComments[i].comment;
  
      const uuidDivSpe = document.createElement('p');
      uuidDivSpe.classList.add('reportSpace')
  
      const uuidDiv = document.createElement('p');
      uuidDiv.style.textAlign=('right')
      uuidDiv.classList.add('report')
  
  
      const repBtn = document.createElement('button');
      repBtn.textContent = `返信する`;
      repBtn.style.margin = `0 0 0 10px`;
      repBtn.style.color = `var(--text-2)`;
      //repBtn.addEventListener('click', () => {
      //  commentRep(repComments[i].rep);
      //});
      uuidDiv.appendChild(repBtn);
  
      const uuidBtn = document.createElement('button');
      uuidBtn.textContent = `通報する`;
      uuidBtn.style.margin = `0 0 0 10px`;
      uuidBtn.style.color = `var(--text-2)`;
      uuidDiv.appendChild(uuidBtn);
  
      usernamePara.appendChild(checkDiv);
      commentDiv.appendChild(usernamePara);
      commentDiv.appendChild(timestampPara);
      commentDiv.appendChild(commentPara);
      commentDiv.appendChild(uuidDivSpe);
      commentDiv.appendChild(uuidDiv);
      commentLi.appendChild(commentDiv);
      commentLi.appendChild(commentRepDiv);
      
      repHostComment.appendChild(commentLi);
      commentCount = commentCount+1;
    }
  };
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
    console.log(commentShowC)
    for (let i = 0; i < commentShowC -1; i++) {
      document.getElementById(`comment_${i}`).style.display=('block');
    };
    console.log('displayComment = '+commentShowC+'/'+commentCount);
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

function commentRep(id){
  window.location='#コメント欄';
  document.getElementById('field-repCommentId').value=`${id}`;
};