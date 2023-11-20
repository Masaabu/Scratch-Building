const apiURL = 'https://script.googleusercontent.com/macros/echo?user_content_key=UlREUe_8nCrNxOAIQPZGU-icp9BVCYOYKBAn4RumuS9GCvIMQXa_tNDakekijnslyghW2rz7EQu6hOPxtxzOrgGxZSIJpU_Tm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA30LcFUwIdD0zHxt0pP1MfEcXlalO9LAS2a8KlEHr86MAk-3HrUQDxkKrtaQQdmBvUPUdLJmDOpo447Y6gzhpbzFQBgvMgraNz9Jw9Md8uu&lib=MYo5YPB8x8pm9i43XpKsAFgPx66acL29B';

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

    const timestampPara = document.createElement('p');
    timestampPara.classList.add('timestamp');
    timestampPara.textContent = new Date(entry.timestamp).toLocaleString();

    const commentPara = document.createElement('p');
    commentPara.textContent = entry.comment;

    commentDiv.appendChild(usernamePara);
    commentDiv.appendChild(timestampPara);
    commentDiv.appendChild(commentPara);
    
    commentsContainer.appendChild(commentDiv);
  });
}

loadData();