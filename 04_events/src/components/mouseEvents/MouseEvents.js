import { useState } from 'react';
import './styles.css';

const MouseEvents = () => {

/* array descructing-->  
  const arr = [1,2]
  const [a,b] = arr
  console.log(a,b); */

  const [coordX, setcoordX] = useState();
  const [positionY, setPositionY] = useState()


  //* click event
  const handleClick = (e)=>{
    // console.log(e);
    // console.log(e.type);
    // console.log('trg=>>>', e.target);
    // console.log('currenttrg=>>>', e.currentTarget);
    // console.log(e.target.tagName);
    // e.target.tagName === 'SPAN' && e.target.remove();
    // e.target.tagName === 'SPAN' && e.target.parentElement.remove(); //!same output with below line
    // e.target.tagName === 'SPAN' && e.currentTarget.remove();
  }

  //* doubleClick event
  const handleDoubleClick = (e) => {
    console.log(e.target.innerText);
  }

  // mouseMove event
  const handleMouseMove = (e) => {
/*   console.log(e)
    console.log(e.nativeEvent.offsetX)
    console.log(e.pageX) */
    setcoordX(e.pageX)
    setPositionY(e.pageY)
  }

  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>X {coordX} </span> and Y {positionY}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>X</span>
          </li>

          <li id="todo-2 " onDoubleClick={handleDoubleClick}>
            todo item 2 <span>X</span>
          </li>

          <li onMouseMove={handleMouseMove}>
            todo item 3 <span>X</span>
          </li>

          <li>
            todo item 4 <span>X</span>
          </li>
          
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
