import React,{useState} from 'react'

function Votes({data}){
    const [upVotes,setUpVotes] = useState(data.upvotes)
    const [downVotes,setDownVotes] = useState(data.downvotes)
    function changeUpVotes(){

        setUpVotes(upVotes+ 1)
    }
    function changeDownVotes(){
        setDownVotes(downVotes - 1)
    }
    return (
        <div id='button'>
            <button onClick={changeUpVotes}> 👍{upVotes}</button>
            <button onClick={changeDownVotes}> 👎{downVotes}</button>
        </div>
    )
}

export default Votes