export interface IDeals {
  internalName: string
	title: string
	metacriticLink: string
	dealID: string
	storeID: string
	gameID: string
	salePrice: string
	normalPrice: string
	isOnSale: string
	savings: string
	metacriticScore: string
	steamRatingText: string
	steamRatingPercent: string
	steamRatingCount: string
	steamAppID: string
	releaseDate: string
	lastChange: string
	dealRating: string
	thumb: string
}

export interface ISearchGame {
	gameID: string
	steamAppID: string
	cheapest: string
	cheapestDealID: string
	external: string
	internalName: string
	thumb: string
}