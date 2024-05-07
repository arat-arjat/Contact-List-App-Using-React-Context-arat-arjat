import React, { useState, useContext } from 'react'
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardContact from "../component/cardContact";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";



export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5">
			<Navbar />
			<br />
			<h1>Contact</h1>
			{store.contacts.map((contacto) => {
				return <CardContact name={contacto.name} id={contacto.id} phone={contacto.phone} email={contacto.email} address={contacto.address} />
			})}

		</div>
	)
};
