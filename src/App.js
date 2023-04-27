import { useRef } from 'react';
import VideoPics from './component/VideoPics';
import "./App.css";
export default function App() {
  const ref = useRef(null);
  return (
    <>
      <button onClick={() => ref.current.play()} className='btn btn-success'>
        Play
      </button>
      <button onClick={() => ref.current.pause()}>
        Pause
      </button>
      <br />
      <VideoPics
        ref={ref}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="250"
      />
      <h6><span style={{color:"blue",marginBottom:"12px"}}>Designed by:-👇</span> <br></br> <span style={{color:"green",fontSize:"15px"}}>Kamal Babu (<span style={{color:"purple"}}>React Developer</span>)</span></h6>
    </>
  );
}
