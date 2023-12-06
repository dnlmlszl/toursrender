import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    try {
      console.log(name, email, message);
    } catch (error) {
      console.error(error);
    } finally {
      setName('');
      setEmail('');
      setMessage('');
    }
  };
  return (
    <section className="contact-section">
      <h1>Contact us!</h1>
      <form className="contact-form" onSubmit={submit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            required
          />
        </div>
        <button>Send contact data</button>
      </form>
    </section>
  );
};

export default Contact;
