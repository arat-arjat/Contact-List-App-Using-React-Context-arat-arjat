import React, { useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const EditContact = () => {


    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState(store.currentDetail ? store.currentDetail : {})
    return (
        <div>
            <h1>Add Contacts</h1>
            <div className="mb-3">
                <div>
                    <div>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input readOnly={false} value={contact ? contact.name : "example name"} onChange={(e) => setContact({ ...contact, name: e.target.value })} type="name" className="form-control" id="Name" aria-describedby="Name Last Name" />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input value={contact ? contact.email : "example email"} onChange={(e) => setContact({ ...contact, email: e.target.value })} type="email" className="form-control" id="email" aria-describedby="email" />
                        </div>
                        <div className="mb-3">
                            <label for="Phone" className="form-label">Phone</label>
                            <input value={contact ? contact.phone : "example phone"} onChange={(e) => setContact({ ...contact, phone: e.target.value })} type="tel" className="form-control" id="Phone" aria-describedby="phone" />
                        </div>

                        <div className="mb-3">
                            <label for="Address" className="form-label">Address</label>
                            <input value={contact ? contact.address : "example addres"} onChange={(e) => setContact({ ...contact, address: e.target.value })} type="tex" className="form-control" id="Address" aria-describedby="Address" />
                        </div>


                        <button onClick={() => { actions.createContact(contact) }} type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
            <Link to="/">Contact List </Link>
        </div>

    )
}

export default EditContact