# Relatório de Atividades JOTTAGGE-HUB

**Data:** 01 de Março de 2026
**Projeto:** `JOTTAGGE-HUB` (Portfólio Pessoal em Next.js)

## 🎯 Objetivo Principal
Configurar o repositório Git, implementar suporte bilíngue, adicionar "Easter Eggs" e aprimorar a segurança e responsividade do portfólio.

---

## 🛠️ O que foi construído ou ajustado hoje:

### 1. Resolução do Problema com Git
* **Problema Original:** O VS Code exibia "milhões de alterações" pois o repositório principal do Windows (`C:\Users\jgbar`) havia sido inicializado com Git em vez da pasta do projeto.
* **Resolução:** Instruções fornecidas para exclusão segura do repositório mãe acidental e navegação via terminal para o diretório correto do projeto `jotagge-hub`, onde o repositório do Github (`https://github.com/JOTAGGE/JOTTAGGE-HUB.git`) já estava perfeitamente linkado e atualizado.

### 2. Implementação Dual-Language (React Context)
* O site ganhou suporte instantâneo para alteração entre **Português (PT-BR)** e **Inglês (EN)**.
* **Arquitetura Diferencial:** Utilizada a *Context API* do React aliada a um dicionário de traduções centralizado (`translations.ts`). Isso permite que os idiomas sejam alternados na mesma página sem necessidade de recarregamento (*reload*). A preferência também fica salva no cache do usuário via `localStorage`.
* **Componentes Atualizados:** Todas as páginas (Home, Sobre, Currículo e Projetos) e dados estruturados (`projects.ts`) foram convertidos para Client Components e atrelados ao novo Contexto.

### 3. Easter Eggs (Matrix & Console)
* Recrutadores adoram surpresas interativas. Foram inseridos:
* **Mensagem Secreta no Console (`F12`)**: Uma saudação ASCII agradável contendo botões de contato para o GitHub e LinkedIn aguarda quem inspecionar a dev tool.
* **O Código Konami (Matrix Mode)**: Desenvolvido um custom hook (`useKonamiCode`) que ativa o Easter Egg caso o usuário digite a conhecida sequência de botões `↑ ↑ ↓ ↓ ← → ← → B A`. Quando ativado, fontes monoespaçadas com letras verdes brilhosas, sobre fundo totalmente preto e filtros neon em imagens engolfam a tela, garantindo o "efeito hacker".

### 4. Headings OWASP de Segurança
* Aplicada uma blindagem profissional básica no projeto dentro do arquivo primário `next.config.ts`.
* Adição das diretrizes protetivas contra XSS, ClickJacking, sniffing de MIME, além de fechamento preventivo da leitura de câmeras, geolocalização e microfone.
* Também forçado que todo o tráfego passe somente por *HTTPS* (HSTS).

### 5. Layout Responsivo - Navbar Mobile
* **Problema Identificado:** O Navbar cortava os cantos quando visto de um celular por empurrar tudo para frente do logo.
* **Resolução:** Re-estilização via *TailwindCSS*. Adicionados contêineres Flex Box (`flex-col` combinados com `md:flex-row`) para permitir que em dispositivos pequenos, o logotipo fique no topo e os links se enfileirem responsivamente embaixo.

---
🚀 Tudo devidamente testado e rodando lisinho no *localhost:3000*. É dar um commit final com orgulho!
