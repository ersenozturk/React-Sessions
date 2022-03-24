import React from 'react';


const AddEvents = () => {

  function shoot() {
    alert('Great Shot!')
}

  return (
    <div>
        <button onClick={shoot}>Take the Shoot111</button>
        <button onClick={()=>shoot()}>Take the Shoot222</button>
    </div>
  );
};

export default AddEvents;