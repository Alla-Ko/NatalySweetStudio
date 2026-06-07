// ============================================
// КОЛЕКЦІЯ ДАНИХ АСОРТИМЕНТУ
// Для оновлення асортименту редагуйте цей масив
// ============================================
const products = [
  {
    name: "Ягідна насолода",
    description: "Чізкейк зі свіжими ягодоми та фруктами",
    pricePerKg: 850,
    image: "./images/Assort/1_Berry/1.jpg",
    alt: "Ягідний торт",
    gallery: [
      "./images/Assort/1_Berry/1.jpg",
      "./images/Assort/1_Berry/2.jpg",
      "./images/Assort/1_Berry/3.jpg",
      "./images/Assort/1_Berry/4.jpg",
      "./images/Assort/1_Berry/5.jpg",
      "./images/Assort/1_Berry/6.jpg",
      "./images/Assort/1_Berry/7.jpg",
      "./images/Assort/1_Berry/8.jpg",
    ],
    ingredients: [
      "Пісочне печиво/бісквіт",
      "Крем-чіз",
      "Свіжа полуниця",
      "Малина",
      "Лохина",
      "Желатин",
      "Яйця",
      "Цукор",
      "Лимонний сік",
      "Натуральні вершки",
    ],
  },
  {
    name: "Три шоколади",
    description: "Насичений шоколадний мусовий торт",
    pricePerKg: 920,
    image: "./images/Assort/2_Three_chocolates/1.jpg",
    alt: "Шоколадний торт",
    gallery: [
      "./images/Assort/2_Three_chocolates/1.jpg",
      "./images/Assort/2_Three_chocolates/2.jpg",
      "./images/Assort/2_Three_chocolates/3.jpg",
      "./images/Assort/2_Three_chocolates/4.jpg",
      "./images/Assort/2_Three_chocolates/5.jpg",
      "./images/Assort/2_Three_chocolates/6.jpg",
      "./images/Assort/2_Three_chocolates/7.jpg",
    ],
    ingredients: [
      "Бельгійський темний шоколад",
      "Бельгійський білий шоколад",
      "Какао",
      "Вершки",
      "Вершкове масло",
      "Молоко",
      "Борошно",
      "Желатин",
      "Яйця",
      "Цукор",
      "Сіль",
    ],
  },
  {
    name: "Мусові тортики",
    description: "Смачнющі мусові тортики з фруктовими начинками",
    pricePerKg: 850,
    image: "./images/Assort/3_Mousse_cakes/1.jpg",
    alt: "Мусовий торт",
    gallery: [
      "./images/Assort/3_Mousse_cakes/1.jpg",
      "./images/Assort/3_Mousse_cakes/2.jpg",
      "./images/Assort/3_Mousse_cakes/3.jpg",
      "./images/Assort/3_Mousse_cakes/4.jpg",
      "./images/Assort/3_Mousse_cakes/5.jpg",
      "./images/Assort/3_Mousse_cakes/6.jpg",
      "./images/Assort/3_Mousse_cakes/7.jpg",
      "./images/Assort/3_Mousse_cakes/8.jpg",
      "./images/Assort/3_Mousse_cakes/9.jpg",
      "./images/Assort/3_Mousse_cakes/10.jpg",
      "./images/Assort/3_Mousse_cakes/11.jpg",
      "./images/Assort/3_Mousse_cakes/12.jpg",
    ],
    ingredients: [
      "Свіжі ягоди (малина, ожина, смородина)",
      "Бельгійський шоколад",
      "Вершки",
      "Вершковий крем-сир",
      "Желатин",
      "Молоко",
      "Яйця",
      "Цукор",
      "Сіль",
    ],
  },
  {
    name: "Шоколадний фондан",
    description: "Класичний французький десерт «шоколад, що тане»",
    pricePerKg: 680,
    image: "./images/Assort/4_Chocolate_Fondant/1.jpg",
    alt: "Чізкейк",
    gallery: [
      "./images/Assort/4_Chocolate_Fondant/1.jpg",
      "./images/Assort/4_Chocolate_Fondant/2.jpg",
      "./images/Assort/4_Chocolate_Fondant/3.jpg",
      "./images/Assort/4_Chocolate_Fondant/4.jpg",
    ],
    ingredients: [
      "Чорний шоколад",
      "Вершкове масло",
      "Пшеничне борошно",
      "Яйця",
      "Цукор",
      "Сіль",
    ],
  },
  {
    name: "Яблучний штрудель",
    description: "Австрійський штрудель з яблуками та родзинками",
    pricePerKg: 1200,
    image: "./images/Assort/5_Strudel/1.jpg",
    alt: "Макаронс",
    gallery: [
      "./images/Assort/5_Strudel/1.jpg",
      "./images/Assort/5_Strudel/2.jpg",
      "./images/Assort/5_Strudel/3.jpg",
      "./images/Assort/5_Strudel/4.jpg",
      "./images/Assort/5_Strudel/5.jpg",
      "./images/Assort/5_Strudel/6.jpg",
    ],
    ingredients: [
      "Борошно",
      "Олія",
      "Вершкове масло",
      "Яблука",
      "Волоські горіхи",
      "Родзинки",
      "Кориця",
      "Цукор",
      "Цукрова пудра",
      "Сіль",
      "Сухарі",
    ],
  },
  {
    name: "Наполеон",
    description: "Французький Mille-feuille «тисяча листів»",
    pricePerKg: 750,
    image: "./images/Assort/6_Napoleon/1.jpg",
    alt: "Тірамісу",
    gallery: [
      "./images/Assort/6_Napoleon/1.jpg",
      "./images/Assort/6_Napoleon/2.jpg",
      "./images/Assort/6_Napoleon/3.png",
      "./images/Assort/6_Napoleon/4.png",
      "./images/Assort/6_Napoleon/5.png",
    ],
    ingredients: [
      "Борошно",
      "Вершкове масло",
      "Яйця",
      "Молоко",
      "Сіль",
      "Цукор",
      "Ванільний цукор",
    ],
  },
];

