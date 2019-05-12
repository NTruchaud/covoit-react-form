import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class UserPhoneRequest extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    } 

    render() {
        const { values, handleChange } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Entrez votre numéro de téléphone" />
                    <TextField
                        floatingLabelText="N° de téléphone"
                        onChange={handleChange('phoneNumber')}
                        defaultValue={values.phoneNumber}
                    />
                    <br />
                    <RaisedButton 
                        label="Suivant"
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
    button: {
        margin: 15
    }
}

export default UserPhoneRequest
    