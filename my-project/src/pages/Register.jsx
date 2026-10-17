// import { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:8000/api/auth/register", {
//         username,
//         email,
//         password,
//         confirmPassword,
//         phoneNo,
//       });

//       console.log("Registration successful:", res.data);
//       //   alert(res.data.message);
//       toast.success(res.data?.mesaage);

//       setUsername("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//       setPhoneNo("");
//     } catch (error) {
//       console.error(
//         "Registration error:",
//         error.response?.data || error.message,
//       );
//       //   alert(error.response?.data?.message || "Registration failed");
//       toast.error(error.response?.data);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="flex flex-col items-center gap-5 p-10 shadow-2xl">
//         <h1 className="text-2xl font-semibold">Sign Up</h1>

//         <form
//           className="flex flex-col items-center gap-5"
//           onSubmit={handleSubmit}
//         >
//           <input
//             type="text"
//             placeholder="Enter username"
//             className="border pl-2 w-[300px] rounded-sm h-[35px]"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />

//           <input
//             type="email"
//             placeholder="Enter email"
//             className="border pl-2 w-[300px] rounded-sm h-[35px]"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Enter password"
//             className="border pl-2 w-[300px] rounded-sm h-[35px]"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Confirm password"
//             className="border pl-2 w-[300px] rounded-sm h-[35px]"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />

//           <input
//             type="tel"
//             placeholder="Enter phone number"
//             className="border pl-2 w-[300px] rounded-sm h-[35px]"
//             value={phoneNo}
//             onChange={(e) => setPhoneNo(e.target.value)}
//             required
//           />

//           <button
//             type="submit"
//             className="bg-gray-600 w-[120px] p-2 text-white rounded-sm"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", {
        ...formData,
        phoneNo: Number(formData.phoneNo),
      });

      toast.success(res.data.message || "Registration successful!");

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNo: "",
      });
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message,
      );

      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-6 p-8 sm:p-10 bg-white rounded-xl shadow-xl w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>

        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="border border-gray-300 px-3 w-full rounded-md h-11 outline-none focus:border-blue-500"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="border border-gray-300 px-3 w-full rounded-md h-11 outline-none focus:border-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="border border-gray-300 px-3 w-full rounded-md h-11 outline-none focus:border-blue-500"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="border border-gray-300 px-3 w-full rounded-md h-11 outline-none focus:border-blue-500"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phoneNo"
            placeholder="Enter phone number"
            className="border border-gray-300 px-3 w-full rounded-md h-11 outline-none focus:border-blue-500"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold w-full py-3 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
