import React, { useState } from "react";
import "./Donate.css";

const Donate = () => {
  const [donorId, setDonorId] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isOneTimeDonation, setIsOneTimeDonation] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [charityId, setCharityId] = useState("");
  const [isDonationSubmitted, setDonationSubmitted] = useState(false);

  const handleDonate = async (event) => {
    event.preventDefault();

    if ((donorId && phoneNumber && amount > 0 && charityId)) {
      try {
        const response = await fetch('https://tuinuewasichana.onrender.com/donations/donate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            donor_id: donorId,
            phone_number: phoneNumber,
            amount,
            charity_id: charityId,
            is_anonymous: isAnonymous,  // Directly use the boolean value
            is_one_time_donation: isOneTimeDonation,  // Directly use the boolean value
          }),
        });

        if (response.ok) {
          // Reset the form and provide feedback to the user upon successful donation
          setDonorId("");
          setIsAnonymous(false);
          setIsOneTimeDonation(false);
          setPhoneNumber("");
          setAmount(0);
          setCharityId("");
          setDonationSubmitted(true);
        } else {
          const responseData = await response.json();
          throw new Error(`Failed to submit donation: ${responseData.error}`);
        }
      } catch (error) {
        alert(`Failed to submit donation: ${error.message}`);
      }
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>Donate Page</h2>
        {isDonationSubmitted && <p>Thank you for your donation!</p>}
        <form onSubmit={handleDonate}>
          <div>
            <label>
              Donor ID:
              <input
                type="text"
                value={donorId}
                onChange={(e) => setDonorId(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={() => setIsAnonymous(!isAnonymous)}
              />
              Donate Anonymously
            </label>
          </div>

          <div>
            <label>
              Charity ID:
              <input
                type="text"
                value={charityId}
                onChange={(e) => setCharityId(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <label className="pn">
              Phone Number:
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <label className="ad">
              Amount to Donate:
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={isOneTimeDonation}
                onChange={() => setIsOneTimeDonation(!isOneTimeDonation)}
              />
              One-Time Donation
            </label>
          </div>

          <button type="submit">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
