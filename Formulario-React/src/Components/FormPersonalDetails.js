import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class FormPersonalDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.proximoPasso();
    }
    back = e =>{
        e.preventDefault();
        this.props.passoAnterior();
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
            <AppBar title="Dados pessoais" />
            <TextField
            hintText="Digite sua profissão"
            floatingLabelText="Profissão"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
            />
            <br/>
            <TextField
            hintText="Digite sua cidade"
            floatingLabelText="Cidade"
            onChange={handleChange('cidade')}
            defaultValue={values.cidade}
            />
            <br/>
            <TextField
            hintText="Digite um pouco sobre você"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            onKeyDown={this.handleKeyPress}
            />
            <br/>
            <RaisedButton 
            label="Continuar"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            />
            <RaisedButton 
            label="Voltar"
            primary={false}
            style={styles.button}
            onClick={this.back}
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

