import React from 'react';
import ImgCouverture from './ImgCouverture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

//Interfaces
import { IMovieItem } from "../interfaces"

const MovieListItem = ({ watchlist, id, original_title, poster_path, addListItem }: IMovieItem) => {
	const addItem = () => {
		let movie = {
			id: id,
			seen: false
		};

		addListItem(movie);
	};

	const movieIsInWatchlist = (): boolean => {
		let isInWatchlist = false;
		Object.values(watchlist).forEach((movie: any): void => {
			if (id === movie.id) {
				isInWatchlist = true;
			}
		});
		return isInWatchlist;
	};

	return (
		<div className="moviesList__movieGrid__item col-6 col-md-3 ">
			<h2>{original_title}</h2>
			<ImgCouverture title={original_title} poster_path={poster_path} />
			{!movieIsInWatchlist() ? (
				<FontAwesomeIcon className="icon" onClick={addItem} icon={faPlus} />
			) : (
					<span className="inWatchlist">
						Movie already in watchlist
					<FontAwesomeIcon className="checkIcon" icon={faCheck} />
					</span>
				)}
		</div>
	);
};

export default MovieListItem;
