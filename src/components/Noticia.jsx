import { Card } from "react-bootstrap";
import { FaNewspaper } from "react-icons/fa";

const Noticia = ({ noticia }) => {
  const maxChars = 150;
  const recortarTexto = (texto) => {
    if (!texto) {
      return "sin descripcion";
    }
    return texto.length > maxChars
      ? texto.substring(0, maxChars) + "..."
      : texto;
  };
  return (
    <div>
      <Card
        style={{ marginBottom: "1rem" }}
        className="d-flex flex-column h-100"
      >
        {noticia.image_url && (
          <Card.Img variant="top" src={noticia.image_url} />
        )}
        <Card.Body className="d-flex flex-column">
          <Card.Title>{noticia.title}</Card.Title>
          <Card.Text className="flex-grow-1">
            {recortarTexto(noticia.description)}
          </Card.Text>
          <a
            href={noticia.link}
            target="_blank"
            rel="noreferrer"
            className="btn-naranja mt-auto"
          >
            Ver noticia completa
            <FaNewspaper className="ms-2" />
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Noticia;
