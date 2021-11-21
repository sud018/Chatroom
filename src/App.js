import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App(){
    if(!localStorage.getItem('username')) return <LoginForm />
    return(<ChatEngine 
          height="100vh"
          projectID="cb40d93b-5dc4-4355-8c6e-2fbf116567b7"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
    />);
}
export default App;