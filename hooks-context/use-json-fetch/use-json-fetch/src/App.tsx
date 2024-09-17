import { GetLoading } from './components/GetLoading';
import { GetData } from './components/GetData';
import { GetError } from './components/GetError';
import './App.css'

function App() {
  return (
    <>
      <GetData />
      <GetLoading />
      <GetError />
    </>
  )
}

export default App;
