export interface IWatchListItem {
    id?: number;
    seen?: boolean;
    movie: IMovieItem;
    wathlist_id: string
    handleSeen: function;
    handleRemove: function;
}
