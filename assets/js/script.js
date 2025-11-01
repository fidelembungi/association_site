// Generic interactions for the static site
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Back to top button
  const btn = document.createElement('button');
  btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  btn.className = 'back-to-top';
  Object.assign(btn.style, {
    position: 'fixed', right: '18px', bottom: '18px', padding: '10px 12px',
    borderRadius: '8px', border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer', boxShadow: '0 8px 18px rgba(0,0,0,0.2)'
  });
  btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  document.body.appendChild(btn);
});

function index() {
  location.href = "./";
}

function activites() {
  location.href = "./activites.html";
}

function services() {
  location.href = "./services.html";
}

function apropos() {
  location.href = "./apropos.html";
}

function contact() {
  location.href = "./contact.html";
}