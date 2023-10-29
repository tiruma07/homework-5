import React from "react";
import Card from "./Card";
import contacts from "../contact";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
          linkedin={contact.linkedin} 
        />
      ))}
    </div>
  );
}

export default App;
