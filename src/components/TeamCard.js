import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    text-align: center;
    display: inline-block;
    margin: 10px;
    width: 40%;
    flex-basis: 50%;
    border: 2px solid #999999;
    box-shadow: 10px 8px 15px #444444;
    border-radius: 8px;
`


function TeamCard(props) {
    const { name, email, role } = props.member;

    return (
       <CardDiv>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{role}</p>
       </CardDiv>
    );
};

export default TeamCard;