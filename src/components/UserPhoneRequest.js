import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export class UserPhoneRequest extends Component {

    continue = e => {
        e.preventDefault();
        var code = this.random4digitNumber();

        this.props.handleCodeGeneration(code);
        this.props.nextStep();
    };

    random4digitNumber() {
        var val = Math.floor(1000 + Math.random() * 9000);
        // console.log("[DEBUG] : " + val);
        return val;
    }

    render() {
        const { values, handleChange, validatorListener } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Entrez votre numéro de téléphone" />
                    <ValidatorForm ref='form' onError={errors => console.log(errors)}>
                        <TextValidator
                            className="phoneNumber"
                            floatingLabelText="N° de téléphone"
                            onChange={handleChange('phoneNumber')}
                            label="N° de téléphone"
                            name="phoneNumber"
                            value={values.phoneNumber}
                            validatorListener={validatorListener}
                            validators={['required', 'matchRegexp:^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$']}
                            errorMessages={['Veuillez remplir ce champs', "Le numéro de téléphone n'est pas valide"]}
                        />
                        <br />
                        <RaisedButton 
                            className="nextButton"
                            label="Suivant"
                            primary={true}
                            disabled={values.disabled}
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
    