import { useState } from "react";
import {
  MapPin,
  ArrowUpRight,
  Mail,
  CheckCircle2,
  GraduationCap,
  Code2,
  Briefcase,
  Globe,
  Smartphone,
  Terminal,

} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const PROYECTOS = [
  {
    titulo: "NavidadenMapa",
    estado: "En vivo · 2026",
    descripcion:
      "Mapa interactivo nacional con más de 265 puntos de iluminación navideña, belenes y mercadillos en 241 municipios de toda España. Incluye geolocalización inteligente y filtros multicapa.",
    tags: ["React", "TypeScript", "Leaflet", "Cloudflare"],
    destacado: "265+ ubicaciones",
    github: "https://github.com/alu0101539669/NavidadEnMapa",
  },
  {
    titulo: "Golifiar",
    estado: "Web & App Móvil",
    descripcion:
      "Suite de analítica privada 100% client-side para analizar exportaciones de Instagram, TikTok, Spotify y WhatsApp directamente en el dispositivo, sin subir datos a servidores externos.",
    tags: ["React", "Tailwind CSS", "Capacitor", "Privacidad Local"],
    destacado: "100% Client-Side",
    github: "https://github.com/alu0101539669",
  },
  {
    titulo: "Análisis de Datos & Méteo",
    estado: "Python / R / Web",
    descripcion:
      "Scripts de procesamiento estructural con pandas, reglas de asociación en R (arules) y exploración de modelos meteorológicos hiperlocales sobre el archipiélago canario.",
    tags: ["Python", "R", "Pandas", "Open-Meteo"],
    destacado: "Data & Scripts",
    github: "https://github.com/alu0101539669",
  },
];

