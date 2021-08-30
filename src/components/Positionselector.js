import React from 'react';

class PositionSelector extends React.Component {

    setPosition =(e)=>{
        let value = e.target.getAttribute('id');
        this.props.posFunc(value);  

        let nodes = document.getElementsByClassName('position-block');
        // console.log(nodes)
        for(let i=0;i<nodes.length;i++)
            nodes[i].classList.remove('active')

        e.target.classList.add('active')
   
    }

    render(){
        return (
            <div className="position-selector ">
                <h1>Demo for react-tooltip implementation</h1>
                <p>Select the postion u want tooltip to be shown</p>

                <div className="position-selector-container" >
                    {/* onClick the position function is called */}
                    <div className="position-block active" onClick={this.setPosition} id='top'>Top</div>
                    <div className="position-block" onClick={this.setPosition} id='right'>Right</div>
                    <div className="position-block" onClick={this.setPosition} id='bottom'>Bottom</div>
                    <div className="position-block" onClick={this.setPosition} id='left'>Left</div>
                </div>
            </div>
        );
    }
}


export default PositionSelector;