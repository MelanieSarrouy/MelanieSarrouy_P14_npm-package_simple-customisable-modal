import styled from 'styled-components'

export const ModaleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  z-index: 10;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
`
export const ModaleContent = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-radius: .5rem;
  background-color: white;
  top: 40vh;
`
export const Content = styled.p`
  text-align: center;
  color: black;
`
export const IMG = styled.img`
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`
