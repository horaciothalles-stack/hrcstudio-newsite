import { T as jsxRuntimeExports } from "./worker-entry-BstavnVk.js";
import { L as Link, p as projects } from "./router-K7HPpEca.js";
import { c as createLucideIcon, H as Header, F as Footer } from "./Footer-P7t53bbg.js";
import { A as ArrowLeft } from "./arrow-left-Br5js95b.js";
import { A as ArrowRight } from "./arrow-right-DopIsXzA.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16", key: "9kzy35" }],
  ["path", { d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2", key: "1t0f0t" }],
  ["circle", { cx: "13", cy: "7", r: "1", fill: "currentColor", key: "1obus6" }],
  ["rect", { x: "8", y: "2", width: "14", height: "14", rx: "2", key: "1gvhby" }]
];
const Images = createLucideIcon("images", __iconNode);
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-32 pb-24 lg:pt-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
        " Voltar para a home"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Portfólio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-5xl font-bold leading-[1.05] md:text-6xl", children: [
          "Projetos ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "selecionados" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "Uma seleção dos projetos mais marcantes da HRC Studio. Clique em qualquer capa para abrir a apresentação completa." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projetos/$slug", params: {
        slug: p.slug
      }, "aria-label": `Abrir álbum do projeto ${p.title} (${p.images.length} imagens)`, className: "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.cover, alt: `Capa do projeto ${p.title}`, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-[11px] font-medium text-foreground backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { size: 12, className: "text-primary" }),
            p.images.length,
            " imagens"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 flex items-center justify-center pb-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow", children: [
            "Abrir álbum",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-primary", children: p.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 font-display text-xl font-bold", children: p.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" })
        ] })
      ] }, p.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProjectsPage as component
};
