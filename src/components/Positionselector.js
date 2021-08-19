import React from 'react';

class PositionSelector extends React.Component {

    componentDidMount(){
        document.getElementById('top').style.backgroundColor = 'red';
    }

    render(){
        return (
            <div className="PositionSelector ">
                <h3>Hello, this is demo for use of react-tooltip</h3>
                <div>
                    <p>Select the postion u want tooltip to be shown</p>

                    {/* onClick the position function is called */}
                    <div style={styles.positionBlock} onClick={() => this.props.posFunc('top')   } id='top' className='postionblock'>Top</div>
                    <div style={styles.positionBlock} onClick={() => this.props.posFunc('right') } id='right' className='postionblock' >Right</div>
                    <div style={styles.positionBlock} onClick={() => this.props.posFunc('bottom')} id='bottom' className='postionblock'>Bottom</div>
                    <div style={styles.positionBlock} onClick={() => this.props.posFunc('left')  } id='left' className='postionblock'>Left</div>

                </div>
                      
              
            </div>
        );
    }
}

// styles for position selector buttons
const styles= {
   positionBlock: {
       marginLeft:'80px',
       paddingLeft:'40px',
       paddingTop:'15px',
        color:'white',
        backgroundColor:'maroon',
       height:'30px',
       width:'80px',
       border:'solid 1px black',
       boxShadow:'inset 0 0 5px 5px maroon'
   }
  
}

export default PositionSelector;