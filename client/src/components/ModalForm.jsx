import React, { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userSlice } from '../store/reducers/UserSlice'
import { newOrder } from '../store/reducers/ActionCreators'
import '../styles/Modal.css'

export const ModalForm = ({ setIsActive }) => {
  const dispatch = useDispatch()
  const { basket } = useSelector(state => state.userReducer)
  const { deleteProduct } = userSlice.actions
  const [orderInfo, setOrderInfo] = useState({
    username: '',
    email: '',
    phone: '',
    address: ''
  })

  const total = useMemo(() => {
    return basket.reduce((acc, item) => acc += item.price, 0)
  }, [basket])

  const order = useMemo(() => {
    return {
      goods: basket.map(item => item.title),
      ...orderInfo
    }
  }, [basket, orderInfo])

  return (
    <div className="modal">
      <div className="form">
        <div className="form__header">
          <p>Check order</p>
        </div>
        <div className="modal__list">
          <ol>
            {basket.map(item =>
              <li key={item.id}>
                <span>{item.title}</span>
                <span>1 * {item.price} $
                  <i className="bi bi-x-lg"
                    onClick={() => dispatch(deleteProduct(item.id))}></i>
                </span>

              </li>)}
          </ol>
          Total price: {total.toFixed(2)} $
        </div>
        <div className="form__body">
          <input type="text" placeholder='username'
            value={orderInfo.username}
            onChange={(e) => setOrderInfo(prevOrder => ({ ...prevOrder, username: e.target.value }))}
          />
          <input type="text" placeholder='phone'
            value={orderInfo.phone}
            onChange={(e) => setOrderInfo(prevOrder => ({ ...prevOrder, phone: e.target.value }))}
          />
          <input type="email" placeholder='email'
            value={orderInfo.email}
            onChange={(e) => setOrderInfo(prevOrder => ({ ...prevOrder, email: e.target.value }))}
          />
          <input type="text" placeholder='address'
            value={orderInfo.address}
            onChange={(e) => setOrderInfo(prevOrder => ({ ...prevOrder, address: e.target.value }))}
          />
        </div>
        <div className="form__footer">
          <input type="button" value="Buy" onClick={() => {
            setIsActive(false)
            dispatch(newOrder(order))
          }} />
        </div>
        <div className="cancel-btn" onClick={() => setIsActive(false)} >
          <i className="bi bi-x-lg"></i>
        </div>
      </div>
    </div>
  )
}
