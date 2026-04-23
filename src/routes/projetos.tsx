import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — HRC Studio" },
      {
        name: "description",
        content:
          "Conheça os projetos da HRC Studio: branding, identidade visual e apresentações que entregam resultado real.",
      },
      { property: "og:title", content: "Projetos — HRC Studio" },
      {
        property: "og:description",
        content: "Cases reais de branding e marketing assinados pela HRC Studio.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} /> Voltar para a home
          </Link>

          <div className="mt-8 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Portfólio
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              Projetos <span className="text-gradient">selecionados</span>
            </h1>
            <p className="mt-5 text-muted-foreground">
              Uma seleção dos projetos mais marcantes da HRC Studio. Clique em qualquer
              capa para abrir a apresentação completa.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to="/projetos/$slug"
                params={{ slug: p.slug }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-background">
                  <img
                    src={p.cover}
                    alt={`Capa do projeto ${p.title}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent" />
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary">
                      {p.category}
                    </span>
                    <h2 className="mt-1 font-display text-xl font-bold">{p.title}</h2>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
