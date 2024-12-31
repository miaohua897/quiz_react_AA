import { reviewData } from "../mockdata/reviewData";
import ReviewSingleQuestion from "./ReviewSingleQuestion";

const Review =()=>{

    return (
        <div>
            <form>
                <div>Learning with fun🤩</div>
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
            </form>
        </div>
    )
}
export default Review;