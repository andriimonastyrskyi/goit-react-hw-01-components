import { FriendListWrap } from 'components/FriendList/Friend.styled';
import { FriendItem } from 'components/FriendList/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      <FriendItem friends={friends} />
    </FriendListWrap>
  );
};
