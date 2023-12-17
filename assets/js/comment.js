const apiURL = 'https://script.google.com/macros/s/AKfycbxm-7lnqXUimeXMYN45Ebj5iY5tyKJW0pL2tWoGi84MKGCiBXr0gXspvuyUQo-JBFraCQ/exec';

async function loadData() {
  const commentsContainer = document.getElementById('commentsContainer');
  const response = await fetch(apiURL);
  const data = await response.json();

  document.getElementById('commentsContainer').innerHTML = "";
  var i = 0;
  data.reverse().forEach(entry => {
    i = i +  1;
    const commentDiv1 = document.createElement('div');
    commentDiv1.classList.add('relative','p-px','rounded-2xl','mt-4','bg-gradient-to-b','from-[#2A3D63]/[0.5]','to-[#070A0F]/[0.5]','shadow-[0px_10px_40px_0px_rgba(0,0,0,0.04)]','max-w-xl','mx-auto','w-full','wi450px');
    const commentDiv2 = document.createElement('div');
    commentDiv2.classList.add('rounded-[15px]','bg-gradient-to-b','from-[#101521]/[0.8]','to-[#101521]/[0.1]','p-8');
    const commentDiv3 = document.createElement('div');
    commentDiv3.classList.add('flex','items-start','justify-between');
    const commentDiv4 = document.createElement('div');
    commentDiv4.classList.add('flex','space-x-4','items-start');
    const commentDiv5 = document.createElement('div');
    const commentP1 = document.createElement('p');
    commentP1.classList.add('text-white','font-medium','flex','space-x-2','items-centertext-white','font-medium','flex','space-x-2','items-center');
    const username = document.createElement('span');
    username.classList.add('comment_username');
    username.textContent = entry.name;
    const timestamp = document.createElement('span');
    timestamp.classList.add('text-[#FFFFFF]/[0.64]');
    timestamp.textContent = new Date(entry.timestamp).toLocaleString();
    const commentDiv6 = document.createElement('div');
    commentDiv6.classList.add('mt-4');
    const comment = document.createElement('div');
    comment.classList.add('text-[#FFFFFF]/[0.64]');
    comment.textContent = entry.comment;
    const certification_badge = document.createElement('span');
    certification_badge.setAttribute(`id`,`certification_badge_svg_${i}`);
    var badge_id = (`certification_badge_svg_${i}`);

    commentP1.appendChild(username);
    if(entry.check){
      commentP1.appendChild(certification_badge);
    }
    commentDiv5.appendChild(commentP1);
    commentDiv5.appendChild(timestamp);
    commentDiv4.appendChild(commentDiv5);
    commentDiv3.appendChild(commentDiv4);
    commentDiv6.appendChild(comment);
    commentDiv2.appendChild(commentDiv3);
    commentDiv2.appendChild(commentDiv6);
    commentDiv1.appendChild(commentDiv2);
    commentsContainer.appendChild(commentDiv1);

    if(entry.check){
      document.getElementById(badge_id).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-blue-500 stroke-white"><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" fill="currentColor" stroke-width="0"></path></svg>`
    }
  });
}

loadData();