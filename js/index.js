const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.src = "img/logo.png";
const cta = document.getElementById('cta-img');
cta.src = "img/header-img.png";
const middleImg = document.getElementById('middle-img');
middleImg.src = "img/mid-page-accent.jpg";

const title = document.querySelector('.cta-text h1');
title.innerHTML = 'DOM<br>IS<br>AWESOME';
title.style.color = '#012040';
const button = document.querySelector('.cta-text button');
button.textContent = 'Get Started';

const copyright = document.querySelector('footer p');
copyright.textContent = "Copyright Great Idea! 2018";

const anchor = Array.from(document.getElementsByTagName('a'));
anchor[0].textContent = 'Services';
anchor[1].textContent = 'Product';
anchor[2].textContent = 'Vision';
anchor[3].textContent = 'Features';
anchor[4].textContent = 'About';
anchor[5].textContent = 'Contact';

const navigation = document.querySelector('header nav');

function anchorCreator(element, content) {
  element = document.createElement('a');
  element.textContent = content;
  navigation.append(element);
  element.href = '#';
  anchor.push(element);
  return element;
}
const newAnchor = anchorCreator('newAnchor', 'Blog')

const newAnchor2 = document.createElement('a');
anchor.push(newAnchor2);
newAnchor2.textContent = 'Portfolio';
navigation.prepend(newAnchor2);
newAnchor2.href = '#';
anchor.forEach(element => element.style.color = 'red')
const mainHeaders = document.getElementsByTagName('h4');
mainHeaders[0].textContent = 'Features';
mainHeaders[1].textContent = 'About';
mainHeaders[2].textContent = 'Services';
mainHeaders[3].textContent = 'Product';
mainHeaders[4].textContent = 'Vision';
mainHeaders[5].textContent = 'Contact';
const mainHeadersArray = Array.from(mainHeaders);
mainHeadersArray.forEach(element => element.style.color = '#034384');
mainHeadersArray.forEach(element => element.style.fontSize = '1.8rem');

const mainParagraphs = document.getElementsByTagName('p');
mainParagraphs[0].textContent = siteContent["main-content"]["about-content"];
mainParagraphs[1].textContent = siteContent["main-content"]["features-content"];
mainParagraphs[2].textContent = siteContent["main-content"]["services-content"];
mainParagraphs[3].textContent = siteContent["main-content"]["product-content"];
mainParagraphs[4].textContent = siteContent["main-content"]["vision-content"];
mainParagraphs[5].innerHTML = "123 Way 456 Street<br>Somewhere, USA<br><br>1 (888) 888-8888<br><br>sales@greatidea.io"
Array.from(mainParagraphs).forEach(element => element.style.color = '#ff00f5');
