import { people } from "../data/data.js";
import { getImageUrl } from "../data/util.js";

export default function List() {
  const listItems = people.map((person) => {
    return (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}</b>
          <br />
          <span>{person.profession}</span>
          <br />
          {person.accomplishment}
        </p>
      </li>
    );
  });
  return (
    <>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </>
  );
}
