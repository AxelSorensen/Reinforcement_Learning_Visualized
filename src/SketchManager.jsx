import Sketch from "react-p5";

import { SF, setSF,s1,d1,s2,d2,s3,d3,s4,d4,resize, keyPressed} from "./p5_sketch";

import { reset_parameters, setDoneCheck, setWaitAfterDone, setWaitTime, wait } from "./Field";


const SketchManager = ({page}) => {
    function sketchReturn(page_num) {

        switch (page_num) {
            case 3:
                
                setDoneCheck(true);
                setWaitTime(10);
                setWaitAfterDone(1000);
                
                return (
                <>
                <Sketch className='full-sketch' setup={s1} draw={d1} windowResized={resize} keyPressed={keyPressed}/>
                </>)
    
            case 6:
                
                setDoneCheck(true);
                setWaitTime(10);
                setWaitAfterDone(1000);
                return (
                <div className="full-sketch"><Sketch setup={s2} draw={d2} windowResized={resize}/></div>)

            case 7:
                
                setDoneCheck(true);
                setWaitTime(10);
                setWaitAfterDone(1000);
                return (
                <>
                <div className="full-sketch"><Sketch setup={s2} draw={d2} windowResized={resize}/></div>

                </>)

            case 8:
              reset_parameters();
              
              setDoneCheck(true);
              setWaitTime(10);
              setWaitAfterDone(1000);
              return <Sketch className='full-sketch' setup={s2} draw={d2} windowResized={resize}/>
       
            case 11:
              
              setDoneCheck(true);
              setWaitTime(10);
              setWaitAfterDone(1000);
              return (
              <>
              
              <Sketch className='full-sketch' setup={s2} draw={d2} windowResized={resize}/>
             
              </> )
            case 12:
              
              setDoneCheck(true);
              setWaitTime(1);
              setWaitAfterDone(1);
              reset_parameters();
              return (
                <>
                  <Sketch className='full-sketch' setup={s2} draw={d2} windowResized={resize}/>
                  <Sketch setup={s3} draw={d3} windowResized={resize}/>
                </>
              )
            case 13:
                
                setDoneCheck(true);
                setWaitAfterDone(1000);
              return (
                <>
              <Sketch className='full-sketch' setup={s2} draw={d2} windowResized={resize}/>
              <Sketch setup={s3} draw={d3} windowResized={resize}/>
              </>
              )
            case 14:
              reset_parameters();
              setDoneCheck(false);
              setWaitTime(1);
              setWaitAfterDone(0);
              return (
              <>
   
              <Sketch className='full-sketch' setup={s2} draw={d2} windowResized={resize}/>
              <Sketch className='full-sketch' setup={s4} draw={d4} windowResized={resize}/>
              <Sketch className='full-sketch' setup={s3} draw={d3} windowResized={resize}/>
              </> )
            // case 21:
            //   reset_parameters();
            //   setDoneCheck(false);
            //   setWaitTime(1);
            //   setWaitAfterDone(0);
            //   return (
            //   <>
   
            //   <Sketch className='full-sketch' setup={s2} draw={d2} windowResized={resize}/>

            //   </> )
            default:
                break;
        }
    }
    return (
        sketchReturn(page)
     );
}
 
export default SketchManager;