import { useEffect } from "react";
import { Link } from "react-router-dom";
import { dogs } from "../data/dogs";
import {
  PawPrint,
  Sparkles,
  Calendar,
  Ruler,
  Syringe,
  Heart,
  ShieldCheck,
  Stethoscope,
  Utensils,
  DoorClosed,
  HandHeart,
  Ban,
  Volume2,
  Megaphone,
  GraduationCap,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const HERO_BG =
  "/img/cobao.png";
const ABOUT_IMG = "/img/perro1.png";

const awarenessRules = [
  {
    icon: <Utensils size={26} />,
    title: "No los alimentes en el receso",
    text:
      "Evita dar comida en pasillos, escaleras o áreas comunes. Hay un espacio asignado para que coman con dignidad y sin generar conflicto entre alumnos.",
  },
  {
    icon: <DoorClosed size={26} />,
    title: "Mantén los salones libres",
    text:
      "Los caninos no deben entrar a las aulas, laboratorios ni biblioteca. Su lugar son las áreas exteriores, donde están seguros y no interrumpen las clases.",
  },
  {
    icon: <Ban size={26} />,
    title: "No traigas perros externos",
    text:
      "Solo cuidamos a los caninos que ya habitan el plantel. Introducir nuevos perros pone en riesgo a los actuales y multiplica el problema que buscamos resolver.",
  },
  {
    icon: <Volume2 size={26} />,
    title: "Respeta su descanso",
    text:
      "No los molestes mientras duermen, no los persigas ni les grites. Acércate con calma y deja que ellos decidan si quieren interactuar contigo.",
  },
  {
    icon: <HandHeart size={26} />,
    title: "Trato digno, siempre",
    text:
      "No los lastimes, no les arrojes objetos ni los uses como objeto de bromas. Son seres vivos que merecen respeto, igual que cualquier miembro de la comunidad.",
  },
  {
    icon: <Megaphone size={26} />,
    title: "Reporta el maltrato",
    text:
      "Si presencias agresión o abandono dentro del plantel, avisa al profesor responsable o a un integrante del grupo 633. Tu voz también los protege.",
  },
];

export default function Home() {
  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* NAV */}
      <nav className="nav-bar" data-testid="main-nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <span className="paw">
              <PawPrint size={20} />
            </span>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span>
                Huellas <span style={{ color: "var(--red)", fontStyle: "italic" }}>COBAO Pl 32</span>
              </span>
              <span className="nav-stamp" style={{ marginTop: 4 }}>
                Grupo 633 · Administración
              </span>
            </div>
          </div>
          <div className="nav-links">
            <a onClick={() => scrollTo("proyecto")} data-testid="nav-proyecto">
              El proyecto
            </a>
            <a onClick={() => scrollTo("conciencia")} data-testid="nav-conciencia">
              Conciencia canina
            </a>
            <a onClick={() => scrollTo("caninos")} data-testid="nav-caninos">
              Conoce a los caninos
            </a>
          </div>
          <span className="nav-stamp">Plantel 32 · Cuilápam</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" data-testid="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="hero-overlay" />
        <div className="hero-grain" />
        <div className="hero-content">
          <div className="hero-top-line">
            <Sparkles size={14} /> Campaña de conciencia · Bienestar canino
          </div>
          <h1 className="hero-title" data-testid="hero-title">
            Conciencia
            <br />
            por los caninos
            <br />
            del <span className="red">COBAO Pl 32</span>
          </h1>
          <p className="hero-quote">
            No son perros callejeros. Son vidas que comparten nuestro plantel y dependen de cómo
            decidamos tratarlos.
          </p>
          <div className="hero-bottom">
            <p className="hero-cta-text">
              Este es un llamado a cuidarlos,
              <br />
              respetarlos y no traer más.
            </p>
            <div className="hero-stat" data-testid="hero-stat-1">
              <strong>
                6<span className="accent">---</span>
              </strong>
              <span>Caninos en el plantel</span>
            </div>
            <div className="hero-stat" data-testid="hero-stat-2">
              <strong>
                100<span className="accent">%</span>
              </strong>
              <span>Trato digno</span>
            </div>
            <div className="hero-stat" data-testid="hero-stat-3">
              <strong>
                38<span className="accent">+</span>
              </strong>
              <span>Alumnos involucrados</span>
            </div>
          </div>
        </div>
        <div className="scroll-cue">
          Desliza <ChevronDown size={14} />
        </div>
      </section>

      {/* PROYECTO */}
      <section className="about" id="proyecto" data-testid="about-section">
        <div className="about-inner">
          <div className="reveal">
            <div className="section-num">01 · Sobre el proyecto</div>
            <p className="about-question">¿Por qué surge este proyecto?</p>
            <h2 className="section-title">
              Una respuesta del aula a una realidad <em>del plantel</em>.
            </h2>
            <p className="section-lead">
              El proyecto surge a partir del análisis de la creciente presencia de población canina
              dentro y alrededor del{" "}
              <strong style={{ color: "white" }}>
                Colegio de Bachilleres del Estado de Oaxaca, Plantel 32 – Cuilápam
              </strong>
              . Esta situación evidencia factores como la falta de control animal, el abandono de
              mascotas y condiciones del entorno que favorecen su permanencia, generando riesgos
              sanitarios, problemas de seguridad y afectaciones en la convivencia escolar.
            </p>
            <p className="section-lead" style={{ marginTop: 18 }}>
              Ante ello, los estudiantes del{" "}
              <strong style={{ color: "var(--amber-soft)" }}>
                grupo 633 de la capacitación de Administración, generación 2023–2026
              </strong>
              , desarrollamos este proyecto con el respaldo y la guía constante del Maestro Héctor
              Marlon Aguilar Arellanes en la materia Taller de Probabilidad y Estadística II, con el
              propósito de proponer soluciones orientadas al bienestar de la comunidad educativa y al
              mejoramiento del entorno institucional.
            </p>

            <div className="about-mention" data-testid="teacher-mention">
              <span className="about-mention-label">
                <GraduationCap size={14} /> Asesor del proyecto
              </span>
              <span className="about-mention-name">Mtro. Héctor Marlon Aguilar Arellanes</span>
              <span className="about-mention-detail">
                Materia · Taller de Probabilidad y Estadística II
              </span>
            </div>
          </div>

          <div className="about-image reveal">
            <img src={ABOUT_IMG} alt="COBAO Plantel 32 Cuilápam" />
            <p className="about-stamp">
              Cuidar de ellos es cuidar del entorno donde aprendemos.
            </p>
          </div>
        </div>
      </section>

      {/* CONCIENCIA */}
      <section className="aware-section" id="conciencia" data-testid="aware-section">
        <div className="aware-inner">
          <div className="aware-header">
            <div className="reveal">
              <div className="section-num">02 · Conciencia canina</div>
              <h2 className="section-title">
                Seis acuerdos para convivir <em>con respeto</em>.
              </h2>
            </div>
            <p className="aware-manifesto reveal">
              Un canino no decide vivir en una escuela; nosotros decidimos cómo tratarlo. Estas son
              las reglas que sostienen el bienestar de los perros que ya forman parte del plantel.
            </p>
          </div>

          <div className="aware-grid">
            {awarenessRules.map((r, i) => (
              <div
                key={i}
                className="aware-card reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
                data-testid={`aware-card-${i}`}
              >
                <div className="aware-num">— {String(i + 1).padStart(2, "0")}</div>
                <div className="aware-icon">{r.icon}</div>
                <h3 className="aware-title">{r.title}</h3>
                <p className="aware-text">{r.text}</p>
              </div>
            ))}
          </div>

          <div className="aware-warning reveal" data-testid="aware-warning">
            <span className="aware-warning-label">
              <Ban size={16} /> Importante para futuras generaciones
            </span>
            <h3 className="aware-warning-title">
              No se aceptan más perros dentro del plantel.
            </h3>
            <p className="aware-warning-text">
              Esta campaña pide a las próximas generaciones del COBAO Pl 32 que no introduzcan nuevos
              caninos al plantel. Cuidemos a los que ya están aquí, ofrezcámosles un trato digno y
              evitemos que el problema crezca. La conciencia empieza con cada uno de nosotros.
            </p>
          </div>
        </div>
      </section>

      {/* CANINOS */}
      <section className="dogs-section" id="caninos" data-testid="dogs-section">
        <div className="dogs-header">
          <div className="reveal">
            <div className="section-num">03 · Habitantes del plantel</div>
            <h2 className="section-title">
              Conoce a los caninos <em>del plantel</em>.
            </h2>
          </div>
          <p className="section-lead reveal" style={{ marginTop: 0 }}>
            Aqui encontraras informacion documentada de los caninos que forman parte del Plantel. Ellos
            forman parte de la comunidad COBAO Pl32 y son responsabilidad de todos.
          </p>
        </div>

        <div className="dogs-grid">
          {dogs.map((d, i) => (
            <article
              key={d.id}
              className="dog-card reveal"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              data-testid={`dog-card-${d.id}`}
            >
              <div className="dog-img-wrap">
                <img src={d.image} alt={d.name} className="dog-img" loading="lazy" />
                <span className="dog-id">N° {String(d.id).padStart(2, "0")}</span>
              </div>
              <div className="dog-body">
                <h3 className="dog-name" data-testid={`dog-name-${d.id}`}>
                  {d.name}
                </h3>
                <div className="dog-breed">{d.breed}</div>
                <div className="dog-meta">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    <Calendar size={12} /> {d.age}
                  </span>
                  <span className="dot" />
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    <Ruler size={12} /> {d.size}
                  </span>
                  <span className="dot" />
                  <span>{d.sex}</span>
                </div>

                <div className="dog-health">
                  <div className="health-row">
                    <Syringe size={14} color="var(--sage)" />
                    <span>
                      <strong>Vacunación:</strong> {d.vaccines}
                    </span>
                  </div>
                  <div className="health-row">
                    <ShieldCheck size={14} color="var(--sage)" />
                    <span>
                      <strong>Esterilización:</strong>{" "}
                    </span>
                    {d.sterilized ? (
                      <span className="health-pill ok">Sí</span>
                    ) : (
                      <span className="health-pill pending">Pendiente</span>
                    )}
                  </div>
                  <div className="health-row">
                    <Stethoscope size={14} color="var(--terra)" />
                    <span>
                      <strong>Salud:</strong> {d.healthNote}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/perro/${d.slug}`}
                  className="dog-profile-btn"
                  data-testid={`dog-profile-btn-${d.slug}`}
                >
                  Ver perfil completo <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing" data-testid="closing-section">
        <div className="closing-inner">
          <div className="reveal">
            <h2 className="closing-title">
              La conciencia <em>también se aprende</em> en la escuela.
            </h2>
          </div>
          <p className="closing-message reveal">
            Como estudiante del cobao plantel 32 se parte del cambio. Fomenta estas reglas, respeta a los caninos
            y comparte a las próximas generaciones que el bienestar animal también es
            comunidad.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer" data-testid="site-footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              Huellas <span className="red">COBAO Pl 32</span>
            </div>
            <div className="footer-stamp">
              Grupo 633 · Administración · Gen. 2023–2026
            </div>
            <p style={{ maxWidth: 36 + "ch", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              Campaña escolar de conciencia y bienestar canino del Colegio de Bachilleres del Estado
              de Oaxaca, Plantel 32 – Cuilápam.
            </p>
          </div>

          <div className="footer-col">
            <h4>Asesor del proyecto</h4>
            <p>
              <strong>Mtro. Héctor Marlon</strong>
              <br />
              <strong>Aguilar Arellanes</strong>
            </p>
            <p style={{ marginTop: 8 }}>
              Taller de Probabilidad y Estadística II
            </p>
          </div>

          <div className="footer-col">
            <h4>El plantel 32 Cuilapam</h4>
            <p>Colegio de Bachilleres del Estado de Oaxaca</p>
            <p>Plantel 32 — Cuilápam de Guerrero, Oaxaca</p>
            <p style={{ marginTop: 8 }}>
              <Heart size={12} style={{ display: "inline", marginRight: 6, color: "var(--red)" }} />
              Por una comunidad consciente
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} COBAO Pl 32 · Proyecto escolar sin fines de lucro.</span>
          <span className="mono">Conciencia · Respeto · Comunidad</span>
        </div>
      </footer>
    </>
  );
}
