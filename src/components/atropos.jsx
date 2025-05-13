import Atropos from 'atropos/react';
import bg from '../assets/atropos-bg.svg';
import mountains from '../assets/atropos-mountains.svg';
import forestBack from '../assets/atropos-forest-back.svg';
import forestMid from '../assets/atropos-forest-mid.svg';
import forestFront from '../assets/atropos-forest-front.svg';
import logoEn from '../assets/atropos-logo-en.svg';
import applicantName from '../assets/applicant-name.svg';

function AtroposCard() {
	return (
		<div className='atropos-card'>
			<Atropos className="atropos-banner" highlight={false} onEnter={() => console.log('enter')}>
				<img className="atropos-banner-spacer" src={bg} alt="" />
				<img data-atropos-offset="-4.5" src={bg} alt="" />
				<img data-atropos-offset="-2.5" src={mountains} alt="" />
				<img data-atropos-offset="0" src={forestBack} alt="" />
				<img data-atropos-offset="2" src={forestMid} alt="" />
				<img data-atropos-offset="4" src={forestFront} alt="" />
				<img data-atropos-offset="5" src={applicantName} alt="" />
			</Atropos>
		</div>
	);
}

export default AtroposCard;