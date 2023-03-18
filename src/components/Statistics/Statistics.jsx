import PropTypes from 'prop-types';

import {
  StatList,
  StatTitel,
  StatSection,
} from 'components/Statistics/Statistics.styled';

import { StatsItem } from 'components/Statistics/StatItem';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      <StatTitel className="title">{title}</StatTitel>
      <StatList className="stat-list">{<StatsItem stats={stats} />}</StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
