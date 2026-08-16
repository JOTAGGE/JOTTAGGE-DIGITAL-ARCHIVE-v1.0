export type Author = {
  id: string;
  name: string;
  avatar: string;
  link?: string; // External profile link (LinkedIn, GitHub, personal portfolio, etc.)
  pt: {
    role: string;
    bio: string;
  };
  en: {
    role: string;
    bio: string;
  };
};

export const authors: Author[] = [
  {
    id: "jotagge",
    name: "José Gabriel",
    avatar: "/hero.jpg",
    link: "http://www.linkedin.com/in/jos%C3%A9-gabriel-a02125234",
    pt: {
      role: "Criador & Desenvolvedor",
      bio: "Desenvolvedor de software focado em criar produtos, interfaces modernas e experiências interativas de design minimalista."
    },
    en: {
      role: "Creator & Developer",
      bio: "Software developer focused on building products, modern interfaces, and interactive experiences with a minimalist design."
    }
  }
];

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find((author) => author.id === id);
};
