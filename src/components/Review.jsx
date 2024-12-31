import { reviewData } from "../mockdata/reviewData";
import ReviewSingleQuestion from "./ReviewSingleQuestion";
import { useState } from "react";

const Review =()=>{
    const [name,setName] = useState('');
    const selectedReview = reviewData.find(el => el.name === name);
    console.log('selectedReview ',selectedReview );
    return (
        <div >
            <form className="reviewpage">
                <div >Learning with fun🤩</div>
                <p className="reviewInfo">
                   {selectedReview?`${selectedReview.info}`:'select one'}  
                    </p>
                    <div >
                    <select onChange = {(e)=>{setName(e.target.value)}} className='reviews'>
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
                    </div>
               
                
            </form>
        </div>
    )
}
export default Review;