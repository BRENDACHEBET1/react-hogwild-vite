import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "",
    image: ""
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddHog({
      ...formData,
      weight: Number(formData.weight)
    });

    setFormData({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": "",
      image: ""
    });
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>

     
      <div className="ui header">Add a New Hog</div>

      <div className="field">
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input id="specialty" name="specialty" value={formData.specialty} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input id="weight" name="weight" type="number" value={formData.weight} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="image">Image URL:</label>
        <input id="image" name="image" value={formData.image} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="greased">Greased?</label>
        <input id="greased" name="greased" type="checkbox" checked={formData.greased} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="medal">Highest Medal Achieved:</label>
        <input
          id="medal"
          name="highest medal achieved"
          value={formData["highest medal achieved"]}
          onChange={handleChange}
        />
      </div>

      <button className="ui button primary" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;