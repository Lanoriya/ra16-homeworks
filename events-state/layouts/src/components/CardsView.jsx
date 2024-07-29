
export function CardsView({ items }) {
  return (
    <div className="cards-view">
      {items.map((card, index) =>
        <div className="cards-view-item" key={index}>
          <h2>{card.name}</h2>
          <p>{card.color}</p>
          <img src={card.img} alt={card.name} />
          <div className="cards-view-btns">
            <p>${card.price}</p>
            <button>add to cart</button>
          </div>
        </div>
      )}
    </div>
  )
};