import { T as jsxRuntimeExports } from "./worker-entry-BstavnVk.js";
import { R as Route, L as Link, p as projects } from "./router-K7HPpEca.js";
import { H as Header, F as Footer } from "./Footer-P7t53bbg.js";
import { A as ArrowLeft } from "./arrow-left-Br5js95b.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProjectPage() {
  const {
    project
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-32 pb-24 lg:pt-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projetos", className: "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
        " Todos os projetos"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: project.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl font-bold leading-[1.05] md:text-6xl", children: project.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex flex-col gap-6 md:gap-10", children: project.images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "overflow-hidden rounded-2xl border border-border bg-surface shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `${project.title} — imagem ${i + 1} de ${project.images.length}`, loading: i === 0 ? "eager" : "lazy", className: "h-auto w-full object-cover" }) }, src)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Quer um projeto assim?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Vamos conversar sobre a sua marca." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/5511922193335", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow", children: "Falar no WhatsApp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: "Outros projetos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: projects.filter((p) => p.slug !== project.slug).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projetos/$slug", params: {
          slug: p.slug
        }, className: "group overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-primary/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.cover, alt: p.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-primary", children: p.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-sm font-bold", children: p.title })
          ] })
        ] }, p.slug)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProjectPage as component
};
