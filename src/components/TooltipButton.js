import React from 'react';




class TooltipButton extends React.Component {
    componentDidUpdate(){
        let posi = this.props.position;
        let tooltip= document.getElementById("tooltip-conatiner")
        console.log("posi update: ", posi)
        if(posi==='top'){
            tooltip.style.top="70px"
            tooltip.style.left="180px"

        }else if(posi==='bottom'){
            tooltip.style.top="170px"
            tooltip.style.left="180px"

        }else if(posi==='right'){
            tooltip.style.top="120px"
            tooltip.style.left="350px"

        }else  if(posi==='left'){
            tooltip.style.top="120px"
            tooltip.style.left="30px"

        }
        
    }

    componentDidMount(){
        let tooltip= document.getElementById("tooltip-conatiner")
        tooltip.style.top="70px"
        tooltip.style.left="180px"
        tooltip.style.display="none"
        let showtip= document.getElementById("show-tip")
        showtip.onmouseover = function(){
            tooltip.style.display='block'
        }
        showtip.onmouseout = function(){
            tooltip.style.display = 'none'
        }
        
    }

    render(){
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
                position:"relative",
                margin:'20px 0 0 50px',
                height:'270px',
                width:'600px',
                paddingleft:'200px',
                border:'solid 1px black',
                display:'flex',
                justifyContent:'space-around',
                alignItems:'center',
                backgroundColor:'lightgrey',
            },
            tooltip:{
                position:'absolute',
                backgroundColor:'white',
                padding:"5px",
                border:"1px solid black",
                top:'0'
            }
        }
        const posi=this.props.position;
        return (

            <div style={styles.buttonDiv} className="TooltipButton ">

                <button style={styles.button}  id='show-tip'>
                    Tooltip
                </button>

                <div style={styles.tooltip} id="tooltip-conatiner">
                    this is a tooltip shown at {posi}
                    
                </div>

            </div>
        );

        
    }
}



export default TooltipButton;