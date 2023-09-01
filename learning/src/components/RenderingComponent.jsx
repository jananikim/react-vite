import React, {Component} from 'react';

export class RenderingComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            text: "",
            show: false,
            fruits:["Apple","Orange","Grapes","Mango"]
        };
    }
    changeShow(){
        this.setState({
            show:!this.state.show
        });
    }
    render(){
        var variable=this.state.show? 'Hide':'Show';
        return(
            <>
            <h1>Fruit</h1>
            <ul>
            {this.state.fruits.map(fruit=>{
                return<li key={fruit}>{fruit}</li>;

             })}
             </ul>
             <div>RenderingComponent</div>
             {this.state.show && this.state.text}
             <button onClick={()=> this.changeShow()}>{variable}</button>
            </>
            
        )
    }
}

export default RenderingComponent;