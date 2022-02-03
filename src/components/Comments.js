import React, {useState} from "react";

function Comments({data}) {
    const [commentButton, commentView] = useState(true)
    function setButton() {
        commentView(!commentButton)
        return ( 
            <button onClick={setButton}>
                {commentButton ? "Hide Comments" : "Show Comments"}
            </button>
        )
    }

    function renderComments() {
        const commentArray = data.comments.map((comment) => {
            return (
                <div>
                    <h3>{comment.user}</h3>
                    <p>{comment.comment}</p>
                </div>
            )
        })
        return (
            <div>
                <h2>{data.comments.length} Comments</h2>
                {commentArray}
            </div>
        )
    }

    return (
            <div>
                <button onClick={setButton}>
                {commentButton ? "Hide Comments" : "Show Comments"}
                </button>
                <hr></hr>
                {commentButton ? renderComments() : null}
            </div>
    )

}

export default Comments