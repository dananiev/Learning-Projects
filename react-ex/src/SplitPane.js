import React from 'react'

function SplitPane(props) {
    return(
        <div className='SplitPane'>
            <div className='SplitPane-left'>
                {props.left}
            </div>
            <div className='SplitPnae-right'>
                {props.right}
            </div>
        </div>
    );
}

export default SplitPane