import React , {useState} from 'react'

export default function TempratureController() {
  const [temprature, setTemprature] = useState(0);

  function increse(){
    setTemprature(temprature+1);
  }
  function decrese(){
    setTemprature(temprature-1);
  }
  function reset(){
    setTemprature(0);
  }
    return (
    <div>
      <div className="container">
        <h1 className='title'>Temprature Controller</h1>
        <div className={`circle ${temprature > 0 ? "hot-class" :"cold-class"} ${temprature === 0? "normal": null}`}>
            <h1> {temprature}°</h1>
        </div>
        <div className='about'>
            <h5>{temprature}° Degree Farenheight</h5>
        </div>
        <div className="button-container">
            <button onClick={increse}>+</button>
            <button onClick={reset}><p>Reset</p></button>
            <button onClick={decrese}>-</button>
        </div>
      </div>
    </div>
  )
}
