import React from 'react';
import TooltipButton from './TooltipButton';
import Positionselector from './Positionselector';

class Main extends React.Component {
    constructor(){
        super();
        this.state = {pos:'top'};

    }
    changePos = (posi) =>{
        this.setState({pos:posi});
        var block =document.querySelectorAll('.postionblock');
        block.forEach(block => {
            block.style.backgroundColor= 'maroon';
        });
        document.getElementById(posi).style.backgroundColor = 'red';
        console.log(this.state);
    }

    render(){
        return (
            <div style={styles.main} className="main">
                <Positionselector posFunc={this.changePos} />
                <TooltipButton position={this.state.pos}/>
            </div>
        );
    }
}
const styles= {
  main:{
      margin:'20px 0 0 20px',
      display:'flex'
  }
 }

export default Main;