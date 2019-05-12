import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export class UserPersonalDetails extends Component {

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
                    <AppBar title="Entrez vos informations personnelles" />
                    <ValidatorForm ref='form' onError={errors => console.log(errors)}>
                        <TextValidator
                            floatingLabelText="Prénom"
                            onChange={handleChange('firstName')}
                            value={values.firstName}
                            label="firstName"
                            name="firstName"
                            validators={['required']}
                            errorMessages={['Veuillez remplir ce champs']}
                        />
                        <br />
                        <TextValidator
                            floatingLabelText="Nom"
                            onChange={handleChange('lastName')}
                            value={values.lastName}
                            label="lastName"
                            name="lastName"
                            validators={['required']}
                            errorMessages={['Veuillez remplir ce champs']}
                        />
                        <br />
                        <TextValidator
                            floatingLabelText="Email"
                            onChange={handleChange('email')}
                            value={values.email}
                            label="Email"
                            name="email"
                            validators={['required', 'isEmail']}
                            errorMessages={['Veuillez remplir ce champs', "Le mail saisi n'est pas valide"]}
                        />
                        <br />
                        <TextValidator
                            floatingLabelText="Date de naissance"
                            onChange={handleChange('birthDate')}
                            value={values.birthDate}
                            label="Date de naissance"
                            name="birthDate"
                            type="date"
                            validators={['required']}
                            errorMessages={['Veuillez remplir ce champs']}
                        />
                        <br />
                        <TextValidator
                            floatingLabelText="Mot de passe"
                            onChange={handleChange('password')}
                            value={values.password}
                            label="password"
                            name="password"
                            validators={['required']}
                            errorMessages={['Veuillez remplir ce champs']}
                        />
                        <br />
                        <RaisedButton 
                            label="Suivant"
                            primary={true}
                            style={styles.button}
                            disabled={!values.firstName || !values.lastName || !values.email || !values.birthDate || !values.password}
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

export default UserPersonalDetails
    