const targetDate = new Date('2023-12-01T17:00:00+09:00').getTime();

function showYouTubeVideo() {
  document.getElementById("UpdateInfoVideo").innerHTML = `
  <iframe width="100%" src="https://www.youtube.com/embed/j-LTJJghfJ4" title="YouTube video player" allowfullscreen style="aspect-ratio:7/4;"></iframe>
  `;
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `公開まで： ${days}日 ${hours}:${minutes}:${seconds}`;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = 'Scratchで公開中！';
  } else {
    setTimeout(updateCountdown, 1000);
  }
}