import { memo } from "react";

const Header = () => {
   console.log("Renderizou");
   return (
      <div>
         <h1>Header aqui</h1>
      </div>
   );
};

export default memo(Header);
