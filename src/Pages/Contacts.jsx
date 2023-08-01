import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Loader from "components/Loader/Loader";
import Section from "components/Section/Section";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "redux/contactsSlice";
import { addContactThunk, deleteContactThunk, getAllContactsThunk } from "redux/contactsThunks";
import { selectContacts, selectError, selectFilter, selectIsLoading } from "redux/selectors";



export default function Contacts() {
    
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);
const items = useSelector(selectContacts);
const filter = useSelector(selectFilter);
const dispatch = useDispatch();


useEffect(() => {
  dispatch(getAllContactsThunk())
}, [dispatch]);

const addContact = (contactData) => {
  const existContact = items.find(contact => 
  contact.name === contactData.name)
  
    if (existContact) {
   alert(`${contactData.name} is already in contacts.`) 
  }
   else {
  dispatch(addContactThunk(contactData));
    }
  }

const deleteContact = id => {
  dispatch(deleteContactThunk(id));
};

const filterContact = filterName => {
  dispatch(filterContacts(filterName));
}

const filteredContacts = items.filter(contact => 
  contact.name
.toLowerCase()
.includes(filter
 .toLowerCase().trim()));


  return (
<div>
  <Section title ="Phonebook">
    <ContactForm 
    onFormSubmit={addContact}
    />
    </Section>

    <Section>
    <h2>Contacts</h2>
    <Filter
    title="Find contacts by name"
    filterValue={filter} 
    filterContact={filterContact}
    />
    </Section>

    {error && (
        <div>
          <p>Opps, some error occured... Error: {error}</p>
        </div>
      )}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}

{items?.length > 0 && (
    <ContactList 
    contacts={filteredContacts}
    deleteContact={deleteContact}
     />
      )}
     </div>
  )
};