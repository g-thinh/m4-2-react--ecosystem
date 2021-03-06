import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #eee;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
`;

const ItemImg = styled.img`
  width: 150px;
  border-radius: 20px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const CardBreak = styled.div`
  width: 50px;
  height: 5px;
  background-color: #eee;
`;

const ItemLatinName = styled.p`
  color: grey;
  opacity: 0.8;
  font-style: italic;
  font-size: 22px;
`;

const ItemName = styled.h3`
  font-size: 32px;
  margin: 15px;
`;

const ListingItem = ({ item }) => {
  return (
    <Card>
      <Link to={`/items/${item.id}`}>
        <ItemImg src={item.imageSrc}/>
      </Link>
      <ItemName >{item.name}</ItemName>
      <CardBreak />
      <ItemLatinName>{item.latinName}</ItemLatinName>
    </Card>
  );
}

export default ListingItem;