import { AllHTMLAttributes } from 'react';
import styles from './style.module.scss';

export interface LoadingProps extends Omit<AllHTMLAttributes<HTMLDivElement>, 'color'> {
    color?:  'primary' | 'light' | 'secondary' | 'secondary-light' | 'tertiary' ;
};

const Loading = ({ color = "primary", ...props }: LoadingProps) => {
    const classes = ['ui-loading'];
    
    classes.push(styles['loading']);
    if (color) classes.push(styles[color], 'ui-loading-' + color)

    return(
        <div {...props} className={classes.join(' ')}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
        </div>
    ); 
};

export default Loading;

