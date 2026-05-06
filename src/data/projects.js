export const projects = [
  {
    id: "sun-cart",
    title: "SunCart — Modern Responsive eCommerce Platform",
    category: "nextjs",
    image: "https://github.com/user-attachments/assets/e128213a-fbf8-46a8-ace4-46da43f25000",
    description: "A modern, responsive eCommerce demo built with Next.js and Tailwind CSS showcasing summer essentials.",
    fullDescription: "SunCart is a premium eCommerce solution featuring a curated catalogue of summer products. It implements a full shopping flow, including product listing, detailed views, and secure authentication. The platform focuses on a clean aesthetic with smooth animations and a responsive design that works seamlessly across all devices.",
    tech: [
      "Next.js (App Router)",
      "React 19",
      "Tailwind CSS",
      "DaisyUI",
      "BetterAuth",
      "MongoDB",
      "HeroUI",
      "animate.css",
      "react-toastify"
    ],
    contributions: [
      "Implemented secure authentication using BetterAuth with Email/Password and Google Social Login.",
      "Developed a responsive layout with persistent navigation and interactive hero sections.",
      "Created dynamic product detail routes with protected access for authenticated users.",
      "Built a complete user profile management system with real-time updates.",
      "Integrated MongoDB for server-side persistence and user data management."
    ],
    challenges: [
      "Managing complex authentication states across protected routes.",
      "Synchronizing server-side data with client-side UI updates.",
      "Optimizing performance for high-resolution product imagery."
    ],
    improvements: [
      "Integrate Stripe for real-time payment processing.",
      "Implement a robust search and filtering system for the product catalogue.",
      "Add user reviews and rating functionality for products."
    ],
    live: "#",
    github: "#"
  },
  {
    id: "keen-keeper",
    title: "KeenKeeper — Relationship Tracker & CRM",
    category: "nextjs",
    image: "https://github.com/user-attachments/assets/c696737f-d84c-4764-8900-9c39466cf532",
    description: "A relationship tracker built with Next.js to help you maintain and monitor your social connections.",
    fullDescription: "KeenKeeper is a personal CRM designed to help users track their interactions with friends and family. It features a clean dashboard, relationship analytics, and a timeline view of all engagements, ensuring you never lose touch with the people who matter most.",
    tech: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "DaisyUI",
      "Recharts",
      "React Icons",
      "React Toastify"
    ],
    contributions: [
      "Designed a comprehensive friend dashboard with status labels and quick-access profile cards.",
      "Implemented a detailed analytics view using Recharts to visualize interaction patterns.",
      "Created a relationship timeline that organizes historical interactions by type and frequency.",
      "Built individual friend profile pages with customized contact goals and stats.",
      "Integrated quick-check-in actions for calls, texts, and video chats."
    ],
    challenges: [
      "Designing an intuitive data visualization for complex relationship patterns.",
      "Managing state for dynamic contact status labels based on interaction frequency.",
      "Ensuring a smooth, responsive experience on mobile devices for on-the-go tracking."
    ],
    improvements: [
      "Implement automated reminders for contact goals.",
      "Add calendar integration for scheduling follow-ups.",
      "Develop a notes system for detailed interaction logging."
    ],
    live: "#",
    github: "#"
  },
  {
    id: "digitools-platform",
    title: "DigiTools — Premium Digital Assets Marketplace",
    category: "react",
    image: "https://github.com/user-attachments/assets/3837d6e0-b4d0-4a10-86df-3c6c20f96f98",
    description: "A modern marketplace for AI tools, design assets, and productivity software.",
    fullDescription: "DigiTools-Platform is a high-performance eCommerce application built with React and Vite. It provides a seamless discovery and purchasing experience for digital creators, featuring a smart shopping cart, real-time updates, and a mobile-first responsive design.",
    tech: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Lucide React",
      "React-Toastify",
      "Vite"
    ],
    contributions: [
      "Architected a smart shopping cart system with real-time updates and persistent state.",
      "Developed a mobile-first, responsive UI using Tailwind CSS and DaisyUI components.",
      "Built a professional product discovery interface with category tags and detailed feature lists.",
      "Implemented a live cart counter in the navigation bar for immediate user feedback.",
      "Created interactive product cards with visual state management (e.g., 'Selected' status)."
    ],
    challenges: [
      "Managing persistent state for the shopping cart across page navigation.",
      "Ensuring consistent performance and layout across varying screen sizes.",
      "Designing a clean UI that accommodates detailed product descriptions and features."
    ],
    improvements: [
      "Integrate a secure checkout process with multiple payment gateways.",
      "Implement a user dashboard for managing purchased digital downloads.",
      "Add an advanced search and filtering system for large product catalogues."
    ],
    live: "#",
    github: "#"
  },
  {
    id: "github-issues-tracker",
    title: "GitHub Issues Dashboard",
    category: "vanilla",
    image: "https://github.com/user-attachments/assets/0e8a4ee5-1302-4766-8e5f-fd02c27f9c89",
    description: "A clean, responsive issue-tracking dashboard built with vanilla JavaScript.",
    fullDescription: "This GitHub Issues Tracker provides a streamlined interface for managing project issues. It features a secure demo login, real-time issue filtering, search capabilities, and detailed modal views, all powered by a remote API and styled with modern CSS.",
    tech: [
      "HTML5",
      "JavaScript (Vanilla)",
      "Tailwind CSS 4",
      "Remix Icon",
      "DaisyUI"
    ],
    contributions: [
      "Developed a custom login system with secure-style demo credentials.",
      "Built a dynamic issue grid that fetches and displays data from a remote API.",
      "Implemented real-time filtering (All, Open, Closed) and keyword search functionality.",
      "Designed a responsive detail modal for viewing comprehensive issue information.",
      "Created a robust loading state with spinners for improved user experience during API calls."
    ],
    challenges: [
      "Managing asynchronous API requests with vanilla JavaScript.",
      "Implementing efficient search and filtering logic on the client side.",
      "Ensuring responsive layout transitions between the login screen and dashboard."
    ],
    improvements: [
      "Add functionality to create and edit issues via the API.",
      "Implement persistent authentication using local storage or cookies.",
      "Add a sorting system for issues by date, priority, or labels."
    ],
    live: "#",
    github: "#"
  },
  {
    id: "job-application-tracker",
    title: "JobQuest — Job Application Tracking Board",
    category: "vanilla",
    image: "https://github.com/user-attachments/assets/ebf3866e-0fc1-467a-a106-9d162fab5389",
    description: "A responsive tracking board to manage and organize job applications.",
    fullDescription: "JobQuest is a lightweight tool for job seekers to track their application progress. It allows users to manage application cards, update statuses (Interview, Rejected), and filter their board to focus on specific application stages, providing clear visibility into their job search.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS v4"
    ],
    contributions: [
      "Developed a responsive job board with interactive cards for company and role details.",
      "Implemented a status tracking system to mark applications as 'Interview' or 'Rejected'.",
      "Built real-time filters and live counters for different application stages.",
      "Created a dynamic empty state view for filtered results with no matches.",
      "Integrated a removal system to manage and prune the application board."
    ],
    challenges: [
      "Building a dynamic UI with vanilla DOM manipulation.",
      "Synchronizing live counters with filtered view states.",
      "Maintaining a clean and organized layout for multiple application cards."
    ],
    improvements: [
      "Add a form to allow users to add custom job applications.",
      "Implement local storage to persist application data between sessions.",
      "Add a notes feature for each job application card."
    ],
    live: "#",
    github: "#"
  }
];
