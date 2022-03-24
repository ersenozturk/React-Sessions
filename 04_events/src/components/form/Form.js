import { useState } from "react";
import "./styles.css";


/* //! seperate funcs every handleevents -->
const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  const [country, setCountry] = useState()


  const handleName = (e) => {
    console.log(name);
    setName(e.target.value);
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleCountry(e) {
    setCountry(e.target.value)
  }



  function handleSubmit(e) {
    e.preventDefault();
    alert(`
    userName: ${name}
    email: ${email}
    password : ${password}
    country : ${country}
    `)
    setName('');
    setEmail('');
    setPassword('');
    setCountry('');
  }

  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p></p>
          <label>
            <strong>Username: {name}</strong>
          </label>
          <br />
          <input
            type="text"
            placeholder="name"
            onChange={handleName}
            value = {name} //! controlled input
          />
        </div>

        <div>
          <p></p>
          <label>
            <strong>E-mail: {email}</strong>
          </label>
          <br />
          <input type="email" placeholder="email" onChange={handleEmail} value = {email} />
        </div>

        <div>
          <p></p>
          <label>
            <strong>Password: {password} </strong>
          </label>
          <br />
          <input type="password" placeholder="pass" onChange={handlePassword} />
        </div>

        <div style={{ margin: "10px auto" }}>
          <p></p>
          <label>
            <strong>Country:{country} </strong>
          </label>
          <select onChange={handleCountry}
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>

        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
 */








//-----------------------------






//! single func arranged every handleevents -->
/* const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    country: "",
  });
  console.log({ formData });


  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    userName: ${formData.name}
    email: ${formData.email}
    pass: ${formData.pass}
    country: ${formData.country}
    `);

    setFormData({
      name: "",
      email: "",
      pass: "",
      country: "",
    });
  };

  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p></p>
          <label>
            <strong>Username: {formData.name}</strong>
          </label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleFormData}
            defaultValue="Jane"
            value={formData.name}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>E-mail: {formData.email} </strong>
          </label>
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleFormData}
            value={formData.email}
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>Password: {formData.pass} </strong>
          </label>
          <br />
          <input
            type="password"
            placeholder="pass"
            name="pass"
            onChange={handleFormData}
            value={formData.pass}
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p></p>
          <label>
            <strong>Country: {formData.country} </strong>
          </label>
          <select
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
            name="country"
            onChange={handleFormData}
            value={formData.country}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form; */ 