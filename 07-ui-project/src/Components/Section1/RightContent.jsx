import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div id="right" className=" flex flex-nowrap gap-10 h-full w-2/3 p-6 overflow-x-scroll">
      
        {props.users.map((elem,idx)=>{
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>;
        })}
        
    </div>
  )
}

export default RightContent