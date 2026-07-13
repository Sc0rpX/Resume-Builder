import './App.css'
import Editor from './components/Editor.jsx'
import Header from './components/Header.jsx'
import Preview from './components/Preview.jsx'

function App() {
  return (
    <div className='flex flex-col overflow-hidden w-screen h-screen'>
      <Header />
      <div className='flex flex-1 overflow-hidden'>
        <Editor />
        <Preview />
      </div>
    </div>
  )
}

export default App
