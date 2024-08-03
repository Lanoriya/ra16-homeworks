import { ListingItem } from '../modules/index.tsx';

export function Listing({ items = [] }: { items: ListingItem[] }) {
  const getQuantityLevel = (quantity: number) => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  };

  const formatPrice = (price: string, currency_code: string) => {
    switch (currency_code) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} ${currency_code}`;
    }
  };

  const truncateTitle = (title: string) => {
    return title.length > 50 ? `${title.slice(0, 50)}…` : title;
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.listing_id} className="item">
          <div className="item-image">
            <a href={item.url}>
              {item.MainImage?.url_570xN ? (
                <img src={item.MainImage.url_570xN} alt={item.title || 'No title'} />
              ) : (
                <span>No image available</span>
              )}
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{truncateTitle(item.title || 'No title')}</p>
            <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
            <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  );
}
