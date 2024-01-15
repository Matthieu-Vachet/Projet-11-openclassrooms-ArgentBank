import { useState } from "react"
import "./style.scss"

export default function UserWelcom() {

  // A modif pour Redux
  const { edit, setEdit } = useState(false);
  const userName = "Tony Jarvis";
  console.log(edit);

  return (
    <div className="header">
      <h1>Welcom back<br />{userName}!</h1>
      <button className="edit-button" onClick={() => setEdit(true)}>Edit Name</button>
    </div>
  )
}