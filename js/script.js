// ── Scroll Progress Bar ──
window.addEventListener('scroll', () => {
  const progressEl = document.getElementById('ts-progress');
  if (!progressEl) return;
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  const pct = Math.min(scrolled / total, 1);
  progressEl.style.transform = `scaleX(${pct})`;
}, { passive: true });

// ── Hamburger Menu Toggle ──
const hamburger = document.getElementById('ts-hamburger');
const tsNav = document.getElementById('ts-nav');

if (hamburger && tsNav) {
  hamburger.addEventListener('click', () => {
    tsNav.classList.toggle('open');
  });
}

// ── Typewriter Animation ──
const typeWords = ['Intelligent', 'Scalable', 'Innovative', 'Reliable', 'Powerful'];
let twIndex = 0, twChar = 0, twDeleting = false;
const twEl = document.getElementById('ts-typeword');

function typeWrite() {
  if (!twEl) return;
  const word = typeWords[twIndex];

  if (!twDeleting) {
    twEl.textContent = word.slice(0, twChar + 1);
    twChar++;
    if (twChar === word.length) {
      twDeleting = true;
      setTimeout(typeWrite, 1800); // pause at full word
      return;
    }
  } else {
    twEl.textContent = word.slice(0, twChar - 1);
    twChar--;
    if (twChar === 0) {
      twDeleting = false;
      twIndex = (twIndex + 1) % typeWords.length;
    }
  }

  setTimeout(typeWrite, twDeleting ? 55 : 90);
}

if (twEl) {
  setTimeout(typeWrite, 1200);
}

// ── Case Study Data ──
let products = [
  {
    thumbnail: './images/opd.png',
    name: 'Online OPD - Naturalminds Digital Systems LLP',
    quote: 'NaturalMinds Digital Systems LLP was established in 2019 with a vision to leverage technology for improving access to healthcare services...',  
  },
  {
    thumbnail: './images/horse-saddle.png',
    name: 'Horse & Saddle Case Study',
    quote: "Precision and efficiency are paramount in today's competitive manufacturing environment. Especially for companies ..."
  },
  {
    thumbnail: './images/smart-dustbin.png',
    name: "Automated Dustbins Case Study",
    quote: "The smart waste management project primarily aims to develop and implement innovative waste management systems..."
  },
  {
    thumbnail: './images/ai-boat.png',
    name: "Advanced Chatbot Case Study",
    quote: "Our advanced chatbot solution is engineered to offer highly accurate user intent recognition and generate responses..."
  },
  {
    thumbnail: './images/venue-booking.png',
    name: "Online Venue Booking - Madnue Solutions",
    quote: "Madnue was launched in 2020 with the aim of simplifying the process of discovering and booking venues for various events..."
  },
  {
    thumbnail: './images/dashboard.png',
    name: "Power BI Dashboard",
    quote: "The Power BI dashboard, integrated with PowerApps, is a sophisticated data visualization and management tool..."
  }
];

const cardContainer = document.getElementById('products');
if (cardContainer) {
  cardContainer.innerHTML = products
    .map(product => `
      <div class="ts-tcard reveal d1 visible">
        <div class="service-img">
          <img src="${product.thumbnail}" alt="">
        </div>
        <h2>${product.name}</h2>
        <div class="ts-tquote">
          "${product.quote}"
        </div>
      </div>
    `)
    .join('');
}
