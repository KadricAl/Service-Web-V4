// Sample Product Database
const productsData = [
    {
        id: 1,
        name: "IPSO BC20-60",
        category: "washing_machines",
        image: "images/products/BC20-60.bmp",
        shortDescription: "Heavy-duty commercial washer-extractor (20-60kg).",
        fullDescription: "The IPSO BC20-60 features the cutting-edge EVOLIS touch control, offering customized wash programs and superior efficiency. Constructed with durable stainless steel to withstand high-capacity commercial and industrial use.",
        pdfLink: "docs/DL_AI22-1058_SpecSheet_BC20-60_EVOLIS_en-AP.pdf"
    },
    {
        id: 2,
        name: "IPSO BSG30-50",
        category: "washing_machines",
        image: "images/products/BSG30-50.bmp",
        shortDescription: "Industrial washer-extractor with Evolis interface.",
        fullDescription: "Designed for premium productivity, the BSG30-50 washer-extractor combines powerful spin speeds, intelligent cycle control, and rugged durability for high-throughput laundry environments.",
        pdfLink: "docs/DL_AI22-1059_SpecSheet_BSG30-50_EVOLIS_en-AP.pdf"
    },
    {
        id: 3,
        name: "IPSO IA80-135",
        category: "washing_machines",
        image: "images/products/IA80-135.bmp",
        shortDescription: "Medium-capacity industrial washer-extractor.",
        fullDescription: "A freestanding, high-spin washer-extractor built for efficiency. Features optimized drum geometry and premium G-force extraction to significantly reduce drying energy costs.",
        pdfLink: "docs/DL_AI24-1004_SpecSheet_IA80-135_en-WW.pdf"
    },
    {
        id: 4,
        name: "IPSO IY180-280",
        category: "washing_machines",
        image: "images/products/IY180-280.bmp",
        shortDescription: "Mid-size smart industrial washer-extractor.",
        fullDescription: "Equipped with state-of-the-art Evolis touch controls, this high-speed washer extractor offers customizable cycles, water-saving technology, and unmatched fabric care.",
        pdfLink: "docs/DL_AI26-1048_SpecSheet_IY180-280-Evolis_en-WW.pdf"
    },
    {
        id: 5,
        name: "IPSO IMB360-700",
        category: "washing_machines",
        image: "images/products/IMB360-700.bmp",
        shortDescription: "Hygienic barrier washer-extractor for healthcare.",
        fullDescription: "The ultimate pass-through barrier washer-extractor designed to eliminate cross-contamination risks in hospital and cleanroom environments. Features extreme reliability and easy-access loading doors.",
        pdfLink: "docs/DL_AI24-1146_SpecSheet_IMB360-700_en-WW.pdf"
    },
    {
        id: 6,
        name: "IPSO DR32-75",
        category: "dryers",
        image: "images/products/DR32-75.bmp",
        shortDescription: "High-performance commercial tumble dryer.",
        fullDescription: "The DR32-75 offers exceptional drying speed and energy efficiency. Its radial airflow design, oversized lint filter, and durable door construction make it the workhorse of commercial laundries.",
        pdfLink: "docs/DL_AI24-1080_SpecSheet_DR32-75_en-WW.pdf"
    },
    {
        id: 7,
        name: "IPSO I18-I25",
        category: "dryers",
        image: "images/products/I18-I25.bmp",
        shortDescription: "Industrial heavy-duty tumble dryer.",
        fullDescription: "Featuring advanced electronic humidity sensors and reversible drum rotation, the I18-I25 series optimizes drying times while ensuring gentle care for sensitive industrial textiles.",
        pdfLink: "docs/DL_AI24-1124_SpecSheet_I18-I25_en-EU-ME.pdf"
    },
    {
        id: 8,
        name: "IPSO IDD300",
        category: "dryers",
        image: "images/products/IDD300.bmp",
        shortDescription: "Double-stacked space-saving tumble dryer.",
        fullDescription: "Maximize your laundry floor space without sacrificing capacity. The IDD300 offers two independent commercial dryers in a single footprint, powered by smart Evolis Elite controls.",
        pdfLink: "docs/DL_AI26-1160_SpecSheet_IDD300_EvolisElite_en-WW.pdf"
    },
    {
        id: 9,
        name: "IPSO IHP195",
        category: "dryers",
        image: "images/products/IHP195.bmp",
        shortDescription: "Ultra-efficient heat pump tumble dryer.",
        fullDescription: "Unrivaled energy efficiency using advanced closed-loop heat pump technology. Reduces electricity consumption by up to 60% compared to traditional models, making it ideal for green businesses.",
        pdfLink: "docs/DL_AI24-1154_SpecSheet_IHP195_en-WW.pdf"
    },
    {
        id: 10,
        name: "IPSO ACL800",
        category: "dryer_rollers",
        image: "images/products/ACL800.bmp",
        shortDescription: "Chest-heated commercial flatwork ironer.",
        fullDescription: "The ACL800 flatwork ironer is built for massive hotel and commercial laundry throughput. Its heavy-duty chest provides unmatched heat distribution for a perfect, glossy, high-speed finish on sheets and tablecloths.",
        pdfLink: "docs/DL_AI20-1039_SpecSheet_ChestHeatedIroner-ACL800-TwoRolls_en-WW.pdf"
    },
    {
        id: 11,
        name: "IPSO FCI320",
        category: "dryer_rollers",
        image: "images/products/FCI320.bmp",
        shortDescription: "Cylinder-heated industrial flatwork ironer.",
        fullDescription: "Compact and powerful cylinder-heated ironer with variable speed control and high-performance heating. Perfect for processing high-quality table linens and bedsheets directly after washing.",
        pdfLink: "docs/DL_AI24-1128_SpecSheet_FCI320_en-EU-ME.pdf"
    },
    {
        id: 12,
        name: "IPSO FCIFF500",
        category: "dryer_rollers",
        image: "images/products/FCIFF500.bmp",
        shortDescription: "All-in-one cylinder ironer, folder, and stacker.",
        fullDescription: "Optimized for maximum productivity with minimal labor. The FCIFF500 automatically dries, irons, folds, and stacks linens, streamlining your entire laundry finishing process.",
        pdfLink: "docs/DL_AI24-1031_SpecSheet_CylinderHeatedIroner-FCIFF500_en-WW.pdf"
    },
    {
        id: 13,
        name: "IPSO CW10 & CD10 Stack",
        category: "equipment",
        image: null,
        shortDescription: "Stacked commercial washer and dryer setup.",
        fullDescription: "An ultra-compact space-saving solution combining a heavy-duty commercial washer and matching dryer. Ideal for salons, gyms, guest houses, and auxiliary laundry rooms.",
        pdfLink: "docs/DL_AI24-1130_SpecSheet_CW10-CD10_en-EU (1).pdf"
    },
    {
        id: 14,
        name: "Heavy-Duty Laundry Cart",
        category: "equipment",
        image: null,
        shortDescription: "Mobile transport linen cart.",
        fullDescription: "Ergonomically designed for industrial laundry environments. Features non-marking industrial wheels, a sturdy canvas base, and a steel reinforced frame for heavy weight transport.",
        pdfLink: "#"
    },
    {
        id: 15,
        name: "Stainless Steel Folding Table",
        category: "equipment",
        image: null,
        shortDescription: "Professional ergonomic linen folding table.",
        fullDescription: "Premium Grade-304 stainless steel folding table with adjustable legs and smooth hygienic surface. Resists chemical stains and corrosion from wet laundry.",
        pdfLink: "#"
    }
];

