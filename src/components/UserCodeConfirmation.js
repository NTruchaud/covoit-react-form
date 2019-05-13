import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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

    componentDidMount() {
        // custom rule will have name 'isCodeMatching'
        ValidatorForm.addValidationRule('isCodeMatching', (value) => {
            if (value != this.props.values.confirmationCodeSent) {
                return false;
            }
            return true;
        });
    }

    render() {
        const { values, handleChange, validatorListener } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Entrez votre code de confirmation" />
                    <p>Votre code est : { values.confirmationCodeSent }</p>
                    <ValidatorForm ref='form' onError={errors => console.log(errors)}>

                        <TextValidator
                        floatingLabelText="Code de confirmation"
                        onChange={handleChange('confirmationCode')}
                        label="Code de confirmation"
                        name="confirmationCode"
                        value={values.confirmationCode}
                        validators={['required', 'isCodeMatching']}
                        validatorListener={validatorListener}
                        errorMessages={['Veuillez remplir ce champs', "Le code ne correspond pas au code qui vous a été envoyé"]}
                        />
                        <br />
                        <RaisedButton 
                            label="Suivant"
                            primary={true}
                            style={styles.button}
                            disabled={values.disabled}
                            onClick={this.continue}
                        />
                        <RaisedButton 
                            label="Précédent"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
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

export default UserCodeConfirmation
    