// Updating a nested object

import { useState } from "react";

type Person = {
  name: string;
  artwork: {
    title: string;
    city: string;
  };
};

export function FormExercise() {
  const [person, setPerson] = useState<Person>({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  return (
    <>
      <h1>Form</h1>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <br></br>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <br></br>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <br></br>

      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
    </>
  );
}
