import React from 'react';

class UserData extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.data;
    }

    componentDidUpdate(newProps) {
        this.setState(newProps)
    }

    render(){
        return (
            <>
            <h1>UserData</h1>
            {console.log(this.state)}
            </>
        )
    }
}

export default UserData;