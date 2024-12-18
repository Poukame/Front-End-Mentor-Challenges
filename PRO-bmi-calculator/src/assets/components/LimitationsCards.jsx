import { Heading } from './Headings';
import { Body } from './Body';
import genderIcon from '../images/icon-gender.svg';
import muscleIcon from '../images/icon-muscle.svg';
import raceIcon from '../images/icon-race.svg';
import pregnancyIcon from '../images/icon-pregnancy.svg';
import ageIcon from '../images/icon-age.svg';
import curveRight from '../images/pattern-curved-line-right.svg';

export function LimitationsCards() {
	return (
		<div className='limitations-cards-container col-span-12 mb-24 grid grid-cols-subgrid gap-8 sm:gap-4 lg:-translate-y-40'>
			<div className='card relative z-10 col-span-12 rounded-2xl bg-white p-6 shadow-card sm:col-span-6 lg:col-span-4 lg:col-start-8'>
				<div className='mb-4 flex items-center gap-4'>
					<img src={genderIcon} alt='' />
					<Heading level='4'>Gender</Heading>
				</div>
				<Body>
					The development and body fat composition of girls and boys vary with age. Consequently, a child's age and
					gender are considered when evaluating their BMI.
				</Body>
			</div>
			<div className='card relative z-10 col-span-12 rounded-2xl bg-white p-6 shadow-card sm:col-span-6 lg:col-span-4 lg:col-start-5'>
				<div className='mb-4 flex items-center gap-4'>
					<img src={ageIcon} alt='' />
					<Heading level='4'>Age</Heading>
				</div>
				<Body>
					In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
				</Body>
			</div>
			<div className='card relative z-10 col-span-12 rounded-2xl bg-white p-6 shadow-card sm:col-span-6 lg:col-span-4 lg:col-start-9'>
				<div className='mb-4 flex items-center gap-4'>
					<img src={muscleIcon} alt='' />
					<Heading level='4'>Muscle</Heading>
				</div>
				<Body>
					BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.
				</Body>
			</div>
			<img src={curveRight} className='hidden lg:col-span-2 lg:col-start-3 lg:row-start-2 lg:block' alt='' />
			<div className='card relative z-10 col-span-12 rounded-2xl bg-white p-6 shadow-card sm:col-span-6 lg:col-span-4 lg:col-start-3'>
				<div className='mb-4 flex items-center gap-4'>
					<img src={pregnancyIcon} alt='' />
					<Heading level='4'>Pregnancy</Heading>
				</div>
				<Body>
					Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is
					advisable to minimise health risks for both mother and child.
				</Body>
			</div>
			<div className='card relative z-10 col-span-12 rounded-2xl bg-white p-6 shadow-card sm:col-span-6 sm:col-start-4 lg:col-span-4 lg:col-start-7'>
				<div className='mb-4 flex items-center gap-4'>
					<img src={raceIcon} alt='' />
					<Heading level='4'>Race</Heading>
				</div>
				<Body>
					Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To
					learn more, it is advised to discuss this with your GP or practice nurse.
				</Body>
			</div>
		</div>
	);
}
