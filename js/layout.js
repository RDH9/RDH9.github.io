// Injects shared header/footer and highlights the active nav link.
// Works from both root pages and the /blog/ subfolder.
function loadLayout() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const inBlogFolder = window.location.pathname.includes("/blog/");
  const prefix = inBlogFolder ? "../" : "";

  const header = `
  <header class="site-header">
    <div class="nav-inner">
      <a class="brand" href="${prefix}index.html">RDH</a>
      <nav>
        <ul>
          <li><a href="${prefix}index.html" data-page="index.html">About</a></li>
          <li><a href="${prefix}projects.html" data-page="projects.html">Projects</a></li>
          <li><a href="${prefix}blog.html" data-page="blog.html">Blog</a></li>
          <li><a href="${prefix}resume.html" data-page="resume.html">Resume</a></li>
          <li><a href="${prefix}contact.html" data-page="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>`;

  const footer = `
  <footer>
    <div class="container">
      &copy; ${new Date().getFullYear()} RDH. Built with plain HTML/CSS/JS.
    </div>
  </footer>`;

  document.body.insertAdjacentHTML("afterbegin", header);

  document.querySelectorAll("nav a").forEach(link => {
    const page = link.dataset.page;
    if (page === path) {
      link.classList.add("active");
    }
    if (inBlogFolder && page === "blog.html") {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", loadLayout);
