// Fetch and render news
fetch('news.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('news-container');
    if (!Array.isArray(data)) {
      console.error("news.json should be an array!");
      container.innerHTML = '<p style="color:red">Error: Invalid news format</p>';
      return;
    }
    container.innerHTML = data.map(post => `
      <div class="news-item">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <small>🕓 ${new Date(post.date).toLocaleString()}</small>
      </div>
    `).join('');
  })
  .catch(err => {
    document.getElementById('news-container').innerHTML = `<p style="color:red">Error: ${err}</p>`;
  });