import { AuctionItem } from '../types/type'

export const shuffleArray = (list: AuctionItem[] | undefined) => {
  if (!list) return []

  for (let i = list.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[list[i], list[randomIndex]] = [list[randomIndex], list[i]]
  }
  return list.slice()
}
