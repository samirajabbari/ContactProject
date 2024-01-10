import { useState } from "react";
import { v4 } from "uuid";

import styles from "./Contact.module.css";
import inputList from "./Constant/inputList.js";
import ContactsList from "./ContactsList.jsx";

function Contact() {
  // const [nocontact, setNocantact] = useState(false);
  const [alert, setAlert] = useState("");
  const [contacts, setcontacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phonNumber: "",
  });

  const changeHandler = (event) => {
    const eValue = event.target.value;
    const eName = event.target.name;
    // console.log({ eName, eValue });
    setContact((contact) => ({ ...contact, [eName]: eValue }));
    // console.log(contact);
  };

  const addHandler = () => {
    // console.log(contact);
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phonNumber
    ) {
      setAlert("Your Data is invalid!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setcontacts((contacts) => [...contacts, newContact]);
    // console.log(contactList);
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phonNumber: "",
    });
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setcontacts(newContacts);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputList.map(({ type, placeholder, name }, index) => {
          return (
            <input
              key={index}
              type={type}
              placeholder={placeholder}
              onChange={changeHandler}
              name={name}
              value={contact[name]}
            />
          );
        })}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <h3>ContacList</h3>
      {/* {contacts.length ? (
        contacts.map((contact) => (
          <ContactsList key={contact.id} data={contact} />
        ))
      ) : (
        <p className={styles.noContac}>No Contacts Yet!</p>
      )} */}

      {contacts.length ? (
        <ContactsList data={contacts} deleteHandler={deleteHandler} />
      ) : (
        <p className={styles.noContac}>No Contacts Yet!</p>
      )}
    </div>
  );
}

export default Contact;
