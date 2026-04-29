// ============ HRC Studio — Vanilla JS ============

// ---- Data ----
const services = [
  { icon: 'target', title: 'Tráfego pago', desc: 'Meta Ads, Google Ads e TikTok Ads com gestão diária e relatórios transparentes.' },
  { icon: 'palette', title: 'Identidade & branding', desc: 'Construção e reposicionamento de marca com design consistente em todos os pontos.' },
  { icon: 'video', title: 'Conteúdo & criativos', desc: 'Roteiro, gravação e edição de vídeos curtos e estáticos prontos pra performar.' },
  { icon: 'megaphone', title: 'Social media', desc: 'Planejamento estratégico mensal, copy e publicação com foco em engajamento real.' },
  { icon: 'globe', title: 'Sites & landing pages', desc: 'Páginas que carregam rápido, convertem e refletem o nível da sua marca.' },
  { icon: 'trending', title: 'Consultoria & funil', desc: 'Diagnóstico, estratégia de funil e otimização contínua do seu CAC e LTV.' },
];

const processSteps = [
  { n: '01', title: 'Diagnóstico', desc: 'Mapeamos sua marca, concorrência e oportunidades em uma call de 45 minutos.' },
  { n: '02', title: 'Estratégia sob medida', desc: 'Apresentamos um plano de crescimento com metas, canais e investimento claros.' },
  { n: '03', title: 'Execução premium', desc: 'Nosso time entra em ação: design, copy, gestão de tráfego e relatórios semanais.' },
  { n: '04', title: 'Otimização contínua', desc: 'Testamos, medimos e escalamos o que funciona — sempre transparente, sempre data-driven.' },
];

const clients = ['NORTHWAVE','LUMENA','BRAVO CO.','ATLAS+','VERSO','KORE','ÓRBITA','NEXA','SAGE','IRIS LAB','MONO','PRISMA'];

const testimonials = [
  { name: 'Mariana Costa', role: 'CEO, Lumena Skincare', text: 'Em 4 meses a HRC dobrou nosso faturamento online. O nível dos criativos é absurdo — parece que entendem o nosso público melhor do que a gente.' },
  { name: 'Rafael Mendes', role: 'Sócio, Bravo Co.', text: 'A diferença é tratamento. Não é só agência rodando campanha, é parceiro pensando estratégia comigo toda semana. Saímos de R$50k para R$380k/mês.' },
  { name: 'Juliana Reis', role: 'Diretora de Marketing, Atlas+', text: 'Profissionalismo e velocidade de outro nível. Aprovaram, criaram, publicaram. Sem retrabalho, sem desculpa. Só resultado.' },
];

const features = [
  '+1000 criativos prontos pra usar',
  '100% personalizáveis no Canva',
  'Atualizações vitalícias incluídas',
  'Templates testados com clientes reais',
  'Stories, feed, reels e ads',
  'Acesso imediato após a compra',
];

const faqs = [
  { q: 'Quanto custa contratar a HRC Studio?', a: 'Os planos variam conforme o escopo (tráfego, social media, branding, etc). Após o diagnóstico gratuito, montamos uma proposta sob medida pra sua realidade — começando a partir de R$ 2.500/mês.' },
  { q: 'Em quanto tempo vejo resultado?', a: 'Os primeiros sinais de tração aparecem em 30 a 60 dias. Resultados consistentes e escaláveis acontecem normalmente entre o 3º e o 4º mês de operação.' },
  { q: 'Vocês atendem qualquer segmento?', a: 'Trabalhamos principalmente com infoprodutores, e-commerces, clínicas, serviços B2B e marcas de lifestyle. Se não for fit, falamos isso na call — não pegamos cliente que não conseguimos entregar.' },
  { q: 'O pacote de criativos substitui contratar a agência?', a: 'Não. O pacote é uma ferramenta excelente pra quem está começando ou tem time interno. A agência é pra quem quer escalar com estratégia, gestão e otimização contínua.' },
  { q: 'Como funciona o suporte?', a: 'Todo cliente da agência tem um gestor dedicado, grupo direto no WhatsApp e reuniões semanais de acompanhamento. Transparência total nos números e nas decisões.' },
];

// ---- Icons (inline SVGs) ----
const icons = {
  target: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  palette: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  video: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
  megaphone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
  globe: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  trending: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  star: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  quote: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="quote-icon"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>',
  plus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-icon"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
};

// ---- Render Services ----
document.getElementById('servicesGrid').innerHTML = services.map(s => `
  <div class="service-card reveal">
    <div class="service-icon">${icons[s.icon]}</div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
  </div>
`).join('');

// ---- Render Process ----
document.getElementById('processGrid').innerHTML = processSteps.map(s => `
  <div class="process-card reveal">
    <div class="process-num">${s.n}</div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
  </div>
`).join('');

// ---- Render Marquee ----
document.getElementById('marquee').innerHTML =
  [...clients, ...clients].map(c => `<span>${c}</span>`).join('');

// ---- Render Testimonials ----
const starsHTML = Array.from({length: 5}).map(() => icons.star).join('');
document.getElementById('testimonials').innerHTML = testimonials.map(t => `
  <figure class="testimonial reveal">
    ${icons.quote}
    <div class="stars">${starsHTML}</div>
    <blockquote>"${t.text}"</blockquote>
    <figcaption>
      <div class="name">${t.name}</div>
      <div class="role">${t.role}</div>
    </figcaption>
  </figure>
`).join('');

// ---- Render Features ----
document.getElementById('featuresGrid').innerHTML = features.map(f => `
  <li><span class="feature-check">${icons.check}</span><span>${f}</span></li>
`).join('');

// ---- Render FAQ ----
const faqList = document.getElementById('faqList');
faqList.innerHTML = faqs.map((f, i) => `
  <div class="faq-item ${i === 0 ? 'open' : ''}" data-i="${i}">
    <button class="faq-question">
      <span>${f.q}</span>
      ${icons.plus}
    </button>
    <div class="faq-answer"><div class="faq-answer-inner"><p>${f.a}</p></div></div>
  </div>
`).join('');

faqList.addEventListener('click', e => {
  const btn = e.target.closest('.faq-question');
  if (!btn) return;
  const item = btn.closest('.faq-item');
  // Single-open behavior (matches React state with only one selected)
  document.querySelectorAll('.faq-item').forEach(el => {
    if (el !== item) el.classList.remove('open');
  });
  item.classList.toggle('open');
});

// ---- Header scroll ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// ---- Mobile menu ----
const toggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
toggle.addEventListener('click', () => {
  mobileNav.hidden = !mobileNav.hidden;
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => { mobileNav.hidden = true; });
});

// ---- CTA Form ----
document.getElementById('ctaForm').addEventListener('submit', e => {
  e.preventDefault();
  window.location.href = 'https://wa.me/5500000000000';
});

// ---- Year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Reveal on scroll (whileInView equivalent) ----
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('is-visible');
      io.unobserve(en.target);
    }
  });
}, { rootMargin: '-50px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
