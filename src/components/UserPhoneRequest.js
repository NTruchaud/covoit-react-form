import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export class UserPhoneRequest extends Component {
    
    continue = e => {
        e.preventDefault();
        console.log("[DEBUG]: should go in random4digitsNumber");
        this.props.values.confirmationCodeSent = this.random4digitNumber;
        console.log("[DEBUG]: and now to next step");
        this.props.nextStep();
    };

    random4digitNumber() {
        var val = Math.floor(1000 + Math.random() * 9000);
        console.log("[DEBUG] : " + val);
        return val;
    }


    render() {
        const { values, handleChange } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Entrez votre numéro de téléphone" />
                    <ValidatorForm ref='form' onError={errors => console.log(errors)}>
                        <TextValidator
                            floatingLabelText="N° de téléphone"
                            onChange={handleChange('phoneNumber')}
                            label="N° de téléphone"
                            name="phoneNumber"
                            value={values.phoneNumber}
                            validators={['required', 'matchRegexp:^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$']}
                            errorMessages={['Veuillez remplir ce champs', "Le numéro de téléphone n'est pas valide"]}
                        />
                        <br />
                        <RaisedButton 
                            label="Suivant"
                            primary={true}
                            disabled={!values.phoneNumber}
                            style={styles.button}
                            onClick={this.continue}
                        />
                    </ValidatorForm>
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
    