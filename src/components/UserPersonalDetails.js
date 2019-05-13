import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export class UserPersonalDetails extends Component {


    constructor(props) {
        super(props);
        this.state = {
            passwordInputType : 'password'
        }
        this.showHide = this.showHide.bind(this);
    }
    

    // Show / Hide password
    showHide(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            passwordInputType: this.state.passwordInputType === 'input' ? 'password' : 'input'
        })  
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
        const { values, handleChange, validatorListener } = this.props;
        
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
                            floatingLabelText="Email"
                            onChange={handleChange('email')}
                            value={values.email}
                            label="Email"
                            name="email"
                            validatorListener={validatorListener}
                            validators={['required', 'isEmail']}
                            errorMessages={['Veuillez remplir ce champs', "Le mail saisi n'est pas valide"]}
                        />
                        <br />
                        <TextValidator
                            floatingLabelText="Mot de passe"
                            onChange={handleChange('password')}
                            type={this.state.passwordInputType}
                            value={values.password}
                            label="password"
                            name="password"
                            validators={['required']}
                            errorMessages={['Veuillez remplir ce champs']}
                        />
                        <RaisedButton 
                            label="Afficher"
                            primary={false}
                            style={styles.button}
                            onClick={this.showHide}
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

export default UserPersonalDetails
    