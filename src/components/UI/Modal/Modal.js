import React from 'react'
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import Classes from '../Modal/Modal.css'

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
            <div className={Classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </Aux>
    );
}

export default modal;