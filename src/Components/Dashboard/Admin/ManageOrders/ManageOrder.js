import React, { useState } from 'react';
import { Alert, Table } from 'react-bootstrap';

const ManageOrder = ({ order, quantity, removeOrderHandler }) => {
  const [status, setStatus] = useState(order.status);

  const updateStatus = (id) => {
    fetch(`http://localhost:9000/orders/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setStatus('shifted');
        }
      });
  };
  const getCartTotal = () => {
    return order.order?.reduce(
      (price, item) => item.price * item.qty + price,
      0
    );
  };
  return (
    <div className='row  d-flex justify-content-center mt-5'>
      <div className='col-12 col-md-10 col-lg-9 '>
        <div className='add-product box-shadow bg-white p-4 '>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <h5 className='mb-3 '>Order: {quantity + 1}</h5>

            <div className='d-flex justify-content-between align-items-center'>
              {status === 'pending' && (
                <Alert variant='danger' className='p-0 m-0'>
                  {status}
                </Alert>
              )}
              {status === 'shifted' && (
                <Alert variant='success' className='p-0 m-0'>
                  {status}
                </Alert>
              )}

              <button
                className='border-0 bg-transparent ms-3'
                onClick={() => removeOrderHandler(order._id)}
              >
                {' '}
                <i className='fas fa-trash text-danger fs-4'></i>
              </button>
              <button
                className='border-0 bg-transparent ms-3'
                onClick={() => updateStatus(order._id)}
              >
                <i className='fas fa-check-square fs-4 text-success'></i>
              </button>
            </div>
          </div>

          <Table hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order?.order?.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>${order.price * order.qty}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className='d-flex align-items-center justify-content-between'>
            <h6>Total</h6>
            <h6 className='me-4 me-md-2'>${getCartTotal()}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
