import React from 'react'

const Card = ({...each}) => {
  return (
    <div>
        {each.title}
    </div>
  )
}

export default Card