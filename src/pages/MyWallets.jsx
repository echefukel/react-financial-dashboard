
import React from 'react'
import WalletLeft from '../components/WalletLeft'
import { Wallet } from 'lucide-react'
import WalletRight from '../components/WalletRight'

const MyWallets = () => {
  return (
    <div className='w-full min-h-screen bg-[#f4f5f8] py-10 px-4 md:px-10 flex flex-col lg:flex-row gap-8'> 
      {/* Left Side */}
      <WalletLeft />
      {/* Right Side */}
      <WalletRight />
      
    </div>
  )
}

export default MyWallets
