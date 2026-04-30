import { T as jsxRuntimeExports } from "./worker-entry-BstavnVk.js";
import { L as Link } from "./router-K7HPpEca.js";
import { H as Header, F as Footer } from "./Footer-P7t53bbg.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex min-h-[60vh] flex-col items-center justify-center px-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold", children: "Projeto não encontrado" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projetos", className: "mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground", children: "Ver todos os projetos" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
