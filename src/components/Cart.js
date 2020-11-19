import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getStoreItemArray } from "../reducers";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const [total, setTotal] = useState(0);
  console.log(storeItems);

  useEffect(() => {
    if (storeItems.length != 0) {
      setTotal(
        storeItems
          .map((item) => item.price * item.quantity)
          .reduce((total, amount) => total + amount)
      );
    }
  }, [storeItems]);

  return (
    <CartArea>
      <Head>Your Cart</Head>
      <NumItemsInCart>
        {storeItems.length} Items
        {/* number of items in cart */}
      </NumItemsInCart>
      {storeItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
      <TotalBox>
        <Total>
          Total: ${total / 100}
          {/* for each item.price * num of item += total */}
        </Total>
        <Button>Purchase</Button>
      </TotalBox>
    </CartArea>
  );
};

const CartArea = styled.div`
  color: white;
  background: rgb(78, 18, 79);
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const Head = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const NumItemsInCart = styled.p`
  font-size: 16px;
  color: rgb(206, 190, 207);
`;

const TotalBox = styled.div`
  margin-top: 50px;
`;

const Total = styled.h3`
  font-size: 18px;
  display: inline;
`;

const Button = styled.button`
  position: relative;
  display: inline;
  width: 50%;
  margin-left: 30px;
  border-radius: 12px;
  background: #ff406e;
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
