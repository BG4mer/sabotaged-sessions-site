// Animations
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Load News
fetch('news.json')
  .then(res => res.json())
  .then(newsData => {
    const container = document.getElementById('newsContainer');
    if (!container) return;

    container.innerHTML = '';
    newsData.forEach(article => {
      const div = document.createElement('div');
      div.className = 'news-item';
      div.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        <span class="date">${article.date}</span>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    const container = document.getElementById('newsContainer');
    if (container) container.innerHTML = `<p class="error">Error loading news: ${err}</p>`;
  });