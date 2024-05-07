import React, { useContext } from 'react'
import { Context } from '../store/appContext'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'

const CardContact = (props) => {
    const { actions, store } = useContext(Context)
    return (
        <div className="card mb-3" style={{ width: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"https://i.pravatar.cc/150?img=" + props.id} class="img-fluid img-rounded rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">

                        <button onClick={() => actions.deleteContact(props.id)} className='btn btn-outline-dark float-end'> <i className='fa fa-trash'> </i> </button>
                        <button className='btn btn-outline-dark float-end' style={{ marginRight: "5px" }}> <i className='fa fa-pen'> </i> </button>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Phone: {props.phone}</p>
                        <p className="card-text">email: {props.email} </p>
                        <p className="card-text"> address: {props.address} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContact