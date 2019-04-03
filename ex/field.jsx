import React, {Component} from 'react';

class Field extends Component{
    constructor(props){
        super(props);
        this.state = {value: props.initialValue};
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event){
        this.setState({value: event.target.value});
    }

    render(){
        return (
            <div>
                <h2>{this.state.value}</h2>
                <input type="text" onChange={this.changeValue} value={this.state.value} />
            </div>
        );
    }

}
export default Field