import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    
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
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Félicitation !" />
                    <h1>Merci de vous être inscrit, et à bientôt sur la route !</h1>
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

export default Success
    