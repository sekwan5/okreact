import axios from 'axios';

const Create = () => {
  function handleChange(e) {
    const params = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      email: document.getElementById('email').value,
    };
    axios.post('http://localhost:8080/people', params).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <>
      <h1>Create</h1>
      <input type="text" placeholder="username" id="username" />
      <input type="text" placeholder="password" id="password" />
      <input type="text" placeholder="email" id="email" />
      <button type="submit" onClick={handleChange}>
        Submit
      </button>
    </>
  );
};

export default Create;
