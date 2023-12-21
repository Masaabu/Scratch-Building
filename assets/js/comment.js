const apiURL = 'https://script.google.com/macros/s/AKfycbxm-7lnqXUimeXMYN45Ebj5iY5tyKJW0pL2tWoGi84MKGCiBXr0gXspvuyUQo-JBFraCQ/exec';

async function loadData() {
  const commentsContainer = document.getElementById('commentsContainer');
  const response = await fetch(apiURL);
  const data = await response.json();

  data.reverse().forEach(entry => {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const usernamePara = document.createElement('p');
    usernamePara.classList.add('username');
    usernamePara.textContent = entry.name;

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
    
    commentsContainer.appendChild(commentDiv);
  });
}

loadData();