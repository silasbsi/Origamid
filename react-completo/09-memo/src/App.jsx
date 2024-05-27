import { useState } from "react";
import Header from "./Header";

function App() {
   const [contar, setContar] = useState(0);
   return (
      <div>
         <Header />
         <button
            className="btn btn-primary px-4"
            onClick={() => setContar(contar + 1)}
         >
            {contar}
         </button>
      </div>
   );
}

export default App;
