export interface IMovieItem {
    id: number;
    title?: string;
    original_title: string;
    poster_path: string;
    watchlist: IWatchList;
    addListItem?: function;
}