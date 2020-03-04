export interface ISearch {
    watchlist: IWatchList;
    recherche: string;
    movies: Array<IMovieItem>;
    listEmpty: boolean;
}