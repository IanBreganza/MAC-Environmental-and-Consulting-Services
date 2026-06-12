/* ==========================================================
   SITE CONTENT — edit every user-facing string here.
   No other file needs to change for text/image updates.
   ========================================================== */

window.SITE_CONTENT = {

  /* ── NAV ─────────────────────────────────────────────── */
  nav: {
    companyName: "MC Environmental and Consulting Services",
    logoAlt: "MC Environmental logo",
    links: [
      { label: "Home",      href: "#home"         },
      { label: "Services",  href: "#services"     },
      { label: "About",     href: "#about"        },
      { label: "Portfolio", href: "#portfolio"    },
      { label: "Contact",   href: "#contact"      },
    ],
  },

  /* ── HERO ────────────────────────────────────────────── */
  hero: {
    imagePath: "images/hero.jpg",
    imageAlt:  "Aerial view of Philippine tropical rainforest",
    headline:   "Forests Sustained\nby Science.",
    subheadline: "MAC Environmental and Consulting Services delivers evidence-based forestry and environmental solutions for communities, industries, and government agencies across the Philippine archipelago.",
    ctaPrimary:   { label: "Request a Proposal", href: "#contact"   },
    ctaSecondary: { label: "View Our Work",       href: "#portfolio" },
  },

  /* ── SERVICES ────────────────────────────────────────── */
  services: [
    {
      icon: "tree",
      title: "Tree Inventory and Forest Resource Assessment",
      description: "Systematic field surveys and biomass estimation to document forest composition, structure, and carbon stock for management planning and regulatory compliance.",
    },
    {
      icon: "leaf",
      title: "Reforestation and Enrichment Planning",
      description: "Species selection, site suitability analysis, and planting design tailored to local ecology and DENR reforestation program requirements.",
    },
    {
      icon: "microscope",
      title: "Biodiversity and Habitat Surveys",
      description: "Rapid ecological assessments and long-term monitoring of flora and fauna, including threatened species documentation and habitat delineation.",
    },
    {
      icon: "clipboard",
      title: "Forest Health Monitoring and Reporting",
      description: "Periodic crown condition assessments, pest and disease surveillance, and regulatory reporting to support sustainable forest management plans.",
    },
    {
      icon: "globe",
      title: "Environmental Compliance Assistance",
      description: "Preparation of Environmental Impact Statements, Compliance Monitoring Reports, and liaison support with DENR and LGU environmental offices.",
    },
    {
      icon: "map",
      title: "GIS Mapping and Spatial Analysis",
      description: "High-resolution land cover mapping, watershed delineation, and forest boundary demarcation using drone imagery and satellite data sources.",
    },
    {
      icon: "users",
      title: "Community-based Forest Management (CBFM) Support",
      description: "Facilitation of community engagement, CBFM agreement preparation, livelihood integration, and participatory resource-use monitoring.",
    },
  ],

  /* ── ABOUT ───────────────────────────────────────────── */
  about: {
    imagePath: "images/about.jpg",
    imageAlt:  "MC Environmental field team conducting forest survey",
    heading:   "About MC Environmental",
    body: [
      "MAC Environmental and Consulting Services was founded by Filipino foresters and ecologists committed to bridging rigorous science with practical land stewardship. We work across Luzon, Visayas, and Mindanao, partnering with government agencies, private landowners, NGOs, and local communities.",
      "Our multidisciplinary team combines decades of field experience with modern remote sensing technology, ensuring that every recommendation we make is grounded in current data and aligned with Philippine forestry law and DENR administrative orders.",
      "We believe that healthy forests are the foundation of resilient communities. Every project we undertake — from a single tree inventory to a watershed-scale restoration plan — reflects that conviction.",
    ],
    pullQuote: "Rooted in Science, Growing with Nature.",
    stats: [
      { value: "15+",    label: "Years of Practice"    },
      { value: "200+",   label: "Projects Completed"   },
      { value: "1,400+", label: "Species Documented"   },
    ],
  },

  /* ── PORTFOLIO ───────────────────────────────────────── */
  portfolio: [
    {
      imagePath:    "images/download.jpeg",
      imageAlt:     "Reforestation planting in Bukidnon highlands",
      title:        "Bukidnon Watershed Restoration",
      speciesLabel: "Shorea contorta",
      description:  "A 500-hectare reforestation project in the upper Pulangi watershed, establishing native dipterocarp species alongside community nurseries and seedling production centres.",
    },
    {
      imagePath:    "images/download.jpeg",
      imageAlt:     "Biodiversity field survey in Palawan forest",
      title:        "Palawan Biodiversity Assessment",
      speciesLabel: "Rafflesia speciosa",
      description:  "Rapid biodiversity assessment covering 1,200 ha of old-growth forest, documenting 47 threatened species and recommending no-take buffer zones and adaptive management protocols.",
    },
    {
      imagePath:    "images/download.jpeg",
      imageAlt:     "GIS drone mapping over Cagayan Valley",
      title:        "Cagayan Valley Forest Cover Mapping",
      speciesLabel: "Agathis philippinensis",
      description:  "Drone-assisted LiDAR survey producing a 1:5,000 scale forest cover map for 8 municipalities, integrated directly into DENR's Forest Management Information System.",
    },
    {
      imagePath:    "images/download.jpeg",
      imageAlt:     "Community forest management meeting in Samar",
      title:        "Samar CBFM Facilitation",
      speciesLabel: "Dipterocarpus grandiflorus",
      description:  "Assisted 12 Samar communities in securing CBFM agreements covering 14,000 ha, including livelihood mapping, resource-use protocols, and community forest guards training.",
    },
    {
      imagePath:    "images/download.jpeg",
      imageAlt:     "Environmental compliance monitoring in Davao",
      title:        "Davao Mining EIS Support",
      speciesLabel: "Pterocarpus indicus",
      description:  "Prepared the forestry chapter of a full Environmental Impact Statement for a mineral extraction project, including a progressive rehabilitation and post-closure revegetation plan.",
    },
    {
      imagePath:    "images/download.jpeg",
      imageAlt:     "Tree inventory field work in Quezon protected area",
      title:        "Quezon Protected Area Tree Inventory",
      speciesLabel: "Parashorea malaanonan",
      description:  "Systematic 10 % sample tree inventory of a 3,200-ha protected area, estimating above-ground carbon stock at 280 Mg C ha⁻¹ — a baseline for REDD+ feasibility assessment.",
    },
  ],

  /* ── TESTIMONIALS ────────────────────────────────────── */
  testimonials: [
    {
      quote: "MC Environmental delivered a thorough EIS forestry assessment on a tight government deadline. Their species documentation was exceptionally detailed and stood up to DENR technical review without a single revision.",
      name:  "Engr. Ramon V. Castillo",
      org:   "Project Manager, Luzon Infrastructure Group",
    },
    {
      quote: "Working with the MC team on our CBFM application changed how our community sees the forest — not just as a resource to extract, but as something we are genuinely stewarding for our grandchildren.",
      name:  "Kagawad Ligaya D. Santos",
      org:   "Barangay Mapalad, Mountain Province",
    },
    {
      quote: "Their GIS output was the most precise forest boundary data we have ever received from a private consultant. We integrated it directly into our FMIS database without any post-processing whatsoever.",
      name:  "For. Maria Elena J. Reyes",
      org:   "CENRO, Nueva Vizcaya",
    },
  ],

  /* ── CONTACT ─────────────────────────────────────────── */
  contact: {
    heading:            "Start a Conversation",
    intro:              "Whether you need a rapid assessment or a long-term monitoring programme, we would like to hear about your project.",
    address:            "Maahas, Los Banos, Laguna, Philippines 4030",
    phone:              "+63 906 121 4632",
    email:              "info@mcenvironmental.ph",
    formSubjectDefault: "Project Inquiry — MC Environmental",
    fields: {
      name:    "Your Name",
      email:   "Your Email",
      subject: "Subject",
      message: "Tell us about your project",
      submit:  "Send Message",
    },
  },

  /* ── FOOTER ──────────────────────────────────────────── */
  footer: {
    companyName: "MC Environmental and Consulting Services",
    tagline:     "Rooted in Science, Growing with Nature.",
    logoAlt:     "MC Environmental footer logo",
    links: [
      { label: "Home",      href: "#home"      },
      { label: "Services",  href: "#services"  },
      { label: "About",     href: "#about"     },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact",   href: "#contact"   },
    ],
    copyright: "© 2025 MC Environmental and Consulting Services. All rights reserved.",
  },

};
