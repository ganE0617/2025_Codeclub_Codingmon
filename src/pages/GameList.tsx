import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { games } from '../data/games';

// 이미지 import
import game1Image from '../images/game1.png';
import game2Image from '../images/game2.png';
import game3Image from '../images/game3.png';
import game4Image from '../images/game4.png';

const Container = styled.div`
  padding: 2rem;
  padding-top: 5rem;
  width: 100%;
  font-family: 'Cafe24Ssurround', sans-serif;
  background-color: white;
  min-height: 100vh;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: #4B4B4B;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: normal;
`;

const CategoryTitle = styled.h3`
  color: #686666;
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  font-weight: normal;
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const GameCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const GameImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;

const GameContent = styled.div`
  padding: 1rem;
`;

const GameTitle = styled.h3`
  color: #4B4B4B;
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
  font-weight: normal;
`;

const GameDescription = styled.p`
  color: #666;
  margin: 0 0 1rem 0;
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Noto Sans KR', sans-serif;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span<{ type: 'developer' | 'category' | 'award' }>`
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  background-color: ${props => {
    switch (props.type) {
      case 'developer': return '#C6E9FF';
      case 'category': return '#FFF8DB';
      case 'award': return '#FFD8D8';
      default: return '#ffd6e0';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'developer': return '#009BFF';
      case 'category': return '#FFCD01';
      case 'award': return '#FF5C5C';
      default: return '#ff6b8b';
    }
  }};
  font-weight: normal;
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 1rem auto;
  padding: 0.8rem 2rem;
  background-color: #FF5C5C;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: 'Cafe24Ssurround', sans-serif;
  font-weight: normal;

  &:hover {
    background-color: #FF5C5C;
  }
`;

const categoryLabels = {
  racing: '레이싱 게임',
  breakout: '브레이크아웃 게임',
  reaction: '반응 속도 게임',
  free: '자유 게임'
};

const gamesWithImages = games.map(game => ({
  ...game,
  image: game.id === '1' ? game1Image :
         game.id === '2' ? game2Image :
         game.id === '3' ? game3Image :
         game.id === '4' ? game4Image : game1Image
}));

const confettiAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Confetti = styled.span<{ direction: 'left' | 'right' }>`
  font-size: 2rem;
  animation: ${confettiAnimation} 2s infinite;
  margin: 0 1rem;
  display: inline-block;
  transform: scaleX(${props => props.direction === 'left' ? -1 : 1});
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(360deg);
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: visible;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FloatingShape = styled.div<{ 
  size: number; 
  color: string; 
  left: number; 
  top: number;
  delay: number;
  shape: 'circle' | 'triangle' | 'square';
}>`
  position: fixed;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.color};
  ${props => {
    switch (props.shape) {
      case 'circle':
        return 'border-radius: 50%;';
      case 'triangle':
        return `
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          background-color: transparent;
          border-left: ${props.size/2}px solid transparent;
          border-right: ${props.size/2}px solid transparent;
          border-bottom: ${props.size}px solid ${props.color};
          width: 0;
          height: 0;
        `;
      case 'square':
        return 'border-radius: 10px;';
      default:
        return 'border-radius: 50%;';
    }
  }}
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  opacity: 0.6;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  transform-origin: center center;
  will-change: transform;
`;

