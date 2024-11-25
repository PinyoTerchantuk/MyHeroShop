import { ReactNode } from "react";
type HeadingProps ={

    count:number;
};


function Heading({count}:HeadingProps) {
  return <div>
      {count}
    </div>;
 
  
}

export default Heading;
