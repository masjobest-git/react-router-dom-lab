import { useParams } from 'react-router';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) {
    return <h1>Mailbox Not Found!</h1>;
  }

  return (
    <main>
      <h1>Mailbox Details</h1>

      <p>Box Number: {selectedBox._id}</p>
      <p>Box Owner: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </main>
  );
};

export default MailboxDetails;