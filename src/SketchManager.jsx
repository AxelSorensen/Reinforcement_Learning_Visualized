import Sketch from "react-p5";

import { SF, setSF,s1,d1,s2,d2,s3,d3,s4,d4,resize, keyPressed} from "./p5_sketch";

import { reset_parameters, setDoneCheck, setWaitAfterDone, setWaitTime } from "./Field";

const SketchManager = ({page}) => {
    function sketchReturn(page_num) {
        switch (page_num) {
            case 3:
                setSF(100);
                setDoneCheck(true);
                setWaitTime(10);
                setWaitAfterDone(1000);
                return <div className="full-sketch"><Sketch setup={s1} draw={d1} windowResized={resize} keyPressed={keyPressed}/></div>
                break;
            case 6:
                setSF(100);
                setDoneCheck(true);
                setWaitTime(10);
                setWaitAfterDone(1000);
                return <div className="full-sketch"><Sketch setup={s2} draw={d2} windowResized={resize}/></div>
                break;
            case 7:
                setSF(100);
                setDoneCheck(true);
                setWaitTime(10);
                setWaitAfterDone(1000);
                return <div className="full-sketch"><Sketch setup={s2} draw={d2} windowResized={resize}/></div>
                break;

            case 8:
              reset_parameters();
              setSF(100);
              setDoneCheck(true);
              setWaitTime(10);
              setWaitAfterDone(1000);
              return <div className="full-sketch"><Sketch setup={s2} draw={d2} windowResized={resize}/></div>
              break;
            case 11:
              setSF(100);
              setDoneCheck(true);
              setWaitTime(10);
              setWaitAfterDone(1000);
              return (
              <>
              <div className="full-sketch">
              <Sketch setup={s2} draw={d2} windowResized={resize}/>
              </div>
              </> )
              break;
            case 12:
              setSF(300);
              setDoneCheck(true);
              setWaitTime(1);
              setWaitAfterDone(1);
              reset_parameters();
              return (
                <div className="full-sketch">
                <div className="two-sketch">
              <Sketch setup={s2} draw={d2} windowResized={resize}/>
              <Sketch setup={s3} draw={d3} windowResized={resize}/>
              </div>
              </div>
              )
            case 13:
                setSF(300);
                setDoneCheck(true);
                setWaitAfterDone(1000);
              return (
              <div className="two-sketch">
              <Sketch setup={s2} draw={d2} windowResized={resize}/>
              <Sketch setup={s3} draw={d3} windowResized={resize}/>
              </div>
              )
              break;
            case 14:
              reset_parameters();
              setSF(400);
              setDoneCheck(false);
              setWaitTime(1);
              setWaitAfterDone(0);
              return (
              <>
   
              <Sketch setup={s2} draw={d2} windowResized={resize}/>
              <Sketch setup={s4} draw={d4} windowResized={resize}/>
              <Sketch setup={s3} draw={d3} windowResized={resize}/>
              </> )
              break;
            default:
                break;
        }
    }
    return ( 
        sketchReturn(page)
     );
}
 
export default SketchManager;