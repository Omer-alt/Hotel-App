import React, {useState, useRef} from 'react'
import '../../styles/newletter.css'

const NewLetter = () => {

  const [endEmail, setEndEmail] = useState("")
  const emailRef = useRef("")

  const handleChange = ()=>{
    setEndEmail(emailRef.current.value)
  }

  function validation(){

    var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    document.getElementById('resultat').innerHTML = "";
    console.log(endEmail)

    if (expressionReguliere.test(endEmail)){

      document.getElementById('resultat').innerHTML = "succes de soumission!";
      document.getElementById('resultat').style.color = '#00FF00';
      emailRef.current.value = "";
      setEndEmail("")
    } else {

      document.getElementById('resultat').innerHTML = "L'adresse mail n'est pas valide!";
      document.getElementById('resultat').style.color = 'red';
    }
    return false;
  }

  return (
    <div className='newLetter'>
        <div>
            <h1 className='newLetterLeft'>
                Subscribe to our Newsletter <br/>
                Get the 50%  off
            </h1>
        </div>
        <div className='yourMail'>
          <div className='newLetterRight'>
            <input ref={emailRef} placeholder='INSERT YOUR EMAIL' onChange={handleChange} id="emailInput"></input>
            <button 
              id='newLetterButton'  
              className='newLetterButton' 
              type='submit'
              onClick={validation}
            >SUBMIT</button>
          </div>
          <span id='resultat'></span>
        </div>
    </div>
  )
}

export default NewLetter