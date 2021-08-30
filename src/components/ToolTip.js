import React from 'react';




class Tooltip extends React.Component {

    render(){
        // styling for tooltip buttons
        const posi=this.props.position;
        return (

            <div className="tool-tip">
                    <span className='tooltip-content'>Hover on the tooltip button to get result</span>
                    <button id='show-tip-btn'>
                        Tooltip
                        <span id="tooltip-container" className={posi}>
                            this is a tooltip shown at {posi}
                        </span>
                    </button>

                    

            </div>
        );

        
    }
}



export default Tooltip;