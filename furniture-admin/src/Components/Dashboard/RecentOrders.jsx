import React from 'react'
import { format } from 'date-fns'

const orderData = [
    {
        id: '1',
        product_id: '5',
        customer_id: '1',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05-17T03:24:00',
        order_total: 'Rs 435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '2',
        product_id: '8',
        customer_id: '2',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05-17T03:24:00',
        order_total: 'Rs 435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
]

const RecentOrders = () => {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <h2 className="text-gray-700 font-medium">Recent Orders</h2>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-sm text-gray-700">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product ID</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Order Total</th>
                            <th>Shipping Address</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.map((data) => (
                            <tr>
                                <td className='text-center'>{data.id}</td>
                                <td className='text-center'>{data.product_id}</td>
                                <td className='text-center'>{data.customer_name}</td>
                                <td className='text-center'>{format((data.order_date), 'dd MMM yyyy')}</td>
                                <td className='text-center'>{data.order_total}</td>
                                <td className='text-center'>{data.shipment_address}</td>
                                <td className='text-center'>{data.current_order_status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentOrders
