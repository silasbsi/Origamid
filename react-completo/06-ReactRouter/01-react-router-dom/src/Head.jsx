/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Head = (props) => {
   useEffect(() => {
      console.log(props);
      document.title = "Dogs | " + props.title;
      document
         .querySelector("meta[name='description']")
         .setAttribute("content", props.description);
   }, [props]);

   return <></>;
};

export default Head;
