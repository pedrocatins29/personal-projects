import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.proximoPasso();
    }
    handleKeyPress = e =>{
      if (e.key === 'Enter') {
        e.preventDefault();
        this.props.proximoPasso();
    }
  }
  render() {
      const { values,handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Dados de usuario" />
            <TextField
            hintText="Digite seu nome"
            floatingLabelText="Nome"
            onChange={handleChange('primeiroNome')}
            defaultValue={values.primeiroNome}
            />
            <br/>
            <TextField
            hintText="Digite seu Sobrenome"
            floatingLabelText="Sobrenome"
            onChange={handleChange('sobrenome')}
            defaultValue={values.sobrenome}
            />
            <br/>
            <TextField
            hintText="Digite seu e-mail"
            floatingLabelText="e-mail"
            onChange={handleChange('email')}
            defaultValue={values.email}
            onKeyDown={this.handleKeyPress}
            />
            <br/>
            <RaisedButton 
            label="Continuar"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button:{
    margin: 15
  }
}

