export type LabItem = {
  slug: string;
  pt: {
    title: string;
    description: string;
    content: string[];
    deathReason?: string;
    note?: string;
  };
  en: {
    title: string;
    description: string;
    content: string[];
    deathReason?: string;
    note?: string;
  };
  image?: string;
  images?: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

export type LabExperiment = {
  slug: string;
  pt: {
    title: string;
    description: string;
    tags: string[];
  };
  en: {
    title: string;
    description: string;
    tags: string[];
  };
  items: LabItem[];
};

export const labExperiments: LabExperiment[] = [
  {
    slug: "experiments",
    pt: {
      title: "Experimentos",
      description: "Experimentos práticos, POCs e testes de conceitos tecnológicos.",
      tags: ["IA", "Agentes", "Automação", "LLM"]
    },
    en: {
      title: "Experiments",
      description: "Practical experiments, POCs, and technological concept tests.",
      tags: ["AI", "Agents", "Automation", "LLM"]
    },
    items: [
      
    ]
  },

  // ==========================================

  {
    slug: "interfaces",
    pt: {
      title: "Interfaces",
      description: "Protótipos para testar interação, estética, navegação e experiência.",
      tags: ["UX", "Design", "Figma", "CSS"]
    },
    en: {
      title: "Interfaces",
      description: "Prototypes to test interaction, aesthetics, navigation, and experience.",
      tags: ["UX", "Design", "Figma", "CSS"]
    },
    items: []
  },

  // ==========================================

  {
    slug: "prototypes",
    pt: {
      title: "Protótipos",
      description: "Protótipos interativos desenvolvidos para validação de fluxos e componentes.",
      tags: ["Protótipos", "Interação", "UI/UX"]
    },
    en: {
      title: "Prototypes",
      description: "Interactive prototypes built for flow and component validation.",
      tags: ["Prototypes", "Interaction", "UI/UX"]
    },
    items: []
  },

  // ==========================================

  {
    slug: "systems",
    pt: {
      title: "Sistemas",
      description: "Arquiteturas, APIs, bancos de dados e ideias que ainda estão em construção.",
      tags: ["Backend", "PostgreSQL", "Notion", "Node.js"]
    },
    en: {
      title: "Systems",
      description: "Architectures, APIs, databases, and ideas that are still under construction.",
      tags: ["Backend", "PostgreSQL", "Notion", "Node.js"]
    },
    items: []
  },

  // ==========================================

  {
    slug: "ideas",
    pt: {
      title: "Ideias",
      description: "Conceitos de projetos futuros, rascunhos e wireframes.",
      tags: ["Ideias", "Conceito", "Planejamento"]
    },
    en: {
      title: "Ideas",
      description: "Future project concepts, drafts, and wireframes.",
      tags: ["Ideas", "Concept", "Planning"]
    },
    items: []
  },

  // ==========================================

  {
    slug: "abandoned",
    pt: {
      title: "Ideias abandonadas",
      description: "Projetos que não chegaram ao fim, mas deixaram alguma coisa aprendida.",
      tags: ["Cemitério", "Legado", "Rascunhos"]
    },
    en: {
      title: "Abandoned Ideas",
      description: "Projects that did not finish, but left valuable lessons behind.",
      tags: ["Cemetery", "Legacy", "Drafts"]
    },
    items: []
  },

  // ==========================================

  {
    slug: "research",
    pt: {
      title: "Pesquisas",
      description: "Estudos acadêmicos, análises técnicas e documentações de pesquisa.",
      tags: ["Pesquisa", "Ciência", "Artigo"]
    },
    en: {
      title: "Research",
      description: "Academic studies, technical analyses, and research documentation.",
      tags: ["Research", "Science", "Article"]
    },
    items: []
  }
];

/*
// ==========================================
// MODELO PARA NOVO EXPERIMENTO (LabExperiment)
// Para adicionar uma nova categoria/experimento:
// 1. Copie o bloco abaixo (de '{' até '}')
// 2. Cole dentro do array 'labExperiments' acima
// 3. Edite os campos e remova a marcação de comentário
// ==========================================

{
  slug: "nova-categoria-slug",
  pt: {
    title: "Título da Categoria",
    description: "Descrição sobre o conjunto de experimentos.",
    tags: ["Tag 1", "Tag 2"]
  },
  en: {
    title: "Category Title",
    description: "Description of this set of experiments.",
    tags: ["Tag 1", "Tag 2"]
  },
  items: [
    // Insira os itens (LabItem) aqui dentro (use o modelo de LabItem abaixo)
  ]
},
*/

/*
// ==========================================
// MODELO PARA NOVO ITEM/PROJETO DE LAB (LabItem)
// Para adicionar um novo item dentro da lista 'items' de um experimento:
// 1. Copie o bloco abaixo (de '{' até '}')
// 2. Cole dentro de 'items: [ ... ]' de algum experimento acima
// 3. Edite os campos e remova a marcação de comentário
//
// ⚠️ SUPORTE A MÚLTIPLAS IMAGENS (CARROSSEL DINÂMICO):
// - O campo 'images' é opcional.
// - Se omitido ou vazio, NENHUM espaço em branco é deixado na tela.
// - Se fornecido, ele gera uma pilha moderna e flutuante de imagens (tilted/stacked effect)
//   que se alinha e levanta no hover. Ao clicar na pilha, abre um carrossel fullscreen.
// ==========================================

{
  slug: "novo-item-slug",
  image: "/imagem-capa.jpg", // Campo opcional (remova o '//' se for usar)
  
  // Imagens da galeria/carrossel (opcional - adicione as URLs/caminhos das imagens adicionais):
  // images: [
  //   "/imagem-galeria-1.jpg", 
  //   "/imagem-galeria-2.jpg",
  //   "/imagem-galeria-3.jpg"
  // ],

  pt: {
    title: "Título do Experimento",
    description: "Uma breve descrição do que faz este experimento.",
    content: [
      "Primeiro parágrafo de conteúdo em português.",
      "Segundo parágrafo de conteúdo em português."
    ],
    // deathReason: "Se o projeto foi abandonado/arquivado, coloque o motivo aqui (opcional)",
    // note: "Uma anotação ou observação especial sobre o projeto (opcional)"
  },
  en: {
    title: "Experiment Title",
    description: "A brief description of what this experiment does.",
    content: [
      "First paragraph of content in English.",
      "Second paragraph of content in English."
    ],
    // deathReason: "If the project was abandoned/archived, put the reason here (optional)",
    // note: "A personal note or special observation about the project (optional)"
  },
  links: [
    { label: "GitHub", href: "https://github.com/usuario/projeto" }
  ]
},

// ==========================================
*/
