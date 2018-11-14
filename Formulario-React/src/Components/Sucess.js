import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export default class Sucess extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Dados Enviados" />
                    <h1>
                        Obrigado por sua contribuação
                    </h1>
                    <p>
                        Você recebera um email com mais informações
                    </p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }

}