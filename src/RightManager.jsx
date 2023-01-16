import Sketch from "react-p5";
import Eq from "./Eq";

const RightManager = ({page}) => {
    function contentReturn(page_num) {
        switch (page_num) {
              case 0: 
                  return (
                    <div className="img-container">
                    <img className="right-img" src="images/welcome.png"/>
                    </div>
                  )
              case 1: 
              return (
                <img className="right-img" src="https://www.knime.com/sites/default/files/1-reinforcement-learning-ai.png"/>
              )
              case 2: 
              return (
                <img className="right-img" src="https://www.researchgate.net/publication/339665871/figure/fig1/AS:865163892772866@1583282554642/The-model-of-Q-learning-and-the-structure-of-Q-table.ppm"/>
              )
              case 4: 
              return (
                <img className="right-img" src="images/dog_train.png"/>
              )
              case 5: 
              return (
                <img className="right-img" src="images/cookie.png
                "/>
              )
              case 9: 
              return (
                <img className="right-img" src="https://nestedsoftware.com/assets/images/2019-07-25-tic-tac-toe-with-tabular-q-learning-1kdn.139811/5cxtk1igxig8b0qapwew.png"/>
              )
              
              
        
              case 10:
                return (<div className="math-container">
                  <Eq>
                <span className="eq_1"><Eq>{"\\(\ newQ(s_{t},a_{t})\\)"}</Eq></span> = <span className="eq_2"><Eq>{"\\(\ Q(s_{t},a_{t})\\)"}</Eq></span> + <span className="eq_3"><Eq>{"\\(\ \\alpha\\)"}</Eq></span> x [<span className="eq_4"><Eq>{"\\(\ r_{t+1}\\)"}</Eq></span> + <span className='eq_5'><Eq>{"\\(\ \\lambda\\)"}</Eq></span> x <span className='eq_6'><Eq>{"\\(\ \max_{a} Q(s_{t+1},a_{t+1})\\)"}</Eq></span> - <span className="eq_2"><Eq>{"\\(\ Q(s_{t},a_{t})\\)"}</Eq></span>]</Eq>
                </div>)
              case 15: 
              return (
                <img className="right-img" src="https://media.istockphoto.com/id/1344687455/vector/question-sing-flat-icon-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ZU6kq0hQacI7mZoYuXTqXF8KsgNnbCRaxDm_nAIdCAw="/>
              )
              case 16: 
              return (
                <img className="right-img" src="https://1.cms.s81c.com/sites/default/files/2021-01-06/ICLH_Diagram_Batch_01_03-DeepNeuralNetwork-WHITEBG.png"/>
              )
              case 17: 
              return (
                <img className="right-img" src="https://www.novatec-gmbh.de/wp-content/uploads/reinforcement_learning_loop-650x294.png"/>
              )
              case 18: 
              return (
                <img className="right-img" src="https://i.pinimg.com/originals/da/e0/06/dae006628997a936e843281fa68ae90b.jpg"/>
              )
              case 19: 
              return (
                <img className="right-img" src="https://shiftworkplace.com/wp-content/uploads/2017/06/Experience-photo.jpg"/>
              )
              case 20: 
              return (
                <img className="right-img" src="   https://img.freepik.com/premium-vector/congratulations-banner-template-with-balloons-confetti_619130-1027.jpg?w=2000"/>
              )

           
             
          
       

            default:
                break;
        }
    }
    return ( 
      <>
        {contentReturn(page)}
        </>
     );
}

<Eq>{"\\(\ newQ(s_{t},a_{t}) = Q(s_{t},a_{t})+\alpha*[r_{t+1}+\lambda*\max_{a}Q(s_{t+1},a)-Q(s_{t},a_{t})]\\)"}</Eq>

 
export default RightManager;