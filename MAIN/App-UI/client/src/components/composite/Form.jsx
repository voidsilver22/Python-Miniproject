import Entry from "../Entry.jsx";
import Submitbutton from "../Submit.jsx";
import Password from "../Password.jsx";

function Form() {
  return (
    <>
    <div className="login">
        <form action="POST">
            <Entry id={"usrname"} label={"User Name"}/>
            <Password/>
            <Submitbutton />
        </form>
    </div>
    </>
  );
}

export default Form;