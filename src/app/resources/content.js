import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Luis",
  lastName: "Antonio",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desenvolvedor Front-end",
  avatar: "/images/avatar.jpg",
  email: "luissantosfilho2014@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Português", "Inglês"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/luisantoniofilho",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "http://linkedin.com/in/luis-antonio-497180299/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Performance e experiência caminhando juntas.</>,
  featured: {
    display: true,
    title: (
      <>
        Projeto mais recente: <strong className="ml-4">KAYA</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Sou Luis Antonio, desenvolvedor front-end focado em React e Next.js.
      Entrego interfaces rápidas, responsivas e construídas com atenção à
      performance e qualidade.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre mim",
  title: `Sobre – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Sou Luis Antonio, desenvolvedor front-end especializado em React e
        Next.js, focado em transformar desafios complexos em experiências
        digitais. Crio interfaces responsivas, otimizadas para alta performance
        e construídas com boas práticas de código limpo e arquitetura eficiente.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência",
    experiences: [
      {
        company: "Kaya",
        timeframe: "2025 - Present",
        role: "Desenvolvedor front-end",
        achievements: [
          <>
            Desenvolvi uma aplicação web fullstack com Next.js 15 (App Router),
            TypeScript, MongoDB Atlas e NextAuth, permitindo que pessoas e
            empresas anunciem produtos para venda ou doação.
          </>,
          <>
            Modelei e integrei dados com Server Actions e MongoDB Adapter,
            estruturando SSR (Server-side Rendering) e ISR (Incremental Static
            Regeneration) via generateStaticParams e revalidate para otimização
            de performance e SEO.
          </>,
          <>
            Implementei autenticação com login social (Google) e futura
            distinção entre usuários por CPF e CNPJ, com segurança e
            escalabilidade.
          </>,
          <>
            Apliquei validações com Zod e form handling via FormData API,
            garantindo robustez e consistência nos dados
          </>,
          <>
            Estilizei a interface com Tailwind CSS, garantindo responsividade,
            acessibilidade e experiência mobile-first.
          </>,
          <>
            Destaques técnicos: SPA, SSR, ISR, rotas dinâmicas, componentização
            reutilizável, CI/CD com Vercel, controle de cache e boas práticas de
            arquitetura com pastas modulares.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company:
          "LightLife v2 - Plataforma de Planejamento Nutricional (Next.js + TypeScript + Firebase)",
        timeframe: "2025",
        role: "Desenvolvedor front-end",
        achievements: [
          <>
            Desenvolvi a nova versão da aplicação com Next.js 15 (App Router) e
            TypeScript, utilizando Server/Client Components para otimizar SSR,
            SSG e navegação híbrida.
          </>,
          <>
            Implementei autenticação OAuth com Google via NextAuth.js, com
            proteção de rotas e sessões seguras.
          </>,
          <>
            Modelei e validei formulários com Zod, oferecendo tipagem estática e
            feedback de erro em tempo real.
          </>,
          <>
            Integrei a API Spoonacular para gerar automaticamente planos
            alimentares personalizados, usando Server Actions e redirecionamento
            dinâmico.
          </>,
          <>
            Implementei autenticação OAuth com Google via NextAuth.js, com
            proteção de rotas e sessões seguras.Renderizei gráficos interativos
            com Recharts, exibindo a distribuição percentual e calórica de
            macronutrientes com labels e legendas customizadas.
          </>,
          <>
            Persisti os macros do usuário no Firebase Firestore, com ações
            assíncronas e carregamento otimizado via hooks.
          </>,
          <>
            Estilizei toda a interface com Tailwind CSS, aplicando design
            mobile-first, componentização reutilizável e integração com CI/CD
            via Vercel para deploy contínuo.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educação",
    institutions: [
      {
        name: "Fatec Zona Sul",
        description: (
          <>Curso superior, Análise e Desenvolvimento de Sistemas.</>
        ),
      },
      {
        name: "Etec Taboão da Serra",
        description: <>Curso técnico, Desenvolvimento de Sistemas.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Experiência",
  title: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
