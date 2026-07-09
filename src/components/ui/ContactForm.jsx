import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const serviceID = "service_501";      
    const templateID = "template_501";     
    const userID = "qh_lF64fPIXy8N3VN";             

    const templateParams = {
      name: formData.fullname,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      time: new Date().toLocaleString()
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setLoading(false);
        setResult({ success: true, message: "> MESSAGE DISPATCHED SUCCESSFULLY. SECURE CONNECT ESTABLISHED." });
        setFormData({ fullname: "", email: "", phone: "", message: "" });
      }, (error) => {
        setLoading(false);
        setResult({ success: false, message: "> TRANSMISSION FAILED. CORRUPTION DETECTED. RETRY." });
        console.error(error.text);
      });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-[8px] uppercase tracking-wider text-emerald-600 mb-1">
          // CLIENT_IDENTITY
        </label>
        <input 
          type="text" 
          name="fullname" 
          placeholder="ENTER FULL NAME..." 
          className="w-full bg-black/60 border border-emerald-950 p-2.5 rounded text-emerald-400 focus:outline-none focus:border-emerald-500 focus:shadow-[0_0_10px_rgba(0,255,102,0.15)] text-[9px] uppercase tracking-widest transition" 
          value={formData.fullname} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[8px] uppercase tracking-wider text-emerald-600 mb-1">
            // CLIENT_EMAIL
          </label>
          <input 
            type="email" 
            name="email" 
            placeholder="ENTER EMAIL ADDRESS..." 
            className="w-full bg-black/60 border border-emerald-950 p-2.5 rounded text-emerald-400 focus:outline-none focus:border-emerald-500 focus:shadow-[0_0_10px_rgba(0,255,102,0.15)] text-[9px] uppercase tracking-widest transition" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label className="block text-[8px] uppercase tracking-wider text-emerald-600 mb-1">
            // CLIENT_PHONE
          </label>
          <input 
            type="text" 
            name="phone" 
            placeholder="ENTER PHONE NUMBER..." 
            className="w-full bg-black/60 border border-emerald-950 p-2.5 rounded text-emerald-400 focus:outline-none focus:border-emerald-500 focus:shadow-[0_0_10px_rgba(0,255,102,0.15)] text-[9px] uppercase tracking-widest transition" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>

      <div>
        <label className="block text-[8px] uppercase tracking-wider text-emerald-600 mb-1">
          // CLIENT_MESSAGE
        </label>
        <textarea 
          rows="3" 
          name="message" 
          placeholder="COMPOSE TRANSMISSION MESSAGE..." 
          className="w-full bg-black/60 border border-emerald-950 p-2.5 rounded text-emerald-400 focus:outline-none focus:border-emerald-500 focus:shadow-[0_0_10px_rgba(0,255,102,0.15)] text-[9px] uppercase tracking-widest transition" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={loading} 
        className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-black py-2 rounded text-[9px] uppercase tracking-widest font-extrabold transition shadow-[0_0_12px_rgba(16,185,129,0.3)] disabled:opacity-50"
      >
        {loading ? "> CONNECTING..." : "> DEPLOY MESSAGE"}
      </button>

      {result && (
        <div className={`mt-3 p-2 rounded text-[8px] font-mono border ${
          result.success 
            ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/20" 
            : "bg-red-950/40 text-red-400 border-red-500/20"
        }`}>
          {result.message}
        </div>
      )}
    </form>
  );
}
