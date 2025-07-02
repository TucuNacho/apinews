import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGlobe, FaList, FaGlobeAmericas } from "react-icons/fa";
const FormNoticias = ({
  categoria,
  setCategoria,
  pais,
  setPais,
  obtenernews,
}) => {
  return (
    <>
      <div className="d-flex align-items-center gap-3 justify-content-center my-3">
        <Form.Label htmlFor="selectCat">
          Buscar por Categorias
          <FaList className="ms-2" />
        </Form.Label>
        <Form.Select
          size="sm"
          id="selectCat"
          className="w-25"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option>Seleccione una categoria </option>
          <option value="sports">Deportes</option>
          <option value="technology">Tecnologia</option>
          <option value="health">Salud</option>
          <option value="business">Negocios</option>
        </Form.Select>
        <Form.Label htmlFor="selectPais">
          Buscar por Paises
          <FaGlobeAmericas className="ms-2" />
        </Form.Label>
        <Form.Select
          size="sm"
          id="selectPais"
          className="w-25"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        >
          <option>Seleccione por paises </option>
          <option value="ar">Argentina</option>
          <option value="mx">Mexico</option>
          <option value="us">Estados unidos</option>
          <option value="co">Colombia</option>
        </Form.Select>
        <div className="d-flex align-items-center justify-content-center my-4">
          <Button onClick={obtenernews}>
            Actualizar noticias <FaGlobe />{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormNoticias;
