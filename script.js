
// script.js - simple bilingual toggler (fr/en) using data-i18n attributes
const texts = {
  "fr": {
    "home_title":"Pour un développement durable du Kwango",
    "cta":"Découvrir nos activités",
    "don":"Faire un don",
    "activities":"Nos activités",
    "services":"Services",
    "about":"À propos",
    "contact":"Contact"
  },
  "en": {
    "home_title":"For sustainable development of Kwango",
    "cta":"Discover our activities",
    "don":"Make a donation",
    "activities":"Our activities",
    "services":"Services",
    "about":"About",
    "contact":"Contact"
  }
};

function setLang(lang){
  document.documentElement.lang = (lang==="en") ? "en" : "fr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(texts[lang] && texts[lang][key]) el.textContent = texts[lang][key];
  });
  localStorage.setItem("fd_lang", lang);
}

document.addEventListener("DOMContentLoaded", ()=>{
  const saved = localStorage.getItem("fd_lang") || "fr";
  setLang(saved);
});
