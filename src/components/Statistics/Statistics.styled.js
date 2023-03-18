import styled from 'styled-components';

export const StatTitel = styled.h2`
  padding: 20px 0;
  text-align: center;
  color: grey;
`;

export const StatItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 20%;
  background-color: ${({ backgrounds }) => backgrounds};
  padding: 10px 0;
  font-weight: 500;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid rgb(217, 217, 217);
`;

export const StatSection = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 10px 10px 20px rgb(150, 150, 150);
`;
