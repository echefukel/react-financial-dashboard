import React from 'react'
import WalletCards from '../components/WalletCards'
import WorkingCapitalChart from '../components/WorkingCapitalChart'
import RecentTransactions from '../components/RecentTransactions'
import WalletInfo from '../components/WalletInfo'
import ScheduledTransfers from '../components/ScheduledTransfers'
const Home = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 w-full '>
      {/*  Left Column  */}
      <div className='flex flex-[2] flex-col gap-6'>
      <WalletCards />
      <WorkingCapitalChart />
      <RecentTransactions />
      </div>
      {/*  Right Column  */}
      <div className='flex flex-[1] flex-col gap-6'>
         <WalletInfo />
         <ScheduledTransfers />
      </div>


    </div>
  )
}

export default Home