// Генерація HTML для картки товару
function createProductCard(product, index) {
  return `
                <div class="product-card" data-product-index="${index}">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.alt}">
                        <div class="product-image-overlay">
                            <span>Детальніше</span>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <span class="product-price">від ${product.pricePerKg} ₴/кг</span>
                    </div>
                </div>
            `;
}

// Генерація карток
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  let html = "";
  products.forEach((product, index) => {
    html += createProductCard(product, index);
  });
  grid.innerHTML = html;
}

// Генеруємо картки при завантаженні
renderProducts();

// ============================================
// MODAL FUNCTIONALITY
// ============================================
const modal = document.getElementById("product-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalClose = document.getElementById("modal-close");
const gallerySlider = document.getElementById("gallery-slider");
const galleryDots = document.getElementById("gallery-dots");
const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");
const modalProductName = document.getElementById("modal-product-name");
const modalProductTagline = document.getElementById("modal-product-tagline");
const modalIngredients = document.getElementById("modal-ingredients");
const modalPriceValue = document.getElementById("modal-price-value");
const modalOrderBtn = document.getElementById("modal-order-btn");

let currentSlide = 0;
let totalSlides = 0;
let isTransitioning = false;

function updateSlider(animate = true) {
  if (!animate) {
    gallerySlider.style.transition = "none";
  } else {
    gallerySlider.style.transition = "transform 0.4s ease";
  }
  gallerySlider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update dots (use modulo to handle clone slide)
  const dotIndex = currentSlide >= totalSlides ? 0 : currentSlide;
  const dots = galleryDots.querySelectorAll(".gallery-dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === dotIndex);
  });
}

function nextSlide() {
  if (isTransitioning) return;
  currentSlide++;
  updateSlider();

  // If we're at the clone (last position), jump to real first
  if (currentSlide === totalSlides) {
    isTransitioning = true;
    setTimeout(() => {
      currentSlide = 0;
      updateSlider(false);
      // Force reflow
      gallerySlider.offsetHeight;
      isTransitioning = false;
    }, 400);
  }
}

function prevSlide() {
  if (isTransitioning) return;
  if (currentSlide === 0) {
    // Jump to clone first (no animation), then animate to last real slide
    currentSlide = totalSlides;
    updateSlider(false);
    // Force reflow
    gallerySlider.offsetHeight;
    setTimeout(() => {
      currentSlide = totalSlides - 1;
      updateSlider();
    }, 20);
  } else {
    currentSlide--;
    updateSlider();
  }
}

