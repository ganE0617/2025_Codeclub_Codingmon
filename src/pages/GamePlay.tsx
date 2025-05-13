import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

// 이미지 import
import game1Image from '../images/game1.png';
import game2Image from '../images/game2.png';
import game3Image from '../images/game3.png';
import game4Image from '../images/game4.png';

const GameContainer = styled.div`
  padding: 2rem;
  padding-top: 5rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const BackButton = styled.button`
  background-color: #ff6b8b;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #ff4d6d;
  }
`;

const Message = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const GameImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const GameTitle = styled.h2`
  color: #ff6b8b;
  margin-bottom: 1rem;
  font-family: 'Cafe24Ssurround', sans-serif;
`;

const GameDescription = styled.p`
  color: #666;
  margin: 1rem 0;
  font-family: 'Noto Sans KR', sans-serif;
`;

const GameLink = styled.a`
  display: inline-block;
  background-color: #ff6b8b;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  margin-top: 1rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #ff4d6d;
  }
`;

const games = [
  {
    id: 1,
    title: '6-4반의 첫 번째 게임',
    description: '6-4반 친구가 만든 게임입니다.',
    image: game1Image,
    scratchUrl: 'https://scratch.mit.edu/projects/1173182570',
    classNumber: '6-4'
  },
  {
    id: 2,
    title: '6-4반의 두 번째 게임',
    description: '6-4반 친구가 만든 게임입니다.',
    image: game2Image,
    scratchUrl: 'https://scratch.mit.edu/projects/987654321',
    classNumber: '6-4'
  },
  {
    id: 3,
    title: '6-5반의 첫 번째 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: game3Image,
    scratchUrl: 'https://scratch.mit.edu/projects/1173182570',
    classNumber: '6-5'
  },
  {
    id: 4,
    title: '6-5반의 두 번째 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: game4Image,
    scratchUrl: 'https://scratch.mit.edu/projects/987654321',
    classNumber: '6-5'
  }
];

const GamePlay: React.FC = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  
  const game = games.find(g => g.id === Number(gameId));

  useEffect(() => {
    if (game) {
      window.open(game.scratchUrl, '_blank');
    }
  }, [game]);

  if (!game) {
    return <div>게임을 찾을 수 없습니다.</div>;
  }

  return (
    <GameContainer>
      <BackButton onClick={() => navigate('/')}>
        ← 게임 목록으로 돌아가기
      </BackButton>
      <Message>
        <GameTitle>{game.title}</GameTitle>
        <GameImage src={game.image} alt={game.title} />
        <GameDescription>{game.description}</GameDescription>
        <p>게임이 새 창에서 열립니다. 창이 열리지 않았다면 아래 링크를 클릭해주세요.</p>
        <GameLink href={game.scratchUrl} target="_blank" rel="noopener noreferrer">
          게임 열기
        </GameLink>
      </Message>
    </GameContainer>
  );
};

export default GamePlay; 