const apiURL = 'https://script.google.com/macros/s/AKfycbxm-7lnqXUimeXMYN45Ebj5iY5tyKJW0pL2tWoGi84MKGCiBXr0gXspvuyUQo-JBFraCQ/exec';

var commentCount = 0;
var commentShowC = 20;

async function loadData() {
  const commentsContainer = document.getElementById('commentsContainer');
  const response = await fetch(apiURL);
  const data = await response.json();

  data.reverse().forEach(entry => {
    const commentLi = document.createElement('li');
    commentLi.id = (`comment_${commentCount}`)
    commentLi.classList.add('list-item');

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const usernamePara = document.createElement('p');
    usernamePara.classList.add('username');
    usernamePara.textContent = (entry.name+' #'+commentCount);

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

    usernamePara.appendChild(checkDiv)
    commentDiv.appendChild(usernamePara)
    commentDiv.appendChild(timestampPara);
    commentDiv.appendChild(commentPara);
    commentLi.appendChild(commentDiv);
    
    commentsContainer.appendChild(commentLi);
    commentCount = commentCount+1;
  });
  if(commentCount > 20){
    loadAddComment('set','20');
  }else{
    loadAddComment('set',commentCount);
  }
}

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