# Portfólio Digital

Portfólio pessoal de desenvolvedor/designer digital, construído com Nuxt 3, Vue 3 e JavaScript puro. Estética editorial em preto absoluto, tipografia condensada gigante e um único acento verde-limão fluorescente.

## Stack

- Nuxt 3 / Vue 3 (Composition API, `<script setup>`)
- JavaScript (sem TypeScript)
- CSS puro (variáveis CSS, sem frameworks de UI)
- Fontes self-hosted via `@fontsource` (Anton, Inter, Instrument Serif)

## Instalação

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run preview
```

## Onde editar o conteúdo

Todo o conteúdo textual e de contato fica centralizado em `data/`, nada está espalhado pelos componentes:

- `data/portfolio.js` — nome, monograma, textos do hero, seção de problemas, sobre e chamada final.
- `data/projects.js` — lista de projetos do carrossel (`title`, `category`, `year`, `image`, `url`).
- `data/services.js` — os 5 blocos de serviço (sites institucionais, landing pages, lojas virtuais, apps mobile, UI/UX).
- `data/contact.js` — e-mail, WhatsApp, LinkedIn e GitHub. Enquanto os placeholders (`[SEU EMAIL]` etc.) não forem preenchidos, o CTA final aponta para `#contato`.

Basta substituir os valores entre colchetes (`[SEU NOME]`, `[MONOGRAMA]`, etc.) pelos dados reais.

## Onde adicionar imagens

- **Foto de perfil:** salve o arquivo em `public/profile.webp`. Enquanto o arquivo não existir, a seção "Sobre" mostra um placeholder escuro com o texto "ADICIONE SUA FOTO".
- **Capas de projeto:** salve em `public/projects/project-01.webp`, `project-02.webp`, etc. (nomes definidos em `data/projects.js`). Sem o arquivo, o card mostra "ADICIONE A CAPA DO PROJETO".
- **Favicon:** `public/favicon.svg` (já incluso, pode ser substituído).

## Como alterar a cor de destaque

As cores vivem em `assets/css/variables.css`. Para trocar o verde-limão por outra cor de acento, altere:

```css
--accent: #c8ff00;
--accent-hover: #d6ff3d;
--accent-soft: rgba(200, 255, 0, 0.1);
```

O bloco `:root[data-theme='light']` define os equivalentes para o tema claro.

## Como alterar as fontes

As três famílias são declaradas em `assets/css/variables.css`:

```css
--font-display: 'Anton', 'Arial Narrow', sans-serif;
--font-body: 'Inter', Arial, sans-serif;
--font-editorial: 'Instrument Serif', Georgia, serif;
```

Os pacotes `@fontsource/*` são importados em `nuxt.config.js` (array `css`). Para trocar uma fonte, instale o pacote `@fontsource` correspondente, importe o CSS em `nuxt.config.js` e atualize a variável acima.

## Como ativar ou desativar animações

- As entradas com máscara (`RevealText.vue`) e o scroll reveal (`composables/useScrollReveal.js`) usam `IntersectionObserver` e respeitam `prefers-reduced-motion` automaticamente — usuários com essa preferência ativada não veem as animações.
- Para desativar globalmente, remova as classes `reveal` / `reveal-mask` em `assets/css/animations.css` ou ajuste `--duration-enter` / `--duration-hover` em `variables.css`.
- O cursor customizado (`components/layout/CustomCursor.vue`) se desativa sozinho em dispositivos touch (`pointer: coarse`).

## Estrutura do projeto

```
components/
  layout/     Header, menu full-screen, footer, CTA flutuante, voltar ao topo, cursor customizado
  sections/   Hero, Problemas, Projetos, Sobre, Serviços, Contato
  projects/   Card e carrossel de projetos
  services/   Bloco de serviço + 5 ilustrações técnicas em CSS puro
  ui/         Botão, tag, label de seção, título com máscara/contorno, reveal genérico
composables/  Tema (dark/light), scroll reveal, scroll horizontal, cursor customizado
data/         Conteúdo editável (portfolio, projetos, serviços, contato)
assets/css/   Reset, variáveis, tipografia, animações, estilos globais
pages/        index.vue (página única)
public/       Favicon e onde entram profile.webp e projects/*.webp
```

## Campos que ainda precisam ser preenchidos

- `data/portfolio.js`: `monogram`, `name`, `role`, `about.location`.
- `data/projects.js`: título, categoria, ano, descrição e URL de cada projeto real.
- `data/contact.js`: e-mail, link de WhatsApp, LinkedIn e GitHub.
- `public/profile.webp` e `public/projects/project-0X.webp`.
- `nuxt.config.js`: URL canônica (atualmente `https://example.com/`).

## Build

Último `npm run build` executado com sucesso, sem erros ou warnings do Vue/Nuxt.
