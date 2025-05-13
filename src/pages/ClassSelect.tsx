import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  color: #ff6b8b;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  text-align: center;
`;

const ClassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
  width: 100%;
`;

const ClassCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ClassNumber = styled.h2`
  color: #ff6b8b;
  font-size: 2rem;
  margin: 0;
`;

const ClassDescription = styled.p`
  color: #666;
  margin: 1rem 0 0 0;
`;

const ClassSelect: React.FC = () => {
  const navigate = useNavigate();

  const handleClassSelect = (classNumber: string) => {
    navigate(`/class/${classNumber}`);
  };

  return (
    <Container>
      <Title>🎮 우리 반 게임 모음 🎮</Title>
      <ClassGrid>
        <ClassCard onClick={() => handleClassSelect('6-4')}>
          <ClassNumber>6-4반</ClassNumber>
          <ClassDescription>6학년 4반 친구들의 게임을 즐겨보세요!</ClassDescription>
        </ClassCard>
        <ClassCard onClick={() => handleClassSelect('6-5')}>
          <ClassNumber>6-5반</ClassNumber>
          <ClassDescription>6학년 5반 친구들의 게임을 즐겨보세요!</ClassDescription>
        </ClassCard>
      </ClassGrid>
    </Container>
  );
};

export default ClassSelect; 