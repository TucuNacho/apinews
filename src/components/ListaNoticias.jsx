import { Row, Col, Container} from "react-bootstrap";
import Noticia from "./Noticia";
const ListaNoticias = ({ noticias }) => {
  return (
    <Container>
      <Row>
        {noticias.map((noticia, index) => (
          <Col md={4} key={index} className="mb-4 d-flex">
            <Noticia noticia={noticia}></Noticia>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListaNoticias;
