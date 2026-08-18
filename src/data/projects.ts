export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  image: string;
  images?: string[];
  featuredInResume?: boolean;

  pt: {
    title: string;
    description: string;
    content: string[];
    tags: string[];
  };

  en: {
    title: string;
    description: string;
    content: string[];
    tags: string[];
  };

  links: ProjectLink[];
};

export const projects: Project[] = [

  {
    slug: "kos",
  image: "/kos.png",

  // Imagens da galeria/carrossel:
  images: [
     "/kos-dashboard.png",
     "/kos-domain.png",
     "/kos-question.png",
     "/kos-blue.png"
   ],


  featuredInResume: true,

  pt: {
    title: "KOS — Knowledge Operating System",
    description: "Um sistema de aprendizagem baseado em recuperação ativa, organização do conhecimento e inteligência artificial.",

    content: [
      "O KOS nasceu da transformação do meu próprio método de estudos em um sistema independente do Notion. A estrutura organiza o conhecimento em Domains, Lessons, Modules e Questions, tendo a Question como unidade central do processo de aprendizagem.",

      "O sistema utiliza Cycles para organizar o estudo e Sessions para transformar Questions em momentos concretos de aprendizagem. A proposta é permitir que qualquer pessoa construa sua própria estrutura de conhecimento, sobre qualquer assunto, enquanto acompanha visualmente seu progresso.",

      "A Blue, inteligência artificial do KOS, amplia o método ao ajudar o usuário a descobrir o que quer aprender, estruturar Domains, Lessons e Modules, gerar Questions, fornecer feedback sobre respostas e recomendar próximos passos com base no progresso real.",

      "O projeto também funciona como um laboratório para explorar a criação de produtos digitais, sistemas de aprendizagem e aplicações de inteligência artificial, transformando um método pessoal em uma experiência que pode ser utilizada por outras pessoas."
    ],

    tags: [
      "AI",
      "EdTech",
      "Learning",
      "React",
      "TypeScript",
      "Firebase",
      "Gemini",
      "Product Design"
    ]
  },

  en: {
    title: "KOS — Knowledge Operating System",
    description: "A learning system built around active recall, knowledge organization, and artificial intelligence.",

    content: [
      "KOS began as an attempt to transform my own study method into a system independent from Notion. Its structure organizes knowledge into Domains, Lessons, Modules, and Questions, with the Question serving as the central unit of the learning process.",

      "The system uses Cycles to organize learning and Sessions to turn Questions into concrete study experiences. The goal is to allow anyone to build their own knowledge structure around virtually any subject while maintaining a visible understanding of their progress.",

      "Blue, KOS's artificial intelligence, extends the method by helping users discover what they want to learn, structure Domains, Lessons, and Modules, generate Questions, provide feedback on answers, and recommend next steps based on their actual learning progress.",

      "The project also serves as a laboratory for exploring digital product development, learning systems, and artificial intelligence applications, turning a personal method into an experience that can be used by other people."
    ],

    tags: [
      "AI",
      "EdTech",
      "Learning",
      "React",
      "TypeScript",
      "Firebase",
      "Gemini",
      "Product Design"
    ]
  },

  links: [
    {
      label: "Website",
      href: "https://kos-study.web.app/"
    },
    {
      label: "GitHub",
      href: "https://github.com/JOTAGGE/KOS-app"
    }
  ]
},
// ==========================================

{
  slug: "NOMA",
  image: "/nomacar.png",
  featuredInResume: true,
  pt: {
    title: "NOMA",
    description: "Uma marca de serviços digitais criada pela Blue Lab para transformar necessidades de negócios em soluções digitais.",
    content: [
      "NOMA é uma marca da Blue Lab dedicada à criação de soluções digitais para pessoas, profissionais e empresas. A proposta é unir design, tecnologia e estratégia para transformar problemas reais em produtos e experiências digitais funcionais.",
      "O projeto envolve a construção da identidade da NOMA e de sua presença digital, com uma arquitetura moderna, modular e de fácil manutenção. O site funciona como a base da operação da marca, apresentando seus serviços, soluções e projetos de forma clara e visualmente marcante."
    ],
    tags: [
      "Web Design",
      "Frontend",
      "UI/UX",
      "Digital Services",
      "Branding"
    ]
  },
  en: {
    title: "NOMA",
    description: "A digital services brand by Blue Lab focused on turning business needs into digital solutions.",
    content: [
      "NOMA is a Blue Lab brand dedicated to creating digital solutions for individuals, professionals, and businesses. Its approach combines design, technology, and strategy to transform real-world problems into functional digital products and experiences.",
      "O projeto envolve a construção da identidade da NOMA e de sua presença digital, com uma arquitetura moderna, modular e de fácil manutenção. O site funciona como a base da operação da marca, apresentando seus serviços, soluções e projetos de forma clara e visualmente marcante."
    ],
    tags: [
      "Web Design",
      "Frontend",
      "UI/UX",
      "Digital Services",
      "Branding"
    ]
  },
  links: [
    {
      label: "GitHub",
      href: "https://github.com/JOTAGGE/NOMA-SITE"
    },
    {
      label: "Live Site",
      href: "https://nomaproject.vercel.app"
    }
  ]
},

// ==========================================

{
  slug: "BLUE-LAB",
  image: "/bluelabcircle.png",
  featuredInResume: true,
  pt: {
    title: "Blue Lab",
    description: "Laboratório de tecnologia e inovação dedicado à criação de produtos, experiências e soluções digitais.",
    content: [
      "Blue Lab é um laboratório de tecnologia criado para transformar ideias em produtos e experiências digitais. O projeto reúne desenvolvimento, design e experimentação em um ecossistema pensado para explorar novas formas de usar a tecnologia para resolver problemas reais.",
      "O site foi desenvolvido como a presença digital da Blue Lab, com uma linguagem visual própria e uma arquitetura modular, moderna e de fácil manutenção. Além de apresentar o laboratório, a plataforma funciona como uma base para seus projetos, produtos e iniciativas futuras."
    ],
    tags: [
      "Web Design",
      "Frontend",
      "UI/UX",
      "Technology",
      "Innovation"
    ]
  },
  en: {
    title: "Blue Lab",
    description: "A technology and innovation lab focused on creating digital products, experiences, and solutions.",
    content: [
      "Blue Lab is a technology laboratory created to turn ideas into digital products and experiences. The project brings together development, design, and experimentation in an ecosystem focused on exploring new ways of using technology to solve real-world problems.",
      "The website was developed as Blue Lab's digital presence, featuring its own visual language and a modern, modular, and easy-to-maintain architecture. Beyond presenting the laboratory, the platform serves as a foundation for its future projects, products, and initiatives."
    ],
    tags: [
      "Web Design",
      "Frontend",
      "UI/UX",
      "Technology",
      "Innovation"
    ]
  },
  links: [
    {
      label: "GitHub",
      href: "https://github.com/JOTAGGE/BLUELAB-SITE"
    },
    {
      label: "Live Site",
      href: "https://bluelabproject.vercel.app"
    }
  ]
},

// ==========================================

{
    slug: "site-germana-barros",
    image: "/sitegermanabarros.jpg",

    pt: {
      title: "Site Germana Barros",
      description:
        "Website institucional desenvolvido para presença digital profissional.",

      content: [
        "Projeto de website institucional desenvolvido para estabelecer uma presença digital profissional.",
        "O foco foi criar uma experiência simples, clara e adequada à apresentação das informações e serviços da cliente.",
        "O projeto representa uma aplicação prática dos conhecimentos de desenvolvimento web em uma necessidade real.",
      ],

      tags: [
        "Web Design",
        "Site Institucional",
      ],
    },

    en: {
      title: "Germana Barros Website",
      description:
        "An institutional website developed for a professional digital presence.",

      content: [
        "An institutional website developed to establish a professional digital presence.",
        "The focus was creating a simple, clear experience suitable for presenting the client's information and services.",
        "The project represents a practical application of web development knowledge to a real-world need.",
      ],

      tags: [
        "Web Design",
        "Institutional Website",
      ],
    },

    links: [
      {
        label: "Published project",
        href: "https://sites.google.com/view/germana-barros/menu/",
      },
    ],
  },

// ==========================================

{
  slug: "KRATOS",
  image: "/kratos-mockup.png",
  featuredInResume: true,
  pt: {
    title: "Kratos",
    description: "Aplicativo de treino em desenvolvimento, criado para explorar uma experiência digital de acompanhamento e organização fitness.",
    content: [
      "Kratos é um aplicativo de treino desenvolvido em Flutter como uma exploração pessoal de desenvolvimento mobile. O projeto busca construir uma experiência centralizada para acompanhamento de atividades físicas, combinando uma interface própria com recursos de dados, autenticação e integração com informações relacionadas à saúde.",
      "A base técnica utiliza Flutter e integra serviços do Firebase para autenticação, armazenamento e gerenciamento de dados. O projeto também explora gráficos com FL Chart, cronômetros, integração com dados de saúde do dispositivo, autenticação por diferentes provedores e uma camada visual construída com Google Fonts e componentes próprios. Atualmente, Kratos está em desenvolvimento e funciona também como um laboratório para experimentar desenvolvimento mobile, arquitetura de aplicativos e preparação de uma aplicação para distribuição."
    ],
    tags: [
      "Flutter",
      "Dart",
      "Mobile",
      "Firebase",
      "Fitness",
      "Health Tech"
    ]
  },
  en: {
    title: "Kratos",
    description: "A fitness application in development, created to explore a digital experience for workout tracking and organization.",
    content: [
      "Kratos is a fitness application being developed with Flutter as a personal exploration of mobile development. The project aims to build a centralized experience for organizing and tracking physical activities while combining a custom interface with data, authentication, and health-related integrations.",
      "Its technical foundation uses Flutter alongside Firebase services for authentication, storage, and data management. The project also explores data visualization with FL Chart, timers, device health data integration, multiple authentication providers, and a custom visual layer built with Google Fonts and native Flutter components. Kratos is currently under development and also serves as a laboratory for exploring mobile architecture, application development, and the process of preparing software for distribution."
    ],
    tags: [
      "Flutter",
      "Dart",
      "Mobile",
      "Firebase",
      "Fitness",
      "Health Tech"
    ]
  },
  links: [
    {
      label: "GitHub",
      href: "https://github.com/JOTAGGE/KRATOS"
    }
  ]
},

// ==========================================

{
    slug: "metrica",
    image: "/metrica.jpg",

    pt: {
      title: "Metrica",
      description:
        "Sistema fullstack focado em organização e análise de métricas, integrando backend em Node.js com frontend em React e banco PostgreSQL.",

      content: [
        "Metrica é um projeto voltado para organização, acompanhamento e análise de informações por meio de uma aplicação web completa.",
        "O projeto envolve uma arquitetura fullstack, conectando uma interface desenvolvida em React a uma API em Node.js e a uma base de dados PostgreSQL.",
        "A proposta é explorar a construção de um sistema completo, desde a experiência de utilização até a organização dos dados e comunicação entre as diferentes camadas da aplicação.",
      ],

      tags: [
        "Fullstack",
        "Node.js",
        "React",
        "PostgreSQL",
        "API REST",
      ],
    },

    en: {
      title: "Metrica",
      description:
        "A fullstack system focused on organizing and analyzing metrics, integrating a Node.js backend with a React frontend and PostgreSQL database.",

      content: [
        "Metrica is a project focused on organizing, tracking, and analyzing information through a complete web application.",
        "The project uses a fullstack architecture connecting a React interface to a Node.js API and a PostgreSQL database.",
        "The goal is to explore the construction of a complete system, from user experience to data organization and communication between different application layers.",
      ],

      tags: [
        "Fullstack",
        "Node.js",
        "React",
        "PostgreSQL",
        "REST API",
      ],
    },

    links: [
      {
        label: "GitHub",
        href: "https://github.com/JOTAGGE/Metrica",
      },
    ],
  },

// ==========================================

{
  slug: "EQUIPE-GLASGOW-PDM",
  image: "/glasgow.png",
  featuredInResume: true,
  pt: {
    title: "Equipe Glasgow",
    description: "Aplicativo móvel de gerenciamento de equipes, projetos e tarefas desenvolvido como projeto final de Programação Para Dispositivos.",
    content: [
      "Equipe Glasgow é um aplicativo móvel desenvolvido para facilitar a organização e o gerenciamento de equipes. A aplicação permite cadastrar, visualizar, editar e remover membros, além de relacioná-los a projetos e tarefas específicas, criando uma visão centralizada sobre quem está trabalhando em quê.",
      "O projeto foi desenvolvido com React Native e Expo no aplicativo e Node.js com Express no backend. A arquitetura utiliza uma API REST para comunicação entre as camadas, gerenciamento de estado com Zustand e requisições HTTP com Axios. Também foi integrada a API do Google Gemini para geração de descrições profissionais das funções dos membros da equipe. O backend atualmente mantém os dados em memória, tornando o projeto também uma exploração das decisões e limitações de uma arquitetura full-stack móvel."
    ],
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "Google Gemini",
      "Mobile"
    ]
  },
  en: {
    title: "Glasgow Team",
    description: "A mobile team management application for organizing members, projects, and tasks, developed as a final Programming for Devices project.",
    content: [
      "Glasgow Team is a mobile application designed to simplify team organization and management. It allows users to create, view, update, and remove team members while connecting them to specific projects and tasks, providing a centralized view of team responsibilities.",
      "The project was developed with React Native and Expo on the mobile side and Node.js with Express on the backend. Its architecture uses a REST API for communication between the layers, Zustand for state management, and Axios for HTTP requests. The project also integrates the Google Gemini API to generate professional descriptions for team roles. The backend currently stores data in memory, making the project an exploration of both mobile full-stack architecture and its practical trade-offs."
    ],
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "Google Gemini",
      "Mobile"
    ]
  },
  links: [
    {
      label: "GitHub",
      href: "https://github.com/JOTAGGE/Equipe-Glasgow-PDM"
    }
  ]
},

