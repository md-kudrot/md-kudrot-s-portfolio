export const projects = [
  {
    id: "solis",
    title: "Solis — Premium Men's Seasonal Essentials E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000",
    description: "A premium e-commerce platform built for seasonal men's fashion.",
    fullDescription: "Solis is a high-end e-commerce solution designed to provide a seamless shopping experience for men's seasonal essentials. The platform emphasizes minimalism, speed, and a premium aesthetic to align with the luxury brand's identity. Built with Next.js and MongoDB, it offers robust performance and scalable data management.",
    tech: ["Next.js", "React.js", "MongoDB", "Tailwind", "Framer Motion"],
    contributions: [
      "Built a secure authentication system using JWT and session management.",
      "Created a highly responsive and fluid UI with Tailwind CSS and Framer Motion.",
      "Integrated MongoDB for dynamic product management and user order history.",
      "Optimized site performance for fast image rendering and SEO."
    ],
    challenges: [
      "Handling authentication securely across client and server components.",
      "Managing complex state for the shopping cart and checkout process.",
      "Ensuring consistent design across various screen sizes and devices."
    ],
    improvements: [
      "Add a complete Stripe payment system for production use.",
      "Implement real-time inventory tracking and notifications.",
      "Integrate an AI-powered size recommendation engine."
    ],
    live: "#",
    github: "#"
  },
  {
    id: "daily-news",
    title: "Daily News — Real-Time Global Information Hub",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000",
    description: "A fast, modern news aggregator and publishing platform.",
    fullDescription: "Daily News is a modern news platform that aggregates global stories and provides a space for independent journalism. It focuses on readability, accessibility, and real-time updates to keep users informed about world events as they happen.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
    contributions: [
      "Developed the real-time news feed using WebSockets.",
      "Implemented a comprehensive search and filtering system for articles.",
      "Created a dashboard for journalists to manage their publications.",
      "Designed an accessible reader mode for enhanced user experience."
    ],
    challenges: [
      "Maintaining high performance under heavy traffic loads.",
      "Implementing efficient data indexing for fast search results.",
      "Ensuring consistent layout across different types of news content."
    ],
    improvements: [
      "Add support for multimedia content like podcasts and video news.",
      "Implement a personalized news feed based on user interests.",
      "Integrate social sharing features with deep linking."
    ],
    live: "#",
    github: "#"
  }
];
