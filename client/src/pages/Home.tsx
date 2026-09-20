import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { useState } from "react";

const imageBase = "/manus-storage/";

const services = [
  {
    eyebrow: "Cuidado integral",
    title: "Acompanhamento médico",
    description:
      "Consultas acolhedoras, escuta atenta e planos de cuidado construídos com você.",
    image: `${imageBase}vittacare-hero_0605569f.jpg`,
    icon: Stethoscope,
    tone: "sage",
  },
  {
    eyebrow: "Precisão que cuida",
    title: "Exames e diagnósticos",
    description:
      "Laboratório e imagem com tecnologia, agilidade e resultados que apoiam decisões seguras.",
    image: `${imageBase}vittacare-lab_ed7ab72a.jpg`,
    icon: ShieldCheck,
    tone: "clay",
  },
  {
    eyebrow: "Rotina possível",
    title: "Nutrição sem culpa",
    description:
      "Estratégias práticas para transformar sua relação com a alimentação — no seu ritmo.",
    image: `${imageBase}vittacare-nutrition_780a3ed1.jpg`,
    icon: Sparkles,
    tone: "cream",
  },
];

const team = [
  {
    name: "Dra. Helena Costa",
    role: "Clínica geral e medicina preventiva",
    image: `${imageBase}vittacare-doctor_88c30c2e.jpg`,
  },
  {
    name: "Dr. Caio Mendes",
    role: "Diagnóstico e acompanhamento clínico",
    image: `${imageBase}vittacare-team_a8154972.jpg`,
  },
  {
    name: "Marina Azevedo",
    role: "Nutricionista comportamental",
    image: `${imageBase}vittacare-team_a8154972.jpg`,
  },
];

