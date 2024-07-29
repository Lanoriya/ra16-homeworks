import { useState } from "react";
import { CardsView } from "./CardsView";
import { IconSwitch } from "./IconSwitch";
import { ListView } from "./ListView";
import cards from '../assets/cards.json';

export function Store() {
  const [view, setView] = useState(1);

  const handleChangeView = () => {
    setView(view === 0 ? 1 : 0);
  }

  return (
    <div>
      <IconSwitch icon={view === 0 ? "view_list" : "view_module"} onSwitch={handleChangeView}/>
      {view === 0 ? <CardsView items={cards} /> : <ListView items={cards} />}
    </div>
  )
};