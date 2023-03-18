import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/randomColor';
import { StatItemStyle } from 'components/Statistics/Statistics.styled';

export const StatsItem = ({ stats }) => {
  return stats.map(stat => {
    return (
      <StatItemStyle key={stat.id} backgrounds={getRandomHexColor()}>
        <span>{stat.label}</span>
        <span>{stat.percentage}%</span>
      </StatItemStyle>
    );
  });
};

StatsItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
