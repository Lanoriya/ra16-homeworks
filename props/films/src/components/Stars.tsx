import { Star } from "./Star";

export function Stars({ count = 0 }: {count: number}) {
  if (count < 1 || count > 5 || isNaN(count)) {
    return null;
  }

  return (
    <Star count={count}/>
  )
};