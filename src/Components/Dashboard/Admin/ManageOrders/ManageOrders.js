import React, { useEffect, useState } from 'react';
import { Alert, Row } from 'react-bootstrap';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState();

  useEffect(() => {
    fetch(`http://localhost:9000/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  console.log(orders)

  const removeOrderHandler = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed === true) {
      const url = `http://localhost:9000/orders/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            console.log('deleted successfully');
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 5000);
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <div className='container-fluid'>
      <div className='row  d-flex justify-content-center mt-2'>
        <div className='col-12 col-md-10 col-lg-9 '>
          <h3 className='mb-3 heading-main'>All Orders</h3>
          {success && (
            <Alert variant='success' className='my-4 py-2 position-fixed'>
              Deleted successfully
            </Alert>
          )}
          {orders.length === 0 ? (
            <div className='box-shadow p-5 bg-white'>You have no order</div>
          ) : (
            <Row sm={1} xl={2} className='g-4 mt-4'>
              {orders.map((order, index) => (
                <ManageOrder
                  key={order._id}
                  order={order}
                  quantity={index}
                  removeOrderHandler={removeOrderHandler}
                ></ManageOrder>
              ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;