// Helper to format category strings
const formatCategory = (cat) => {
    return cat.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid');
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

    // Function to render products
    const renderProducts = (filterCategory = 'all') => {
        grid.innerHTML = ''; // Clear current
        
        const filtered = filterCategory === 'all' 
            ? productsData 
            : productsData.filter(p => p.category === filterCategory);

        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            // Handle Image or Placeholder
            let imageHTML = '';
            if (product.image) {
                imageHTML = `<img src="${product.image}" alt="${product.name}">`;
            } else {
                imageHTML = `
                    <div class="css-placeholder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>`;
            }

            card.innerHTML = `
                <div class="card-image">
                    ${imageHTML}
                    <div class="image-overlay"></div>
                    <span class="badge">${formatCategory(product.category)}</span>
                </div>
                <div class="card-content">
                    <h4>${product.name}</h4>
                    <p>${product.shortDescription}</p>
                    <button class="card-link btn-view-details" data-id="${product.id}">
                        View Details <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            // Add to clicked
            e.currentTarget.classList.add('active');
            // Render
            const category = e.currentTarget.getAttribute('data-category');
            renderProducts(category);
        });
    });

    // Modal Logic
    const openModal = (id) => {
        const product = productsData.find(p => p.id === id);
        if (!product) return;

        modalTitle.textContent = product.name;
        modalCategoryBadge.textContent = formatCategory(product.category);
        modalDescription.textContent = product.fullDescription;
        
        // Handle Image
        if (product.image) {
            modalImg.src = product.image;
            modalImg.style.display = 'block';
            modalPlaceholder.style.display = 'none';
        } else {
            modalImg.src = '';
            modalImg.style.display = 'none';
            modalPlaceholder.style.display = 'flex';
        }

        // Links
        modalSpecsBtn.href = product.pdfLink;
        // Pre-fill contact form interest area with product name via URL parameters
        modalAskBtn.href = `contact.html?product=${encodeURIComponent(product.name)}`;

        // Show Modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModalFunc = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModalFunc);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Initial Render
    renderProducts('all');
});
