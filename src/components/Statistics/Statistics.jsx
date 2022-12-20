import PropTypes from 'prop-types';

export default function Statistics(props) {
    const { title, stats } = props;

    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}

            <ul class="stat-list">
                {stats.map(element => (
                    <li class="item" key={element.id}>
                        <span class="label">{element.label}</span>
                        <span class="percentage">{element.percentage}</span>
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