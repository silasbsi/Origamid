import { Link } from "react-router-dom";
import Head from "./Head";

const Home = () => {
   return (
      <div>
         <Head title="Home" description="Esta é a descrição da Home" />
         <h1>Home</h1>
         <p>Essa é a home</p>
         <Link to="produto/notebook">Notebook</Link>{" "}
         <Link to="produto/smartphone">Smartphone</Link>
      </div>
   );
};

export default Home;
