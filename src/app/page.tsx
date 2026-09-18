import Image from "next/image";
import {
  ArrowRight,
  Award,
  Check,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  MapPin,
  MessageCircle,
  PersonStanding,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=5492914982814&text=Hola%20Bel%C3%A9n.%20Acabo%20de%20ver%20tu%20WhatsApp%20en%20tu%20p%C3%A1gina%20web.%20Mi%20nombre%20es%3A%20";

const services = [
  {
    icon: Dumbbell,
    eyebrow: "Entrenamiento personalizado",
    title: "Personal Training",
    description:
      "Un espacio de entrenamiento pensado para acompañarte de manera cercana, respetando tu punto de partida y tus objetivos.",
    image: "/images/gimnasia-grupal.webp",
    alt: "Belén Goicochea guiando una clase grupal de entrenamiento físico",
  },
  {
    icon: PersonStanding,
    eyebrow: "En Uno Bahía Club",
    title: "Pilates Reformer",
    description:
      "Clases para trabajar movilidad, postura, fuerza y control corporal con atención en la técnica de cada movimiento.",
    image: "/images/pilates-grupal.webp",
    alt: "Belén Goicochea guiando una clase de Pilates Reformer",
  },
  {
    icon: Waves,
    eyebrow: "En Uno Bahía Club",
    title: "Natación",
    description:
      "Enseñanza y acompañamiento en el agua para aprender, mejorar la técnica y disfrutar la actividad con confianza.",
    image: "/images/natacion-instruccion.webp",
    alt: "Belén Goicochea dando indicaciones durante una clase de natación",
  },
];

const benefits = [
  { icon: HeartPulse, title: "Bienestar integral", text: "Movimiento como herramienta para sentirte mejor en tu vida cotidiana." },
  { icon: ShieldCheck, title: "Técnica y cuidado", text: "Indicaciones claras para entrenar con atención y confianza." },
  { icon: Sparkles, title: "Acompañamiento cercano", text: "Una propuesta humana que respeta tus tiempos y tu experiencia." },
  { icon: PersonStanding, title: "Progresión personal", text: "Actividades adaptadas al nivel y a las necesidades de cada persona." },
];

const gallery = [
  { src: "/images/pilates.webp", alt: "Belén Goicochea demostrando un ejercicio de Pilates Reformer", className: "gallery-wide" },
  { src: "/images/natacion-grupal.webp", alt: "Clase grupal de natación coordinada por Belén Goicochea", className: "gallery-tall" },
  { src: "/images/gimnasia-infantil.webp", alt: "Belén Goicochea coordinando un circuito de educación física infantil", className: "" },
  { src: "/images/juegos-infantiles.webp", alt: "Belén Goicochea acompañando una actividad física con niñas y niños", className: "" },
];

const faqs = [
  {
    question: "¿Las clases son para principiantes?",
    answer: "Sí. No necesitás experiencia previa para consultar. Belén conversa con vos sobre tu punto de partida y te orienta hacia la propuesta más adecuada.",
  },
  {
    question: "¿Dónde se realizan las clases?",
    answer: "Las clases de Pilates Reformer y natación se realizan en Uno Bahía Club, en Bahía Blanca. Para Personal Training, consultá lugar y modalidad por WhatsApp.",
  },
  {
    question: "¿Cómo conozco los días y horarios disponibles?",
    answer: "La disponibilidad se coordina directamente con Belén. Escribile por WhatsApp y contale qué actividad te interesa.",
  },
  {
    question: "¿Las propuestas son para niñas, niños y adultos?",
    answer: "Belén trabaja con niñas, niños y adultos. La actividad indicada depende de la edad, el nivel y la modalidad disponible.",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Belén Goicochea",
    jobTitle: "Profesora de Educación Física, personal trainer e instructora de Pilates Reformer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bahía Blanca",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    sameAs: ["https://www.instagram.com/mbelugoico/"],
    knowsAbout: ["Educación Física", "Personal Training", "Pilates Reformer", "Natación"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader whatsappUrl={whatsappUrl} />
      <main>
        <section id="inicio" className="hero section-shell">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">Movimiento · confianza · bienestar</p>
              <h1>Tu cuerpo puede sentirse <em>más fuerte y más libre.</em></h1>
              <p className="hero-lead">
                Entrenamiento y clases con Belén Goicochea, profesora de Educación Física,
                personal trainer e instructora de Pilates Reformer en Bahía Blanca.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" size={19} />
                  Consultá por WhatsApp
                </a>
                <a className="button button-ghost" href="#servicios">
                  Conocé las clases <ArrowRight aria-hidden="true" size={18} />
                </a>
              </div>
              <div className="hero-location">
                <MapPin aria-hidden="true" size={18} />
                <span>Bahía Blanca, Buenos Aires</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="hero-visual">
            <div className="hero-image-frame">
              <Image src="/images/gimnasia-grupal.webp" alt="Belén Goicochea guiando una clase grupal de actividad física" fill priority sizes="(max-width: 900px) 100vw, 47vw" className="cover-image hero-photo" />
            </div>
            <div className="hero-badge">
              <span className="badge-icon"><GraduationCap aria-hidden="true" size={22} /></span>
              <span><strong>Profesora de Educación Física</strong><small>ISFD 86</small></span>
            </div>
          </Reveal>
        </section>

        <section id="belen" className="about-section">
          <div className="section-shell about-grid">
            <Reveal className="section-heading">
              <p className="eyebrow">Conocé a Belén</p>
              <h2>Profesionalismo para moverte con confianza.</h2>
            </Reveal>
            <Reveal delay={0.08} className="about-content">
              <p className="about-intro">Belén acompaña a niñas, niños y adultos a incorporar el movimiento desde una mirada profesional, cercana y respetuosa.</p>
              <p>Su formación en Educación Física, natación, Pilates Reformer y entrenamiento personal le permite orientar distintas experiencias corporales con claridad y atención en cada persona.</p>
              <div className="qualification-list">
                {["Profesora de Educación Física · ISFD 86", "Personal trainer", "Instructora de Pilates Reformer", "Profesora de natación", "Guardavidas"].map((item) => (
                  <div key={item} className="qualification-item"><Check aria-hidden="true" size={17} /><span>{item}</span></div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="servicios" className="services-section section-shell">
          <Reveal className="section-heading section-heading-centered">
            <p className="eyebrow">Elegí tu forma de moverte</p>
            <h2>Tres propuestas, un acompañamiento cercano.</h2>
            <p>Encontrá la actividad que mejor se adapte a tu momento y consultá la disponibilidad directamente con Belén.</p>
          </Reveal>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.08}>
                  <article className="service-card">
                    <div className="service-image">
                      <Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 33vw" className="cover-image" />
                      <span className="service-icon"><Icon aria-hidden="true" size={23} /></span>
                    </div>
                    <div className="service-content">
                      <p>{service.eyebrow}</p><h3>{service.title}</h3><span>{service.description}</span>
                      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Consultar por ${service.title} en WhatsApp`}>
                        Consultar disponibilidad <ArrowRight aria-hidden="true" size={17} />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="beneficios" className="benefits-section">
          <div className="section-shell benefits-grid">
            <Reveal className="benefits-copy">
              <p className="eyebrow eyebrow-light">Entrenar con sentido</p>
              <h2>Más que una clase: un momento para vos.</h2>
              <p>Cada propuesta busca que puedas aprender, disfrutar y avanzar con una guía profesional.</p>
              <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Quiero consultar <ArrowRight aria-hidden="true" size={18} /></a>
            </Reveal>
            <div className="benefit-cards">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return <Reveal key={benefit.title} delay={index * 0.06}><article className="benefit-card"><Icon aria-hidden="true" size={25} /><h3>{benefit.title}</h3><p>{benefit.text}</p></article></Reveal>;
              })}
            </div>
          </div>
        </section>

        <section id="metodologia" className="process-section section-shell">
          <Reveal className="section-heading section-heading-centered"><p className="eyebrow">Empezar es simple</p><h2>Un primer paso, con toda la información.</h2></Reveal>
          <div className="process-grid">
            {[
              ["01", "Contame qué buscás", "Escribile a Belén y compartí qué actividad te interesa."],
              ["02", "Conocé la propuesta", "Recibí la información de modalidad, lugar y disponibilidad."],
              ["03", "Coordiná tu comienzo", "Elegí la opción que mejor se adapte a vos y empezá."],
            ].map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.08}><article className="process-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article></Reveal>
            ))}
          </div>
        </section>

        <section id="formacion" className="formation-section">
          <div className="section-shell formation-grid">
            <Reveal className="formation-mark"><Award aria-hidden="true" size={43} /><span>Formación profesional</span></Reveal>
            <Reveal delay={0.08} className="formation-copy"><p className="eyebrow">Experiencia que acompaña</p><h2>Una mirada integral sobre el movimiento.</h2><p>Profesora de Educación Física egresada del ISFD 86, personal trainer, instructora de Pilates Reformer, profesora de natación y guardavidas.</p></Reveal>
          </div>
        </section>

        <section id="galeria" className="gallery-section section-shell">
          <Reveal className="section-heading"><p className="eyebrow">En movimiento</p><h2>Clases vividas con energía y cercanía.</h2></Reveal>
          <div className="gallery-grid">
            {gallery.map((photo, index) => (
              <Reveal key={photo.src} delay={index * 0.05} className={photo.className}>
                <figure className="gallery-item"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 100vw, 50vw" className="cover-image" /></figure>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="preguntas" className="faq-section">
          <div className="section-shell faq-grid">
            <Reveal className="section-heading faq-heading"><p className="eyebrow">Preguntas frecuentes</p><h2>Lo que necesitás saber antes de empezar.</h2><p>¿Tenés otra consulta? Escribile directamente a Belén por WhatsApp.</p></Reveal>
            <div className="faq-list">
              {faqs.map((faq, index) => <Reveal key={faq.question} delay={index * 0.04}><details className="faq-item"><summary>{faq.question}</summary><p>{faq.answer}</p></details></Reveal>)}
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section section-shell">
          <Reveal className="contact-card">
            <div><p className="eyebrow eyebrow-light">Tu próximo paso</p><h2>Empezá a moverte con acompañamiento profesional.</h2><p>Consultá disponibilidad, modalidad y lugar. Belén te orientará para encontrar la propuesta más adecuada.</p></div>
            <a className="button button-coral" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={20} />Escribile a Belén</a>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <div><a href="#inicio" className="footer-brand"><span>BG</span><strong>Belén Goicochea</strong></a><p>Profesora de Educación Física · Personal trainer · Pilates Reformer · Natación</p></div>
          <div className="footer-links"><a href="https://www.instagram.com/mbelugoico/" target="_blank" rel="noreferrer">Instagram</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><span>Bahía Blanca, Argentina</span></div>
        </div>
        <div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} Belén Goicochea</span><span>Todos los derechos reservados</span></div>
      </footer>
      <WhatsAppFloat whatsappUrl={whatsappUrl} />
    </>
  );
}