// ==========================================

{
    slug: "blue-board",
    image: "/blueboard.jpg",

    pt: {
      title: "Blue Board",
      description:
        "Projeto fullstack de organização e produtividade com autenticação e integração entre frontend e backend.",

      content: [
        "Blue Board é um projeto de produtividade desenvolvido para explorar a construção de uma aplicação web completa.",
        "A aplicação integra frontend e backend, incluindo autenticação, organização de informações e comunicação com banco de dados.",
        "O projeto também serviu como laboratório para experimentar arquitetura de aplicações e integração entre diferentes tecnologias.",
      ],

      tags: [
        "Fullstack",
        "React",
        "Node.js",
        "Prisma",
        "PostgreSQL",
      ],
    },

    en: {
      title: "Blue Board",
      description:
        "A fullstack productivity and organization project with authentication and frontend/backend integration.",

      content: [
        "Blue Board is a productivity project created to explore the development of a complete web application.",
        "The application integrates frontend and backend components, including authentication, information organization, and database communication.",
        "The project also served as a laboratory for experimenting with application architecture and the integration of different technologies.",
      ],

      tags: [
        "Fullstack",
        "React",
        "Node.js",
        "Prisma",
        "PostgreSQL",
      ],
    },

    links: [
      {
        label: "GitHub",
        href: "https://github.com/JOTAGGE/BlueBoard",
      },
    ],
  },

