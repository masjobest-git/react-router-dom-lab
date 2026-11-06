import { Link } from "react-router";

const MailboxList = (props) => {
  return (
    <main>
      <h1>Mailboxes</h1>

      <ul>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              <div className="mail-box">{mailbox._id}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MailboxList;
