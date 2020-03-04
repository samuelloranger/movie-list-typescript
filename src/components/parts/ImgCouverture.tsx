import React from 'react';
import { IImgCouverture } from '../interfaces/IImgCouverture';

const ImgCouverture = ({ title, poster_path, className }: IImgCouverture): JSX.Element => {
	return (
		<img
			className={className}
			src={`https://image.tmdb.org/t/p/w500${poster_path}`}
			alt={'Movie poster of the movie ' + title}
		/>
	);
};

export default ImgCouverture;