// ==========================================

{
    slug: "blue-ia",
    image: "/blueia.jpg",

    pt: {
      title: "Blue IA",
      description:
        "Projeto experimental envolvendo assistente digital e conceitos de inteligência artificial aplicada.",

      content: [
        "Blue IA é um projeto experimental dedicado à exploração de assistentes digitais e aplicações de inteligência artificial.",
        "O projeto busca investigar como diferentes componentes de software podem ser combinados para criar experiências de interação mais inteligentes e úteis.",
      ],

      tags: [
        "IA",
        "Node.js",
        "Arquitetura de Sistemas",
        "Conceito",
      ],
    },

    en: {
      title: "Blue IA",
      description:
        "An experimental project involving a digital assistant and concepts of applied artificial intelligence.",

      content: [
        "Blue IA is an experimental project focused on exploring digital assistants and applications of artificial intelligence.",
        "The project investigates how different software components can be combined to create smarter and more useful interaction experiences.",
      ],

      tags: [
        "AI",
        "Node.js",
        "Systems Architecture",
      ],
    },

    links: [
      {
        label: "GitHub",
        href: "https://github.com/JOTAGGE/Blue-ia",
      },
    ],
  },

// ==========================================

{
  slug: "AORTA-I-THE-CROSS",
  image: "/AORTAI-THECROSS.jpg",
  pt: {
    title: "AORTA I: THE CROSS",
    description: "Álbum de rap alternativo construído a partir de dor, isolamento, raiva, crise espiritual e conflito com a própria existência.",
    content: [
      "AORTA I: THE CROSS é um projeto musical de rap alternativo que transforma conflito interno em narrativa. O álbum atravessa sentimentos de solidão, raiva, desesperança e autodestruição enquanto confronta questões de identidade, propósito, religião e a dificuldade de encontrar esperança em meio ao caos.",
      "Dividido em uma sequência de atmosferas que vão do sonho e da angústia ao ódio, caos, questionamento espiritual e tempestade, o projeto utiliza imagens religiosas, violência simbólica e referências culturais para construir um retrato deliberadamente desconfortável de uma mente em conflito. THE CROSS funciona como o centro conceitual da obra: uma reflexão sobre fé, sofrimento, livre-arbítrio e a busca por algum significado quando todas as respostas parecem insuficientes."
    ],
    tags: [
      "Alternative Rap",
      "Hip-Hop",
      "Concept Album",
      "Experimental",
      "Dark"
    ]
  },
  en: {
    title: "AORTA I: THE CROSS",
    description: "An alternative rap album shaped by pain, isolation, anger, spiritual crisis, and conflict with existence itself.",
    content: [
      "AORTA I: THE CROSS is an alternative rap project that turns inner conflict into narrative. The album moves through loneliness, anger, despair, and self-destruction while confronting questions of identity, purpose, religion, and the difficulty of finding hope in the middle of chaos.",
      "Structured around shifting atmospheres that move from dreams and anguish into hatred, chaos, spiritual questioning, and storm, the project uses religious imagery, symbolic violence, and cultural references to create a deliberately unsettling portrait of a mind in conflict. THE CROSS stands at the conceptual center of the record: a reflection on faith, suffering, free will, and the search for meaning when every answer seems insufficient."
    ],
    tags: [
      "Alternative Rap",
      "Hip-Hop",
      "Concept Album",
      "Experimental",
      "Dark"
    ]
  },
  links: []
},

