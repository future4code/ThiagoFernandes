import React from 'react';
import styled from 'styled-components';

const TopoPosts = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  padding-left: 10px;
`
const ImgTopoPosts = styled.img`
  margin-right: 10px;
`
const TxtTopoPosts = styled.p`
  font-weight: bold;
`

export const PostHeader = (props) => {
  return (
    <TopoPosts>
      <ImgTopoPosts src={props.profilePicture} alt="ImagemUsuario"/>
      <TxtTopoPosts>{props.username}</TxtTopoPosts>
    </TopoPosts>
  )
}