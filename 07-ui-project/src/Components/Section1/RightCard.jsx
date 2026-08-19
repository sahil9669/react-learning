import React from 'react'
import RightCardContent from './RightCardContent';



const RightCard = (props) => {
  return (
    <div className='h-full w-72 overflow-hidden relative rounded-4xl shrink-0'>
        <img className="h-full w-full object-cover object-[68%_50%]" src={props.img} alt="image"/>

        <RightCardContent tag={props.tag} id={props.id}/>
    </div>
  )
}

export default RightCard