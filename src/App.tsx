import { useState } from "react";
import {
  MapPin,
  Code2,
  ArrowUpRight,
  Mail,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Globe,
  Terminal,
} from "lucide-react";

const PROYECTOS = [
  {
    titulo: "NavidadenMapa",
    estado: "En vivo · 2026",
    descripcion:
      "Mapa interactivo con más de 265 puntos de iluminación navideña, belenes y mercadillos en 241 municipios de toda España. Incluye geolocalización inteligente, filtros multicapa y alertas de calendario.",
    tags: ["React", "TypeScript", "Leaflet", "Cloudflare Pages"],
    destacado: "265+ ubicaciones en España",
  },
  {
    titulo: "Golifiar",
    estado: "Web & App Móvil",
    descripcion:
      "Suite de analítica privada 100% client-side para analizar exportaciones de Instagram, TikTok, Spotify y WhatsApp directamente en el dispositivo del usuario, sin subir datos a servidores externos.",
    tags: ["React", "Tailwind CSS", "Capacitor", "Privacidad Local"],
    destacado: "Procesamiento 100% local",
  },
  {
    titulo: "Radar & Méteo Canarias",
    estado: "En desarrollo",
    descripcion:
      "Exploración de arquitectura multi-modelo para visualizar sistemas convectivos, humedad relativa y mapas meteorológicos de alta precisión sobre el archipiélago canario.",
    tags: ["Open-Meteo", "Mapas", "Data Viz"],
    destacado: "Enfoque hiperlocal",
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
          _subject: `👋 Mensaje en DonseCanarias: ${fd.get("nombre")}`,
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
    <div className="min-h-screen bg-[#0B192C] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Barra superior */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B192C]/85 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-sky-500 flex items-center justify-center text-slate-950 font-black">
              D
            </span>
            <span>
              Donse<span className="text-amber-400">Canarias</span>
            </span>
          </a>
          <nav className="flex items-center gap-5 text-sm text-slate-300">
            <a href="#proyectos" className="hover:text-white transition">
              Proyectos
            </a>
            <a href="#que-hago" className="hidden sm:inline hover:text-white transition">
              Qué hago
            </a>
            <a
              href="#contacto"
              className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-semibold hover:bg-amber-300 transition"
            >
              Hablemos
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Personal */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold mb-6">
          <MapPin className="w-3.5 h-3.5" /> Tenerife, Islas Canarias · Marca Propia & Dev Lab
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-3xl">
          Construyo aplicaciones web y{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
            productos digitales
          </span>{" "}
          con identidad propia.
        </h1>

        <p className="mt-6 text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
          Soy desarrollador de software en Canarias. Bajo <strong>DonseCanarias</strong> diseño, programo y lanzo herramientas interactivas para miles de usuarios, además de crear webs y apps a medida para proyectos y negocios locales.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 transition inline-flex items-center gap-2"
          >
            Ver mis proyectos <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-800 transition inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-sky-400" /> Proponer una idea o proyecto
          </a>
        </div>
      </section>

      {/* Proyectos Propios */}
      <section id="proyectos" className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Portfolio & Labs</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">Productos creados bajo DonseCanarias</h2>
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

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                {proy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Qué hago / Colaboraciones */}
      <section id="que-hago" className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800/80">
        <p className="text-xs font-bold uppercase tracking-wider text-sky-400">Colaboraciones y Desarrollo</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-8">Cómo puedo ayudarte</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Globe className="w-6 h-6 text-amber-400 mb-3" />
            <h3 className="font-bold text-lg mb-1.5">Webs rápidas y modernas</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Landing pages, portfolios y webs corporativas ultra rápidas construidas con React, TypeScript y desplegadas en Cloudflare.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <MapPin className="w-6 h-6 text-sky-400 mb-3" />
            <h3 className="font-bold text-lg mb-1.5">Mapas y guías interactivas</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Directorios geolocalizados, rutas turísticas, mapas de eventos y buscadores visuales adaptados a móvil.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Smartphone className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-bold text-lg mb-1.5">Apps y herramientas a medida</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              De la idea al producto publicado: aplicaciones web progresivas, apps Android con Capacitor y backends en Java/Spring Boot.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto directo */}
      <section id="contacto" className="max-w-3xl mx-auto px-4 py-14 border-t border-slate-800/80">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 md:p-10">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4" /> Contacto directo
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">¿Tienes una idea o proyecto en mente?</h2>
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tu correo *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">¿De qué trata?</label>
                <select
                  name="tipo"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="Web o App a medida">Quiero crear una web o app</option>
                  <option value="Mapa interactivo / Evento">Mapa interactivo o proyecto local</option>
                  <option value="Colaboración en NavidadenMapa / Golifiar">Colaboración o prensa</option>
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm focus:outline-none focus:border-amber-400"
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
          DonseCanarias · Hecho en Tenerife, Islas Canarias
        </p>
        <p className="mt-1">donsecanarias@gmail.com · © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}