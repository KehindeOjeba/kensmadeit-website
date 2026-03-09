import { ShopContext } from '@/context/ShopContext'
import  { useContext } from 'react'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
  return (
    <div>

      <h1 className='text-3xl font-bold text-center my-10'>Latest Collection</h1>
    </div>
  )
}

export default LatestCollection