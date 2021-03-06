import React, { Component, ChangeEvent } from 'react';
import SearchItem from './SearchItem';

//Firebase
import base from '../../firebase';

//Interfaces
import { IMovieItem, ISearch } from "../interfaces";

interface Props {
	addListItem: Function;
}

class Search extends Component<Props> {
	state: ISearch = {
		watchlist: {},
		recherche: '',
		movies: [],
		listEmpty: true
	};

	/**
	 * Fonction componentDidMount
	 * @description Lorsque le component vient tout juste de se monter
	 */
	componentDidMount(): void {
		base.syncState('/watchlist/', {
			context: this,
			state: 'watchlist'
		});
	}

	updateMovies = (search: string): void => {
		const api_url = 'https://api.themoviedb.org/3';
		const API_KEY = '&api_key=08b94d2812a49610389adc101ee70ad2';

		fetch(`${api_url}/search/movie?sort_by=popularity.desc${API_KEY}&query=${search}`)
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				this.setState(
					{
						movies: response.results,
						listEmpty: false
					},
					() => {
						console.log(this.state.movies);
					}
				);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	/**
	 * Method handlechange
	 * @description Effectue la recherche avec le call d'API
	 * @param {Event} event Évènement qui appelle la fonction
	 */
	handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const search: string = event.currentTarget.value;
		this.setState({
			recherche: search
		});

		if (search === ' ' || search.length === 0 || search === null) {
			this.setState({
				movies: [],
				listEmpty: true
			});
		} else {
			this.updateMovies(search);
		}
	};

	/**
	 * Method addListItem
	 * @description Ajoute l'item à la watchlist
	 * @param { Object } movie_object Objet envoyé à la fonction
	 */
	addListItem = (movie_object: IMovieItem): void => {
		const addListItem: Function = this.props["addListItem"];

		this.setState({
			recherche: '',
			movies: [],
			listEmpty: true
		});

		addListItem(movie_object);
	};

	render(): JSX.Element {
		const { watchlist, movies, recherche, listEmpty } = this.state;

		return (
			<div className="recherche">
				<label htmlFor="recherche__input">Search for a movie: </label>
				<input
					className="recherche__input"
					name="recherche__input"
					id="recherche__input"
					onChange={this.handleChange}
					value={recherche}
				/>

				{!listEmpty ? (
					<div className="recherche__liste">
						{Object.values(movies).map((movie: any) => {
							return (
								<SearchItem
									key={movie.id}
									watchlist={watchlist}
									original_title={movie.original_title}
									id={movie.id}
									poster_path={movie.poster_path}
									addListItem={this.addListItem}
								/>
							);
						})}
					</div>
				) : null}
			</div>
		);
	}
}

export default Search;
