import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';

const ContactList = () => {
  return (
    <>
      <div className='search-box'>
        <SearchBox />
      </div>
      <div className='list-area'>
        <ContactItem />
      </div>
    </>
  );
};

export default ContactList;