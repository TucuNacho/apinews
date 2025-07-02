import "bootstrap/dist/css/bootstrap.min.css";
import { FaNewspaper } from "react-icons/fa";
const TituloNews = () => {
  return (
    <div>
      <h1 className="text-center bg-orange py-2 text-light">
        Noticias <FaNewspaper />{" "}
      </h1>
    </div>
  );
};

export default TituloNews;
