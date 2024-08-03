import { GoArrowUpRight } from "react-icons/go";

export const navData = [
    {
        title: "Our research",
        links: [
            { name: "Overview", url: "/overview" },
            { name: "Index", url: "/index" },
        ]
    },
    {
        title: "Latest advancements",
        links: [
            { name: "SAGE-2", url: "sage-2" },
            { name: "GEM-1o", url: "/gem-1o" },
        ]
    },
    {
        title: "SIMRIK",
        links: [
            { name: "For Everyone", url: "/for-everyone" },
            { name: "For Enterprises", url: "/for-enterprises" },
            { name: "SIMRIK login", url: "/simrik-login", external: true },
            { name: "Download", url: "/download" },
        ]
    },
    {
        title: "API",
        links: [
            { name: "Platform overview", url: "/platform-overview" },
            { name: "Pricing", url: "/pricing" },
            { name: "Documentation", url: "/documentation" },
            { name: "API login", url: "/api-login", external: true },
        ]
    },
    {
        title: "Company",
        links: [
            { name: "About us", url: "/about-us" },
            { name: "News", url: "/news" },
            { name: "Security", url: "/security" },
            { name: "Careers", url: "/careers" },
        ]
    },
    {
        title: "Terms & policies",
        links: [
            { name: "Terms of use", url: "/terms-of-use" },
            { name: "Privacy policy", url: "/privacy-policy" },
            { name: "Brand guidelines", url: "/brand-guidelines" },
            { name: "Other policies", url: "/other-policies" },
        ]
    }
];
