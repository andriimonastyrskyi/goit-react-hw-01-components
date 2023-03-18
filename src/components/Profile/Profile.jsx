import PropTypes from 'prop-types';

import {
  Avatar,
  ProfileWrap,
  ProfileDescr,
  ProfileTitle,
  StatsInfo,
  StatsItem,
  StatsList,
} from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap>
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <ProfileTitle>{username}</ProfileTitle>
        <ProfileDescr>@{tag}</ProfileDescr>
        <ProfileDescr>{location}</ProfileDescr>
      </div>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <StatsInfo>{stats.followers}</StatsInfo>
        </StatsItem>

        <StatsItem>
          <span>Views</span>
          <StatsInfo>{stats.views}</StatsInfo>
        </StatsItem>

        <StatsItem>
          <span>Likes</span>
          <StatsInfo>{stats.likes}</StatsInfo>
        </StatsItem>
      </StatsList>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

// export default Profile;

// Profile.propTypes = {
//   avatar: PropTypes.string,
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   stats: PropTypes.objectOf(PropTypes.number),
// };

// FriendItem.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };
