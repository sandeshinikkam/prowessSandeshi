import Challenge from "../../Challenge";


function Challengepage(props){

    return(

        <div>
            <button className="Card">
            <p>{props.title}</p>
             <p>{props.score}</p> 
              </button>
            
            <h1>Programming</h1>
        </div>
    )
}
export default Challengepage;