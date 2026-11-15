import { X, ShieldCheck, FileText, Cookie } from "lucide-react";

export type LegalTab = "aviso" | "privacidad" | "cookies" | null;

interface Props {
  activeTab: LegalTab;
  onClose: () => void;
  onChangeTab: (tab: Exclude<LegalTab, null>) => void;
  siteName?: string;
}

export default function LegalModal({
  activeTab,
  onClose,
  onChangeTab,
  siteName = "DonseCanarias",
}: Props) {
  if (!activeTab) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onChangeTab("aviso")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "aviso"
                  ? "bg-amber-400 text-slate-950"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <FileText className="w-3.5 h-3.5" /> Aviso Legal
            </button>
            <button
              type="button"
              onClick={() => onChangeTab("privacidad")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "privacidad"
                  ? "bg-amber-400 text-slate-950"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Privacidad (RGPD)
            </button>
            <button
              type="button"
              onClick={() => onChangeTab("cookies")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "cookies"
                  ? "bg-amber-400 text-slate-950"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Cookie className="w-3.5 h-3.5" /> Política de Cookies
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana legal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300">
          {activeTab === "aviso" && (
            <>
              <h3 className="text-lg font-bold text-white">1. Aviso Legal (Ley 34/2002, LSSI-CE)</h3>
              <p>
                En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa de los siguientes datos identificativos del titular de <strong>{siteName}</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-200">
                <li><strong>Titular:</strong> Abdón Senén Meléndez Díaz</li>
                <li><strong>Domicilio:</strong> San Cristóbal de La Laguna, Santa Cruz de Tenerife, España</li>
                <li><strong>Correo electrónico de contacto:</strong> donsecanarias@gmail.com</li>
                <li><strong>Actividad:</strong> Desarrollo de software, portfolio técnico y proyectos digitales de carácter informativo y divulgativo.</li>
              </ul>

              <h4 className="font-bold text-white pt-2">2. Propiedad Intelectual e Industrial</h4>
              <p>
                El código fuente propio, diseño, estructura, logotipos y textos de <strong>{siteName}</strong> pertenecen a su titular o cuentan con licencias abiertas compatibles. Los mapas base pertenecen a colaboradores de OpenStreetMap (ODbL) y las fotografías enciclopédicas a Wikimedia Commons bajo sus respectivas licencias libres.
              </p>

              <h4 className="font-bold text-white pt-2">3. Exclusión de Responsabilidad</h4>
              <p>
                La información mostrada sobre horarios, fechas de eventos o ubicaciones tiene carácter meramente orientativo y divulgativo. El titular no se responsabiliza de cambios de última hora realizados por ayuntamientos u organizadores externos ni de interrupciones técnicas ajenas al servicio.
              </p>
            </>
          )}

          {activeTab === "privacidad" && (
            <>
              <h3 className="text-lg font-bold text-white">Política de Privacidad (RGPD y LOPDGDD)</h3>
              <p>
                De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos sobre el tratamiento de datos en <strong>{siteName}</strong>:
              </p>

              <h4 className="font-bold text-white pt-2">1. Responsable del Tratamiento</h4>
              <p>
                Abdón Senén Meléndez Díaz · Contacto: <strong>donsecanarias@gmail.com</strong>.
              </p>

              <h4 className="font-bold text-white pt-2">2. Finalidad y Base Jurídica</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Formularios de contacto y sugerencias:</strong> Los datos que envíes voluntariamente (nombre, correo electrónico o propuestas de ubicaciones) se transmiten mediante el proveedor técnico Formsubmit únicamente para atender tu consulta o revisar la ubicación sugerida. La base legal es tu consentimiento expreso al enviar el formulario (art. 6.1.a RGPD).
                </li>
                <li>
                  <strong>Geolocalización en el navegador (en aplicaciones de mapas):</strong> Si autorizas el acceso a tu ubicación para centrar el mapa o calcular distancias cercanas, dichas coordenadas se procesan <strong>exclusivamente en la memoria local de tu dispositivo</strong>. Nunca se envían, registran ni almacenan en servidores propios ni de terceros.
                </li>
              </ul>

              <h4 className="font-bold text-white pt-2">3. Conservación y Derechos</h4>
              <p>
                No se elaboran perfiles comerciales ni se ceden datos a terceros. Los mensajes recibidos por correo electrónico se conservan únicamente durante el tiempo necesario para gestionar la solicitud. Puedes ejercer tus derechos de acceso, rectificación o supresión escribiendo a <strong>donsecanarias@gmail.com</strong>.
              </p>
            </>
          )}

          {activeTab === "cookies" && (
            <>
              <h3 className="text-lg font-bold text-white">Política de Cookies y Almacenamiento Local</h3>
              <p>
                En cumplimiento del artículo 22.2 de la Ley 34/2002 (LSSI-CE), se informa de que <strong>{siteName}</strong> <strong>no utiliza cookies publicitarias, de seguimiento ni de perfilado de usuarios</strong>.
              </p>

              <h4 className="font-bold text-white pt-2">Almacenamiento técnico estrictamente necesario</h4>
              <p>
                Esta aplicación únicamente emplea almacenamiento local del navegador (<code>localStorage</code>) para recordar preferencias técnicas elegidas por el propio usuario (como el tema claro/oscuro o ubicaciones marcadas como favoritas en su dispositivo), así como caché de red estándar de Cloudflare para garantizar la seguridad y velocidad de carga.
              </p>
              <p>
                Al tratarse exclusivamente de recursos técnicos necesarios para el funcionamiento solicitado por el usuario, están exentos de consentimiento previo conforme a la Guía sobre el uso de las cookies de la Agencia Española de Protección de Datos (AEPD). Puedes borrar estos datos en cualquier momento desde los ajustes de privacidad de tu navegador.
              </p>
            </>
          )}
        </div>

        {/* Pie del modal */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}