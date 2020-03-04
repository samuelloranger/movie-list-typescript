import React from 'react';
import ImgCouverture from './ImgCouverture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

//Interfaces
import { ISearchItem } from "../interfaces";

const SearchItem = ({ id, watchlist, original_title, addListItem, poster_path }: ISearchItem) => {
	const addItem = (): void => {
		let movie = {
			id: id,
			seen: false
		};

		addListItem(movie);
	};

	const movieIsInWatchlist = (): boolean => {
		let isInWatchlist = false;
		Object.values(watchlist).forEach((movie: any) => {
			if (id === movie.id) {
				isInWatchlist = true;
			}
		});
		return isInWatchlist;
	};

	// if () {
	return (
		<div className="recherche__liste__item" onClick={addItem}>
			<div className="image">
				<ImgCouverture title={original_title} poster_path={poster_path} />
			</div>
			<div className="movieInfos">
				<p className="movieInfos__title">{original_title}</p>

				{!movieIsInWatchlist()
					? <p className="movieInfos__addButton">
						<FontAwesomeIcon className="movieInfos__addButton__icon" icon={faPlus} />
						Add to watchlist
					</p>
					:
					<p className="movieInfos__isInWatchlist">
						<FontAwesomeIcon className="movieInfos__isInWatchlist__icon" icon={faCheck} />
						Movie already in watchlist
					</p>
				}
			</div>
		</div>
	);
};

export default SearchItem;
