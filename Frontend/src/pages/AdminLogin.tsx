import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const handleLogin = (e:any) => {

e.preventDefault();

if(username === "admin" && password === "123456"){
localStorage.setItem("role","admin");
navigate("/dashboard",{replace:true});
}

else if(username === "tl" && password === "123456"){
localStorage.setItem("role","tl");
navigate("/dashboard",{replace:true});
}

else if(username === "associate" && password === "123456"){
localStorage.setItem("role","associate");
navigate("/dashboard",{replace:true});
}

else{
alert("Invalid Login");
}

};

return(

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">

{/* background glow */}
<div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[200px] opacity-30 top-[-200px] left-[-200px]"></div>
<div className="absolute w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[200px] opacity-30 bottom-[-200px] right-[-200px]"></div>

<div className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.6)] rounded-3xl p-10 w-[420px]">

{/* Logo */}
<div className="flex justify-center mb-6">
<img
src="/logo.png"
alt="logo"
className="w-28 drop-shadow-lg"
/>
</div>

<h2 className="text-3xl font-bold text-center text-white mb-8 tracking-wide">
Admin Login
</h2>

<form onSubmit={handleLogin} className="space-y-6">

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
/>

<button
type="submit"
className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold tracking-wide shadow-xl transition duration-300"
>
Login
</button>

</form>

</div>

</div>

)

}

export default AdminLogin;