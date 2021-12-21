import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGoods } from '../store/reducers/ActionCreators'
import {ProductCard} from '../components/ProductCard'
import {Modal} from '../components/Modal'

export const UserPage = () => {
  const [isActiveModal, setIsActiveModal] = useState(false)
  const dispatch = useDispatch()
    const {products} = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchGoods())
        // eslint-disable-next-line
    }, [])



    return (
        <>
        <div className='list'>
            {products.map(item => <ProductCard key={item.id} product={item} setIsActiveModal={setIsActiveModal}/>)}
        </div>
        {isActiveModal && <Modal setIsActive={setIsActiveModal}/>}
        </>

    )
}
