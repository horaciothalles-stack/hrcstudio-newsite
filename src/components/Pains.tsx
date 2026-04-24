import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const pains = [
  "Você investe em marketing todo mês, mas no fim ninguém sabe dizer com clareza o que realmente está dando retorno.",
  "O investimento sobe, o trabalho aumenta, mas o faturamento não acompanha o ritmo.",
  "Toda vez que você tenta escalar, alguma coisa trava: criativo, oferta, equipe, entrega.",
  "Os anúncios rodam, somem no feed e você sente que está só queimando dinheiro pra aparecer.",
  "Vive testando coisa nova sem um plano por trás, na base do achismo e do que viu funcionar pros outros.",
  "Já passou por agência que prometeu o mundo, sumiu depois do contrato assinado e te deixou pior do que estava.",
  "No fundo, você sabe que precisa ajustar algo, só não sabe exatamente o quê nem por onde começar.",
];

export function Pains() {
  return (
    <section
      id="dores"
      className="relative overflow-hidden border-y border-border bg-surface/40 py-24 lg:py-32"
    >
      {/* subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <AlertCircle size={14} />
            Pra quem é
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] md:text-5xl lg:text-[3.5rem]">
            Se você está aqui, provavelmente está vivendo{" "}
            <span className="text-gradient">pelo menos uma</span> dessas situações:
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Leia com calma. Se mais de duas dessas frases parecerem o seu dia a dia,
            a gente precisa conversar.
          </p>
        </motion.div>

        <ul className="mx-auto mt-14 flex max-w-3xl flex-col gap-3">
          {pains.map((p, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex items-start gap-4 rounded-xl border border-border bg-background/60 p-5 backdrop-blur transition-all hover:border-primary/40 hover:bg-background"
            >
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 font-display text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                {p}
              </p>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex flex-col items-center gap-3 text-center"
        >
          <p className="max-w-xl text-sm text-muted-foreground">
            Você não tá sozinho nisso. A maior parte das marcas que chega na HRC
            chega exatamente nesse ponto.
          </p>
          <a
            href="https://wa.me/5511922193335"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow"
          >
            Quero resolver isso agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
