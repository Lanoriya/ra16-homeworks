
export function ListView({ items }) {
  return (
    <div className="list-view">
      {items.map((list, index) =>
        <div className="list-view-item" key={index}>
          <img src={list.img} alt={list.name} />
          <h2>{list.name}</h2>
          <p>{list.color}</p>
          <p>${list.price}</p>
          <button>add to cart</button>
        </div>
      )}
    </div>
  )
};