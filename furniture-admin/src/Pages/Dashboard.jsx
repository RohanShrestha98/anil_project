import React from 'react'
import TransactionChart from '../Components/Dashboard/TransactionChart'
import TopGrid from '../Components/Dashboard/TopGrid'
import BuyerPieChart from '../Components/Dashboard/BuyerPieChart'
import RecentOrders from '../Components/Dashboard/RecentOrders'
import PopularProduct from '../Components/Dashboard/PopularProduct'

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4">
            <TopGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerPieChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <RecentOrders />
                <PopularProduct />
            </div>
        </div>
    )
}

export default Dashboard