// ==========================================

{
  slug: "HEAVY-SICK-ANGRY-SUICIDAL",
  image: "/HSAS.jpg",
  pt: {
    title: "HEAVY SICK ANGRY SUICIDAL",
    description: "Primeiro álbum autoral de rap alternativo, transformando isolamento, raiva, sofrimento e ambição artística em uma experiência visceral.",
    content: [
      "HEAVY SICK ANGRY SUICIDAL é um projeto de rap alternativo construído como um retrato cru de uma mente em conflito. O álbum mistura solidão, depressão, raiva, falta de pertencimento, pressão social, dificuldades financeiras e o desejo de transformar tudo isso em música. Em vez de esconder suas contradições, o projeto faz delas parte central de sua identidade.",
      "O álbum também representa o início de uma trajetória artística. Entre experimentação, referências ao hip-hop alternativo, crítica à sociedade, questionamentos religiosos e momentos de extrema vulnerabilidade, HSAS funciona como um registro de uma fase específica da vida e como uma tentativa de transformar sentimentos difíceis em criação. É um projeto sobre estar perdido, querer ser ouvido e continuar tentando criar mesmo quando parece não haver espaço para isso."
    ],
    tags: [
      "Alternative Rap",
      "Hip-Hop",
      "Experimental",
      "Concept Album",
      "Debut"
    ]
  },
  en: {
    title: "HEAVY SICK ANGRY SUICIDAL",
    description: "A debut alternative rap album turning isolation, anger, pain, and artistic ambition into a visceral experience.",
    content: [
      "HEAVY SICK ANGRY SUICIDAL is an alternative rap project built as a raw portrait of a mind in conflict. The album blends loneliness, depression, anger, alienation, social pressure, financial struggle, and the desire to turn all of it into music. Rather than hiding its contradictions, the project makes them a central part of its identity.",
      "The album also represents the beginning of an artistic journey. Through experimentation, alternative hip-hop influences, social criticism, religious questioning, and moments of extreme vulnerability, HSAS works as a snapshot of a specific period of life and an attempt to transform difficult emotions into creation. It is a project about feeling lost, wanting to be heard, and continuing to create even when there seems to be no place for it."
    ],
    tags: [
      "Alternative Rap",
      "Hip-Hop",
      "Experimental",
      "Concept Album",
      "Debut"
    ]
  },
  links: [
    {
      label: "Spotify",
      href: "https://open.spotify.com/intl-pt/album/559IpUo3vnb67Sl7AZdW09?si=kSMI4wPvTLyQ1NY5O79svg"
    }
  ]
},

