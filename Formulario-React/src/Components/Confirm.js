import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export default class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        //onde você processario seu formulario//
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
      const { values: { primeiroNome,sobrenome,email,occupation,cidade,bio} } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Confirmar dados de usuario" />
            <List>
                <ListItem 
                primaryText="Nome"
                secondaryText={ primeiroNome }
                />
                <ListItem 
                primaryText="Sobrenome"
                secondaryText={ sobrenome }
                />
                <ListItem 
                primaryText="E-mail"
                secondaryText={ email }
                />
                <ListItem 
                primaryText="Profissão"
                secondaryText={ occupation }
                />
                <ListItem 
                primaryText="Cidade"
                secondaryText={ cidade }
                />
                <ListItem 
                primaryText="Bio"
                secondaryText={ bio }
                />
            </List>
            <br/>
            <RaisedButton 
            label="Confirmar e continuar"
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

