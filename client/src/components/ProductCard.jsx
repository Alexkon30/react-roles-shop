import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {userSlice} from '../store/reducers/UserSlice'

export const ProductCard = ({ product, setIsActiveModal }) => {
  const dispatch = useDispatch()
  const { basket } = useSelector(state => state.userReducer)
  const {addProduct} = userSlice.actions

  const onBasket = useMemo(() => {
    return basket.some(item => item.id === product.id)
    // eslint-disable-next-line
  }, [basket])

  return (
    <div className='card'>
      <div className='card__img'>
        <img src={product.image} alt="product" />
      </div>
      <div className="card__info">
        <p>{product.title}</p>
        <p>Price: {product.price}</p>
        {onBasket
          ? <input type="button" value="Buy" onClick={() => setIsActiveModal(true)}/>
          : <input type="button" value="Add" onClick={() => dispatch(addProduct(product))}/>}
      </div>
    </div>
  )
}