// ==========================================

{
  slug: "NEVER-FORGIVE-NEVER-FORGET",
  image: "/nfnf.jpg",
  pt: {
    title: "NEVER FORGIVE NEVER FORGET",
    description: "Álbum de rap alternativo sobre isolamento, raiva, memória, sobrevivência e a tentativa de transformar dor em música.",
    content: [
      "NEVER FORGIVE NEVER FORGET é um projeto musical construído a partir de experiências, pensamentos e contradições de uma pessoa tentando encontrar seu lugar no mundo. O álbum atravessa solidão, alienação, relacionamentos, dinheiro, pobreza, ressentimento, fantasia e a sensação de estar desconectado das pessoas ao redor.",
      "Mais do que um registro de sofrimento, o projeto funciona como um arquivo emocional de uma época. Entre agressividade, humor absurdo, crítica social e momentos de vulnerabilidade, as músicas transformam conflitos pessoais em uma linguagem própria. O título representa a tensão central do álbum: carregar o passado, lembrar das feridas e, ao mesmo tempo, tentar seguir em frente."
    ],
    tags: [
      "Alternative Rap",
      "Hip-Hop",
      "Experimental",
      "Lo-Fi",
      "Personal"
    ]
  },
  en: {
    title: "NEVER FORGIVE NEVER FORGET",
    description: "An alternative rap album about isolation, anger, memory, survival, and turning pain into music.",
    content: [
      "NEVER FORGIVE NEVER FORGET is a musical project built from the experiences, thoughts, and contradictions of someone trying to find their place in the world. The album moves through loneliness, alienation, relationships, money, poverty, resentment, fantasy, and the feeling of being disconnected from the people around them.",
      "More than a record of suffering, the project works as an emotional archive of a specific period. Through aggression, absurd humor, social criticism, and moments of vulnerability, the songs turn personal conflicts into a language of their own. The title represents the album's central tension: carrying the past, remembering its wounds, and still trying to move forward."
    ],
    tags: [
      "Alternative Rap",
      "Hip-Hop",
      "Experimental",
      "Lo-Fi",
      "Personal"
    ]
  },
  links: []
},

