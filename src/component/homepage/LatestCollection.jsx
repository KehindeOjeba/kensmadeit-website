import { ShopContext } from '@/context/ShopContext'
import  { useContext } from 'react'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
  return (
    <div>
      

      Building Latest Collection Component 
    </div>
  )
}

export default LatestCollection