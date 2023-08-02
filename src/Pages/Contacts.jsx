import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Loader from "components/Loader/Loader";
import Section from "components/Section/Section";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContactThunk, deleteContactThunk, getAllContactsThunk } from "redux/contacts/contactsThunks";
import { selectContacts, selectError, selectFilter, selectIsLoading } from "redux/contacts/selectors";
import { PagesStyled } from "./Home/Home.styled";
import { selectUser } from "redux/auth/selectors";
import { filterContacts } from "redux/contacts/contactsSlice";


export default function Contacts() {
 
const dispatch = useDispatch();
const items = useSelector(selectContacts);
const filter = useSelector(selectFilter);
const user = useSelector(selectUser);
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);


useEffect(() => {
  if (!user) return;
  dispatch(getAllContactsThunk())
}, [dispatch, user]);

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
<PagesStyled>
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
     </PagesStyled>
  )
};