export interface IMovieList {
    watchlist: Array<IWatchListItem>;
    currentPage: number;
    totalPages: number;
    totalResults: number;
    movies: Array<IMovieItem>
    listLoaded: boolean
    error: boolean;
    errorMessage: string;
    redirect: boolean;
}

