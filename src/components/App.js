import video from "../data/video.js";
import Votes from './Votes'
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Votes data={video}/>
      <Comments data={video}/>
    </div>
  );
}

export default App;
