import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Sucess from './Sucess'

export default class formulario extends Component {
  state = {
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

  // Lidar com a mudança dos campos
  handleChange = input => e =>{
    this.setState({[input]: e.target.value})
  }

render() {
  const { step } = this.state
  const { primeiroNome,sobrenome,email,occupation,cidade,bio } = this.state
  const values = { primeiroNome,sobrenome,email,occupation,cidade,bio }
    
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