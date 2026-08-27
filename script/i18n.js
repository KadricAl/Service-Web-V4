// Internationalization (i18n) Module for TF Servis
// Default Language: Bosnian ('bs'), Alternative: English ('en')

const translations = {
    bs: {
        // Navigation
        "nav.home": "Početna",
        "nav.services": "Usluge i Dijelovi",
        "nav.products": "Proizvodi",
        "nav.about": "O Nama",
        "nav.contact": "Kontakt",

        // Hero (Index)
        "hero.title": "Pokrećemo Vaše Vešeraje",
        "hero.subtitle": "Vrhunska industrijska oprema za vešeraje, stručno održavanje i originalni rezervni dijelovi. Ponosno ističemo <strong>IPSO</strong> izvrsnost.",
        "hero.btnProducts": "Istražite Proizvode",
        "hero.btnService": "Zatražite Servis",

        // Home Services Section
        "services.subtitle": "Šta Radimo",
        "services.title": "Servis i Rezervni Dijelovi",
        "services.maintTitle": "Stručno Održavanje",
        "services.maintDesc": "Redovni pregledi i preventivno održavanje kako bi vaše poslovanje radilo besprijekorno i bez neplaniranih zastoja.",
        "services.partsTitle": "Originalni Rezervni Dijelovi",
        "services.partsDesc": "Visokokvalitetni OEM dijelovi, uključujući ekskluzivne IPSO komponente, garantuju dugotrajnost i optimalne performanse.",
        "services.repairTitle": "Hitne Popravke",
        "services.repairDesc": "Brza dijagnostika i odziv za popravke kako bismo minimizirali prekide u vašem poslovanju.",

        // Home Products Section
        "products.subtitle": "Naš Portfolio",
        "products.title": "Industrijska Oprema",
        "products.description": "Otkrijte naš asortiman vrhunskih industrijskih mašina za vešeraje napravljenih za najzahtjevnije radne uslove.",
        "products.washersTitle": "Mašine za Pranje",
        "products.washersDesc": "Visoko-centrifugirajuće, energetski efikasne veš mašine dizajnirane za najteža opterećenja.",
        "products.dryersTitle": "Industrijske Sušilice",
        "products.dryersDesc": "Sušilice velikog kapaciteta koje pružaju brzo sušenje i vrhunsku njegu tkanina.",
        "products.ironersTitle": "Valjci za Glačanje",
        "products.ironersDesc": "Precizni valjci i glačare koji osiguravaju besprijekornu i glatku obradu posteljine.",
        "products.genEquipTitle": "Dodatna Oprema",
        "products.genEquipDesc": "Kolica, stolovi za slaganje i specijalizirani alati za optimizaciju rada u vešeraju.",
        "btn.inquire": "Pošaljite Upit",

        // Home Contact Section
        "contact.subtitle": "Stupite u Kontakt",
        "contact.title": "Spremni za Unapređenje?",
        "contact.desc": "Kontaktirajte TF Servis danas za upite o prodaji, servisu ili rezervnim dijelovima.",
        "contact.phoneLabel": "Telefon: +387 61 159 888",
        "contact.emailLabel": "E-mail: tfservis.newpage@gmail.com",
        "contact.addressLabel": "Adresa: Radnička bb, 71000 Sarajevo, Bosna i Hercegovina",

        // Form Fields
        "form.namePlaceholder": "Vaše Ime",
        "form.emailPlaceholder": "Vaš E-mail",
        "form.phonePlaceholder": "Vaš Broj Telefona (Opcionalno)",
        "form.interestDefault": "Oblast Interesovanja",
        "form.interestSales": "Prodaja Opreme (IPSO)",
        "form.interestService": "Održavanje i Servis",
        "form.interestParts": "Rezervni Dijelovi",
        "form.interestOther": "Ostalo",
        "form.messagePlaceholder": "Kako vam možemo pomoći?",
        "form.submitBtn": "Pošaljite Poruku",

        // Services Page Specifics
        "servicePage.title": "Servis, Dijelovi i Potrepštine",
        "servicePage.desc": "Sveobuhvatno održavanje i vrhunske komponente za besprijekoran rad vašeg vešeraja.",
        "servicePage.maintTitle": "Stručno Održavanje i Popravke",
        "servicePage.maintDesc": "Zastoji vas koštaju. Naši certificirani tehničari specijalizovani su za brze i pouzdane popravke i preventivno održavanje industrijske opreme za vešeraje, sa posebnim fokusom na IPSO mašine. Osiguravamo da vaše mašine rade sa maksimalnom efikasnošću.",
        "servicePage.ctaTitle": "Imate problem sa vašom opremom?",
        "servicePage.ctaDesc": "Naš tim za brzi odgovor spreman je dijagnosticirati i otkloniti problem.",
        "servicePage.ctaBtn": "Trebam Servis",
        "servicePage.oemSub": "OEM Komponente",
        "servicePage.oemTitle": "Originalni Rezervni Dijelovi",
        "servicePage.oemDesc": "Na skladištu imamo i nabavljamo hiljade originalnih rezervnih dijelova koji garantuju dugotrajnost i sigurnost vaših mašina.",
        "servicePage.motors": "Motori i Pogoni",
        "servicePage.motorsDesc": "Motori visokih performansi i frekventni pretvarači za pouzdan rad.",
        "servicePage.valves": "Ventili i Pumpe",
        "servicePage.valvesDesc": "Izdržljivi ventili za vodu i paru, zajedno sa odvodnim pumpama visokog kapaciteta.",
        "servicePage.belts": "Remenje i Ležajevi",
        "servicePage.beltsDesc": "Pogonsko remenje za teške uslove i vrhunski ležajevi konstruisani za velika opterećenja.",
        "servicePage.inquireParts": "Upit za Dijelove",
        "servicePage.opsSub": "Svakodnevni Rad",
        "servicePage.opsTitle": "Potrepštine za Vešeraj",
        "servicePage.opsDesc": "Sve što vam je potrebno za savršene rezultate pranja, iz dana u dan.",
        "servicePage.detergents": "Industrijski Deterdženti",
        "servicePage.detergentsDesc": "Formule visoke koncentracije dizajnirane za uklanjanje najtvrdokornijih mrlja.",
        "servicePage.softeners": "Omekšivači i Kondicioneri",
        "servicePage.softenersDesc": "Vrhunska njega tkanina koja osigurava mekoću i svjež miris posteljine i veša.",
        "servicePage.chemicals": "Specijalne Hemikalije",
        "servicePage.chemicalsDesc": "Izbjeljivači, štirka i odstranjivači mrlja za specijaliziranu obradu tekstila.",
        "servicePage.orderSupplies": "Naručite Potrepštine",

        // Products Page Specifics
        "productsPage.title": "Naši Proizvodi",
        "productsPage.desc": "Istražite našu ponudu robusne industrijske opreme za vešeraje.",
        "tab.all": "Sva Oprema",
        "tab.washers": "Mašine za Pranje",
        "tab.dryers": "Sušilice",
        "tab.rollers": "Valjci za Glačanje",
        "tab.accessories": "Dodatna Oprema",
        "modal.specsBtn": "Pogledaj Specifikacije",
        "modal.askBtn": "Upit za Proizvod",
        "modal.noImage": "Slika Nije Dostupna",

        // About Us Page Specifics
        "aboutPage.title": "O Nama",
        "aboutPage.desc": "Saznajte više o TF Servisu, našim postignućima i posvećenosti vrhunskim rješenjima za industrijske vešeraje.",
        "aboutPage.storyTitle": "Naša Priča",
        "aboutPage.storyP1": "TF Servis je osnovan sa jasnom misijom: pružiti najpouzdaniju servisnu podršku i vrhunsku industrijsku opremu za vešeraje u regionu.",
        "aboutPage.storyP2": "Kao ovlašteni stručnjaci za IPSO opremu, ponosni smo na stotine uspješno instaliranih i servisiranih mašina u hotelima, bolnicama i komercijalnim vešerajima.",
        "aboutPage.valTitle": "Zašto TF Servis?",
        "aboutPage.val1Title": "Stručni Tehničari",
        "aboutPage.val1Desc": "Naš tim redovno prolazi obuke i posjeduje višegodišnje iskustvo u dijagnostici i servisu.",
        "aboutPage.val2Title": "Brza Isporuka Dijelova",
        "aboutPage.val2Desc": "Veliki lager originalnih dijelova omogućava nam brzu zamjenu i minimalne zastoje.",
        "aboutPage.val3Title": "Korisnička Podrška",
        "aboutPage.val3Desc": "Dostupni smo za konsultacije, planiranje vešeraja i tehničke savjete u svakom trenutku.",
        "aboutPage.partnerBtn": "Postanite Partner",

        // Contact Page Specifics
        "contactPage.title": "Kontaktirajte Nas",
        "contactPage.desc": "Tu smo da podržimo sve vaše potrebe za industrijskim vešerajem.",
        "contactPage.directTitle": "Direktna Podrška",
        "contactPage.letsTalk": "Razgovarajmo",
        "contactPage.directDesc": "Za hitne intervencije, servis mašina ili narudžbu rezervnih dijelova, pozovite nas direktno.",
        "contactPage.sendMessageTitle": "Pošaljite Poruku",

        // Footer
        "footer.tagline": "Vrhunska rješenja za industrijske vešeraje. Prodaja, servis i rezervni dijelovi.",
        "footer.quickLinks": "Brzi Linkovi",
        "footer.rights": "&copy; 2026 TF Servis. Sva prava zadržana."
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.services": "Services & Parts",
        "nav.products": "Products",
        "nav.about": "About Us",
        "nav.contact": "Contact",

        // Hero (Index)
        "hero.title": "Powering Your Laundry Operations",
        "hero.subtitle": "Premium industrial laundry equipment, expert maintenance, and genuine spare parts. Proudly highlighting <strong>IPSO</strong> excellence.",
        "hero.btnProducts": "Explore Products",
        "hero.btnService": "Request Service",

        // Home Services Section
        "services.subtitle": "What We Do",
        "services.title": "Service & Spare Parts",
        "services.maintTitle": "Expert Maintenance",
        "services.maintDesc": "Routine check-ups and preventative maintenance to keep your operations running smoothly without downtime.",
        "services.partsTitle": "Genuine Spare Parts",
        "services.partsDesc": "High-quality OEM parts, including exclusive IPSO components, ensuring longevity and optimal performance.",
        "services.repairTitle": "Emergency Repair",
        "services.repairDesc": "Fast-response troubleshooting and repairs to minimize disruption to your business operations.",

        // Home Products Section
        "products.subtitle": "Our Portfolio",
        "products.title": "Industrial Equipment",
        "products.description": "Discover our range of premium industrial laundry machines built for heavy-duty performance.",
        "products.washersTitle": "Washing Machines",
        "products.washersDesc": "High-spin, energy-efficient washer extractors designed to tackle the toughest loads.",
        "products.dryersTitle": "Industrial Dryers",
        "products.dryersDesc": "High-capacity tumble dryers providing rapid drying times and excellent fabric care.",
        "products.ironersTitle": "Dryer Rollers",
        "products.ironersDesc": "Precision flatwork ironers ensuring a flawless, crisp finish for all linens.",
        "products.genEquipTitle": "General Equipment",
        "products.genEquipDesc": "Carts, folding tables, and specialized tools to optimize your laundry workflow.",
        "btn.inquire": "Inquire Now",

        // Home Contact Section
        "contact.subtitle": "Get In Touch",
        "contact.title": "Ready to Upgrade?",
        "contact.desc": "Contact TF Servis today for sales inquiries, service requests, or spare parts.",
        "contact.phoneLabel": "Phone: +387 61 159 888",
        "contact.emailLabel": "Email: tfservis.newpage@gmail.com",
        "contact.addressLabel": "Address: Radnička bb, 71000 Sarajevo, Bosnia and Herzegovina",

        // Form Fields
        "form.namePlaceholder": "Your Name",
        "form.emailPlaceholder": "Your Email",
        "form.phonePlaceholder": "Your Phone Number (Optional)",
        "form.interestDefault": "Area of Interest",
        "form.interestSales": "Equipment Sales (IPSO)",
        "form.interestService": "Maintenance & Service",
        "form.interestParts": "Spare Parts",
        "form.interestOther": "Other",
        "form.messagePlaceholder": "How can we help you?",
        "form.submitBtn": "Send Message",

        // Services Page Specifics
        "servicePage.title": "Service, Parts & Supplies",
        "servicePage.desc": "Comprehensive maintenance and premium components to keep your laundry operations running flawlessly.",
        "servicePage.maintTitle": "Expert Maintenance & Repair",
        "servicePage.maintDesc": "Downtime costs you money. Our certified technicians specialize in fast, reliable repairs and preventative maintenance for all industrial laundry equipment, with specialized expertise in IPSO machines. We ensure your machines operate at peak efficiency.",
        "servicePage.ctaTitle": "Experiencing an issue with your equipment?",
        "servicePage.ctaDesc": "Our rapid response team is ready to diagnose and fix the problem.",
        "servicePage.ctaBtn": "Need a Service",
        "servicePage.oemSub": "OEM Components",
        "servicePage.oemTitle": "Genuine Spare Parts",
        "servicePage.oemDesc": "We stock and source thousands of original replacement parts to guarantee the longevity and safety of your machines.",
        "servicePage.motors": "Motors & Drives",
        "servicePage.motorsDesc": "High-performance motors and frequency inverters for reliable operation.",
        "servicePage.valves": "Valves & Pumps",
        "servicePage.valvesDesc": "Durable water and steam valves, along with high-capacity drain pumps.",
        "servicePage.belts": "Belts & Bearings",
        "servicePage.beltsDesc": "Heavy-duty drive belts and premium bearings engineered for heavy loads.",
        "servicePage.inquireParts": "Inquire About Parts",
        "servicePage.opsSub": "Daily Operations",
        "servicePage.opsTitle": "Laundry Supplies",
        "servicePage.opsDesc": "Everything you need for perfect washing results, day in and day out.",
        "servicePage.detergents": "Industrial Detergents",
        "servicePage.detergentsDesc": "High-concentration formulas designed to remove tough commercial stains.",
        "servicePage.softeners": "Softeners & Conditioners",
        "servicePage.softenersDesc": "Premium fabric care to ensure a soft feel and fresh scent for all linens.",
        "servicePage.chemicals": "Specialty Chemicals",
        "servicePage.chemicalsDesc": "Bleaches, starches, and destainers for specialized textile processing.",
        "servicePage.orderSupplies": "Order Supplies",

        // Products Page Specifics
        "productsPage.title": "Our Products",
        "productsPage.desc": "Explore our robust selection of industrial laundry equipment.",
        "tab.all": "All Equipment",
        "tab.washers": "Washing Machines",
        "tab.dryers": "Dryers",
        "tab.rollers": "Dryer Rollers",
        "tab.accessories": "Accessories",
        "modal.specsBtn": "View Specs",
        "modal.askBtn": "Ask About Product",
        "modal.noImage": "No Image Available",

        // About Us Page Specifics
        "aboutPage.title": "About Us",
        "aboutPage.desc": "Learn more about TF Servis, our achievements, and our commitment to premium industrial laundry solutions.",
        "aboutPage.storyTitle": "Our Story",
        "aboutPage.storyP1": "TF Servis was founded with a clear mission: to provide the most reliable service support and premium industrial laundry equipment in the region.",
        "aboutPage.storyP2": "As authorized IPSO specialists, we take pride in hundreds of successfully installed and serviced machines in hotels, hospitals, and commercial laundries.",
        "aboutPage.valTitle": "Why Choose TF Servis?",
        "aboutPage.val1Title": "Certified Technicians",
        "aboutPage.val1Desc": "Our team undergoes regular factory training and possesses years of diagnostic and service expertise.",
        "aboutPage.val2Title": "Rapid Spare Parts",
        "aboutPage.val2Desc": "Our vast stock of original spare parts ensures swift replacements and minimal downtime.",
        "aboutPage.val3Title": "Dedicated Support",
        "aboutPage.val3Desc": "We are available for consultations, laundry planning, and technical advice whenever you need us.",
        "aboutPage.partnerBtn": "Become a Partner",

        // Contact Page Specifics
        "contactPage.title": "Contact Us",
        "contactPage.desc": "We are here to support your industrial laundry needs.",
        "contactPage.directTitle": "Direct Support",
        "contactPage.letsTalk": "Let's Talk",
        "contactPage.directDesc": "For immediate assistance, machine service, or spare parts, please call us directly.",
        "contactPage.sendMessageTitle": "Send a Message",

        // Footer
        "footer.tagline": "Premium industrial laundry solutions. Sales, service, and parts.",
        "footer.quickLinks": "Quick Links",
        "footer.rights": "&copy; 2026 TF Servis. All rights reserved."
    }
};

