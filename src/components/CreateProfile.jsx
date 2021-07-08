//import photo from "../Elon-musk.jpg";
import { SendButtons } from "./SendButtons.jsx";
import { SendSkills } from "./SendSkills.jsx";
export function CreateProfile({ user }) {
  console.log(user);
  const buttons = ["Message", "Following"];
  return (
    <>
      <h2>{user.name}</h2>
      <h3>{user.location}</h3>
      <p>{user.description}</p>
      <SendButtons buttons={buttons} />
      <div>
        <h3>Skills</h3>
        <SendSkills skills={user.skills} />
      </div>
    </>
  );
}
