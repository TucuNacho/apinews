import { Card, Row, Col, Button } from "react-bootstrap";

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
        style={{marginBottom: "1rem" }}
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
          <Button variant="primary" className="mt-auto">
            <a
              href={noticia.link}
              target="_blank"
              rel="noreferrer"
              className="text-white text-decoration-none"
            >
              Ver noticia completa
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Noticia;
