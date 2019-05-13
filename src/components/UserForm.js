import React, { Component } from 'react';
import UserPhoneRequest from './UserPhoneRequest';
import UserCodeConfirmation from './UserCodeConfirmation';
import UserPersonalDetails from './UserPersonalDetails';
import { Confirm } from './Confirm';
import { Success } from './Success';

export class UserForm extends Component {
    
    constructor(props){
        super(props);

        this.handleCodeGeneration = this.handleCodeGeneration.bind(this);
    }

    state = {
        step: 1,
        phoneNumber: '',
        confirmationCode: '',
        firstName: '',
        lastName: '',
        email: '',
        birthDate: new Date(),
        password: '',
        confirmationCodeSent: ''
    }

    // Go to the next step 
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    
    // Come back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    // Handle code generation
    handleCodeGeneration(code) {
        this.setState({
            confirmationCodeSent: code
        });
    }
    
    render() {
        const { step } = this.state;
        const { phoneNumber } = this.state;
        const { confirmationCode } = this.state;
        const { firstName } = this.state;
        const { lastName } = this.state;
        const { email } = this.state;
        const { birthDate } = this.state;
        const { password } = this.state;
        const { confirmationCodeSent } = this.state;
        const values = { phoneNumber, confirmationCode, firstName, lastName, email, birthDate, password, confirmationCodeSent };
        
        switch(step) {
            case 1:
                return (
                    <UserPhoneRequest 
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        handleCodeGeneration={ this.handleCodeGeneration }
                        values={ values }
                    />
                )
            case 2:
                return (
                    <UserCodeConfirmation
                        nextStep={ this.nextStep }
                        prevStep={ this.prevStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 3:
                return (
                    <UserPersonalDetails
                        nextStep={ this.nextStep }
                        prevStep={ this.prevStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 4:
                return (
                    <Confirm 
                        nextStep={ this.nextStep }
                        prevStep={ this.prevStep }
                        values={ values }
                    />
                )
            case 5:
                return (
                    <Success />
                )
        }
    }
}
                
export default UserForm
                