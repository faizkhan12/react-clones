import "./App.css"
import Chat from "./Components/chat/Chat"
import Sidebar from "./Components/sidebar/Sidebar"

function App() {
  return (
    <div className='app'>
      <>
        <Sidebar />
        <Chat />
      </>
    </div>
  )
}

export default App
