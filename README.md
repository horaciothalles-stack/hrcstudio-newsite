# HRC Studio — Versão estática (HTML + CSS + JS)

Site 100% estático, sem build, sem framework. Basta abrir `index.html` ou hospedar em qualquer servidor estático.

## Estrutura

```
.
├── index.html          # Landing principal
├── projetos.html       # Galeria de projetos (com lightbox)
├── styles.css          # Estilos (mesmo design system da versão React)
├── script.js           # JS da home (FAQ, marquee, menu, reveal)
├── projetos.js         # JS da página de projetos (álbum + lightbox)
└── assets/
    ├── logo-mark.png
    ├── logo-full.png
    ├── hero-bg.jpg
    ├── creatives-mockup.png
    └── projects/
        ├── 5stars/    (16 imagens)
        ├── tarquini/  (9 imagens)
        ├── hrc/       (9 imagens)
        ├── ntc/       (13 imagens)
        └── malaga/    (7 imagens)
```

## Como rodar localmente

Abrir direto no navegador funciona, mas o ideal é um servidor estático:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Acesse `http://localhost:8000`.

## Como hospedar

Funciona em qualquer hospedagem estática: **Hostinger, GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, cPanel, FTP**. Faça upload de todos os arquivos preservando a estrutura de pastas.

## Editar conteúdo

- **Textos da home** (serviços, processo, FAQ, depoimentos): topo do `script.js`
- **Projetos** (capa + nº de imagens): topo do `projetos.js` (array `projects`)
- **Adicionar imagens a um projeto**: coloque arquivos numerados `00.jpg`, `01.jpg`... em `assets/projects/<slug>/` e ajuste o `count` no `projetos.js`
- **Cores da marca**: variáveis CSS no topo do `styles.css`
- **WhatsApp**: procure por `wa.me/5511922193335` no código

## Paleta

- `#F2490C` Primária · `#F28B0C` Âmbar · `#F2B705` Amarelo
- `#0D0D0D` Background · `#BF244E` Destaque
