import { Suspense, lazy } from "react";
// import Contato from "./Contato";

const Contato = lazy(() => import("./Contato"));

function App() {
   return (
      <div>
         <Suspense fallback={<div>Carregando</div>}>
            <Contato />
         </Suspense>
      </div>
   );
}

export default App;
