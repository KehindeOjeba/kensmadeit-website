import { ShopContext } from '@/context/ShopContext'
import  { useContext } from 'react'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
  return (
    <div>LatestCollectionzzzz</div>
  )
}

export default LatestCollection