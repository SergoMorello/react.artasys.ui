import styles from "./style.module.css";

interface IProgress {
	value?: number | string;
	size?: 'small' | 'middle' | 'large';
	radius?: boolean;
};

const Progress = ({value = 0, size, radius = false}: IProgress) => {
	value = Number(value);
	if (value > 100) {
		value = 100;
	}
	if (value < 0) {
		value = 0;
	}
	const classes = ['ui-progress'];
	classes.push(styles['container']);
	if (size) classes.push(styles[size]);

	return(<div className={styles['container']} data-progress={value} style={{'--progress': (360 / 100 * value) + 'deg'} as React.CSSProperties}/>);
};

export default Progress;