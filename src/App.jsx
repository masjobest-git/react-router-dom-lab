import { useState } from 'react';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newBox = {
      ...formData,
      _id: mailboxes.length + 1,
    };

    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<main><h1>Post Office</h1></main>}
        />

        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />

        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        />

        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;