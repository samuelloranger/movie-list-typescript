export interface ISearchItem {
    id: number;
    watchlist: IWatchList;
    original_title: string;
    addListItem: function;
    poster_path: string;
}