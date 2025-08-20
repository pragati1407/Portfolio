import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full border p-3 rounded" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full border p-3 rounded" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full border p-3 rounded" required />
        <button className="bg-indigo-500 text-white px-6 py-3 rounded hover:bg-indigo-600 transition">Send</button>
      </form>
    </section>
  );
};

export default Contact;
