import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);
  return (
    <CartItemDiv key={item.id}>
      <X onClick={() => dispatch(removeItem(item))}>X</X>
      <ItemName>{item.title}</ItemName>
      <Quantity>
        Quantity:
        <Input value={item.quantity} />
      </Quantity>
    </CartItemDiv>
  );
};

const CartItemDiv = styled.div`
  background: transparent;
  border: 3px dashed rgb(101, 47, 102);
  margin: 10px 0px;
  color: white;
`;

const ItemName = styled.p`
  font-size: 20px;
  padding: 0 20px;
`;

const Quantity = styled.div`
  background: rgb(35, 9, 36);
  padding: 15px;
  color: rgb(206, 190, 207);
`;

const Input = styled.input`
  display: inline;
  width: 30px;
  margin-left: 20px;
`;

const X = styled.button`
  position: relative;
  font-size: 20px;
  float: right;
  color: white;
  background: transparent;
  border: none;
  margin: 20px 10px;
  padding: 0px 5px;
  cursor: pointer;
`;
