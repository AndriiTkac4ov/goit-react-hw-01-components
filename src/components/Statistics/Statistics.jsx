import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import css from './Statistics.module.css';

export default function Statistics(props) {
    const { title, stats } = props;

    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.stat_list}>
                {stats.map(element => (
                    <li style={{
                            backgroundColor: getRandomHexColor()
                        }}
                        className={css.item} key={element.id}>
                        <span className={css.label}>{element.label}</span>
                        <span className={css.percentage}>{element.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    )
}