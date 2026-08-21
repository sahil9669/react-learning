

function btnclicked(){
  console.log("button is clicked");
}

function btnhover(){
  count++;
  console.log(count);
}

const App = () => {
  return (
    <div>
      <button 
  onMouseEnter={() => console.log("ENTER")}
  onMouseLeave={() => console.log("LEAVE")}
  onMouseMove={() => console.log("MOVE")}
  onClick={() => console.log("CLICK")}
>
  Test Button
</button>
      
    </div>
  )
}

export default App