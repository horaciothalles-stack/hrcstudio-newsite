# HRC Studio — Landing Page Estática

Versão **HTML + CSS + JavaScript puro** (vanilla) da landing page HRC Studio. Não precisa de Node, build, npm ou framework — basta abrir `index.html` ou subir os arquivos em qualquer servidor.

## Estrutura

```
.
├── index.html          # markup completo da landing
├── styles.css          # design system + estilos (paleta da marca)
├── script.js           # interações: FAQ, menu mobile, marquee, reveal on scroll
├── README.md
└── assets/
    ├── logo-mark.png       # símbolo (usado no header e como watermark do CTA)
    ├── logo-full.png       # logotipo completo (usado no footer)
    ├── hero-bg.jpg         # imagem de fundo do hero
    └── creatives-mockup.png# mockup do infoproduto (+1000 criativos)
```

## Como rodar localmente

Basta abrir o `index.html` no navegador. Para evitar problemas com cache de fontes / imagens, recomendo subir um servidor estático simples:

```bash
# Python 3
python3 -m http.server 8000

# Node
npx serve .

# PHP
php -S localhost:8000
```

E acessar `http://localhost:8000`.

## Como hospedar

Funciona em qualquer servidor estático: **GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, Hostinger, cPanel, FTP simples**, etc. É só fazer upload dos 4 arquivos + a pasta `assets/`.

## Como editar o conteúdo

- **Textos da Hero, FAQ, depoimentos, serviços e processo** estão como arrays no topo do `script.js` (são renderizados via JS)
- **Cores da marca** estão como variáveis CSS no topo do `styles.css` (`--primary`, `--accent`, etc.)
- **Meta tags e SEO** estão no `<head>` do `index.html`
- **Link do CTA do WhatsApp** está no final do `script.js` (procure por `wa.me`)

## Paleta da marca

- `#F2490C` — Primária (laranja)
- `#F28B0C` — Primária 2 (âmbar)
- `#F2B705` — Secundária (amarelo)
- `#0D0D0D` — Background
- `#BF244E` — Destaque (magenta)

## Tipografia

Carregadas via Google Fonts (CDN, sem instalação):
- **Space Grotesk** — títulos
- **DM Sans** — corpo
