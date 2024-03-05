import React from 'react'

const Userform = ({data, updateFieldHandler}) => {
  return (
    <div>
    <div className='form-control'>
      <label htmlFor="name">Nome:</label>
      <input type='name' id="name" name="name" placeholder="Digite o seu nome"
      required
      value={data.name || " "}
      onChange={(e) => updateFieldHandler("name", e.target.value)}
      />
    </div>
    <div className='form-control'>
      <label htmlFor="email">E-mail</label>
      <input type='email' id="email" name="email"placeholder="Digite o seu email"
      required
      value={data.email|| " "}
      onChange={(e) => updateFieldHandler("email", e.target.value)}
      />
    </div>
    </div>
  )
}

export default Userform;
