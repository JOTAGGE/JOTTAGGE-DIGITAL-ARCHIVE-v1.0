export type KnowledgePost = {
  slug: string;
  date: string;
  image?: string;
  images?: string[];
  authorId: string; // References id in authors.ts

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
};

export const knowledgePosts: KnowledgePost[] = [

  {
  slug: "bem-vindo-a-jottagge-hub",
  date: "15 de Agosto, 2026",
  image: "/hero.jpg",
  authorId: "jotagge",

  pt: {
    title: "Bem-vindo à JOTAGGE Hub",
    description: "A apresentação da JOTAGGE Hub: um espaço pessoal para reunir projetos, conhecimento, experimentos, pesquisas e tudo aquilo que estou construindo ao longo do caminho.",
    content: [
      "Bem-vindo à JOTAGGE Hub. Este é o meu espaço na internet — um lugar criado para reunir aquilo que estou construindo, aprendendo, pesquisando e explorando. Mais do que um portfólio, a Hub nasceu como um arquivo vivo da minha trajetória: um lugar onde projetos podem ser apresentados, ideias podem ser documentadas, experimentos podem ser testados e conhecimento pode ser transformado em algo que permanece.",

      "Meu nome é José Gabriel. Sou desenvolvedor e criador interessado principalmente na interseção entre software, tecnologia, design e criação. Minha formação é em tecnologia e, neste momento, estou aprofundando minha experiência em desenvolvimento de software e produtos digitais enquanto construo projetos próprios, exploro novas áreas e me preparo para uma próxima etapa acadêmica em Ciência da Computação.",

      "A Hub existe porque eu queria algo que um currículo tradicional, um perfil de rede social ou uma página isolada de portfólio não conseguem oferecer completamente: contexto. Um currículo mostra experiências. Um GitHub mostra código. Um LinkedIn mostra uma trajetória profissional. Mas existe uma parte importante do processo que normalmente desaparece entre uma coisa e outra — as perguntas, os experimentos, as ideias inacabadas, as decisões, os erros, os aprendizados e o caminho que levou até o resultado.",

      "É justamente esse espaço que quero ocupar aqui.",

      "A JOTAGGE Hub é organizada em diferentes áreas, cada uma com uma função própria. Projects reúne trabalhos que saíram do conceito e ganharam alguma forma concreta. Lab é o espaço de experimentação: pequenos projetos, interfaces, sistemas, protótipos, testes, ideias abandonadas e outras coisas que talvez nunca se transformem em produtos, mas que ainda assim fazem parte do processo de criação. Knowledge é onde esta publicação vive — o espaço dedicado a registrar aprendizados, pesquisas, reflexões, descobertas e conhecimento que vale a pena guardar.",

      "Essas áreas não existem para criar uma separação artificial entre partes da minha vida. Na verdade, elas representam diferentes formas de construir. Um projeto pode começar como uma ideia no Lab, virar um experimento, transformar-se em um produto e posteriormente gerar uma publicação no Knowledge. Da mesma maneira, uma pesquisa pode mudar a forma como um projeto é desenvolvido, enquanto um projeto pode revelar uma pergunta que merece ser investigada com mais profundidade.",

      "Por isso, não quero que a Hub seja apenas uma vitrine de resultados perfeitos. Quero que ela registre também o processo. Algumas coisas aqui estarão prontas. Outras estarão em desenvolvimento. Algumas ideias serão abandonadas. Algumas serão reconstruídas completamente. Outras talvez permaneçam pequenas para sempre. Isso não é um problema. Faz parte de construir qualquer coisa de verdade.",

      "Existe uma diferença importante entre parecer que você sabe fazer alguma coisa e realmente construir alguma coisa. Uma lista de tecnologias pode dizer que alguém conhece JavaScript, React, Node.js, bancos de dados ou qualquer outra ferramenta. Mas essas palavras, sozinhas, não mostram como essa pessoa pensa quando não existe uma solução pronta. Não mostram como ela lida com uma decisão difícil de arquitetura, com uma interface que não funciona, com um projeto que cresce além do planejado ou com uma ideia que simplesmente não deu certo.",

      "Construir é uma forma de descobrir essas respostas. Cada projeto cria uma situação diferente. Cada erro acrescenta uma informação. Cada tentativa muda um pouco a maneira como o próximo problema será abordado. É por isso que quero continuar construindo projetos reais, mesmo quando eles são pequenos, experimentais ou imperfeitos.",

      "Nos últimos anos, tecnologia também deixou de ser, para mim, apenas uma área profissional. Ela se tornou uma forma de expressão. Desenvolvimento de software, design, escrita, música, pesquisa e experimentação podem parecer coisas muito diferentes quando observadas isoladamente, mas existe uma característica comum entre todas elas: transformar alguma coisa que existe apenas na cabeça em alguma coisa que pode ser observada, utilizada, discutida ou compartilhada.",

      "É também por isso que alguns projetos presentes aqui não serão necessariamente projetos comerciais ou puramente técnicos. Alguns serão acadêmicos. Alguns serão experimentais. Alguns serão artísticos. Alguns podem ser apenas uma tentativa de entender melhor uma ideia. A Hub não precisa fingir que todas essas coisas são iguais para que elas possam coexistir.",

      "Uma das minhas prioridades nesta nova fase é transformar essa liberdade em consistência. Quero publicar mais, documentar melhor, terminar mais projetos e aprender a comunicar aquilo que estou fazendo. Quero que o código não seja a única evidência do trabalho. Quero que exista também documentação, contexto, decisões e reflexão sobre o processo.",

      "Ao mesmo tempo, estou começando uma preparação mais estruturada para uma possível trajetória acadêmica no mestrado em Ciência da Computação. Isso significa estudar não apenas conteúdo técnico, mas também aprender como a pesquisa funciona: como problemas científicos são formulados, como uma pergunta se transforma em uma investigação, como funciona uma revisão de literatura, como encontrar uma lacuna de pesquisa, como escrever um pré-projeto, como trabalhar com orientadores e grupos de pesquisa e como funciona a própria dinâmica acadêmica.",

      "Essa preparação também terá espaço aqui. O Knowledge não será limitado a tutoriais de programação. Quero utilizá-lo para registrar aquilo que estou aprendendo sobre tecnologia, desenvolvimento, pesquisa, carreira, criação e outros assuntos que façam sentido dentro dessa trajetória.",

      "A Hub também é uma forma de assumir responsabilidade pelo que estou construindo. Em vez de deixar cada projeto espalhado entre repositórios, arquivos locais, plataformas diferentes e posts que desaparecem no feed, quero criar um lugar onde essas coisas possam continuar existindo e evoluindo. Um projeto pode mudar. Uma página pode ser atualizada. Uma ideia pode ser revisitada anos depois. O arquivo continua.",

      "Isso significa que esta primeira publicação também é uma espécie de marco. A Hub ainda está em construção. Algumas áreas serão preenchidas aos poucos. Projetos antigos serão documentados. Novos experimentos aparecerão. Textos serão escritos. Algumas coisas inevitavelmente serão refeitas. O que você está vendo agora não é uma versão final — é o começo de um sistema que pretende crescer junto comigo.",

      "Não sei exatamente onde todos esses caminhos vão terminar. E, sinceramente, não acho que precise saber. Neste momento, o objetivo é mais simples: construir, aprender, registrar e continuar avançando. Transformar ideias em coisas reais. Transformar experiências em conhecimento. E transformar conhecimento em novos projetos.",

      "Se você chegou até aqui, considere esta a primeira página de uma história que ainda está sendo escrita.",

      "Explore os projetos. Entre no Lab. Leia o Knowledge. Veja o que está sendo construído. Volte quando quiser.",

      "Bem-vindo à JOTAGGE Hub."
    ],
    tags: [
      "JOTAGGE",
      "Hub",
      "About",
      "Technology",
      "Software",
      "Design",
      "Research",
      "Projects"
    ]
  },

  en: {
    title: "Welcome to JOTAGGE Hub",
    description: "An introduction to JOTAGGE Hub: a personal space for projects, knowledge, experiments, research, and everything I am building along the way.",
    content: [
      "Welcome to JOTAGGE Hub. This is my space on the internet — a place created to bring together what I am building, learning, researching, and exploring. More than a portfolio, the Hub was created as a living archive of my journey: a place where projects can be presented, ideas can be documented, experiments can be tested, and knowledge can be turned into something that remains.",

      "My name is José Gabriel. I am a developer and creator interested primarily in the intersection of software, technology, design, and creative work. My background is in technology, and right now I am deepening my experience in software development and digital products while building independent projects, exploring new areas, and preparing for a future academic path in Computer Science.",

      "The Hub exists because I wanted something that a traditional résumé, a social media profile, or an isolated portfolio page cannot completely provide: context. A résumé shows experience. GitHub shows code. LinkedIn shows a professional trajectory. But an important part of the process usually disappears between them — the questions, experiments, unfinished ideas, decisions, mistakes, lessons, and the path that led to the final result.",

      "That is the space I want to occupy here.",

      "JOTAGGE Hub is organized into different areas, each with its own purpose. Projects gathers work that moved beyond an idea and took some concrete form. Lab is the experimentation space: small projects, interfaces, systems, prototypes, tests, abandoned ideas, and other things that may never become products but are still part of the creative process. Knowledge is where this publication lives — a space dedicated to documenting learning, research, reflections, discoveries, and knowledge worth keeping.",

      "These areas are not meant to create an artificial separation between different parts of my life. Instead, they represent different ways of building. A project may begin as an idea in the Lab, become an experiment, evolve into a product, and later generate an article in Knowledge. Likewise, research can change the way a project is developed, while a project can reveal a question worth investigating more deeply.",

      "That is why I do not want the Hub to be just a showcase of perfect results. I want it to document the process as well. Some things here will be finished. Others will be in progress. Some ideas will be abandoned. Some will be rebuilt from the ground up. Others may remain small forever. That is not a problem. It is part of building anything for real.",

      "There is an important difference between appearing to know how to do something and actually building something. A list of technologies can say that someone knows JavaScript, React, Node.js, databases, or any other tool. But those words alone do not show how that person thinks when there is no ready-made solution. They do not show how they handle a difficult architectural decision, an interface that does not work, a project that grows beyond its original scope, or an idea that simply failed.",

      "Building is a way of discovering those answers. Every project creates a different situation. Every mistake adds information. Every attempt changes the way the next problem will be approached. That is why I want to keep building real projects, even when they are small, experimental, or imperfect.",

      "Technology has also stopped being, for me, merely a professional field. It has become a form of expression. Software development, design, writing, music, research, and experimentation may look completely different when viewed separately, but they share something fundamental: transforming something that exists only in your head into something that can be observed, used, discussed, or shared.",

      "That is also why some projects found here will not necessarily be commercial or purely technical projects. Some will be academic. Some experimental. Some artistic. Some may simply be attempts to understand an idea better. The Hub does not need to pretend that all these things are the same for them to coexist.",

      "One of my priorities in this new phase is to turn that freedom into consistency. I want to publish more, document better, finish more projects, and learn how to communicate what I am doing. I do not want code to be the only evidence of the work. I also want documentation, context, decisions, and reflection on the process.",

      "At the same time, I am beginning a more structured preparation for a possible academic path in a Computer Science master's program. That means studying not only technical subjects, but also learning how research works: how scientific problems are formulated, how a question becomes an investigation, how literature reviews work, how to identify research gaps, how to write a research proposal, how to work with advisors and research groups, and how academic life itself operates.",

      "That preparation will also have a place here. Knowledge will not be limited to programming tutorials. I want to use it to document what I am learning about technology, development, research, career, creativity, and other subjects that make sense within this journey.",

      "The Hub is also a way of taking responsibility for what I am building. Instead of leaving every project scattered across repositories, local files, different platforms, and posts that disappear from feeds, I want to create a place where these things can continue to exist and evolve. A project can change. A page can be updated. An idea can be revisited years later. The archive remains.",

      "That means this first publication is also a kind of milestone. The Hub is still being built. Some areas will be filled gradually. Older projects will be documented. New experiments will appear. Articles will be written. Some things will inevitably be rebuilt. What you are seeing now is not a final version — it is the beginning of a system intended to grow alongside me.",

      "I do not know exactly where all these paths will lead. And honestly, I do not think I need to know yet. For now, the goal is simpler: build, learn, document, and keep moving forward. Turn ideas into real things. Turn experiences into knowledge. And turn knowledge into new projects.",

      "If you have made it this far, consider this the first page of a story that is still being written.",

      "Explore the projects. Enter the Lab. Read Knowledge. See what is being built. Come back whenever you want.",

      "Welcome to JOTAGGE Hub."
    ],
    tags: [
      "JOTAGGE",
      "Hub",
      "About",
      "Technology",
      "Software",
      "Design",
      "Research",
      "Projects"
    ]
  }
},

// ==========================================

];

