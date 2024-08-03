import './App.css';
import { Listing } from './components/Listing';
import data from './data/etsy.json';
import { ListingItem } from './modules/index.tsx';

function App() {
  const items: ListingItem[] = data;
  return (
    <Listing items={items}/>
  )
}

export default App
