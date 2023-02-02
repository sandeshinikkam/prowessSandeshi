import './css/challenge.css'
import Header from "./Header";
import {useState} from 'react'


function Challenge(){
    
    const [selectedChallenge, setSelectedChallenge] = useState({});
    const handleClick = (challenge) => {
    setSelectedChallenge(challenge); 
    
    
    const technologies = ["Programming", "Linux"]
    const programming = [

        {
             title: "Server Addition",
              score: 15
        },

        {
       
            title: "Reverse Gear",
             score: 15
        
        },

        {
            title: "Mathematically Beauty!",
            score: 95
        }
    ]
     const linux = [
        {
         title: "Read File",
             score: 10
        },
           {
             title: "Hidden Files",
              score: 20
             },
             
               {
                 title: "Unique Flag",
                  score: 20
                },
                 
                { 
                    title: "Pain in a dash!",
                    score: 25
                },
                  
                   {
                     title: "Eleven", 
                     score: 30 
                    }
    ]
    return(
        <div>
            <Header></Header>
            <div className="content-ctn">
            <h1 id="challenges">Challenges</h1>
            <div className='technology'> 
            <h2 className='tech-title'>{technologies[0]}</h2>
             <div className='cards-ctn'>{
              programming.map(x => (
              
              <Challenge title={x.title} score={x.score} onClick={() => handleClick(x)}></Challenge>
               ))
                }</div>
                </div>
                 <div className='technology'>
                  <h2 className='tech-title'>{technologies[1]}</h2>
                   <div className='cards-ctn'>{
                   linux.map(x => ( 
                   
                   <Challenge title={x.title} score={x.score} onClick={() => handleClick(x)}></Challenge>
                   ))
                    }</div>
                    </div>
                    </div>
                    
                    </div>

        
    )
}
}
export default Challenge;