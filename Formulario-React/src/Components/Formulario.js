import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Sucess from './Sucess'

export default class formulario extends Component {
  state = {
    //controlar a mudança de campo em tempo real
    step:1,
    primeiroNome: '',
    sobrenome: '',
    email: '',
    occupation: '',
    cidade: '',
    bio: ''
  }

  //ir para proximo passo
  proximoPasso = () =>{
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  };
  //ir para passo anterior
  passoAnterior = () =>{
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  };

  // Lidar com a mudança dos campos e atualizar o state
  handleChange = input => e =>{
    this.setState({[input]: e.target.value})
  }

render() {
  //desestruturação e tirando o passo de dentro do state
  //desestruturação e tirando os valores de dentro do state
  const { step } = this.state
  const { primeiroNome,sobrenome,email,occupation,cidade,bio } = this.state
  const values = { primeiroNome,sobrenome,email,occupation,cidade,bio }
  //switch para mudar o passo de acordo com o state
  //de acordo com o step, muda o passo que você está
  //caso você estiver em algum caso, é redirecionado para o component indicado
  switch(step){
    case 1:
      return(
        <FormUserDetails 
          proximoPasso = {this.proximoPasso}
          handleChange = {this.handleChange}
          values = {values}
        />
      )
      case 2:
        return(
          <FormPersonalDetails 
            proximoPasso = {this.proximoPasso}
            passoAnterior = {this.passoAnterior}
            handleChange = {this.handleChange}
            values = {values}
          />
        )
      case 3:
      return(
        <Confirm 
          proximoPasso = {this.proximoPasso}
          passoAnterior = {this.passoAnterior}
          values = {values}
        />
      )
      case 4:
        return <Sucess/>
      }
    }
  }