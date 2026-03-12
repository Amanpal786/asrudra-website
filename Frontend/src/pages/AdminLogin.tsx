import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const handleLogin = (e:any) => {
e.preventDefault();

console.log("Login clicked"); // debug

if(username === "admin" && password === "123456"){
localStorage.setItem("role","admin");
navigate("/dashboard", { replace: true });
}

else if(username === "tl" && password === "123456"){
localStorage.setItem("role","tl");
navigate("/dashboard", { replace: true });
}

else if(username === "associate" && password === "123456"){
localStorage.setItem("role","associate");
navigate("/dashboard", { replace: true });
}

else{
alert("Invalid Login");
}

};

return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">

<div className="bg-white p-10 rounded-xl shadow-2xl w-[380px]">

<h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
Admin Login
</h2>

<form onSubmit={handleLogin} className="space-y-4">

<input
type="text"
placeholder="Admin ID"
value={username}
onChange={(e)=>setUsername(e.target.value)}
className="w-full border border-gray-300 p-3 rounded-lg text-gray-900"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border border-gray-300 p-3 rounded-lg text-gray-900"
/>

<button
type="submit"
className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
>
Login
</button>

</form>

</div>

</div>

)

}

export default AdminLogin;