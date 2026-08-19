
import { ArrowRight } from 'lucide-react';


const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl h-14 w-14 flex justify-center items-center rounded-full font-semibold'>{props.id+1}</h2>
        <div>
          <p className='flex justify-self-start mb-12 text-white leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti esse quaerat voluptatum totam quod reiciendis!</p>
            <div className='flex justify-between items-center py-3'>
                <button className='bg-blue-400 text-white px-8 py-2 rounded-4xl'>{props.tag}</button>
                <button className='bg-blue-400 text-white rounded-full p-1.5'><ArrowRight size={30}/></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent