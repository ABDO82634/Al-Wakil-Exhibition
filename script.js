console.log("اللهم صلِّ وسلم وبارك على سيدنا محمد");

// صورة افتراضية عند عدم وجود صورة
const fallbackImage = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80";

// كافة السيارات المتاحة
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
        image: "تفاح احمر.jpg"
    },
    {
        id: 2,
        name: "شيفروليه دبابة (تفاح الوكيل)",
        model: "2025",
        category: "truck",
        price: "متوفر كاش / تقسيط",
        mileage: "عداد 28,000 كم",
        condition: "سروجي وطبلية - رخصة شهر 9",
        tag: "كسر زيرو",
        image: "images/dababa-2025.jpg"
    },
    {
        id: 3,
        name: "شيفروليه دبابة زيرو",
        model: "2027",
        category: "truck",
        price: "زيرو - متوفر تقسيط",
        mileage: "زيرو 0 كم",
        condition: "زيرو بحالة الشركة",
        tag: "زيرو 2027",
        image: "images/dababa-2027.jpg"
    },
    {
        id: 4,
        name: "شيفروليه دبابة",
        model: "2023",
        category: "truck",
        price: "متوفر كاش / تقسيط",
        mileage: "استعمال راقي",
        condition: "بحالة الفابريقة",
        tag: "حالة ممتازة",
        image: "images/dababa-2023.jpg"
    },
    {
        id: 5,
        name: "ايسوزو جامبو",
        model: "2025",
        category: "truck",
        price: "متوفر كاش / تقسيط",
        mileage: "19,000 كم",
        condition: "حالة الزيرو",
        tag: "جديد",
        image: "images/isuzu-2025.jpg"
    },
    {
        id: 6,
        name: "شيفروليه دبابة",
        model: "2018",
        category: "truck",
        price: "متوفر كاش / تقسيط",
        mileage: "رخصة 8 شهور",
        condition: "جاهزة للعمل فوراً",
        tag: "جاهزة للشغل",
        image: "images/dababa-2018.jpg"
    },
    {
        id: 7,
        name: "نيسان نيو صني",
        model: "2026",
        category: "sedan",
        price: "زيرو - متوفر تقسيط",
        mileage: "زيرو (الفئة الأولى)",
        condition: "زيرو بحالة الفابريقة",
        tag: "ملاكي زيرو",
        image: "images/nissan-2026.jpg"
    },
    {
        id: 8,
        name: "تويوتا كورولا",
        model: "2013",
        category: "sedan",
        price: "متوفر كاش / تقسيط",
        mileage: "حسب الفحص",
        condition: "بعض المرمات البسيطة",
        tag: "مطلوبة",
        image: "images/corolla-2013.jpg"
    },
    {
        id: 9,
        name: "هيونداي النترا",
        model: "2007",
        category: "sedan",
        price: "متوفر كاش / تقسيط",
        mileage: "أعلى فئة",
        condition: "حالة ممتازة جداً",
        tag: "أعلى فئة",
        image: "images/elantra-2007.jpg"
    },
    {
        id: 10,
        name: "شيفروليه لانوس",
        model: "2014",
        category: "sedan",
        price: "متوفر كاش / تقسيط",
        mileage: "110,000 كم",
        condition: "حالة ممتازة",
        tag: "اقتصادية",
        image: "images/lanos-2014.jpg"
    }
];

const mainPhone = "01020404102";
const mainWhatsapp = "201020404102";

function renderCars(cars) {
    const carGrid = document.getElementById('carGrid');
    if (!carGrid) return;

    carGrid.innerHTML = '';

    if (cars.length === 0) {
        carGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #94a3b8; font-size: 1.1rem;">لا توجد سيارات مطابقة لبحثك.</div>`;
        return;
    }

    cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';

        const msg = encodeURIComponent(`السلام عليكم، استفسار عن ${car.name} موديل ${car.model} المعروضة في موقع معرض الوكيل.`);
        const waLink = `https://wa.me/${mainWhatsapp}?text=${msg}`;

        card.innerHTML = `
            <div class="image-container">
                <span class="badge-tag">${car.tag}</span>
                <img src="${car.image}" alt="${car.name}" onerror="this.src='${fallbackImage}'">
            </div>
            <div class="car-body">
                <h3 class="car-title">${car.name} (${car.model})</h3>
                <div class="specs-row">
                    <span><i class="fa-solid fa-gauge"></i> ${car.mileage}</span>
                    <span><i class="fa-solid fa-shield-halved"></i> ${car.condition}</span>
                </div>
                <div class="price-tag">
                    <i class="fa-solid fa-bolt"></i> ${car.price}
                </div>
                <div class="card-actions">
                    <a href="${waLink}" target="_blank" class="wa-btn"><i class="fa-brands fa-whatsapp"></i> واتساب: ${mainPhone}</a>
                    <a href="tel:${mainPhone}" class="call-btn"><i class="fa-solid fa-phone"></i> اتصل بنا: ${mainPhone}</a>
                </div>
            </div>
        `;
        carGrid.appendChild(card);
    });
}

// تشغيل العرض الفوري فور فتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
    renderCars(carsData);

    const searchInput = document.getElementById('searchInput');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.tab-btn.active')?.classList.remove('active');
            btn.classList.add('active');

            if (searchInput) searchInput.value = '';

            const filter = btn.dataset.filter;
            if (filter === 'all') {
                renderCars(carsData);
            } else {
                renderCars(carsData.filter(c => c.category === filter));
            }
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filtered = carsData.filter(c =>
                c.name.toLowerCase().includes(query) ||
                c.model.includes(query)
            );
            renderCars(filtered);
        });
    }
});