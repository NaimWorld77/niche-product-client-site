import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder/SingleOrder';

const ManageOrder = () => {

    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://shrouded-taiga-61011.herokuapp.com/allorders')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrders(data)})
    },[])
    

    return (
        <div>
            <h1>{orders.length} is in the Queue</h1>
            {
                orders.map(order=><SingleOrder
                key={order._id}
                order={order}
                ></SingleOrder>)
            }
        </div>
    );
};

export default ManageOrder;