// ==========================================

{
    slug: "mundo-dominado",
    image: "/mundodominado.jpg",

    pt: {
      title: "Mundo Dominado",
      description:
        "Obra literária autoral publicada, explorando narrativa de ficção e construção de universo.",

      content: [
        "Mundo Dominado é uma obra literária autoral construída a partir de uma proposta de ficção e construção de universo.",
        "O projeto representa uma das dimensões criativas do meu trabalho, explorando narrativa, personagens, ambientação e desenvolvimento de uma identidade própria.",
      ],

      tags: [
        "Livro",
        "Ficção",
        "Autor Independente",
      ],
    },

    en: {
      title: "Mundo Dominado",
      description:
        "An independently published literary work exploring fictional storytelling and worldbuilding.",

      content: [
        "Mundo Dominado is an independent literary work built around a fictional storytelling and worldbuilding concept.",
        "The project represents one of the creative dimensions of my work, exploring narrative, characters, atmosphere, and the development of an original identity.",
      ],

      tags: [
        "Book",
        "Fiction",
        "Independent Author",
      ],
    },

    links: [
      {
        label: "Amazon",
        href: "https://amazon.com/",
      },
    ],
  },

// ==========================================

{
  slug: "SAM",
  image: "/Sam.png",
  pt: {
    title: "Sam",
    description: "Primeiro projeto de escrita autoral, uma narrativa íntima sobre decisão, deslocamento, despedida e as consequências de uma escolha irreversível.",
    content: [
      "Sam é um projeto literário construído em torno de um personagem que atravessa os últimos momentos de sua vida enquanto o leitor acompanha sua percepção do mundo, suas relações e os acontecimentos que o conduzem até uma decisão definitiva.",
      "A narrativa é dividida em três atos e combina viagem, introspecção e drama psicológico para explorar temas como solidão, finitude, vínculos humanos e a maneira como uma pessoa pode enxergar a própria existência quando acredita ter chegado ao fim do caminho. Grande parte da história permanece deliberadamente em segredo para preservar a experiência do leitor."
    ],
    tags: [
      "Literatura",
      "Ficção",
      "Drama",
      "Psicológico",
      "Escrita Autoral"
    ]
  },
  en: {
    title: "Sam",
    description: "A first original writing project exploring decision, displacement, farewell, and the consequences of an irreversible choice.",
    content: [
      "Sam is a literary project centered on a character who moves through the final moments of his life while the reader follows his perception of the world, his relationships, and the events that lead him toward a definitive decision.",
      "The story is divided into three acts and combines travel, introspection, and psychological drama to explore themes such as loneliness, mortality, human connection, and the way a person may perceive their own existence when they believe they have reached the end of the road. Much of the story remains deliberately secret to preserve the reader's experience."
    ],
    tags: [
      "Literature",
      "Fiction",
      "Drama",
      "Psychological",
      "Original Writing"
    ]
  },
  links: [
    {
        label: "Amazon",
        href: "https://amazon.com/",
      },
  ]
},
];

