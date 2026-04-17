import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="font-display text-xl font-bold tracking-tight">
              HRC<span className="text-primary">.</span>studio
            </span>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Agência de marketing focada em economia de tempo e resultado real.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} HRC Studio. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00 · Feito com foco em performance.</p>
        </div>
      </div>
    </footer>
  );
}
