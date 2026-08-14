import { FaBookmark } from "react-icons/fa";

const card = (props) => {
  return (
    <div className="card">
    
            <div className="top">
              <div className="logo">
                <img 
                  src={props.logo} 
                  alt="logo" 
                />
              </div>
    
              <button>
                Save <FaBookmark size={18} color="black" />
              </button>
            </div>
    
            <div className="center">
              
              <p id="companyName">{props.company}</p>
              <p id="uploadTime">{props.datePosted}</p>
              <h2 id="position">{props.post}</h2>
            </div>
            
            <div className="shift">
              <p>{props.shift}</p>
            </div>
            <div className="level">
              <p>{props.level}</p>
            </div>
            <hr/>
            <div className="bottom">
              <div className="salary">
                <p id="pay">{props.pay}</p>
                <p id="location">{props.loc}</p>
              </div>
    
              <div className="btn">
                <button>Apply now</button>
              </div>
            </div>
    
          </div>
  )
}

export default card
