import './Msg.css';
import stork from './img/stork.webp'

function Msg() {
  return (
    <div>
        <h1>Welcome to our react courses</h1>
        <img className="msg-img" src="https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_640.jpg" alt="" />
        <img src={stork} alt="" className="msg-img" style={{opacity:.5}}/>
    </div>
  )
}

export default Msg;