/*
// ==========================================
// MODELO PARA NOVO PROJETO (Project)
// Para adicionar um novo projeto:
// 1. Copie o bloco abaixo (de '{' até '}')
// 2. Cole dentro do array 'projects' acima
// 3. Edite os campos e remova a marcação de comentário
//
// ⚠️ SUPORTE A MÚLTIPLAS IMAGENS (CARROSSEL DINÂMICO):
// - O campo 'images' é opcional.
// - Se omitido ou vazio, NENHUM espaço em branco é deixado na tela.
// - Se fornecido, ele gera uma pilha moderna e flutuante de imagens (tilted/stacked effect)
//   que se alinha e levanta no hover. Ao clicar na pilha, abre um carrossel fullscreen.
// ==========================================

{
  slug: "novo-projeto-slug",
  image: "/nome-da-imagem.jpg", // Imagem de capa principal (exibida no header)
  
  // Imagens da galeria/carrossel (opcional - adicione as URLs/caminhos das imagens adicionais):
  // images: [
  //   "/imagem-galeria-1.jpg", 
  //   "/imagem-galeria-2.jpg",
  //   "/imagem-galeria-3.jpg"
  // ], 

  // featuredInResume: true, // Opcional (exibir no currículo)

  pt: {
    title: "Título do Projeto",
    description: "Breve descrição do projeto em português.",
    content: [
      "Primeiro parágrafo sobre o projeto em português.",
      "Segundo parágrafo sobre o projeto em português."
    ],
    tags: [
      "Tag 1",
      "Tag 2"
    ]
  },

  en: {
    title: "Project Title",
    description: "Brief description of the project in English.",
    content: [
      "First paragraph about the project in English.",
      "Second paragraph about the project in English."
    ],
    tags: [
      "Tag 1",
      "Tag 2"
    ]
  },

  links: [
    {
      label: "GitHub",
      href: "https://github.com/usuario/projeto"
    }
  ]
},

// ==========================================
*/