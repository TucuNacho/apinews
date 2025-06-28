import TitutloNews from "./components/TituloNews";
import FormNoticias from "./components/FormNoticias";
import ListaNoticias from "./components/ListaNoticias";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Spinner } from "react-bootstrap";
import { useState } from "react";
function App() {
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("ar");
  const [noticias, setNoticias] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const API_KEY = "pub_64390e2271084f368389878479be68c6";

  const obtenernews = async () => {
    if (!categoria) {
      console.warn(
        "⚠️ Debes seleccionar una categoría antes de buscar noticias."
      );
      return;
    }
    try {
      setSpinner(true);
      const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${pais}&language=es&category=${categoria}`;
      const news = await fetch(url);
      console.log("respues de la url", news);
      console.log(news);
      if (news.status === 200) {
        const datos = await news.json();
        setNoticias(datos.results || []);
        setSpinner(false);
      }
    } catch (error) {
      console.error(error);
        setSpinner(false);

    }
  };
  return (
    <>
      {spinner ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="grow" />
        </div>
      ) : (
        <>
          <TitutloNews></TitutloNews>
          <FormNoticias
            categoria={categoria}
            setCategoria={setCategoria}
            pais={pais}
            setPais={setPais}
            obtenernews={obtenernews}
          ></FormNoticias>
          <ListaNoticias noticias={noticias}></ListaNoticias>
        </>
      )}
    </>
  );
}
export default App;
