import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import x from "../assets/images/noStock.png";
import { deleteItem, sumOrders } from "./redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "./Banner";
export default function Cart() {
  const orders = useSelector((state) => state.basket.order);
  const total = useSelector((state) => state.basket.total);

  const dispatch = useDispatch();
  return total !== 0 ? (
    <div className='container  col-sm-10 col-md-8 col-lg-6 cart'>
      <Table className='justify-content-center mt-5 '>
        <thead style={{ color: "rgb(214,131,141)" }}>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt='plant'
                    className='img-photo-cart'
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}€</td>
                <td>
                  <img
                    src={x}
                    alt='delete button'
                    id='delete'
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteItem(index, item.id, item.quantity));
                      dispatch(sumOrders(index));
                    }}
                  ></img>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='3'></td>
            <td className='sum'>{total}€</td>
          </tr>
        </tfoot>
      </Table>
      <Link className='goShop' to='/buy'>
        Buy →
      </Link>
    </div>
  ) : (
    <Banner text='Your Cart is empty...'></Banner>
  );
}