export default function App() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formsubmit.co/ajax/donsecanarias@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `👋 Contacto DonseCanarias: ${fd.get("nombre")}`,
          _template: "table",
          _captcha: "false",
          Nombre: fd.get("nombre"),
          Email: fd.get("email"),
          Asunto: fd.get("tipo"),
          Mensaje: fd.get("mensaje"),
        }),
      });
      if (res.ok) {
        setSent(true);
        e.currentTarget.reset();
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* Barra superior */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B192C]/90 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-white no-underline">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-sky-500 flex items-center justify-center text-slate-950 font-black">
              D
            </span>
            <span>
              Donse<span className="text-amber-400">Canarias</span>
            </span>
          </a>

          <nav className="flex items-center gap-5 text-sm font-medium text-slate-300">
            <a href="#proyectos" className="hover:text-white transition no-underline">
              Proyectos
            </a>
            <a href="#sobre-mi" className="hidden sm:inline hover:text-white transition no-underline">
              Sobre mí
            </a>
            <a href="#que-hago" className="hidden md:inline hover:text-white transition no-underline">
              Qué hago
            </a>
            <a
              href="https://github.com/alu0101539669"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition no-underline"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="#contacto"
              className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition no-underline"
            >
              Hablemos
            </a>
          </nav>
        </div>
      </header>

      {/* Hero con foto encuadrada a la derecha */}
      <section className="max-w-5xl mx-auto px-4 pt-14 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold mb-6">
              <MapPin className="w-3.5 h-3.5" /> Tenerife, Islas Canarias · Estudiante de Ingeniería Informática
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
              Creo aplicaciones web y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                productos digitales
              </span>{" "}
              con identidad propia.
            </h1>

            <p className="mt-5 text-slate-300 text-base leading-relaxed">
              Soy <strong className="text-white">Abdón Senén Meléndez Díaz</strong>, estudiante de Ingeniería Informática en la Universidad de La Laguna. Bajo la marca <strong className="text-amber-400">DonseCanarias</strong> desarrollo proyectos personales para aprender, experimentar y convertir ideas creativas en experiencias digitales útiles.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 transition inline-flex items-center gap-2 no-underline"
              >
                Ver mis proyectos <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-800 transition inline-flex items-center gap-2 no-underline"
              >
                <Mail className="w-4 h-4 text-sky-400" /> Proponer una idea o proyecto
              </a>
            </div>
          </div>

          {/* Tarjeta con tu foto */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[320px] rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
              <img
                src="/tu-foto.jpg"
                alt="Abdón Senén Meléndez Díaz"
                className="w-full h-[360px] object-cover object-center"
              />
              <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Abdón Meléndez</p>
                  <p className="text-xs text-slate-400">Founder · DonseCanarias</p>
                </div>
                <a
                  href="https://github.com/alu0101539669"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 text-sky-400 hover:bg-slate-700 transition no-underline"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> Ver GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800/80">
        <p className="text-xs font-bold uppercase tracking-wider text-sky-400">Sobre mí</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
          Estudiante, creativo y desarrollador en formación
        </h2>
        <p className="mt-3 text-slate-300 text-sm md:text-base max-w-3xl leading-relaxed">
          Tengo 22 años y me interesan la informática, los videojuegos y la creatividad. Actualmente estoy centrado en terminar mi carrera y en construir productos propios que me permitan seguir creciendo como profesional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Formación actual</p>
              <p className="text-sm font-bold text-white mt-0.5">Ingeniería Informática</p>
              <p className="text-xs text-slate-400 mt-0.5">Universidad de La Laguna</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-sky-400/10 text-sky-400 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Perfil</p>
              <p className="text-sm font-bold text-white mt-0.5">Creador independiente</p>
              <p className="text-xs text-slate-400 mt-0.5">DonseCanarias</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-400/10 text-emerald-400 shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Experiencia</p>
              <p className="text-sm font-bold text-white mt-0.5">Proyectos personales</p>
              <p className="text-xs text-slate-400 mt-0.5">Desarrollo web y apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Portfolio & Labs</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
              Productos creados bajo DonseCanarias
            </h2>
          </div>
          <span className="text-xs text-slate-400">Código propio · Despliegue en producción</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROYECTOS.map((proy) => (
            <article
              key={proy.titulo}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-400/50 transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {proy.estado}
                  </span>
                  <span className="text-[11px] text-slate-400">{proy.destacado}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{proy.titulo}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{proy.descripcion}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800 mb-4">
                  {proy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={proy.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 no-underline"
                >
                  Ver repositorio en GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Qué hago */}
      <section id="que-hago" className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800/80">
        <p className="text-xs font-bold uppercase tracking-wider text-sky-400">Colaboraciones y Desarrollo</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-8">Cómo puedo ayudarte</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Globe className="w-6 h-6 text-amber-400 mb-3" />
            <h3 className="font-bold text-lg text-white mb-1.5">Webs rápidas y modernas</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Landing pages, portfolios y webs corporativas ultra rápidas construidas con React, TypeScript y desplegadas en Cloudflare.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <MapPin className="w-6 h-6 text-sky-400 mb-3" />
            <h3 className="font-bold text-lg text-white mb-1.5">Mapas y guías interactivas</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Directorios geolocalizados, rutas turísticas, mapas de eventos y buscadores visuales adaptados a móvil.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Smartphone className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-bold text-lg text-white mb-1.5">Apps y herramientas a medida</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              De la idea al producto publicado: aplicaciones web progresivas, apps Android con Capacitor y backends en Java/Spring Boot.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="max-w-3xl mx-auto px-4 py-14 border-t border-slate-800/80">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 md:p-10">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4" /> Contacto directo
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">¿Tienes una idea o proyecto en mente?</h2>
          <p className="text-sm text-slate-300 mt-2 mb-6">
            Escríbeme directamente a{" "}
            <a href="mailto:donsecanarias@gmail.com" className="text-sky-400 underline">
              donsecanarias@gmail.com
            </a>{" "}
            o rellena el formulario y te respondo lo antes posible.
          </p>

          {sent ? (
            <div className="p-5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-3 text-emerald-300 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              ¡Mensaje enviado! Te responderé pronto desde donsecanarias@gmail.com.
            </div>
          ) : (
            <form onSubmit={handleContact} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tu nombre *</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Nombre o empresa"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tu correo *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">¿De qué trata?</label>
                <select
                  name="tipo"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Web o App a medida">Quiero crear una web o app</option>
                  <option value="Mapa interactivo / Evento">Mapa interactivo o proyecto local</option>
                  <option value="Oportunidad laboral / Prácticas">Oportunidad laboral o colaboración</option>
                  <option value="Otro">Otra consulta</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Cuéntame brevemente *</label>
                <textarea
                  name="mensaje"
                  rows={4}
                  required
                  placeholder="Qué quieres construir, plazos o cualquier detalle..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition cursor-pointer disabled:opacity-60"
              >
                {sending ? "Enviando..." : "Enviar mensaje a DonseCanarias"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-400">
        <p className="font-semibold text-slate-300">
          DonseCanarias · Abdón Senén Meléndez Díaz · Tenerife, Islas Canarias
        </p>
        <p className="mt-1">donsecanarias@gmail.com · © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}