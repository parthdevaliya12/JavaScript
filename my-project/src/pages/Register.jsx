import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", {
        name,
        email,
        password,
      });

      console.log("Registration successful:", res.data);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center flex-col gap-5 shadow-2xl shadow-[rgba(0,0,0,0.2)] p-10">
        <div className="flex justify-center items-center p-5 text-2xl font-semibold">
          <h1>Sign Up</h1>
        </div>
        <div className="">
          <form
            className="flex flex-col items-center gap-7"
            onSubmit={handleSubmit}
          >
            <div className="">
              <input
                type="text"
                placeholder="Enter name"
                className="border pl-1 w-[300px] rounded-sm h-[30px]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Enter email"
                className="border pl-1 w-[300px] rounded-sm h-[30px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Enter password"
                className="border pl-1 w-[300px] rounded-sm h-[30px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="">
              <button className="bg-gray-600 w-[100px] p-2 text-xl text-white border rounded-sm">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