class I18nManager {
    constructor() {
        this.currentLang = localStorage.getItem('tf_lang') || 'bs';
        document.documentElement.lang = this.currentLang;
    }

    init() {
        this.applyTranslations();
        this.renderLanguageSwitchers();
    }

    setLanguage(lang) {
        if (lang !== 'bs' && lang !== 'en') return;
        this.currentLang = lang;
        localStorage.setItem('tf_lang', lang);
        document.documentElement.lang = lang;
        this.applyTranslations();
        this.updateSwitcherUI();
        
        // Dispatch custom event for dynamic components like products.js
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    get(key) {
        return translations[this.currentLang][key] || translations['bs'][key] || key;
    }

    applyTranslations() {
        const langData = translations[this.currentLang];
        if (!langData) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                el.innerHTML = langData[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (langData[key]) {
                el.placeholder = langData[key];
            }
        });
    }

    renderLanguageSwitchers() {
        const containers = document.querySelectorAll('.lang-switcher-container');
        containers.forEach(container => {
            container.innerHTML = `
                <div class="lang-switch-pill">
                    <button class="lang-btn ${this.currentLang === 'bs' ? 'active' : ''}" data-lang="bs">BS</button>
                    <span class="lang-divider">|</span>
                    <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                </div>
            `;
        });

        document.addEventListener('click', (e) => {
            if (e.target.matches('.lang-btn')) {
                const selectedLang = e.target.getAttribute('data-lang');
                if (selectedLang) {
                    this.setLanguage(selectedLang);
                }
            }
        });
    }

    updateSwitcherUI() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}

window.i18n = new I18nManager();
document.addEventListener('DOMContentLoaded', () => {
    window.i18n.init();
});
