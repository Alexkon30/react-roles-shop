import React, {useMemo} from 'react'
import { useSelector } from 'react-redux'

export const Modal = ({ isActive, setIsActive }) => {
  const { basket } = useSelector(state => state.userReducer)

  const total = useMemo(() => {
    return basket.reduce((acc, item) => acc += item.price, 0)
  }, [basket])

  return (
    <div className="modal">
      <div className="form">
        <div className="form__header">
          <p>Check order</p>
        </div>
        <div className="modal__list">
          <ol>
            {basket.map(item => <li key={item.id}>{item.title}</li>)}
          </ol>
          Total price: {total}
        </div>
        <div className="form__body">
          <input type="text" placeholder='username' />
          <input type="text" placeholder='phone' />
          <input type="email" placeholder='email' />
          <input type="text" placeholder='address' />
        </div>
        <div className="form__footer">
          <input type="button" value="Buy" />
        </div>
        <div className="cancel-btn" onClick={() => setIsActive(false)} >
          <i className="bi bi-x-lg"></i>
        </div>
      </div>
    </div>
  )
}
