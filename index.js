let blogSection = document.querySelector(".blogs")

fetch("https://dev.to/api/articles?username=antdp425")
  .then((r) => r.json())
  .then((r) => {
    r.forEach(b => blogSection.innerHTML += createBlog(b));
  });

function createBlog(blog){
   return `
   <div class="blog_card">
   I'm a blog card
   </div>
   `
}