/*
// ==========================================
// MODELO PARA NOVO POST NO KNOWLEDGE (KnowledgePost)
// Para adicionar um novo post no knowledge:
// 1. Copie o bloco abaixo (de '{' até '}')
// 2. Cole dentro do array 'knowledgePosts' acima
// 3. Edite os campos e remova a marcação de comentário
//
// 👤 AUTOR / PROPRIETÁRIO:
// - O campo 'authorId' é obrigatório e deve referenciar um id existente no banco de dados de autores (src/data/authors.ts). Exemplo: "jotagge".
//
// ⚠️ SUPORTE A MÚLTIPLAS IMAGENS (CARROSSEL DINÂMICO):
// - O campo 'images' é opcional.
// - Se omitido ou vazio, NENHUM espaço em branco é deixado na tela.
// - Se fornecido, ele gera uma pilha moderna e flutuante de imagens (tilted/stacked effect)
//   que se alinha e levanta no hover. Ao clicar na pilha, abre um carrossel fullscreen.
// ==========================================

{
  slug: "novo-post-slug",
  date: "14 de Agosto, 2026", // Formato sugerido: "DD de Mês, AAAA"
  image: "/imagem-capa.jpg", // Campo opcional para a imagem de capa
  authorId: "jotagge", // Identificador do autor do post (configurado em src/data/authors.ts)

  // Imagens da galeria/carrossel (opcional - adicione as URLs/caminhos das imagens adicionais):
  // images: [
  //   "/imagem-galeria-1.jpg", 
  //   "/imagem-galeria-2.jpg",
  //   "/imagem-galeria-3.jpg"
  // ], 

  pt: {
    title: "Título do Post em Português",
    description: "Uma breve descrição do post em português para SEO e listagens.",
    content: [
      "Primeiro parágrafo do conteúdo do post em português.",
      "Segundo parágrafo do conteúdo do post em português."
    ],
    tags: [
      "Tag 1",
      "Tag 2"
    ]
  },

  en: {
    title: "Post Title in English",
    description: "A brief description of the post in English for SEO and listings.",
    content: [
      "First paragraph of the post content in English.",
      "Second paragraph of the post content in English."
    ],
    tags: [
      "Tag 1",
      "Tag 2"
    ]
  }
},

// ==========================================
*/
