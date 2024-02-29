import React from 'react'
import {
  BsFillEmojiSmileFill,
  BsFillEmojiAngryFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill
}from 'react-icons/bs'
import "../componentes/ReviewForm.css";
const ReviewForm = ({data,updateFieldHandler}) => {
  return (
    <div className="review-form">
<div className="form-control score-container">

<label className='radio-container'>

<input type="radio" value="insatisfied" name="review" 
checked={data.review === "insatisfied "}
onChange={(e) => updateFieldHandler("review", e.target.value)}required/>
<BsFillEmojiAngryFill/>
<p>Insatisfeito</p>
</label>

<label className='radio-container'>

<input type="radio" value="neutral" name="review"

 checked={data.review === "neutral"}
onChange={(e) => updateFieldHandler("review", e.target.value)}required
 />
<BsFillEmojiNeutralFill/>
<p>Poderia ser melhor</p>
</label>

<label className='radio-container'>

<input type="radio" value="very_satisfied" name="review"checked={data.review === "satisfied "}
onChange={(e) => updateFieldHandler("review", e.target.value)}required/>
<BsFillEmojiSmileFill/>
<p>Satisfeito</p>
</label>

<label className='radio-container'>

<input type="radio" value="very_satisfied" name="review" required/>
<BsFillEmojiHeartEyesFill/>
<p>Muito Satisfeito</p>
</label>


</div>
<div className="form-control">
  <label htmlFor="comment">Comentário:</label>
  <textarea name="comment" 
  id="comment" 
  placeholder="Conte como foi a sua esperiencia com o produto"
  required
  value={data.comment|| " "}
      onChange={(e) => updateFieldHandler("comment", e.target.value)}>

  </textarea>
</div>
    </div>
  );
};

export default ReviewForm;
