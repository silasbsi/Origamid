import { useReducer } from "react";

const reducer = (state, action) => {
   console.log(action);

   if (action === "aumentar") {
      return state + 1;
   }

   if (action === "diminuir") {
      return state - 1;
   }

   return new Error("Error: Action não existe");
};

function App() {
   const [state, dispatch] = useReducer(reducer, 0);

   return (
      <div>
         <button onClick={() => dispatch("aumentar")}>+</button>
         <button onClick={() => dispatch("diminuir")}>-</button>
         <p>{state}</p>
      </div>
   );
}

export default App;
