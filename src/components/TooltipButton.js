import React from 'react';
//mpn install react-tooltip
import ReactTooltip from "react-tooltip";

class TooltipButton extends React.Component {
    
    render(){
        const posi=this.props.position;
        console.log(posi, "psoi");
        return (

            <div style={styles.buttonDiv} className="TooltipButton ">

                <button style={styles.button}   data-tip data-for="tip">
                    Tooltip
                </button>

                <ReactTooltip id="tip" place={posi} effect="solid">
                    this is a tooltip shown at {posi}
                </ReactTooltip>

            </div>
        );

    }
}

// styling for tooltip buttons
const styles= {
    button:{
        height:'50px',
        width:'100px',
        backgroundColor:'grey',
        color:'white',
        fontSize:'1.5rem'

    
    },
    buttonDiv:{
        margin:'20px 0 0 50px',
        height:'270px',
        width:'600px',
        paddingleft:'200px',
        border:'solid 1px black',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'lightgrey',
        
    
  }
}

export default TooltipButton;