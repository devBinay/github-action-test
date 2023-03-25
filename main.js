const postTemplate = (title, desc, imgSrc) => `<div>
<p>${title}</p>
<span>${desc}</span>
<img src="${imgSrc}">
</div>`

window.fetch('./data.json').then(res => res.json()).then(res => {
  const app = document.querySelector('.app')
  let posts = res.posts
  posts = posts.map(p => {
    return postTemplate(p.title, p.description, p.imgSrc)
  })
  app.innerHTML = posts.join('\n')
})
