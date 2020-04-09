import React from 'react';
import './MaterialPromo.scss';
import glutenFree from './assets/hiclipart.com.png';
import natural from './assets/nature.png';
import edible from './assets/allnatural.png';

const MaterialPromo = () => {
	return(
		<div className='material-promo flex-evenly'>
			<div className='material-item flex-center-column'>
				<div className='text'>
					<span>100% Organic Materials</span>
				</div>
				<div className='material-icon'>
					<img src={natural} alt='organic'/>
				</div>
			</div>
			<div className='material-item flex-center-column'>
				<div className='text'>
					<span>Made of Rice Papers</span>
				</div>
				<div className='material-icon flex-center-column'>
					<img src={glutenFree} alt='organic'/>
				</div>
			</div>
			<div className='material-item flex-center-column'>
				<div className='text'>
					<span>Made of edible colors</span>
				</div>
				<div className='material-icon'>
					<img src={edible} alt='organic'/>
				</div>
			</div>
		</div>
	)
}

export default MaterialPromo;