const benefits = [
  "Atendimento com hora marcada",
  "Profissionais que escutam de verdade",
  "Resultados integrados em um só lugar",
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f5ef] text-[#163b36]">
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="VittaCare, início">
            <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#e97f61] text-[#fffaf2] shadow-[0_8px_22px_rgba(233,127,97,0.25)] transition-transform duration-200 group-hover:-rotate-6">
              <HeartPulse size={20} strokeWidth={2.3} />
            </span>
            <span className="font-display text-[21px] font-semibold tracking-[-0.04em] text-[#fdfbf6]">
              Vitta<span className="text-[#f0ab8e]">Care</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#e9efe8] lg:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#servicos">Serviços</a>
            <a className="nav-link" href="#diferenciais">Nosso jeito</a>
            <a className="nav-link" href="#equipe">Equipe</a>
            <a className="nav-link" href="#contato">Contato</a>
          </nav>

          <a href="#contato" className="hidden items-center gap-2 rounded-full bg-[#f6b29a] px-5 py-3 text-[12px] font-semibold text-[#163b36] shadow-[0_12px_28px_rgba(246,178,154,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffc5ad] lg:flex">
            Fale com a clínica <ArrowUpRight size={15} />
          </a>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md lg:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="mx-4 mt-1 rounded-3xl border border-white/15 bg-[#173f39]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4 text-sm text-[#f5f3ea]">
              <a href="#servicos" onClick={closeMobile}>Serviços</a>
              <a href="#diferenciais" onClick={closeMobile}>Nosso jeito</a>
              <a href="#equipe" onClick={closeMobile}>Equipe</a>
              <a href="#contato" onClick={closeMobile}>Contato</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative isolate min-h-[690px] overflow-hidden bg-[#16413a] lg:min-h-[760px]">
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(13,48,43,0.96)_0%,rgba(20,65,58,0.86)_39%,rgba(20,65,58,0.16)_75%,rgba(20,65,58,0.22)_100%)]" />
          <div className="absolute inset-0 opacity-35 mix-blend-screen" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(246,178,154,.28) 0 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <img src={`${imageBase}vittacare-hero_0605569f.jpg`} alt="Médica acolhendo uma paciente na clínica" className="absolute inset-0 -z-10 h-full w-full object-cover object-center" />
          <div className="absolute -right-20 -top-20 h-[370px] w-[370px] rounded-full border border-white/10 lg:h-[520px] lg:w-[520px]" />
          <div className="absolute -right-2 top-20 h-[260px] w-[260px] rounded-full border border-[#f6b29a]/20 lg:h-[390px] lg:w-[390px]" />

          <div className="relative mx-auto flex min-h-[690px] max-w-[1240px] items-end px-5 pb-20 pt-32 sm:px-8 lg:min-h-[760px] lg:items-center lg:px-10 lg:pb-0">
            <div className="max-w-[690px] animate-rise">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f5d5c8] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f6b29a]" />
                Cuidado que acompanha você
              </div>
              <h1 className="max-w-[720px] font-display text-[clamp(3.45rem,7.8vw,6.85rem)] font-semibold leading-[0.91] tracking-[-0.075em] text-[#fffaf2]">
                Saúde para viver o que importa.
              </h1>
              <p className="mt-8 max-w-[530px] text-[17px] leading-8 text-[#dce7df] sm:text-[18px]">
                Uma clínica feita para olhar o todo: sua história, seu momento e os próximos passos para uma vida mais leve.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#contato" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f6b29a] px-6 py-4 text-sm font-semibold text-[#183f38] transition-all duration-200 hover:-translate-y-1 hover:bg-[#ffc5ad] hover:shadow-[0_18px_30px_rgba(246,178,154,0.2)]">
                  Agende uma conversa <ArrowUpRight size={17} />
                </a>
                <a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium text-[#f8eee7] transition-colors hover:text-[#f6b29a]">
                  Conheça a VittaCare <ChevronDown size={16} />
                </a>
              </div>
            </div>
            <div className="absolute bottom-7 right-5 hidden max-w-[215px] rounded-2xl border border-white/15 bg-white/10 p-4 text-[#f5f3ea] backdrop-blur-md lg:block">
              <p className="font-display text-[27px] leading-none tracking-[-0.05em]">+12 anos</p>
              <p className="mt-2 text-[11px] leading-5 text-[#c6d9cf]">cuidando de histórias com presença, ciência e afeto.</p>
            </div>
          </div>
        </section>

        <section id="servicos" className="relative bg-[#f7f5ef] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-14 grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="section-kicker">O que fazemos</p>
                <h2 className="mt-4 max-w-[520px] font-display text-[clamp(2.8rem,5vw,4.7rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#17453d]">Cuidado completo, do seu jeito.</h2>
              </div>
              <p className="max-w-[470px] text-[16px] leading-7 text-[#597069] lg:justify-self-end">Da prevenção ao diagnóstico, reunimos diferentes especialidades para que você encontre clareza, acolhimento e continuidade em cada etapa.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className={`service-card group ${index === 1 ? "lg:translate-y-10" : ""}`}>
                    <div className="relative overflow-hidden rounded-[28px]">
                      <img src={service.image} alt={service.title} className="h-[270px] w-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#143d37]/55 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-[#17453d] shadow-lg backdrop-blur"><Icon size={19} /></div>
                    </div>
                    <div className="px-1 pt-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c56f58]">{service.eyebrow}</p>
                      <h3 className="mt-3 font-display text-[29px] font-semibold leading-none tracking-[-0.05em] text-[#17453d]">{service.title}</h3>
                      <p className="mt-4 text-[14px] leading-6 text-[#637770]">{service.description}</p>
                      <a href="#contato" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#17453d] transition-colors hover:text-[#c56f58]">Saiba mais <ArrowUpRight size={15} /></a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="relative overflow-hidden bg-[#e6eee7] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#f6b29a]/20 blur-3xl" />
          <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-24">
            <div className="relative">
              <div className="absolute -bottom-7 -right-3 z-10 w-[185px] rounded-2xl bg-[#f7f5ef] p-5 shadow-[0_18px_45px_rgba(38,79,69,0.13)] sm:right-2">
                <HeartPulse size={21} className="text-[#d8785b]" />
                <p className="mt-3 font-display text-[22px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#17453d]">Seu bem-estar é o nosso norte.</p>
              </div>
              <div className="overflow-hidden rounded-[32px] rounded-bl-[100px] bg-[#c1d6c6]">
                <img src={`${imageBase}vittacare-team_a8154972.jpg`} alt="Equipe VittaCare reunida" className="h-[440px] w-full object-cover object-center mix-blend-multiply opacity-95 sm:h-[560px]" />
              </div>
            </div>
            <div>
              <p className="section-kicker">Nosso jeito</p>
              <h2 className="mt-4 max-w-[570px] font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#17453d]">A tecnologia apoia. O cuidado conduz.</h2>
              <p className="mt-7 max-w-[510px] text-[16px] leading-7 text-[#597069]">A gente acredita que uma boa experiência em saúde começa antes da consulta — no jeito de receber, explicar, acompanhar e estar presente.</p>
              <div className="mt-8 space-y-4 border-t border-[#b8ccc0] pt-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 text-[14px] font-medium text-[#31594f]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#17453d] text-[#f7f5ef]"><Check size={14} /></span>{benefit}</div>
                ))}
              </div>
              <a href="#contato" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#17453d] px-6 py-4 text-sm font-semibold text-[#f7f5ef] transition-all duration-200 hover:-translate-y-1 hover:bg-[#246158]">Descubra uma nova rotina de cuidado <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="equipe" className="bg-[#f7f5ef] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="section-kicker">Quem cuida</p><h2 className="mt-4 font-display text-[clamp(2.8rem,5vw,4.7rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#17453d]">Gente que entende gente.</h2></div>
              <p className="max-w-[380px] text-[15px] leading-6 text-[#637770]">Especialistas que combinam conhecimento, escuta e uma visão mais humana da saúde.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {team.map((person) => (
                <article key={person.name} className="group">
                  <div className="overflow-hidden rounded-[26px] bg-[#dde8de]"><img src={person.image} alt={`Foto de ${person.name}`} className="h-[375px] w-full object-cover object-center grayscale-[12%] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0" /></div>
                  <div className="mt-5 flex items-start justify-between gap-4"><div><h3 className="font-display text-[25px] font-semibold leading-none tracking-[-0.05em] text-[#17453d]">{person.name}</h3><p className="mt-2 text-[13px] leading-5 text-[#637770]">{person.role}</p></div><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c7d6ca] text-[#17453d] transition-colors group-hover:bg-[#17453d] group-hover:text-white"><ArrowUpRight size={16} /></span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-[#17453d] px-5 py-24 text-[#f7f5ef] sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="section-kicker text-[#f6b29a]">Vamos conversar</p>
              <h2 className="mt-4 max-w-[480px] font-display text-[clamp(3rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em]">Seu próximo passo começa aqui.</h2>
              <p className="mt-7 max-w-[390px] text-[15px] leading-7 text-[#c9d9cf]">Preencha o formulário e nossa equipe entrará em contato para entender como podemos cuidar de você.</p>
              <div className="mt-10 space-y-5 text-[14px] text-[#dbe7df]">
                <div className="flex items-center gap-3"><Phone size={17} className="text-[#f6b29a]" /><span>(11) 3456-7890</span></div>
                <div className="flex items-center gap-3"><Mail size={17} className="text-[#f6b29a]" /><span>oi@vittacare.com.br</span></div>
                <div className="flex items-center gap-3"><MapPin size={17} className="text-[#f6b29a]" /><span>Vila Madalena · São Paulo, SP</span></div>
              </div>
            </div>
            <form action="#contato" method="post" className="rounded-[28px] bg-[#f7f5ef] p-6 text-[#17453d] shadow-[0_25px_70px_rgba(8,34,28,0.16)] sm:p-9" aria-label="Formulário estático de contato">
              <div className="mb-8 flex items-start justify-between gap-5"><div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c56f58]">Primeiro contato</p><h3 className="mt-2 font-display text-[28px] font-semibold leading-none tracking-[-0.05em]">Conte um pouco sobre você.</h3></div><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e6eee7] text-[#17453d]"><Sparkles size={18} /></span></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">Nome<input className="field-input" type="text" name="nome" placeholder="Seu nome" /></label>
                <label className="field-label">E-mail<input className="field-input" type="email" name="email" placeholder="voce@email.com" /></label>
                <label className="field-label">Cidade<input className="field-input" type="text" name="cidade" placeholder="Sua cidade" /></label>
                <label className="field-label">Estado<select className="field-input" name="estado" defaultValue=""><option value="" disabled>Selecione</option><option>SP</option><option>RJ</option><option>MG</option><option>Outro</option></select></label>
              </div>
              <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#e97f61] px-6 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d96e51]">Enviar interesse <ArrowUpRight size={17} /></button>
              <p className="mt-4 text-center text-[11px] leading-5 text-[#82948b]">Formulário demonstrativo para o Projeto 01 · não há processamento de dados.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#10332e] px-5 py-8 text-[#c9d9cf] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 text-[12px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e97f61] text-white"><HeartPulse size={16} /></span><span className="font-display text-[17px] font-semibold tracking-[-0.04em] text-[#f7f5ef]">Vitta<span className="text-[#f0ab8e]">Care</span></span><span className="ml-2 hidden text-[#8da79a] sm:inline">© 2026 Clínica de Saúde</span></div>
          <div className="flex items-center gap-4"><span>Uma clínica para a vida real.</span><a href="#inicio" aria-label="Instagram" className="transition-colors hover:text-[#f6b29a]"><Instagram size={16} /></a><a href="#inicio" aria-label="LinkedIn" className="transition-colors hover:text-[#f6b29a]"><Linkedin size={16} /></a></div>
        </div>
      </footer>
    </div>
  );
}
