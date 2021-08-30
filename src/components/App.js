import React from 'react';
import ToolTip from './ToolTip';
import Positionselector from './Positionselector';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            pos:'top'
        };

    }
    changePos = (pos) =>{
        this.setState({
          pos:pos
        });
    }

    render(){
        return (
            <div className="app">
                <Positionselector position={this.state.pos} posFunc={this.changePos} />
                <ToolTip position={this.state.pos}/>
            </div>
        );
    }
}


export default App;