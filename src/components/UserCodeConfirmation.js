import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

export class UserCodeConfirmation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Entrez votre code de confirmation" />
                    <Snackbar
                        open={this.state.open}
                        autoHideDuration={600000}
                        message={<span id="message-id">Votre code est {values.codeConfirmationSent}</span>}
                        /> 
                    <TextField
                        floatingLabelText="Code de confirmation"
                        onChange={handleChange('confirmationCode')}
                        defaultValue={values.confirmationCode}
                    />
                    <br />
                    <RaisedButton 
                        label="Suivant"
                        primary={true}
                        style={styles.button}
                        disabled={!values.confirmationCode}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Précédent"
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
    button: {
        margin: 15
    }
}

export default UserCodeConfirmation
    