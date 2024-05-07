const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],

		},
		actions: {
			// Use getActions to call a function within a fuction



			createContact: async (contact) => {

				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/aratarjat/contacts", {
						method: "POST",
						body: JSON.stringify(contact),
						headers: { "Content-Type": "application/json" }
					})
					const data = await response.json()
					getActions().getContacts()
				} catch (error) {
					console.log(error)
				}
				// url https://playground.4geeks.com/contact/agendas/aratarjat/contacts
			},
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/aratarjat")
					const data = await response.json()
					setStore({ contacts: data.contacts });

				} catch (error) {
					console.log(error)
				}
			},

			deleteContact: async (id) => {
				try {
					await fetch("https://playground.4geeks.com/contact/agendas/aratarjat/contacts/" + id, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" }
					})
					getActions().getContacts()
				} catch (error) {
					console.log(error)
				}
			},
			editContact: async (id, contact) => {

				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/aratarjat/contacts/" + id, {
						method: "PUT",
						body: JSON.stringify(contact),
						headers: { "Content-Type": "application/json" }
					})
					const data = await response.json()
					getActions().getContacts()
				} catch (error) {
					console.log(error)
				}
				// url https://playground.4geeks.com/contact/agendas/aratarjat/contacts
			},

			// https://playground.4geeks.com/contact/agendas/aratarjat
		}
	};
};

export default getState;
