// Sample Product Database with Bilingual Support
const productsData = [
    {
        id: 1,
        name: "IPSO BC20-60",
        category: "washing_machines",
        image: "images/products/BC20-60.bmp",
        shortDescription_bs: "Industrijska veš mašina visokog kapaciteta (20-60kg).",
        shortDescription_en: "Heavy-duty commercial washer-extractor (20-60kg).",
        fullDescription_bs: "IPSO BC20-60 posjeduje napredni EVOLIS ekran na dodir koji nudi prilagođene programe pranja i vrhunsku efikasnost. Izrađena od izdržljivog nehrđajućeg čelika za najzahtjevnije komercijalne i industrijske uslove.",
        fullDescription_en: "The IPSO BC20-60 features the cutting-edge EVOLIS touch control, offering customized wash programs and superior efficiency. Constructed with durable stainless steel to withstand high-capacity commercial and industrial use.",
        pdfLink: "docs/DL_AI22-1058_SpecSheet_BC20-60_EVOLIS_en-AP.pdf"
    },
    {
        id: 2,
        name: "IPSO BSG30-50",
        category: "washing_machines",
        image: "images/products/BSG30-50.bmp",
        shortDescription_bs: "Industrijska veš mašina sa Evolis interfejsom.",
        shortDescription_en: "Industrial washer-extractor with Evolis interface.",
        fullDescription_bs: "Dizajnirana za vrhunsku produktivnost, BSG30-50 veš mašina kombinuje snažnu centrifugu, pametnu kontrolu ciklusa i robusnu izdržljivost za vešeraje sa velikim obimom posla.",
        fullDescription_en: "Designed for premium productivity, the BSG30-50 washer-extractor combines powerful spin speeds, intelligent cycle control, and rugged durability for high-throughput laundry environments.",
        pdfLink: "docs/DL_AI22-1059_SpecSheet_BSG30-50_EVOLIS_en-AP.pdf"
    },
    {
        id: 3,
        name: "IPSO IA80-135",
        category: "washing_machines",
        image: "images/products/IA80-135.bmp",
        shortDescription_bs: "Industrijska veš mašina srednjeg kapaciteta.",
        shortDescription_en: "Medium-capacity industrial washer-extractor.",
        fullDescription_bs: "Samostojeća veš mašina visoke centrifuge napravljena za maksimalnu efikasnost. Odlikuje je optimizovana geometrija bubnja i visoka G-sila za značajno smanjenje troškova sušenja.",
        fullDescription_en: "A freestanding, high-spin washer-extractor built for efficiency. Features optimized drum geometry and premium G-force extraction to significantly reduce drying energy costs.",
        pdfLink: "docs/DL_AI24-1004_SpecSheet_IA80-135_en-WW.pdf"
    },
    {
        id: 4,
        name: "IPSO IY180-280",
        category: "washing_machines",
        image: "images/products/IY180-280.bmp",
        shortDescription_bs: "Pametna industrijska veš mašina srednje veličine.",
        shortDescription_en: "Mid-size smart industrial washer-extractor.",
        fullDescription_bs: "Opremljena najsavremenijim Evolis kontrolama na dodir, ova brza veš mašina nudi prilagodljive cikluse, tehnologiju uštede vode i nenadmašnu njegu tkanina.",
        fullDescription_en: "Equipped with state-of-the-art Evolis touch controls, this high-speed washer extractor offers customizable cycles, water-saving technology, and unmatched fabric care.",
        pdfLink: "docs/DL_AI26-1048_SpecSheet_IY180-280-Evolis_en-WW.pdf"
    },
    {
        id: 5,
        name: "IPSO IMB360-700",
        category: "washing_machines",
        image: "images/products/IMB360-700.bmp",
        shortDescription_bs: "Higijenska barijerna veš mašina za zdravstvo.",
        shortDescription_en: "Hygienic barrier washer-extractor for healthcare.",
        fullDescription_bs: "Vrhunska barijerna prolazna veš mašina dizajnirana za eliminaciju rizika od unakrsne kontaminacije u bolnicama i čistim prostorima.",
        fullDescription_en: "The ultimate pass-through barrier washer-extractor designed to eliminate cross-contamination risks in hospital and cleanroom environments. Features extreme reliability and easy-access loading doors.",
        pdfLink: "docs/DL_AI24-1146_SpecSheet_IMB360-700_en-WW.pdf"
    },
    {
        id: 6,
        name: "IPSO DR32-75",
        category: "dryers",
        image: "images/products/DR32-75.bmp",
        shortDescription_bs: "Komercijalna sušilica visokih performansi.",
        shortDescription_en: "High-performance commercial tumble dryer.",
        fullDescription_bs: "DR32-75 nudi izuzetnu brzinu sušenja i energetsku efikasnost. Radijalni protok zraka i velika površina filtera čine je idealnom za komercijalne vešeraje.",
        fullDescription_en: "The DR32-75 offers exceptional drying speed and energy efficiency. Its radial airflow design, oversized lint filter, and durable door construction make it the workhorse of commercial laundries.",
        pdfLink: "docs/DL_AI24-1080_SpecSheet_DR32-75_en-WW.pdf"
    },
    {
        id: 7,
        name: "IPSO I18-I25",
        category: "dryers",
        image: "images/products/I18-I25.bmp",
        shortDescription_bs: "Teška industrijska sušilica za veš.",
        shortDescription_en: "Industrial heavy-duty tumble dryer.",
        fullDescription_bs: "Sa elektronskim senzorima vlažnosti i reverzibilnim rotiranjem bubnja, serija I18-I25 optimizuje vrijeme sušenja uz pažljivu njegu tekstila.",
        fullDescription_en: "Featuring advanced electronic humidity sensors and reversible drum rotation, the I18-I25 series optimizes drying times while ensuring gentle care for sensitive industrial textiles.",
        pdfLink: "docs/DL_AI24-1124_SpecSheet_I18-I25_en-EU-ME.pdf"
    },
    {
        id: 8,
        name: "IPSO IDD300",
        category: "dryers",
        image: "images/products/IDD300.bmp",
        shortDescription_bs: "Dvostruka (stakirana) sušilica za uštedu prostora.",
        shortDescription_en: "Double-stacked space-saving tumble dryer.",
        fullDescription_bs: "Maksimalno iskoristite prostor vašeg vešeraja. IDD300 nudi dvije nezavisne sušilice na prostoru jedne, pokretane Evolis Elite kontrolama.",
        fullDescription_en: "Maximize your laundry floor space without sacrificing capacity. The IDD300 offers two independent commercial dryers in a single footprint, powered by smart Evolis Elite controls.",
        pdfLink: "docs/DL_AI26-1160_SpecSheet_IDD300_EvolisElite_en-WW.pdf"
    },
    {
        id: 9,
        name: "IPSO IHP195",
        category: "dryers",
        image: "images/products/IHP195.bmp",
        shortDescription_bs: "Ultra-efikasna sušilica sa toplotnom pumpom.",
        shortDescription_en: "Ultra-efficient heat pump tumble dryer.",
        fullDescription_bs: "Nenadmašna energetska efikasnost zahvaljujući tehnologiji toplotne pumpe zatvorenog kruga. Smanjuje potrošnju električne energije do 60%.",
        fullDescription_en: "Unrivaled energy efficiency using advanced closed-loop heat pump technology. Reduces electricity consumption by up to 60% compared to traditional models, making it ideal for green businesses.",
        pdfLink: "docs/DL_AI24-1154_SpecSheet_IHP195_en-WW.pdf"
    },
    {
        id: 10,
        name: "IPSO ACL800",
        category: "dryer_rollers",
        image: "images/products/ACL800.bmp",
        shortDescription_bs: "Komercijalni valjak za peglanje sa grijanim koritom.",
        shortDescription_en: "Chest-heated commercial flatwork ironer.",
        fullDescription_bs: "Valjak ACL800 napravljen je za velike hotelske i komercijalne vešeraje. Osigurava ravnomjernu raspodjelu toplote za savršeno i brzo peglanje posteljine.",
        fullDescription_en: "The ACL800 flatwork ironer is built for massive hotel and commercial laundry throughput. Its heavy-duty chest provides unmatched heat distribution for a perfect, glossy, high-speed finish on sheets and tablecloths.",
        pdfLink: "docs/DL_AI20-1039_SpecSheet_ChestHeatedIroner-ACL800-TwoRolls_en-WW.pdf"
    },
    {
        id: 11,
        name: "IPSO FCI320",
        category: "dryer_rollers",
        image: "images/products/FCI320.bmp",
        shortDescription_bs: "Industrijski valjak za peglanje sa grijanim valjkom.",
        shortDescription_en: "Cylinder-heated industrial flatwork ironer.",
        fullDescription_bs: "Kompaktan i snažan valjak sa podesivom brzinom i grijanjem visokih performansi. Savršen za obradu stolnjaka i posteljine direktno nakon pranja.",
        fullDescription_en: "Compact and powerful cylinder-heated ironer with variable speed control and high-performance heating. Perfect for processing high-quality table linens and bedsheets directly after washing.",
        pdfLink: "docs/DL_AI24-1128_SpecSheet_FCI320_en-EU-ME.pdf"
    },
    {
        id: 12,
        name: "IPSO FCIFF500",
        category: "dryer_rollers",
        image: "images/products/FCIFF500.bmp",
        shortDescription_bs: "Višenamjenski valjak sa automatskim slaganjem.",
        shortDescription_en: "All-in-one cylinder ironer, folder, and stacker.",
        fullDescription_bs: "Optimizovano za maksimalnu produktivnost uz minimalan rad. FCIFF500 automatski suši, pegla, slaže i pakuje posteljinu.",
        fullDescription_en: "Optimized for maximum productivity with minimal labor. The FCIFF500 automatically dries, irons, folds, and stacks linens, streamlining your entire laundry finishing process.",
        pdfLink: "docs/DL_AI24-1031_SpecSheet_CylinderHeatedIroner-FCIFF500_en-WW.pdf"
    },
    {
        id: 16,
        name: "IPSO ACL80K",
        category: "dryer_rollers",
        image: "images/products/ACL80K.jpg",
        shortDescription_bs: "Industrijski valjak za peglanje visokog kapaciteta sa koritom.",
        shortDescription_en: "High-capacity chest-heated industrial flatwork ironer.",
        fullDescription_bs: "IPSO ACL80K je industrijski valjak za peglanje sa grijanim koritom dizajniran za visoke zahtjeve u komercijalnim i hotelskim vešerajima. Odlikuje se izuzetnim pritiskom peglanja, ravnomjernom distribucijom toplote i naprednim mikroprocesorskim upravljanjem za savršeno i sjajno peglanje velike količine posteljine i stolnog veša.",
        fullDescription_en: "The IPSO ACL80K is a heavy-duty chest-heated industrial flatwork ironer built for demanding commercial and hotel laundries. Features rigid chest design, uniform heat distribution, and advanced microprocessor controls for flawless, high-volume finishing of bed linens and tablecloths.",
        pdfLink: "docs/ACL80K.pdf"
    },
    {
        id: 17,
        name: "IPSO ACL80K (One Roll)",
        category: "dryer_rollers",
        image: "images/products/ACL80K-OneRoll.jpg",
        shortDescription_bs: "Industrijski valjak za peglanje sa jednim valjkom i grijanim koritom.",
        shortDescription_en: "Single-roll chest-heated industrial flatwork ironer.",
        fullDescription_bs: "IPSO ACL80K (One Roll) je vrhunski industrijski valjak za peglanje sa jednim valjkom i grijanim koritom visoke efikasnosti. Dizajniran je za visoku produktivnost i besprijekoran sjaj posteljine u hotelima, restoranima i komercijalnim vešerajima. Odlikuje ga rigidna konstrukcija korita, hidraulički podizni sistem, te napredna mikrokontrolerska regulacija brzine i temperature.",
        fullDescription_en: "The IPSO ACL80K (One Roll) is a high-performance single-roll chest-heated flatwork ironer engineered for commercial and industrial laundries. Featuring a rigid chest design, hydraulic roll lifting mechanism, and microprocessor speed and temperature controls for superior linen finishing.",
        pdfLink: "docs/ACL80K-OneRoll.pdf"
    },
    {
        id: 13,
        name: "IPSO CW10 & CD10 Stack",
        category: "equipment",
        image: null,
        shortDescription_bs: "Kombinovani stub veš mašine i sušilice.",
        shortDescription_en: "Stacked commercial washer and dryer setup.",
        fullDescription_bs: "Ultra-kompaktno rješenje koje kombinuje komercijalnu veš mašinu i odgovarajuću sušilicu. Idealno za salone, teretane i manje vešeraje.",
        fullDescription_en: "An ultra-compact space-saving solution combining a heavy-duty commercial washer and matching dryer. Ideal for salons, gyms, guest houses, and auxiliary laundry rooms.",
        pdfLink: "docs/DL_AI24-1130_SpecSheet_CW10-CD10_en-EU (1).pdf"
    },
    {
        id: 14,
        name: "Kolica za Veš / Linen Cart",
        category: "equipment",
        image: null,
        shortDescription_bs: "Pokretna kolica za transport veša.",
        shortDescription_en: "Mobile transport linen cart.",
        fullDescription_bs: "Ergonomski dizajnirana kolica za industrijske vešeraje sa industrijskim točkovima koji ne ostavljaju tragove i čeličnim okvirom.",
        fullDescription_en: "Ergonomically designed for industrial laundry environments. Features non-marking industrial wheels, a sturdy canvas base, and a steel reinforced frame for heavy weight transport.",
        pdfLink: "#"
    },
    {
        id: 15,
        name: "Stol za Slaganje od Inoxa",
        category: "equipment",
        image: null,
        shortDescription_bs: "Profesionalni inox stol za slaganje posteljine.",
        shortDescription_en: "Professional ergonomic linen folding table.",
        fullDescription_bs: "Stol od nehrđajućeg čelika (AISI 304) sa podesivim nogama i glatkom higijenskom površinom otpornom na hemikalije i vlagu.",
        fullDescription_en: "Premium Grade-304 stainless steel folding table with adjustable legs and smooth hygienic surface. Resists chemical stains and corrosion from wet laundry.",
        pdfLink: "#"
    }
];

