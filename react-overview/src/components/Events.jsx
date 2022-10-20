import React from 'react'

const Events = () => {
    let araba = 'auris 2007'
    const handle1 = () =>{
        alert('11 clicked')
    }
    const handle2 = (info) =>{
        alert(info)
    }
    const handle3 = (e) =>{
        console.log(e.target);
    }

  return (
    <div>
        <hr />
        <div>
            {araba}
        </div>
        <button onClick={handle1}>1111</button>
        <button onClick={()=>handle2('2. btn clicked')}>2222</button>
        <button onClick={(e)=>handle3(e)}>333</button>
    </div>
  )
}

export default Events