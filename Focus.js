export default function Focus() {
  function handleClick(){
    let randomNum=Math.floor(Math.random()*3)+1;
    console.log(randomNum);
    let ui=prompt('type a number')
    alert(`Computer: ${randomNum}, Yours: ${ui}`)
  }
  
  return (
    <div>
      <h1>
        <button onClick={handleClick} >Guess the number between 1 and 3.</button>
      </h1>
    </div>
  );
}
