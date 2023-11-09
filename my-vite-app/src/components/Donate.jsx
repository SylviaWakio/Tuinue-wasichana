import React, { useState } from "react";
import "./Donate.css"; // Import the CSS file

const Donate = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [isDonationSubmitted, setDonationSubmitted] = useState(false);

  const handleDonate = (event) => {
    event.preventDefault();

    if (isAnonymous || (name && email && amount > 0)) {
      // Donation processing logic here
      if (isAnonymous) {
        // Handle anonymous donation
        console.log("Anonymous donation");
      } else {
        // Handle donation with user information
        console.log(`Donation by ${name} (${email}) of $${amount}`);
      }

      // Reset the form and provide feedback to the user
      setIsAnonymous(false);
      setName("");
      setEmail("");
      setAmount(0);
      setDonationSubmitted(true);
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <div className="donate-container">
      <h2>Donate Page</h2>
      {isDonationSubmitted && (
        <p>Thank you for your donation!</p>
      )}
      <form onSubmit={handleDonate}>
        <div className="anonymous-checkbox">
          <label>
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
            Donate Anonymously
          </label>
        </div>

        {!isAnonymous && (
          <div className="donor-info">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <br />

            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />

            <label>
              Amount to Donate:
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </label>
            <br />
          </div>
        )}

        <button type="submit" className="donate-button">Donate</button>
      </form>
    </div>
  );
};

export default Donate;
