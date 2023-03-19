import styled from 'styled-components';

// export const FriendListWrap = styled.ul`
//   max-width: 250px;
//   margin: 0 auto;
//   margin-bottom: 10px;
// `;

// export const FriendItemStyle = styled.li`
//   display: flex;
//   align-items: center;
//   padding: 8px 20px;
//   border-radius: 10px;
//   background-color: #fff;
//   box-shadow: 10px 10px 20px rgb(150, 150, 150);
//   &:not(:last-child) {
//     margin-bottom: 5px;
//   }
// `;

// export const IsOnline = styled.span`
//   flex-shrink: 0;
//   width: 15px;
//   height: 15px;
//   margin-right: 10px;
//   border-radius: 50%;
//   background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
// `;

// export const Avatar = styled.img`
//   width: 48px;
//   margin-right: 10px;
// `;

// export const Name = styled.p`
//   font-size: 18px;
//   font-weight: 500;
// `;
export const FriendWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  border-radius: 15px;
  background: #f0efef;
  border-radius: 10px;
  background: #f0efef;
  box-shadow: 10px 10px 20px #afaeae, -10px -10px 20px #ffffff;
  padding: 5px;
  margin-bottom: 15px;
`;

export const FriendName = styled.p`
  margin-left: 10px;
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
  margin-right: 10px;
`;
