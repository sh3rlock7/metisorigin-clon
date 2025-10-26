"use client";

import { useState } from "react";

export const Formular = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    telefonnummer: "",
    adresse: "",
    message: "",
    topics: [] as string[],
    privacy: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox" && name === "privacy") {
      setForm((prev) => ({ ...prev, privacy: checked }));
    } else if (type === "checkbox") {
      const topics = form.topics.includes(value)
        ? form.topics.filter((t) => t !== value)
        : [...form.topics, value];
      setForm((prev) => ({ ...prev, topics }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: boolean } = {};
    if (!form.name) newErrors.name = true;
    if (!form.lastname) newErrors.lastname = true;
    if (!form.email) newErrors.email = true;
    if (!form.telefonnummer) newErrors.telefonnummer = true;
    if (!form.adresse) newErrors.adresse = true;
    if (!form.message) newErrors.message = true;
    if (!form.privacy) newErrors.privacy = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({
        name: "",
        lastname: "",
        email: "",
        telefonnummer: "",
        adresse: "",
        message: "",
        topics: [],
        privacy: false,
      });
    }, 1000);
  };

  return (
    <div className="lg:max-w-2xl mx-auto px-6 py-10 shadow-lg rounded-lg">
      {submitted ? (
        <div className="text-center text-green-600">
          Vielen Dank! Wir haben Ihre Nachricht erhalten.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-y-16 text-white"
        >
          <input
            name="name"
            placeholder="Vorname"
            value={form.name}
            onChange={handleChange}
            className={`w-[full] px-4 py-2 h-16 placeholder-white bg-gray-400/10 focus:outline-none ${
              errors.name ? "border border-red-500" : ""
            }`}
          />
          <input
            name="lastname"
            placeholder="Nachname"
            value={form.lastname}
            onChange={handleChange}
            className={`w-full px-4 py-2 h-16 placeholder-white bg-gray-400/10 focus:outline-none ${
              errors.lastname ? "border border-red-500" : ""
            }`}
          />
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <input
              name="email"
              type="email"
              placeholder="E-mail Adresse"
              value={form.email}
              onChange={handleChange}
              className={`lg:w-[48%] px-4 py-2 h-16 placeholder-white bg-gray-400/10 focus:outline-none ${
                errors.email ? "border border-red-500" : ""
              }`}
            />
            <input
              name="telefonnummer"
              placeholder="Telefonnummer"
              value={form.telefonnummer}
              onChange={handleChange}
              className={`lg:w-[48%] px-4 py-2 h-16 placeholder-white bg-gray-400/10 focus:outline-none ${
                errors.telefonnummer ? "border border-red-500" : ""
              }`}
            />
          </div>

          {/* Topics checkboxes */}
          <div className="flex flex-wrap gap-6 text-white">
            {["Design", "Hosting", "Entwicklung", "Anfragen", "Preis", "Sonstiges"].map(
              (option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={option}
                    checked={form.topics.includes(option)}
                    onChange={handleChange}
                    className="w-5 h-5 accent-white bg-black"
                  />
                  <span>{option}</span>
                </label>
              )
            )}
          </div>

          <input
            name="adresse"
            placeholder="Adresse"
            value={form.adresse}
            onChange={handleChange}
            className={`w-full px-4 py-2 h-16 placeholder-white bg-gray-400/10 focus:outline-none ${
              errors.adresse ? "border border-red-500" : ""
            }`}
          />
          <textarea
            name="message"
            placeholder="Nachricht"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-2 resize-none h-32 placeholder-white bg-gray-400/10 focus:outline-none ${
              errors.message ? "border border-red-500" : ""
            }`}
          />


          {/* Privacy checkbox */}
          <label
            className={`flex items-center gap-2 mt-4 ${
              errors.privacy ? "border border-red-500 p-2 rounded" : ""
            }`}
          >
            <input
              type="checkbox"
              name="privacy"
              checked={form.privacy}
              onChange={handleChange}
              className="w-5 h-5 accent-white bg-black"
            />
            <span className="text-white text-sm">
              Ich habe die{" "}
              <a href="/datenschutz" className="underline">
                Datenschutzerklärung
              </a>{" "}
              gelesen und akzeptiere diese.
            </span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="bg-white text-black font-semibold px-6 py-6 rounded-full disabled:opacity-50 mt-6"
          >
            {submitting ? "Senden…" : "Senden"}
          </button>
        </form>
      )}
    </div>
  );
};
