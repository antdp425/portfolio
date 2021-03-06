let blogSection = document.querySelector(".blog_cards");

fetch("https://dev.to/api/articles?username=antdp425&per_page=6")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((blog) => (blogSection.innerHTML += createBlog(blog)));
  });

function createBlog(blog) {
  console.log(blog);
  return `
   <div class="blog_card">
   <a target="_blank" href="${blog.url}">
      <img src="${blog.social_image}" alt="" class="blog_image">
      <h2 class="blog_title">
      ${blog.title}
      </h2>          
      </a>
   </div>
   `;
}