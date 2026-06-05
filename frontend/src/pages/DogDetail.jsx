import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { dogs } from "../data/dogs";
import {
  PawPrint,
  Calendar,
  Ruler,
  Syringe,
  ShieldCheck,
  Stethoscope,
  ArrowLeft,
  Weight,
  Dna,
  Mars,
  Venus,
} from "lucide-react";

export default function DogDetail() {
  const { slug } = useParams();
  const dog = dogs.find((d) => d.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (dog) {
      document.title = `${dog.name} · Huellas COBAO Pl 32`;
    }
  }, [dog]);

  if (!dog) {
    return (
      <div className="dog-detail-notfound" data-testid="dog-not-found">
        <div className="notfound-inner">
          <h1>Canino no encontrado</h1>
          <p>El perro que buscas no está registrado en el plantel.</p>
          <Link to="/" className="dog-detail-back-btn" data-testid="back-home-link">
            <ArrowLeft size={16} /> Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dog-detail-page" data-testid={`dog-detail-${dog.slug}`}>
      {/* NAV */}
      <nav className="nav-bar" data-testid="detail-nav">
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
          <Link to="/" className="dog-detail-back-link" data-testid="back-home-link">
            <ArrowLeft size={16} /> Volver
          </Link>
        </div>
      </nav>

      <div className="dog-detail-inner">
        <div className="dog-detail-header">
          <div className="section-num">
            Canino N° {String(dog.id).padStart(2, "0")} · Ficha individual
          </div>
          <h1 className="dog-detail-name" data-testid="detail-name">
            {dog.name}
          </h1>
          <p className="dog-detail-breed" data-testid="detail-breed">
            {dog.breed}
          </p>
        </div>

        <div className="dog-detail-grid">
          <div className="dog-detail-photo-wrap" data-testid="detail-photo-wrap">
            <img
              src={dog.image}
              alt={dog.name}
              className="dog-detail-photo"
              data-testid="detail-photo"
            />
            <span className="dog-detail-stamp">
              N° {String(dog.id).padStart(2, "0")} · COBAO Pl 32
            </span>
          </div>

          <div className="dog-detail-info">
            <div className="dog-detail-facts">
              <div className="fact-row" data-testid="fact-sex">
                <div className="fact-icon">
                  {dog.sex === "Hembra" ? <Venus size={18} /> : <Mars size={18} />}
                </div>
                <div className="fact-content">
                  <span className="fact-label">Sexo</span>
                  <span className="fact-value">{dog.sex}</span>
                </div>
              </div>
              <div className="fact-row" data-testid="fact-age">
                <div className="fact-icon">
                  <Calendar size={18} />
                </div>
                <div className="fact-content">
                  <span className="fact-label">Etapa de vida</span>
                  <span className="fact-value">{dog.age}</span>
                </div>
              </div>
              <div className="fact-row" data-testid="fact-size">
                <div className="fact-icon">
                  <Ruler size={18} />
                </div>
                <div className="fact-content">
                  <span className="fact-label">Tamaño</span>
                  <span className="fact-value">{dog.size}</span>
                </div>
              </div>
              <div className="fact-row" data-testid="fact-weight">
                <div className="fact-icon">
                  <Weight size={18} />
                </div>
                <div className="fact-content">
                  <span className="fact-label">Peso aproximado</span>
                  <span className="fact-value">{dog.weight}</span>
                </div>
              </div>
              <div className="fact-row" data-testid="fact-breed">
                <div className="fact-icon">
                  <Dna size={18} />
                </div>
                <div className="fact-content">
                  <span className="fact-label">Raza</span>
                  <span className="fact-value">{dog.breed}</span>
                </div>
              </div>
            </div>

            <div className="dog-detail-health" data-testid="detail-health">
              <h3 className="dog-detail-section-title">Estado de salud</h3>
              <div className="health-row">
                <Syringe size={16} color="var(--sage)" />
                <span>
                  <strong>Vacunación:</strong> {dog.vaccines}
                </span>
              </div>
              <div className="health-row">
                <ShieldCheck size={16} color="var(--sage)" />
                <span>
                  <strong>Esterilización:</strong>{" "}
                </span>
                {dog.sterilized ? (
                  <span className="health-pill ok">Sí</span>
                ) : (
                  <span className="health-pill pending">Pendiente</span>
                )}
              </div>
              <div className="health-row">
                <Stethoscope size={16} color="var(--terra)" />
                <span>
                  <strong>Salud:</strong> {dog.healthNote}
                </span>
              </div>
            </div>

            <div className="dog-detail-message" data-testid="detail-message">
              <p>
                <strong>{dog.name}</strong> forma parte de la comunidad del Plantel 32 de Cuilápam.
                Su cuidado, respeto y bienestar son responsabilidad de toda la comunidad COBAO.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="site-footer" data-testid="detail-footer">
        <div className="footer-bottom" style={{ borderTop: "none" }}>
          <span>© {new Date().getFullYear()} COBAO Pl 32 · Proyecto escolar sin fines de lucro.</span>
          <span className="mono">Ficha #{String(dog.id).padStart(2, "0")} · {dog.slug}</span>
        </div>
      </footer>
    </div>
  );
}
