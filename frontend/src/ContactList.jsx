import React from "react"
import './App.css'

const ContactList = ({contacts, updateContact, updateCallback}) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options)
            if(response.status === 200) {
                updateCallback()
            } else{
                console.error("Failed to Delete")
            }
        }
        catch (error) {
            alert(error)
        }
    }

    return (
        
        <div>

            <h2>Contacts</h2>

            {contacts ? (
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.email}</td>
                                <td>
                                    <button onClick={() => updateContact(contact)}>Update</button>
                                    <button onClick={() => onDelete(contact.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h2>No Contacts Available</h2>
            )} 
        </div>
    )
}

export default ContactList