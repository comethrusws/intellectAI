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
            { name: "GEM-1o", url: "/research/index/gem-1o" },
            { name: "SAGE-2", url: "/research/index/sage-2" },
            { name: "MUSE", url: "/research/index/muse" },
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
        title: "Layered Image Creation with MUSE",
        description: "We show that MUSE's layered approach to image generation enriches visual complexity and enhances creative expression, all while preserving high standards of photorealism.",
        image: "/research/image/img2.png",
        link: "/research/index/layered-image-creation-w-nova-latents"
      },
      {
        title: "MUSE: Text to Stunning Visuals",
        description: "MUSE converts text into vivid, intricate imagery, capturing complex ideas with striking precision.",
        image: "/research/image/im1.png",
        link: "/research/index/muse"
      },
      {
        title: "NOVA: Bridging Multimodal Data",
        description: "Introducing NOVA, a neural network that seamlessly integrates multimodal data, synthesizing high-quality images by understanding and combining diverse inputs.",
        image: "/research/image/img3.png",
        link: "/research/index/nova"
      },  
  ]

  export const carouselrsrch = [
    {
      title: "Research : Jul 12, 2024",
      description: "NOVA: Neural Optimal Visual Architecture",
      image: "/research/index/index1.png",
      link: "/research/index/nova"
    },
    {
      title: "Research : Jun 12, 2023",
      description: "Solving sudoku with SAGE-2",
      image: "/research/index/index3.png",
      link: "/research/index/solving-sudoku"
    },
    {
      title: "Research : Mar 26, 2023",
      description: "Low-Resource Transfors for Multimodel Architecture",
      image: "/research/index/index2.png",
      link: "/research/index/LRTMA"
    }
  ];
  
