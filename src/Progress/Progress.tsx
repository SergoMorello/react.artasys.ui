import styles from "./style.module.css";

interface IProgress {
	value?: number | string;
	size?: 'small' | 'middle' | 'large';
	radius?: boolean;
};

const Progress = ({value = 0, size, radius = false}: IProgress) => {
	value = Math.ceil(Number(value) * 10) / 10;
	if (value > 100) {
		value = 100;
	}
	if (value < 0) {
		value = 0;
	}

	const progress = radius ? (360 / 100 * value) + 'deg' : value + '%';

	const classes = ['ui-progress'];
	classes.push(styles['container']);
	if (size) classes.push(styles[size]);
	if (radius) classes.push(styles['radius']);

	return(<div className={classes.join(' ')} data-progress={value} style={{'--progress': progress} as React.CSSProperties}/>);
};

export default Progress;