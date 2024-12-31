import { reviewData } from "../mockdata/reviewData";
import ReviewSingleQuestion from "./ReviewSingleQuestion";
import { useState } from "react";

const Review =()=>{
    const [name,setName] = useState('');
    return (
        <div>
            <form>
                <div>Learning with fun🤩</div>
                <p>{name}</p>
                <select onChange = {(e)=>{setName(e.target.value)}}>
                {
                          
                          reviewData.map(r=>{
                              return (
                            
                                   < ReviewSingleQuestion
                                  index ={r.id}
                                  name ={r.name}
                                  info ={r.info}
                                  key ={r.id}
                                  >
                                  </ReviewSingleQuestion>
                               
                              )
                          })
                                    
                      }
                </select>
                
            </form>
        </div>
    )
}
export default Review;