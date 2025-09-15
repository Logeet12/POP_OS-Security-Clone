document.getElementById("contacts-link").addEventListener("click", function () {
  window.location.href = "contacts.html";
});

document.querySelector(".login-btn").addEventListener("click", function (e) {
  e.preventDefault(); 
  window.location.href = "dashboard.html";
});

document.getElementById("register-link").addEventListener("click", function () {
  window.location.href = "register.html";
});

const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  if (i >= slideItems.length) index = 0;
  if (i < 0) index = slideItems.length - 1;
  slides.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  index++;
  showSlide(index);
});

document.querySelector('.prev').addEventListener('click', () => {
  index--;
  showSlide(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});

showSlide(index);
document.addEventListener("DOMContentLoaded", () => {
  const links = {
    rss:      "https://pop.system76.com/feed.xml",
    linkedin: "https://www.linkedin.com/company/system76",
    github:   "https://github.com/pop-os",
    youtube:  "https://www.youtube.com/c/System76",
    instagram:"https://www.instagram.com/pop_os_official/?hl=en",
    x:        "https://twitter.com/system76" 
  };

  Object.entries(links).forEach(([id, url]) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", e => {
        e.preventDefault();      
        window.open(url, "_blank"); 
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const learnMore = document.getElementById("learnMoreLink");
  learnMore.addEventListener("click", (e) => {
    e.preventDefault();               
    window.location.href = "learnmore.html"; 
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.addEventListener("click", () => {
    window.location.href = "https://system76.com/pop/download/";
  });
});

