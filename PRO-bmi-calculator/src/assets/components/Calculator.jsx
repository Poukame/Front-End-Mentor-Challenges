import { Heading } from './Headings';
import { useState } from 'react';
import MetricSystem from './MetricSystem';
import ImperialSystem from './ImperialSystem';

export default function Calculator() {
	const units = [
		{ id: 'metric', title: 'metric' },
		{ id: 'imperial', title: 'imperial' }
	];

	const [selectedUnit, setSelectedUnit] = useState('metric');

	return (
		<div className='flex w-full flex-col items-center p-6'>
			<div className='max-w-xs rounded-xl bg-yellow-100 p-6'>
				<Heading level='3' className='mb-0'>
					Enter your details below
				</Heading>
				<fieldset>
					<div className='my-6 flex justify-between gap-8'>
						{units.map((el) => (
							<div key={el.id} className='flex items-center'>
								<input
									defaultChecked={el.id === selectedUnit}
									id={el.id}
									name='unit-select'
									type='radio'
									value={el.id}
									checked={selectedUnit === el.id}
									onChange={(e) => setSelectedUnit(e.target.value)}
									className='relative size-8 appearance-none rounded-full border border-main-dark-blue bg-white before:absolute before:inset-1 before:rounded-full checked:border-none checked:bg-main-blue checked:ring-8 checked:ring-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400'
								/>
								<label htmlFor={el.id} className='ml-3 block text-lg font-medium capitalize text-main-gunmetal'>
									{el.title}
								</label>
							</div>
						))}
					</div>
				</fieldset>
				{selectedUnit === 'metric' ? <MetricSystem unitSystem = {selectedUnit} /> : <ImperialSystem unitSystem = {selectedUnit} />}


			</div>
		</div>
	);
}
