import { Image, Circle } from '@chakra-ui/react';
import { IPropsIconCircle } from '../Types';

function IconCircle({
	outlineColor,
	top,
	left,
	imgPath,
	size,
	name,
	handleSelect,
}: IPropsIconCircle) {
	return (
		<Circle
			id={name}
			size={size}
			bg='bgWhite'
			outline='15px solid'
			outlineColor={outlineColor}
			p='2'
			top={top}
			left={left}
			transform='translate(50%, -50%)'
			position='absolute'
			onClick={() => handleSelect(name)}
			_hover={{cursor:'pointer'}}
		>
			<Image src={imgPath} alt={`icon of ${name}`} width='70%' pointerEvents='none' />
		</Circle>
	);
}

export default IconCircle;
