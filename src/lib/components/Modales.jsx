import React from 'react'
import close from './assets/close.svg'
import { Content, IMG, ModaleContent, ModaleDiv } from './styles/modale'

const Modale = (props) => {
  return (
    <ModaleDiv style={props.styleModaleBackground}>
      <ModaleContent style={props.styleModale}>
        <Content style={props.styleModaleContent}>{props.content}</Content>
        <IMG src={close} alt="close" onClick={props.hideModale} />
      </ModaleContent>
    </ModaleDiv>
  )
}

export default Modale
