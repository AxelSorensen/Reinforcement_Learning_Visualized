import { MathJaxContext, MathJax } from "better-react-mathjax";

const Eq = ({children}) => {
  return ( 
    <span>
    <MathJaxContext hideUntilTypeset="every">
    <MathJax className="math">{children}</MathJax>
    </MathJaxContext>
    </span>
   );
}
 
export default Eq;

