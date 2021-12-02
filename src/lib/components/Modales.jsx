import React from 'react'
import close from './assets/close.svg'
import { Content, IMG, ModaleContent, ModaleDiv } from './styles/modale'

const Modale = (props) => {
  return (
    <ModaleDiv style={props.styleModaleBackground} onClick={props.hideModale} animation={props.animation}>
      <ModaleContent style={props.styleModale} animation={props.animation}>
        <Content style={props.styleModaleContent}>{props.children}</Content>
        {props.closeButton && <IMG src={close} alt="close" onClick={props.hideModale} />}
      </ModaleContent>
    </ModaleDiv>
  )
}

export default Modale
