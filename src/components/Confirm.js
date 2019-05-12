import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    
    continue = e => {
        e.preventDefault();

        // SEND DATA TO API (or DB) HERE

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { phoneNumber, firstName, lastName, email, birthDate, password } } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirmer votre saisie" />
                    <List>
                        <ListItem 
                            primaryText="Prénom"
                            secondaryText={ firstName }
                        />
                        <ListItem 
                            primaryText="Nom"
                            secondaryText={ lastName }
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={ email }
                        />
                        <ListItem 
                            primaryText="N° de téléphone"
                            secondaryText={ phoneNumber }
                        />
                        <ListItem 
                            primaryText="Date de naissance"
                            secondaryText={ birthDate }
                        />
                    </List>
                    <br />
                    <RaisedButton 
                        label="Confirmer"
                        primary={true}
                        style={styles.button}
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

export default Confirm
    