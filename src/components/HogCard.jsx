import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      aria-label="hog card"
      className="ui card"
      onClick={() => setShowDetails((prev) => !prev)}
    >

      
      <div className="content">
        <h3>{hog.name}</h3>
      </div>

     
      <div className="image">
        <img
          src={hog.image}
          alt={`Photo of ${hog.name}`}
        />
      </div>

      
      {showDetails && (
        <div className="content">
          <p>Specialty: {hog.specialty}</p>
          <p>{hog.weight}</p>
          <p>{hog.greased ? "Greased" : "Nongreased"}</p>
          <p>{hog["highest medal achieved"]}</p>
        </div>
      )}

     
      <div className="extra content">
        <button
          className="ui button red"
          onClick={(e) => {
            e.stopPropagation(); 
            onHide(hog.name);
          }}
        >
          Hide Me
        </button>
      </div>

    </div>
  );
}

export default HogCard;