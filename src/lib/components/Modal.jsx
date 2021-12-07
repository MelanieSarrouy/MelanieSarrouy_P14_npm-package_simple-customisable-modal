import React from 'react'
import close from './assets/close.svg'
import { Content, IMG, ModalContent, ModalDiv } from './styles/modal'
import { useKeyPress } from './useKeyPress'

const Modal = (props) => {
  useKeyPress('Escape', (props.hideModal))
  return (
    <ModalDiv style={props.styleModalBackground} onClick={props.hideModal} animation={props.animation}>
      <ModalContent style={props.styleModal} animation={props.animation}>
        <Content style={props.styleModalContent}>{props.children}</Content>
        {props.closeButton && <IMG src={close} alt="close" onClick={props.hideModal} />}
      </ModalContent>
    </ModalDiv>
  )
}

export default Modal
