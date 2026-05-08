import React, { useState } from "react";
import HogCard from "./HogCard";
import HogForm from "./HogForm";

function HogList({ hogs: initialHogs }) {
  const [hogs, setHogs] = useState(initialHogs);
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortType, setSortType] = useState("");

  function handleAddHog(newHog) {
    setHogs((prev) => [...prev, newHog]);
  }

  function handleHide(name) {
    setHiddenHogs((prev) => [...prev, name]);
  }

  let displayedHogs = hogs
    .filter((hog) => !hiddenHogs.includes(hog.name))
    .filter((hog) => (showGreasedOnly ? hog.greased : true));

  const sortedHogs = [...displayedHogs].sort((a, b) => {
    if (sortType === "name") return a.name.localeCompare(b.name);
    if (sortType === "weight") return a.weight - b.weight;
    return 0;
  });

  return (
    <div>
      <HogForm onAddHog={handleAddHog} />

      <div className="ui form">
        <div className="field">
          <div className="ui checkbox">
            <input
              id="greasedFilter"
              type="checkbox"
              checked={showGreasedOnly}
              onChange={() => setShowGreasedOnly((prev) => !prev)}
            />

           
            <label htmlFor="greasedFilter">
              Greased Pigs Only?
            </label>
          </div>
        </div>

        <div className="field">
          <label htmlFor="sortBy">Sort by:</label>

          <select
            id="sortBy"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>

      <div className="ui cards">
        {sortedHogs.map((hog) => (
          <HogCard
            key={hog.name}
            hog={hog}
            onHide={handleHide}
          />
        ))}
      </div>
    </div>
  );
}

export default HogList;