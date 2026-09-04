console.log("اللهم صلِّ وسلم وبارك على سيدنا محمد");

const fallbackImage = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80";

// كل عربية ليها 5 صور تنقل بين زواياها
const carsData = [
    {
        id: 1,
        name: "شيفروليه دبابة كاملة (تفاح أحمر)",
        model: "2021",
        category: "truck",
        price: "حلويات الوكيل - كاش / تقسيط",
        mileage: "كاملة المواصفات",
        condition: "رخصة 5 شهور - حالة ممتازة",
        tag: "العرض الذهبي 🔥",
        images: [
            "images/dababa-red-front.jpg", // من قدام
            "images/dababa-red-back.jpg",  // من ورا
            "images/dababa-red-side.jpg",  // الجنب
            "images/dababa-red-inside.jpg",// الصالون
            "images/dababa-red-box.jpg"    // الصندوق
        ]
    },
    {
        id: 2,
        name: "شيفروليه دبابة (تفاح الوكيل)",
        model: "2025",
        category: "truck",
        price: "متوفر كاش / تقسيط",
        mileage: "عداد 28,000 كم",
        condition: "سروجي وطبلية - رخصة 9",
        tag: "كسر زيرو",
        images: [
            "images/dababa-2025-1.jpg",
            "images/dababa-2025-2.jpg",
            "images/dababa-2025-3.jpg",
            "images/dababa-2025-4.jpg",
            "images/dababa-2025-5.jpg"
        ]
    }
];

const mainPhone = "01020404102";
const mainWhatsapp = "201020404102";

let currentCarImages = [];
let currentImageIndex = 0;

function renderCars(cars) {
    const carGrid = document.getElementById('carGrid');
    if (!carGrid) return;

    carGrid.innerHTML = '';

    if (cars.length === 0) {
        carGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #94a3b8;">لا توجد سيارات مطابقة.</div>`;
        return;
    }

    cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';

        const mainImg = (car.images && car.images.length > 0) ? car.images[0] : fallbackImage;

        const msg = encodeURIComponent(`السلام عليكم، استفسار عن ${car.name} موديل ${car.model}.`);
        const waLink = `https://wa.me/${mainWhatsapp}?text=${msg}`;

        card.innerHTML = `
            <div class="image-container" onclick="openGallery(${car.id})">
                <span class="badge-tag">${car.tag}</span>
                <img src="${mainImg}" alt="${car.name}" onerror="this.src='${fallbackImage}'">
                <div style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.7); color: #fff; padding: 4px 8px; border-radius: 6px; font-size: 0.8rem;">
                    <i class="fa-solid fa-images"></i> 5 صور (اضغط للعرض)
                </div>
            </div>
            <div class="car-body">
                <h3 class="car-title">${car.name} (${car.model})</h3>
                <div class="specs-row">
                    <span><i class="fa-solid fa-gauge"></i> ${car.mileage}</span>
                    <span><i class="fa-solid fa-shield-halved"></i> ${car.condition}</span>
                </div>
                <div class="price-tag"><i class="fa-solid fa-bolt"></i> ${car.price}</div>
                <div class="card-actions">
                    <a href="${waLink}" target="_blank" class="wa-btn"><i class="fa-brands fa-whatsapp"></i> واتساب: ${mainPhone}</a>
                    <a href="tel:${mainPhone}" class="call-btn"><i class="fa-solid fa-phone"></i> اتصل بنا: ${mainPhone}</a>
                </div>
            </div>
        `;
        carGrid.appendChild(card);
    });
}

// فتح معرض الصور عند الضغط على العربية
function openGallery(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car || !car.images || car.images.length === 0) return;

    currentCarImages = car.images;
    currentImageIndex = 0;

    const modal = document.getElementById('imageModal');
    modal.style.display = 'flex';

    updateModalImage();
}

function updateModalImage() {
    const modalMainImg = document.getElementById('modalMainImg');
    const modalThumbnails = document.getElementById('modalThumbnails');

    modalMainImg.src = currentCarImages[currentImageIndex];

    modalThumbnails.innerHTML = '';
    currentCarImages.forEach((imgSrc, idx) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.className = `thumbnail-img ${idx === currentImageIndex ? 'active' : ''}`;
        thumb.onclick = () => {
            currentImageIndex = idx;
            updateModalImage();
        };
        modalThumbnails.appendChild(thumb);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderCars(carsData);

    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';
    if (prevBtn) prevBtn.onclick = () => {
        currentImageIndex = (currentImageIndex + 1) % currentCarImages.length;
        updateModalImage();
    };
    if (nextBtn) nextBtn.onclick = () => {
        currentImageIndex = (currentImageIndex - 1 + currentCarImages.length) % currentCarImages.length;
        updateModalImage();
    };

    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
});