import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import axios from 'axios'

class InputForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ID:''}
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        const headers = {
            "Content-Type": 'application/x-www-form-urlencoded',
            "Accept": 'application/json'
        }
        axios.post("http://localhost:5000/api/person", this.state, headers).then((response) => {
            // console.log(response.data)
            this.props.responseData(response.data);
        }, (err) => {
            console.log(err)
        })
        console.log("Lmao " + this.state['ID'])
    }

    render () {
        return(
            <>
            <form id="sendId">
                <TextField name='ID' variant="outlined" label="ID Number" required="true" onChange={this.onChange}/><br/>
                <Button color="primary" variant="contained" onClick={this.onSubmit}>Submit</Button>
            </form>
            </>
        )
    }
}

export default InputForm;