// Helper to format category strings dynamically
const getCategoryLabel = (cat) => {
    const lang = window.i18n ? window.i18n.currentLang : 'bs';
    const categoryMap = {
        washing_machines: { bs: 'Mašine za Pranje', en: 'Washing Machines' },
        dryers: { bs: 'Sušilice', en: 'Dryers' },
        dryer_rollers: { bs: 'Valjci za Glačanje', en: 'Dryer Rollers' },
        equipment: { bs: 'Dodatna Oprema', en: 'Accessories' }
    };
    return (categoryMap[cat] && categoryMap[cat][lang]) ? categoryMap[cat][lang] : cat;
};

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const tabs = document.querySelectorAll('.category-tab');

    // Modal Elements
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('closeModal');
    const modalImg = document.getElementById('modalImg');
    const modalPlaceholder = document.getElementById('modalPlaceholder');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategoryBadge = document.getElementById('modalCategoryBadge');
    const modalDescription = document.getElementById('modalDescription');
    const modalSpecsBtn = document.getElementById('modalSpecsBtn');
    const modalAskBtn = document.getElementById('modalAskBtn');

    let currentFilter = 'all';
    let currentModalProductId = null;

    // Function to render products
    const renderProducts = (filterCategory = 'all') => {
        currentFilter = filterCategory;
        grid.innerHTML = '';
        const lang = window.i18n ? window.i18n.currentLang : 'bs';

        const filtered = filterCategory === 'all'
            ? productsData
            : productsData.filter(p => p.category === filterCategory);

        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            let imageHTML = '';
            if (product.image) {
                imageHTML = `<img src="${product.image}" alt="${product.name}">`;
            } else {
                imageHTML = `
                    <div class="css-placeholder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>`;
            }

            const shortDesc = lang === 'bs' ? product.shortDescription_bs : product.shortDescription_en;
            const btnText = lang === 'bs' ? 'Pogledaj Detalje' : 'View Details';

            card.innerHTML = `
                <div class="card-image">
                    ${imageHTML}
                    <div class="image-overlay"></div>
                    <span class="badge">${getCategoryLabel(product.category)}</span>
                </div>
                <div class="card-content">
                    <h4>${product.name}</h4>
                    <p>${shortDesc}</p>
                    <button class="card-link btn-view-details" data-id="${product.id}">
                        ${btnText} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });

        // Attach event listeners to new buttons
        document.querySelectorAll('.btn-view-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                openModal(productId);
            });
        });
    };

    // Tab Filtering
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            const category = e.currentTarget.getAttribute('data-category');
            renderProducts(category);
        });
    });

    // Modal Logic
    const openModal = (id) => {
        currentModalProductId = id;
        const product = productsData.find(p => p.id === id);
        if (!product) return;

        const lang = window.i18n ? window.i18n.currentLang : 'bs';
        const fullDesc = lang === 'bs' ? product.fullDescription_bs : product.fullDescription_en;

        modalTitle.textContent = product.name;
        modalCategoryBadge.textContent = getCategoryLabel(product.category);
        modalDescription.textContent = fullDesc;

        if (product.image) {
            modalImg.src = product.image;
            modalImg.style.display = 'block';
            modalPlaceholder.style.display = 'none';
        } else {
            modalImg.src = '';
            modalImg.style.display = 'none';
            modalPlaceholder.style.display = 'flex';
        }

        modalSpecsBtn.href = encodeURI(product.pdfLink);
        modalAskBtn.href = `contact.html?product=${encodeURIComponent(product.name)}`;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModalFunc = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentModalProductId = null;
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModalFunc);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModalFunc();
        });
    }

    // Listen for language changes to update grid and active modal dynamically
    window.addEventListener('languageChanged', () => {
        renderProducts(currentFilter);
        if (currentModalProductId && modal && modal.classList.contains('active')) {
            openModal(currentModalProductId);
        }
    });

    renderProducts('all');
});