function goToSlide(index) {
  if (isTransitioning) return;
  currentSlide = index;
  updateSlider();
}

function openModal(productIndex) {
  const product = products[productIndex];
  if (!product) return;

  // Reset slider
  currentSlide = 0;
  totalSlides = product.gallery.length;
  isTransitioning = false;

  // Update modal content
  modalProductName.textContent = product.name;
  modalProductTagline.textContent = product.description;
  modalPriceValue.textContent = `${product.pricePerKg} ₴`;

  // Generate gallery slides + clone of first for infinite loop
  const slides = product.gallery
    .map(
      (img, i) => `
                <div class="gallery-slide">
                    <img src="${img}" alt="${product.name} - фото ${i + 1}">
                </div>
            `,
    )
    .join("");
  // Add clone of first slide at the end
  const cloneSlide = `
                <div class="gallery-slide">
                    <img src="${product.gallery[0]}" alt="${product.name} - фото 1">
                </div>
            `;
  gallerySlider.innerHTML = slides + cloneSlide;

  // Generate dots (only for real slides, not clone)
  galleryDots.innerHTML = product.gallery
    .map(
      (_, i) => `
                <button class="gallery-dot${i === 0 ? " active" : ""}" data-index="${i}"></button>
            `,
    )
    .join("");

  // Generate ingredients
  modalIngredients.innerHTML = product.ingredients
    .map(
      (ing) => `
                <span class="modal-ingredient">${ing}</span>
            `,
    )
    .join("");

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Reset slider position
  gallerySlider.style.transition = "none";
  gallerySlider.style.transform = "translateX(0)";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function orderProduct() {
  const productName = modalProductName.textContent;
  const textarea = document.getElementById("message");

  // Close modal first
  closeModal();

  // Scroll to contact section
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }

  // Set product name in message field after a small delay (for scroll)
  setTimeout(() => {
    if (textarea) {
      textarea.value = `Хочу замовити: ${productName}\n\n`;
      textarea.focus();
    }
  }, 300);
}

// Event listeners for modal
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
modalOrderBtn.addEventListener("click", orderProduct);

// Gallery navigation
galleryPrev.addEventListener("click", prevSlide);
galleryNext.addEventListener("click", nextSlide);

// Dots navigation
galleryDots.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-dot")) {
    goToSlide(parseInt(e.target.dataset.index, 10));
  }
});

document.addEventListener("keydown", (e) => {
  if (modal.classList.contains("active")) {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  }
});

// Add click listeners to product cards
document.addEventListener("click", (e) => {
  const card = e.target.closest(".product-card");
  if (card) {
    const index = parseInt(card.dataset.productIndex, 10);
    openModal(index);
  }
});

// ============================================
// Header hide/show on scroll
const nav = document.querySelector("nav");
const scrollTopBtn = document.querySelector(".scroll-top");
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
  const currentScrollY = window.scrollY;

  // Hide/show header
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    nav.classList.add("nav-hidden");
  } else {
    nav.classList.remove("nav-hidden");
  }

  // Show/hide scroll-to-top button
  if (currentScrollY > 500) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateHeader);
    ticking = true;
  }
});

// Scroll to top on click
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Generic scroll animation observer
const animateOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);
      }
    });
  },
  { threshold: 0.15 },
);

// About images animation
document.querySelectorAll(".about-image-wrapper").forEach((wrapper, index) => {
  wrapper.dataset.delay = index * 200;
  animateOnScroll.observe(wrapper);
});

// Gallery items animation
document.querySelectorAll(".gallery-item").forEach((item, index) => {
  item.dataset.delay = (index % 4) * 100;
  animateOnScroll.observe(item);
});

// Product cards animation
document.querySelectorAll(".product-card").forEach((card, index) => {
  card.dataset.delay = (index % 3) * 150;
  animateOnScroll.observe(card);
});

//Modal
const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();

      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 4000);
    }
  } catch (error) {
    alert("Помилка відправки. Спробуйте пізніше.");
  }
});
