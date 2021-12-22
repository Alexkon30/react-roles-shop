import React, { useState, useMemo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrders } from '../store/reducers/ActionCreators'
import { changeOrderStatus } from '../store/reducers/ActionCreators'

export const AdminPage = () => {
    const [mode, setMode] = useState('all')
    const dispatch = useDispatch()
    const { orders } = useSelector(state => state.adminReducer)

    const rows = useMemo(() => {
        if (mode === 'finished') {
            return orders.filter(order => order.isFinished === true)
        }

        if (mode === 'inProcess') {
            return orders.filter(order => order.isFinished === false)
        }
        return orders
    }, [orders, mode])

    useEffect(() => {
        dispatch(fetchOrders())
        // eslint-disable-next-line
    }, [])


    return (
        <div className='admin-panel'>
            <aside>
                <p className={mode === 'all' ? 'active' : ''} onClick={() => setMode('all')}>All orders</p>
                <p className={mode === 'finished' ? 'active' : ''} onClick={() => setMode('finished')}>Finished</p>
                <p className={mode === 'inProcess' ? 'active' : ''} onClick={() => setMode('inProcess')}>In process</p>
            </aside>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => <tr key={row._id}>
                            <td>
                                <ol>
                                    {row.goods.map((item, i) => <li key={i}>{item}</li>)}
                                </ol>
                            </td>
                            <td>
                                {row.username}
                            </td>
                            <td>
                                {row.phone}
                            </td>
                            <td>
                                {row.email}
                            </td>
                            <td>
                            <i className={`bi bi-check-circle-fill 
                            ${row.isFinished ? 'finished' : 'inprocess'}`}
                            onClick={() => {dispatch(changeOrderStatus({id: row._id, value: !row.isFinished}))}}
                            ></i>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </section>
        </div>
    )
}
