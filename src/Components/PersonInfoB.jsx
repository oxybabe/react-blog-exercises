import { useState } from "react";

export default function PersonInfo() {
  const [info, setInfo] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  console.log({ info });
  function handleSubmit(event) {
    event.preventDefault();
    const newPersonInfo = {
      firstName: firstName,
      lastName: lastName,
      homeAdress: address,
      phone: phone,
    };
    setInfo([...info, newPersonInfo]);
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhone("");
  }
  return (
    <>
      <div>Enter Personal Information</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="first name"
        />
        <input
          type="text"
          onChange={(event) => setLastName(event.target.value)}
          placeholder="last name"
        />
        <input
          type="text"
          onChange={(event) => setAddress(event.target.value)}
          placeholder="address"
        />
        <input
          type="tel"
          onChange={(event) => setPhone(event.target.value)}
          name=""
          id=""
          placeholder="phone number"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
