import React, { useState } from 'react';
import{GrFormNext, GrFormPrevious} from 'react-icons/gr';
import UserForm from "../src/componentes/Userform";
import ReviewForm from "./componentes/ReviewForm";
import Thanks from "./componentes/Thanks";
import Steps from './Steps';
import './App.css'
//Hooks
import useForm from '../src/hooks/useForm'




const formTemplate ={
  name:"",
  email:"",
  review:"",
  comment:"",
}

function App() {
const [data, setData] = useState (formTemplate);
const updateFieldHandler =(key, value ) =>{
  setData((prev) => {
    return{...prev, [key]: value};
  })
}

const fromComponents =[ 
<UserForm data={data}updateFieldHandler={updateFieldHandler}/>, 
< ReviewForm data={data}updateFieldHandler={updateFieldHandler}/>,
  <Thanks data={data}/>,
];

const {currentStep, currentComponent,changeStep,isLastStep,isFirstStep}= useForm(fromComponents)




  return (

  
      <div  className="app">
        <div className="header">

          <h2>Deixe dua avaliação</h2>
          <p>Ficamos felizes com a sua compra, utilize o fórmulario abaixo para avaliar o produto</p>
        </div>
        <div className="form-container">
       <Steps currentStep ={currentStep}/>
      <form onSubmit={(e)=>changeStep (currentStep+ 1, e)}>
        <div className="inputs-container">{currentComponent}</div>
      <div className="actions">
    {!isFirstStep && (  <button type="button" onClick={() => changeStep(currentStep - 1)}>
        <GrFormPrevious/>
        <span>Voltar</span>
      </button>)}
      {!isLastStep ? (
        <button type="submit">
        <span>Avançar</span>
      <GrFormNext/>  
      </button>
      ):(
        <button type='button'>
          <span>Enviar</span>
     
        </button>
      )}
  
      </div>
      </form>
              </div>
      </div>

  );
}


export default App
