const postTemplate = (title, desc, imgSrc) => `<div class="post">
<img src="${imgSrc}">
<div class="content">
<h3>${title}</h3>
<span>${desc}</span>
</div>
</div>`

window.fetch('./data.json').then(res => res.json()).then(res => {
  const app = document.querySelector('.app')
  let posts = res.posts
  posts = posts.map(p => {
    return postTemplate(p.title, p.description, p.imgSrc)
  })
  app.innerHTML = posts.join('\n')
})
