(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/ContactPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$useStodioMotion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/useStodioMotion.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const imgBadge = '/contact/badge-icon.svg';
const imgLogoDark = '/contact/logo-dark.svg';
const imgNavDropdown = '/contact/nav-dropdown.svg';
const imgBookCall = '/contact/book-call.png';
const imgArrowWhite = '/contact/arrow-white.svg';
const imgArrowConsult = '/contact/arrow-consult.svg';
const imgHero = '/contact/hero.png';
const imgHeroOverlay = '/contact/hero-overlay.png';
const imgPlay = '/contact/play-icon.svg';
const imgFooterLogo = '/contact/footer-logo.svg';
const imgNewsletterArrow = '/contact/newsletter-arrow.svg';
const imgSocialArrow = '/contact/social-arrow.svg';
const socialLinks = [
    {
        href: 'https://www.linkedin.com/',
        label: 'LinkedIn',
        icon: '/contact/social-linkedin.svg'
    },
    {
        href: 'https://www.instagram.com/',
        label: 'Instagram',
        icon: '/contact/social-instagram.svg'
    },
    {
        href: 'https://web.facebook.com/',
        label: 'Facebook',
        icon: '/contact/social-facebook.svg'
    },
    {
        href: 'https://x.com/',
        label: 'X',
        icon: '/contact/social-x.svg'
    },
    {
        href: 'https://www.youtube.com/',
        label: 'YouTube',
        icon: '/contact/social-youtube.svg'
    }
];
const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Studio',
        href: '/about'
    },
    {
        label: 'Work',
        href: '/projects'
    },
    {
        label: 'Pages'
    },
    {
        label: 'Careers',
        href: '/career'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
];
const pageLinks = [
    [
        'Home',
        '/'
    ],
    [
        'Studio',
        '/about'
    ],
    [
        'Projects',
        '/projects'
    ],
    [
        'Projects Single',
        '/projects/xenitho'
    ],
    [
        'Blog',
        '/blogs'
    ],
    [
        'Blogs Single',
        '/blogs/the-power-of-minimalist-design'
    ],
    [
        'Pricing',
        '/pricing'
    ],
    [
        'Career',
        '/career'
    ],
    [
        'Career Single',
        '/career/digital-pr-executive'
    ],
    [
        'Contact',
        '/contact'
    ],
    [
        'Style Guide',
        '/utility-pages/style-guide'
    ],
    [
        'Instructions',
        '/utility-pages/instruction'
    ],
    [
        'Privacy Policy',
        '/utility-pages/privacy-policy'
    ],
    [
        'Terms & Conditions',
        '/utility-pages/terms-conditions'
    ],
    [
        '404 Page',
        '/404'
    ],
    [
        'Protected Page',
        '/401'
    ],
    [
        'License Page',
        '/utility-pages/license'
    ]
];
const offices = [
    {
        name: 'Brooklyn Navy Yard',
        address: 'Industry City, 220 36th St, Brooklyn, NY 11232, USA',
        image: '/contact/location-1.png'
    },
    {
        name: 'Kreuzberg District',
        address: 'Factory Görlitzer Park, Lohmühlenstraße 65, 12435 Berlin, Germany',
        image: '/contact/location-2.png'
    },
    {
        name: 'Shibuya Crossing Area',
        address: 'The Foundry Shibuya, 2-1 Udagawacho, Shibuya City, Tokyo 150-0042, Japan',
        image: '/contact/location-3.png'
    },
    {
        name: 'Surry Hills',
        address: 'The Commons, 388 George St, Sydney NSW 2000, Australia',
        image: '/contact/location-1.png'
    }
];
function ContactPage() {
    _s();
    const [pagesOpen, setPagesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newsletterSent, setNewsletterSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formSent, setFormSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorLabelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$useStodioMotion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStodioMotion"])(pageRef, cursorRef, cursorLabelRef, 'contact');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "contact-page",
        ref: pageRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "custom-cursor",
                ref: cursorRef,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "cursor-label",
                    ref: cursorLabelRef
                }, void 0, false, {
                    fileName: "[project]/src/ContactPage.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/ContactPage.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "contact-topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-mark",
                        "aria-label": "Stodio agency logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            "aria-label": "Stodio home",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imgLogoDark,
                                alt: "Stodio logo",
                                width: 126,
                                height: 29
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/ContactPage.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/ContactPage.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "main-nav contact-nav",
                        "aria-label": "Main navigation",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `nav-item ${item.label === 'Contact' ? 'active' : ''}`,
                                "data-cursor": item.label === 'Pages' ? '' : undefined,
                                onMouseEnter: ()=>item.label === 'Pages' && setPagesOpen(true),
                                onMouseLeave: ()=>item.label === 'Pages' && setPagesOpen(false),
                                children: [
                                    item.label === 'Work' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "nav-badge",
                                        children: "05"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 85,
                                        columnNumber: 41
                                    }, this),
                                    item.label === 'Pages' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: imgNavDropdown,
                                                alt: "",
                                                className: "nav-dropdown",
                                                width: 20,
                                                height: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            pagesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pages-menu contact-pages-menu",
                                                children: pageLinks.map(([label, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: href,
                                                        children: label
                                                    }, label, false, {
                                                        fileName: "[project]/src/ContactPage.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/ContactPage.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        className: "cta-button dark-book-cta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cta-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imgBookCall,
                                    alt: "",
                                    width: 48,
                                    height: 36
                                }, void 0, false, {
                                    fileName: "[project]/src/ContactPage.jsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "btn-content-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "btn-inner-default",
                                        children: "Book A Call"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "btn-inner-hover",
                                        "aria-hidden": "true",
                                        children: "Book A Call"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "arrow-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imgArrowWhite,
                                    alt: "",
                                    width: 14,
                                    height: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/ContactPage.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ContactPage.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ContactPage.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "contact-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-badge light-badge",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imgBadge,
                                            alt: "",
                                            width: 16,
                                            height: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/ContactPage.jsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Since 2019"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Let’s Talk"
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "contact-intro",
                                children: "We are here to help your team grow, built only to keep your communication fast. It easily connects the details of where new projects will start."
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Capital City, TX"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:stodio.agency@cd.com",
                                                children: "stodio.agency@cd.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            formSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "contact-form-success",
                                role: "status",
                                children: "Thanks — your message is on its way."
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "contact-form",
                                onSubmit: (event)=>{
                                    event.preventDefault();
                                    setFormSent(true);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-form-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "First Name ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/ContactPage.jsx",
                                                                lineNumber: 155,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/ContactPage.jsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "firstName",
                                                        placeholder: "Name",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/ContactPage.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Email ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/ContactPage.jsx",
                                                                lineNumber: 159,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/ContactPage.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        name: "email",
                                                        placeholder: "Email",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/ContactPage.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "contact-message",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Write Message"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "message",
                                                placeholder: "How can we help you? Feel free to get in touch!",
                                                rows: 5
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "cta-button dark-cta contact-submit",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "btn-content-block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "btn-inner-default",
                                                        children: "Submit Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/ContactPage.jsx",
                                                        lineNumber: 169,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "btn-inner-hover",
                                                        "aria-hidden": "true",
                                                        children: "Submit Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/ContactPage.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "arrow-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: imgArrowWhite,
                                                    alt: "",
                                                    width: 14,
                                                    height: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/ContactPage.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ContactPage.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-photo",
                        "data-cursor": "PLAY",
                        "data-zoom": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imgHero,
                                alt: "Hand holding white daisies against a blue sky",
                                width: 684,
                                height: 825
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "contact-photo-overlay",
                                src: imgHeroOverlay,
                                alt: "",
                                width: 684,
                                height: 825
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "contact-play",
                                "aria-label": "Play video",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imgPlay,
                                    alt: "",
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/ContactPage.jsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ContactPage.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ContactPage.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "office-section",
                "aria-label": "Office locations",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "office-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-badge light-badge",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "badge-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: imgBadge,
                                        alt: "",
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/ContactPage.jsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Our Office Locations"
                                }, void 0, false, {
                                    fileName: "[project]/src/ContactPage.jsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/ContactPage.jsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "office-list",
                            children: offices.map((office)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "office-row",
                                    "data-cursor": "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "office-row-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "office-thumb",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: office.image,
                                                        alt: "",
                                                        width: 88,
                                                        height: 64
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/ContactPage.jsx",
                                                        lineNumber: 202,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/ContactPage.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: office.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/ContactPage.jsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/ContactPage.jsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: office.address
                                        }, void 0, false, {
                                            fileName: "[project]/src/ContactPage.jsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, office.name, true, {
                                    fileName: "[project]/src/ContactPage.jsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/ContactPage.jsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ContactPage.jsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/ContactPage.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "footer-callout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-badge light-badge",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imgBadge,
                                    alt: "",
                                    width: 16,
                                    height: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/ContactPage.jsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ContactPage.jsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Transform Your Ideas Today"
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "cta-button red-cta large-footer-button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "btn-content-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "btn-inner-default",
                                                children: "Book a Consultation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "btn-inner-hover",
                                                "aria-hidden": "true",
                                                children: "Book a Consultation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "arrow-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imgArrowConsult,
                                            alt: "",
                                            width: 15,
                                            height: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/ContactPage.jsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ContactPage.jsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ContactPage.jsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "site-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-newsletter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Stay updated with Rise news"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: `newsletter-form ${newsletterSent ? 'sent' : ''}`,
                                        onSubmit: (event)=>{
                                            event.preventDefault();
                                            setNewsletterSent(true);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                placeholder: "Enter your email",
                                                "aria-label": "Email address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                "aria-label": "Subscribe",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: imgNewsletterArrow,
                                                    alt: "",
                                                    width: 16,
                                                    height: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/ContactPage.jsx",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    newsletterSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "newsletter-success",
                                        children: "Thanks, you're on the list."
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 250,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "social-links contact-social",
                                        children: socialLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: item.href,
                                                "aria-label": item.label,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.icon,
                                                        alt: "",
                                                        width: 16,
                                                        height: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/ContactPage.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: imgSocialArrow,
                                                        alt: "",
                                                        width: 12,
                                                        height: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/ContactPage.jsx",
                                                        lineNumber: 255,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.label, true, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                children: "Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/projects",
                                                children: "Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/career",
                                                children: "Career"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blogs",
                                                children: "Blog"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/career/digital-pr-executive",
                                                children: "Career Single"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/projects/xenitho",
                                                children: "Projects Single"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blogs/the-power-of-minimalist-design",
                                                children: "Blogs Single"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 271,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/pricing",
                                                children: "Pricing"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/utility-pages/style-guide",
                                                children: "Style Guide"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/utility-pages/changelog",
                                                children: "Changelog"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/utility-pages/license",
                                                children: "License"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/401",
                                                children: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/404",
                                                children: "404"
                                            }, void 0, false, {
                                                fileName: "[project]/src/ContactPage.jsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ContactPage.jsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "footer-logo",
                            src: imgFooterLogo,
                            alt: "Stodio Agency",
                            width: 1340,
                            height: 134
                        }, void 0, false, {
                            fileName: "[project]/src/ContactPage.jsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/ContactPage.jsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Stodio © 2025. All rights reserved. Powered By Webflow."
                            }, void 0, false, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/utility-pages/privacy-policy",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    "   |   ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/utility-pages/terms-conditions",
                                        children: "Terms & Conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/ContactPage.jsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ContactPage.jsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/ContactPage.jsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ContactPage.jsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ContactPage.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(ContactPage, "ryg7a4a/ze55iaoVXF6rEDD6c5w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$useStodioMotion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStodioMotion"]
    ];
});
_c = ContactPage;
const __TURBOPACK__default__export__ = ContactPage;
var _c;
__turbopack_context__.k.register(_c, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/useStodioMotion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EASE_STODIO",
    ()=>EASE_STODIO,
    "useStodioMotion",
    ()=>useStodioMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const EASE_STODIO = 'cubic-bezier(0.16, 1, 0.3, 1)';
function onHover(el, enter, leave) {
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    return ()=>{
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
    };
}
function reveal(targets, fromVars = {}, extraVars = {}) {
    const nodes = typeof targets === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray(targets) : targets;
    if (!nodes.length) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(nodes, {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50,
        ...fromVars
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: nodes[0],
            start: 'top 88%',
            once: true
        },
        ...extraVars
    });
}
function bindButtonRolls(root) {
    const cleanups = [];
    root.querySelectorAll('.cta-button, .about-link, .all-cases, .view-blogs').forEach((btn)=>{
        const inner = btn.querySelector('.btn-inner-default');
        const abs = btn.querySelector('.btn-inner-hover');
        const arrowEl = btn.querySelector('.arrow-icon');
        if (!inner || !abs) return;
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            paused: true
        });
        tl.to(inner, {
            yPercent: -100,
            duration: 0.45,
            ease: EASE_STODIO
        }, 0).fromTo(abs, {
            yPercent: 100
        }, {
            yPercent: 0,
            duration: 0.45,
            ease: EASE_STODIO
        }, 0);
        if (arrowEl) tl.to(arrowEl, {
            x: 4,
            y: -4,
            duration: 0.35,
            ease: EASE_STODIO
        }, 0);
        const press = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                scale: 0.97,
                duration: 0.12,
                ease: 'power2.out'
            });
        const release = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        btn.addEventListener('mousedown', press);
        btn.addEventListener('mouseup', release);
        btn.addEventListener('mouseleave', release);
        cleanups.push(onHover(btn, ()=>tl.play(), ()=>tl.reverse()));
        cleanups.push(()=>{
            btn.removeEventListener('mousedown', press);
            btn.removeEventListener('mouseup', release);
            btn.removeEventListener('mouseleave', release);
        });
    });
    return cleanups;
}
function bindImageZooms(root) {
    return Array.from(root.querySelectorAll('[data-zoom]')).map((el)=>{
        const img = el.querySelector('img:not(.contact-photo-overlay)');
        if (!img) return ()=>{};
        return onHover(el, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
                scale: 1.06,
                duration: 0.6,
                ease: 'power2.out'
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out'
            }));
    });
}
function bindMagnetic(root) {
    const cleanups = [];
    root.querySelectorAll('.cta-button').forEach((btn)=>{
        const move = (event)=>{
            const box = btn.getBoundingClientRect();
            const x = (event.clientX - box.left - box.width / 2) * 0.18;
            const y = (event.clientY - box.top - box.height / 2) * 0.18;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                x,
                y,
                duration: 0.35,
                ease: EASE_STODIO
            });
        };
        const leave = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                x: 0,
                y: 0,
                duration: 0.45,
                ease: EASE_STODIO
            });
        btn.addEventListener('mousemove', move);
        btn.addEventListener('mouseleave', leave);
        cleanups.push(()=>{
            btn.removeEventListener('mousemove', move);
            btn.removeEventListener('mouseleave', leave);
        });
    });
    return cleanups;
}
function bindCounters(root) {
    root.querySelectorAll('.stat-value').forEach((el)=>{
        const rawVal = el.dataset.value || el.textContent.trim();
        const match = rawVal.match(/[\d.]+/);
        if (!match) return;
        const num = Number.parseFloat(match[0]);
        if (Number.isNaN(num)) return;
        const prefix = rawVal.slice(0, rawVal.indexOf(match[0]));
        const suffix = rawVal.slice(rawVal.indexOf(match[0]) + match[0].length);
        const obj = {
            v: 0
        };
        const decimals = match[0].includes('.') ? match[0].split('.')[1].length : 0;
        const pad = /^\d+$/.test(match[0]) && match[0].startsWith('0') ? match[0].length : 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(obj, {
            v: num,
            duration: 2.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true
            },
            onUpdate () {
                let next = decimals ? obj.v.toFixed(decimals) : String(Math.round(obj.v));
                if (pad) next = String(Math.round(obj.v)).padStart(pad, '0');
                el.textContent = `${prefix}${next}${suffix}`;
            }
        });
    });
}
function bindShared(root) {
    const cleanups = [];
    const logo = root.querySelector('.footer-logo');
    if (logo) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(logo, {
            y: 40,
            scale: 0.94,
            autoAlpha: 0.7
        }, {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: logo,
                start: 'top 96%',
                once: true
            }
        });
    }
    root.querySelectorAll('.footer-links a').forEach((link)=>{
        cleanups.push(onHover(link, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(link, {
                x: 4,
                color: '#de322d',
                duration: 0.25,
                ease: 'power2.out'
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(link, {
                x: 0,
                color: '#fff',
                duration: 0.25,
                ease: 'power2.out'
            })));
    });
    return cleanups;
}
function setupStudio(root) {
    const cleanups = [];
    const heroTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
    heroTl.fromTo('.studio-topbar', {
        autoAlpha: 0,
        y: -20
    }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }).fromTo('.studio-hero .section-badge', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
    }, '-=0.4').fromTo('.studio-hero h1 > span', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out'
    }, '-=0.35').fromTo('.studio-hero-meta span', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out'
    }, '-=0.4').fromTo('.studio-hero-line img', {
        scale: 1.25
    }, {
        scale: 1,
        duration: 1.3,
        ease: 'power2.out'
    }, '-=0.8');
    reveal('.studio-story .section-badge', {}, {
        stagger: 0
    });
    reveal('.studio-authors', {}, {
        stagger: 0
    });
    reveal('.studio-story-copy p', {}, {
        stagger: 0.12
    });
    reveal('.studio-numbers .section-badge', {}, {
        stagger: 0
    });
    reveal('.studio-stats-grid article', {}, {
        stagger: 0.12
    });
    reveal('.studio-drives .section-badge', {}, {
        stagger: 0
    });
    reveal('.studio-drives h2 > span', {}, {
        stagger: 0.1
    });
    root.querySelectorAll('.studio-showcase > div').forEach((el, index)=>{
        const rot = Number.parseFloat(el.dataset.rotate) || 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, {
            autoAlpha: 0,
            y: 60,
            rotation: rot
        }, {
            autoAlpha: 1,
            y: 0,
            rotation: rot,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.08,
            scrollTrigger: {
                trigger: '.studio-showcase',
                start: 'top 88%',
                once: true
            }
        });
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to('.studio-showcase img', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
            trigger: '.studio-showcase',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.studio-drives-line img', {
        scale: 1.2
    }, {
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.studio-drives h2',
            start: 'top 88%',
            once: true
        }
    });
    reveal('.studio-method-head', {}, {
        stagger: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.studio-method-grid article', {
        autoAlpha: 0,
        y: 50,
        filter: 'blur(5px)'
    }, {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.studio-method-grid',
            start: 'top 88%',
            once: true
        }
    });
    root.querySelectorAll('.studio-method-grid article').forEach((card)=>{
        cleanups.push(onHover(card, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(card, {
                y: -8,
                duration: 0.4,
                ease: 'power2.out'
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(card, {
                y: 0,
                duration: 0.4,
                ease: 'power2.out'
            })));
    });
    reveal('.studio-clients .section-badge', {}, {
        stagger: 0
    });
    reveal('.studio-client-grid > div', {
        y: 30
    }, {
        stagger: 0.06,
        duration: 0.7
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.studio-foundation-photo', {
        clipPath: 'inset(12% 0 12% 0)'
    }, {
        clipPath: 'inset(0% 0 0% 0)',
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.studio-foundation-photo',
            start: 'top 88%',
            once: true
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.studio-foundation-photo img', {
        scale: 1.12
    }, {
        scale: 1,
        duration: 1.3,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.studio-foundation-photo',
            start: 'top 88%',
            once: true
        }
    });
    reveal('.studio-foundation-copy', {}, {
        stagger: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.studio-foundation-copy li', {
        autoAlpha: 0,
        x: 24
    }, {
        autoAlpha: 1,
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
            trigger: '.studio-foundation-copy ul',
            start: 'top 90%',
            once: true
        }
    });
    const foundationPanels = root.querySelectorAll('.studio-foundation-desc');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(foundationPanels, {
        height: 0,
        autoAlpha: 0
    });
    const openFoundation = (item)=>{
        root.querySelectorAll('.studio-foundation-copy li').forEach((node)=>node.classList.remove('is-active'));
        item.classList.add('is-active');
        const desc = item.querySelector('.studio-foundation-desc');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(foundationPanels, {
            height: 0,
            autoAlpha: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
        if (desc) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(desc, {
            height: 'auto',
            autoAlpha: 1,
            duration: 0.45,
            ease: 'power2.out'
        });
    };
    root.querySelectorAll('.studio-foundation-copy li').forEach((item, index)=>{
        const activate = ()=>openFoundation(item);
        item.addEventListener('mouseenter', activate);
        item.addEventListener('focus', activate);
        if (index === 0) openFoundation(item);
        cleanups.push(()=>{
            item.removeEventListener('mouseenter', activate);
            item.removeEventListener('focus', activate);
        });
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to('.studio-foundation-photo img', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
            trigger: '.studio-foundation-photo',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
        }
    });
    reveal('.studio-team-head > div', {
        filter: 'blur(0px)'
    }, {
        stagger: 0.1,
        duration: 0.8
    });
    reveal('.studio-team-head p', {
        filter: 'blur(0px)'
    }, {
        duration: 0.7
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.studio-team-grid > *', {
        autoAlpha: 0,
        y: 40,
        filter: 'blur(5px)'
    }, {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
            trigger: '.studio-team-grid',
            start: 'top 88%',
            once: true
        }
    });
    root.querySelectorAll('.studio-team-photo').forEach((el)=>{
        const meta = el.querySelector('.studio-team-meta');
        if (!meta) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(meta, {
            autoAlpha: 0,
            y: 16
        });
        cleanups.push(onHover(el, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(meta, {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                ease: 'power2.out'
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(meta, {
                autoAlpha: 0,
                y: 16,
                duration: 0.35,
                ease: 'power2.out'
            })));
    });
    reveal('.studio-page .footer-callout', {
        scale: 0.97,
        y: 30
    }, {
        stagger: 0
    });
    reveal('.studio-page .site-footer', {
        y: 36
    }, {
        stagger: 0
    });
    return cleanups;
}
function setupContact(root) {
    const cleanups = [];
    const heroTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
    heroTl.fromTo('.contact-topbar', {
        autoAlpha: 0,
        y: -20
    }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }).fromTo('.contact-copy .section-badge', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
    }, '-=0.4').fromTo('.contact-copy h1', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.9,
        ease: 'power3.out'
    }, '-=0.35').fromTo('.contact-intro', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
    }, '-=0.5').fromTo('.contact-meta > div', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.4').fromTo('.contact-form label, .contact-submit', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out'
    }, '-=0.35');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.contact-photo', {
        clipPath: 'inset(10% 0 10% 0)'
    }, {
        clipPath: 'inset(0% 0 0% 0)',
        duration: 1.3,
        ease: 'power4.out'
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.contact-photo img:not(.contact-photo-overlay)', {
        scale: 1.14
    }, {
        scale: 1,
        duration: 1.4,
        ease: 'power2.out'
    });
    const play = root.querySelector('.contact-play');
    if (play) {
        cleanups.push(onHover(play, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(play, {
                scale: 1.08,
                duration: 0.3,
                ease: 'power2.out'
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(play, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            })));
    }
    reveal('.office-panel .section-badge', {}, {
        stagger: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.office-row', {
        autoAlpha: 0,
        y: 50,
        filter: 'blur(5px)'
    }, {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.office-list',
            start: 'top 88%',
            once: true
        }
    });
    root.querySelectorAll('.office-row').forEach((row)=>{
        const thumb = row.querySelector('.office-thumb');
        const enter = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(row, {
                x: 8,
                duration: 0.35,
                ease: 'power2.out'
            });
            if (thumb) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(thumb, {
                width: 88,
                height: 64,
                duration: 0.45,
                ease: EASE_STODIO
            });
        };
        const leave = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(row, {
                x: 0,
                duration: 0.35,
                ease: 'power2.out'
            });
            if (thumb) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(thumb, {
                width: 0,
                height: 0,
                duration: 0.45,
                ease: EASE_STODIO
            });
        };
        cleanups.push(onHover(row, enter, leave));
    });
    root.querySelectorAll('.contact-form input, .contact-form textarea').forEach((field)=>{
        const focus = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(field, {
                borderColor: '#0a0a0a',
                y: -2,
                duration: 0.25,
                ease: 'power2.out'
            });
        const blur = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(field, {
                borderColor: '#e6e6e6',
                y: 0,
                duration: 0.25,
                ease: 'power2.out'
            });
        field.addEventListener('focus', focus);
        field.addEventListener('blur', blur);
        cleanups.push(()=>{
            field.removeEventListener('focus', focus);
            field.removeEventListener('blur', blur);
        });
    });
    reveal('.contact-page .footer-callout', {
        scale: 0.97,
        y: 30
    }, {
        stagger: 0
    });
    reveal('.contact-page .site-footer', {
        y: 36
    }, {
        stagger: 0
    });
    return cleanups;
}
function setupHome(root) {
    const cleanups = [];
    const heroTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
    heroTl.fromTo('.hero-bg img', {
        scale: 1.4,
        transformOrigin: 'center center'
    }, {
        scale: 1,
        duration: 1.8,
        ease: 'power2.out'
    }).fromTo('.topbar', {
        autoAlpha: 0,
        y: -20
    }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=1.2').fromTo('.headline-badge', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
    }, '-=0.4').fromTo('.hero-line-inner', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.35').fromTo('.hero-subtitle', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
    }, '-=0.5').fromTo('.hero-meta-row span', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out'
    }, '-=0.4').fromTo('.hero-aside', {
        autoAlpha: 0,
        filter: 'blur(5px)',
        y: 50
    }, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
    }, '-=0.3');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to('.hero-bg img', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-shell',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
    reveal('.trust-strip', {}, {
        duration: 0.7
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to('.trust-mark-star', {
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
            trigger: '.trust-strip',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });
    reveal('.about-section', {}, {
        stagger: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to('.gallery-track', {
        xPercent: -20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.gallery-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
        }
    });
    root.querySelectorAll('.gallery-card img').forEach((img)=>{
        const parent = img.closest('.gallery-card');
        if (!parent) return;
        cleanups.push(onHover(parent, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
                scale: 1.06,
                duration: 0.6,
                ease: 'power2.out'
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out'
            })));
    });
    reveal('.stats-section', {}, {
        stagger: 0
    });
    reveal('.stat-item', {
        y: 50,
        filter: 'blur(5px)'
    }, {
        stagger: 0.12
    });
    reveal('.services-panel .section-heading-row', {}, {
        stagger: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.service-row', {
        autoAlpha: 0,
        x: -32
    }, {
        autoAlpha: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.service-list',
            start: 'top 85%',
            once: true
        }
    });
    root.querySelectorAll('.service-row').forEach((row)=>{
        const arrow = row.querySelector('.service-arrow');
        cleanups.push(onHover(row, ()=>{
            if (arrow) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(arrow, {
                x: 8,
                duration: 0.3,
                ease: 'power2.out'
            });
        }, ()=>{
            if (arrow) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(arrow, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }));
    });
    reveal('.showcase-header', {}, {
        stagger: 0
    });
    root.querySelectorAll('.work-image-wrap').forEach((wrap)=>{
        const img = wrap.querySelector('img');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(wrap, {
            clipPath: 'inset(12% 0 12% 0)'
        }, {
            clipPath: 'inset(0% 0 0% 0)',
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: wrap,
                start: 'top 88%',
                once: true
            }
        });
        if (img) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(img, {
                scale: 1.12
            }, {
                scale: 1,
                duration: 1.3,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: wrap,
                    start: 'top 88%',
                    once: true
                }
            });
            cleanups.push(onHover(wrap, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
                    scale: 1.06,
                    duration: 0.7,
                    ease: 'power2.out'
                }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
                    scale: 1,
                    duration: 0.7,
                    ease: 'power2.out'
                })));
        }
    });
    reveal('.pricing-header', {}, {
        stagger: 0
    });
    reveal('.plan-card', {
        y: 50,
        filter: 'blur(5px)'
    }, {
        stagger: 0.14
    });
    root.querySelectorAll('.plan-card').forEach((card)=>{
        cleanups.push(onHover(card, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(card, {
                y: -6,
                duration: 0.4,
                ease: 'power2.out'
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(card, {
                y: 0,
                duration: 0.4,
                ease: 'power2.out'
            })));
    });
    reveal('.faq-heading > div:first-child', {}, {
        stagger: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.faq-item', {
        autoAlpha: 0,
        x: 32
    }, {
        autoAlpha: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 87%',
            once: true
        }
    });
    reveal('.testimonials-heading', {}, {
        stagger: 0
    });
    reveal('.testimonial-card', {
        y: 54,
        filter: 'blur(5px)'
    }, {
        stagger: 0.12
    });
    reveal('.journal-heading', {}, {
        stagger: 0
    });
    reveal('.blog-card', {
        y: 54,
        filter: 'blur(5px)'
    }, {
        stagger: 0.12
    });
    root.querySelectorAll('.blog-image img').forEach((img)=>{
        const parent = img.closest('.blog-card');
        if (!parent) return;
        cleanups.push(onHover(parent, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
                scale: 1.06,
                duration: 0.6,
                ease: 'power2.out'
            }), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
                scale: 1,
                duration: 0.6,
                ease: 'power2.out'
            })));
    });
    reveal('.footer-callout', {
        scale: 0.97,
        y: 30,
        filter: 'blur(5px)'
    }, {
        stagger: 0
    });
    reveal('.site-footer', {
        y: 36
    }, {
        stagger: 0
    });
    return cleanups;
}
function useStodioMotion(rootRef, cursorRef, cursorLabelRef, page) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useStodioMotion.useLayoutEffect": ()=>{
            const root = rootRef.current;
            if (!root) return undefined;
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const extraCleanups = [];
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "useStodioMotion.useLayoutEffect.context": ()=>{
                    if (reducedMotion) return;
                    extraCleanups.push(...bindButtonRolls(root));
                    extraCleanups.push(...bindMagnetic(root));
                    extraCleanups.push(...bindImageZooms(root));
                    extraCleanups.push(...bindShared(root));
                    bindCounters(root);
                    if (page === 'home') extraCleanups.push(...setupHome(root));
                    if (page === 'studio') extraCleanups.push(...setupStudio(root));
                    if (page === 'contact') extraCleanups.push(...setupContact(root));
                }
            }["useStodioMotion.useLayoutEffect.context"], root);
            if (reducedMotion) {
                return ({
                    "useStodioMotion.useLayoutEffect": ()=>{
                        extraCleanups.filter({
                            "useStodioMotion.useLayoutEffect": (fn)=>typeof fn === 'function'
                        }["useStodioMotion.useLayoutEffect"]).forEach({
                            "useStodioMotion.useLayoutEffect": (fn)=>fn()
                        }["useStodioMotion.useLayoutEffect"]);
                        context.revert();
                    }
                })["useStodioMotion.useLayoutEffect"];
            }
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                lerp: page === 'home' ? 0.08 : 0.1,
                smoothWheel: true,
                autoRaf: false
            });
            lenis.on('scroll', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            const ticker = {
                "useStodioMotion.useLayoutEffect.ticker": (time)=>lenis.raf(time * 1000)
            }["useStodioMotion.useLayoutEffect.ticker"];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add(ticker);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
            requestAnimationFrame({
                "useStodioMotion.useLayoutEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
            }["useStodioMotion.useLayoutEffect"]);
            return ({
                "useStodioMotion.useLayoutEffect": ()=>{
                    extraCleanups.filter({
                        "useStodioMotion.useLayoutEffect": (fn)=>typeof fn === 'function'
                    }["useStodioMotion.useLayoutEffect"]).forEach({
                        "useStodioMotion.useLayoutEffect": (fn)=>fn()
                    }["useStodioMotion.useLayoutEffect"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(ticker);
                    lenis.destroy();
                    context.revert();
                }
            })["useStodioMotion.useLayoutEffect"];
        }
    }["useStodioMotion.useLayoutEffect"], [
        rootRef,
        page
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStodioMotion.useEffect": ()=>{
            const cursor = cursorRef.current;
            const cursorLabel = cursorLabelRef.current;
            const root = rootRef.current;
            const touchDevice = window.matchMedia('(pointer: coarse)').matches;
            if (!cursor || !cursorLabel || !root || touchDevice) return undefined;
            document.body.style.cursor = 'none';
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursor, {
                xPercent: -50,
                yPercent: -50
            });
            const moveX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(cursor, 'x', {
                duration: 0.18,
                ease: 'power3.out'
            });
            const moveY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].quickTo(cursor, 'y', {
                duration: 0.18,
                ease: 'power3.out'
            });
            const onMove = {
                "useStodioMotion.useEffect.onMove": (event)=>{
                    moveX(event.clientX);
                    moveY(event.clientY);
                }
            }["useStodioMotion.useEffect.onMove"];
            window.addEventListener('pointermove', onMove);
            const onDown = {
                "useStodioMotion.useEffect.onDown": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursor, {
                        scale: 0.75,
                        duration: 0.12,
                        ease: 'power2.out'
                    })
            }["useStodioMotion.useEffect.onDown"];
            const onUp = {
                "useStodioMotion.useEffect.onUp": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursor, {
                        scale: 1,
                        duration: 0.2,
                        ease: 'power2.out'
                    })
            }["useStodioMotion.useEffect.onUp"];
            window.addEventListener('mousedown', onDown);
            window.addEventListener('mouseup', onUp);
            const interactive = root.querySelectorAll('a, button, [data-cursor], input, textarea');
            const onEnter = {
                "useStodioMotion.useEffect.onEnter": (event)=>{
                    const label = event.currentTarget.dataset.cursor || '';
                    cursor.classList.add('cursor-active');
                    if (label) {
                        cursor.classList.add('cursor-with-label');
                        cursorLabel.textContent = label;
                    }
                }
            }["useStodioMotion.useEffect.onEnter"];
            const onLeave = {
                "useStodioMotion.useEffect.onLeave": ()=>{
                    cursor.classList.remove('cursor-active', 'cursor-with-label');
                    cursorLabel.textContent = '';
                }
            }["useStodioMotion.useEffect.onLeave"];
            interactive.forEach({
                "useStodioMotion.useEffect": (el)=>{
                    el.addEventListener('pointerenter', onEnter);
                    el.addEventListener('pointerleave', onLeave);
                }
            }["useStodioMotion.useEffect"]);
            return ({
                "useStodioMotion.useEffect": ()=>{
                    window.removeEventListener('pointermove', onMove);
                    window.removeEventListener('mousedown', onDown);
                    window.removeEventListener('mouseup', onUp);
                    document.body.style.cursor = '';
                    interactive.forEach({
                        "useStodioMotion.useEffect": (el)=>{
                            el.removeEventListener('pointerenter', onEnter);
                            el.removeEventListener('pointerleave', onLeave);
                        }
                    }["useStodioMotion.useEffect"]);
                }
            })["useStodioMotion.useEffect"];
        }
    }["useStodioMotion.useEffect"], [
        rootRef,
        cursorRef,
        cursorLabelRef
    ]);
}
_s(useStodioMotion, "Gjgl5rfcc2T4sFnfEMfRvL6K4Q4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0sjjh_6._.js.map