import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface via-background to-surface p-10 text-center shadow-elevated md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Vamos conversar
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">
              Pronto para <span className="text-gradient">economizar tempo</span> e crescer com foco em resultado?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Agende um diagnóstico gratuito de 45 minutos. Sem compromisso, sem
              enrolação. Você sai da call com um plano de ação pra sua marca.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "https://wa.me/5500000000000";
              }}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="seu@email.com"
                className="flex-1 rounded-full border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow"
              >
                Agendar
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <p className="mt-4 text-xs text-muted-foreground">
              Resposta em até 1 dia útil · 100% confidencial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
