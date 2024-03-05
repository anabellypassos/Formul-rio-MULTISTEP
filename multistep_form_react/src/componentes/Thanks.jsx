import React from 'react'
import '../componentes/Thanks.css';
import {
  BsFillEmojiSmileFill,
  BsFillEmojiAngryFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
}from 'react-icons/bs'

const emojiData ={
  insatisfied:<BsFillEmojiFrownFill/>,
  neutral:<BsFillEmojiNeutralFill/>,
  satisfied:<BsFillEmojiSmileFill/>,
  very_satisfied:<BsFillEmojiAngryFill/>,

  
}

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco... </h2>
      <p>A sua opinião é muito importante,em breve você recebera um cupom de 10% 
        de desconto para a sua próxima compra. </p>

   <p>Para concluir a sua avaliação clique no botão enviar abaixo</p>
   <h3>Aqui está o resumo da sua avaliação:{data.name}</h3>
   <p className='review-data'>
    <span>Satisfação com o produto: </span>
    {emojiData[data.review]}
   </p>
   <p className='review-data'>
    <span>Comentário:</span>
    {data.comment}
   </p>
    </div>
  )
}

export default Thanks;
