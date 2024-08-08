import { GoArrowUpRight } from "react-icons/go";

//footer:
export const navData = [
    {
        title: "Our research",
        links: [
            { name: "Overview", url: "/research" },
            { name: "Index", url: "/research/index" },
        ]
    },
    {
        title: "Latest advancements",
        links: [
            { name: "SAGE-2", url: "/research/index/sage-2" },
            { name: "GEM-1o", url: "/research/index/gem-1o" },
        ]
    },
    {
        title: "SIMRIK",
        links: [
            { name: "For Everyone", url: "/for-everyone" },
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
            { name: "Other policies", url: "/other-policies" },
        ]
    }
];


//research page:
export const carouselText = [
    {
      title: "Aligning language models to follow instructions",
      description: "We've trained language models that are lightweight and better at following user intentions than SAGE-i.",
      image: "/research/res1.png",
      link: "/research/index/gem-1o"
    },
    {
      title: "Summarizing books with human feedback",
      description: "We've trained a model to summarize entire books with human feedback.",
      image: "/research/res2.png",
      link: "/research/index/book-gists"
    },
    {
      title: "Language models are few-shot learners",
      description: "We trained SAGE-2, an autoregressive language model with 8 billion parameters.",
      image: "/research/res3.png",
      link: "/research/index/sage-2"
    }
  ];

  export const carouselImage = [
    {
        title: "Aligning language models to follow instructions",
        description: "We've trained language models that are much better at following user intentions than GEM-1o.",
        image: "/research/res1.png",
        link: "/research/index/inst-following"
      },
      {
        title: "Summarizing books with human feedback",
        description: "We've trained a model to summarize entire books with human feedback.",
        image: "/research/res2.png",
        link: "/research/index/book-gists"
      },  
  ]
