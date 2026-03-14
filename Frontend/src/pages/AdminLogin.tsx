import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../logo.jpg";

const AdminLogin = () => {

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const handleLogin = (e:any) => {

e.preventDefault();

if(username === "admin" && password === "123456"){
localStorage.setItem("role","admin");

navigate("/dashboard",{replace:true});
window.location.reload();   // important fix
}

else if(username === "tl" && password === "123456"){
localStorage.setItem("role","tl");

navigate("/dashboard",{replace:true});
window.location.reload();
}

else if(username === "associate" && password === "123456"){
localStorage.setItem("role","associate");

navigate("/dashboard",{replace:true});
window.location.reload();
}

else{
alert("Invalid Login");
}

};

return(

<div
className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80')"
}}
>

<div className="absolute inset-0 bg-black/40"></div>

<div className="relative bg-white shadow-2xl border border-gray-200 rounded-3xl p-10 w-[420px]">

<button
onClick={()=>navigate("/")}
className="absolute top-5 left-5 flex items-center gap-2 text-gray-600 hover:text-black transition"
>
<ArrowLeft size={20} />
</button>

<div className="flex justify-center mb-6">
<img
src={logo}
alt="logo"
className="w-36 object-contain"
/>
</div>

<h2 className="text-3xl font-bold text-center text-black mb-8 tracking-wide">
Admin Login
</h2>

<form onSubmit={handleLogin} className="space-y-6">

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
/>

<button
type="submit"
className="w-full bg-blue-600 hover:bg-orange-500 text-white py-3 rounded-xl font-semibold tracking-wide shadow-lg transition-all duration-300 hover:scale-105"
>
Login
</button>

</form>

</div>

</div>

)

}

export default AdminLogin;