const GameList: React.FC = () => {
  const navigate = useNavigate();
  const { classNumber, category } = useParams();
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const handleGameClick = (gameId: string) => {
    navigate(`/play/${gameId}`);
  };

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const renderAwardSection = () => {
    const awardGames = gamesWithImages.filter(game => game.isAward);

    return (
      <Section>
        <TitleContainer>
          <Confetti direction="left">🎉</Confetti>
          <SectionTitle>수상작 게임</SectionTitle>
          <Confetti direction="right">🎉</Confetti>
        </TitleContainer>
        <GameGrid>
          {awardGames.map((game) => (
            <GameCard key={game.id} onClick={() => handleGameClick(game.id)}>
              <GameImage src={game.image} alt={game.title} />
              <GameContent>
                <GameTitle>{game.title}</GameTitle>
                <GameDescription>{game.description}</GameDescription>
                <TagContainer>
                  <Tag type="developer">{game.developer} 개발자</Tag>
                  <Tag type="category">{categoryLabels[game.category]}</Tag>
                  {game.awardType && <Tag type="award">{game.awardType}</Tag>}
                </TagContainer>
              </GameContent>
            </GameCard>
          ))}
        </GameGrid>
      </Section>
    );
  };

  const renderClassSection = (classNum: string) => {
    const classGames = gamesWithImages.filter(game => game.classNumber === classNum);
    const gamesByCategory = classGames.reduce((acc, game) => {
      if (!acc[game.category]) {
        acc[game.category] = [];
      }
      acc[game.category].push(game);
      return acc;
    }, {} as Record<string, typeof games>);

    return (
      <Section>
        <SectionTitle>{classNum}반 게임</SectionTitle>
        {Object.entries(gamesByCategory).map(([cat, games]) => {
          const categoryKey = `${classNum}-${cat}`;
          const isExpanded = expandedCategories[categoryKey];
          const displayedGames = isExpanded ? games : games.slice(0, 5);

          return (
            <div key={cat}>
              <CategoryTitle>{categoryLabels[cat as keyof typeof categoryLabels]}</CategoryTitle>
              <GameGrid>
                {displayedGames.map((game) => (
                  <GameCard key={game.id} onClick={() => handleGameClick(game.id)}>
                    <GameImage src={game.image} alt={game.title} />
                    <GameContent>
                      <GameTitle>{game.title}</GameTitle>
                      <GameDescription>{game.description}</GameDescription>
                      <TagContainer>
                        <Tag type="developer">{game.developer} 개발자</Tag>
                        <Tag type="category">{categoryLabels[game.category]}</Tag>
                        {game.awardType && <Tag type="award">{game.awardType}</Tag>}
                      </TagContainer>
                    </GameContent>
                  </GameCard>
                ))}
              </GameGrid>
              {games.length > 5 && (
                <ShowMoreButton onClick={() => toggleCategory(categoryKey)}>
                  {isExpanded ? '접기' : '더보기'}
                </ShowMoreButton>
              )}
            </div>
          );
        })}
      </Section>
    );
  };

  const renderBackgroundShapes = () => (
    <>
      {/* 왼쪽 도형들 */}
      <FloatingShape size={60} color="#FFC5C5" left={5} top={20} delay={0} shape="circle" />       // #FFE5E5 → #FFC5C5
      <FloatingShape size={60} color="#A5D7F5" left={8} top={40} delay={1} shape="triangle" />     // #C6E9FF → #A5D7F5
      <FloatingShape size={50} color="#FFD8BA" left={3} top={60} delay={2} shape="square" />       // #FFF0E5 → #FFD8BA
      <FloatingShape size={30} color="#D8C5F5" left={7} top={80} delay={3} shape="circle" />       // #F0E5FF → #D8C5F5
  
      {/* 오른쪽 도형들 */}
      <FloatingShape size={50} color="#FFE1AD" left={92} top={15} delay={0.5} shape="triangle" />  // #FFF6E6 → #FFE1AD
      <FloatingShape size={40} color="#FFCCE4" left={95} top={35} delay={1.5} shape="square" />    // #FFE5F4 → #FFCCE4
      <FloatingShape size={60} color="#B8F0D1" left={90} top={55} delay={2.5} shape="circle" />    // #E5FFF0 → #B8F0D1
      <FloatingShape size={40} color="#D8C5F5" left={93} top={75} delay={3.5} shape="square" />    // #F4E5FF → #D8C5F5
    </>
  );
  

  // 특정 클래스의 특정 카테고리 게임만 보여주기
  if (classNumber && category) {
    const filteredGames = gamesWithImages.filter(
      game => game.classNumber === classNumber && game.category === category
    );

    return (
      <BackgroundContainer>
        {renderBackgroundShapes()}
        <ContentContainer>
          <Container>
            <SectionTitle>{classNumber} {categoryLabels[category as keyof typeof categoryLabels]}</SectionTitle>
            <GameGrid>
              {filteredGames.map((game) => (
                <GameCard key={game.id} onClick={() => handleGameClick(game.id)}>
                  <GameImage src={game.image} alt={game.title} />
                  <GameContent>
                    <GameTitle>{game.title}</GameTitle>
                    <GameDescription>{game.description}</GameDescription>
                    <TagContainer>
                      <Tag type="developer">{game.developer} 개발자</Tag>
                      <Tag type="category">{categoryLabels[game.category]}</Tag>
                      {game.awardType && <Tag type="award">{game.awardType}</Tag>}
                    </TagContainer>
                  </GameContent>
                </GameCard>
              ))}
            </GameGrid>
          </Container>
        </ContentContainer>
      </BackgroundContainer>
    );
  }

  // 수상작 페이지
  if (location.pathname === '/awards') {
    return (
      <BackgroundContainer>
        {renderBackgroundShapes()}
        <ContentContainer>
          <Container>
            {renderAwardSection()}
          </Container>
        </ContentContainer>
      </BackgroundContainer>
    );
  }

  // 특정 클래스의 모든 게임 보여주기
  if (classNumber) {
    return (
      <BackgroundContainer>
        {renderBackgroundShapes()}
        <ContentContainer>
          <Container>
            {renderClassSection(classNumber)}
          </Container>
        </ContentContainer>
      </BackgroundContainer>
    );
  }

  // 메인 페이지 (수상작 + 모든 클래스)
  return (
    <BackgroundContainer>
      {renderBackgroundShapes()}
      <ContentContainer>
        <Container>
          {renderAwardSection()}
          {renderClassSection('6-4')}
          {renderClassSection('6-5')}
        </Container>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default GameList; 