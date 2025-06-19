import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Nav = styled.nav<{ isScrolled: boolean }>`
  background-color: white;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
  font-family: 'Cafe24Ssurround', sans-serif;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative;
  font-weight: normal;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  min-width: 200px;
  display: none;

  ${MenuButton}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.5rem;
  color: #B7B7B7;
  background: none;
  border: none;
  transition: all 0.2s;
  font-size: 1.1rem;
  font-weight: normal;
  font-family: 'Cafe24Ssurround', sans-serif;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: #454545;
  }
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const categories = [
    { key: '레이싱', label: '레이싱 게임' },
    { key: '컨트롤', label: '컨트롤 게임' },
    { key: '리액션', label: '리액션 게임' },
    { key: '자유', label: '자유 게임' }
  ];

  return (
    <Nav isScrolled={isScrolled}>
      <NavContainer>
        <Logo 
          src={process.env.PUBLIC_URL + '/sinsuk.png'} 
          alt="게임 컬렉션" 
          onClick={() => handleNavigate('/')}
        />
        <MenuContainer>
          <MenuButton onClick={() => handleNavigate('/class/6-4')}>
            6-4반
            <DropdownMenu>
              {categories.map(cat => (
                <DropdownItem key={cat.key} onClick={e => { e.stopPropagation(); handleNavigate(`/class/6-4/${cat.key}`); }}>
                  <span>{cat.label}</span>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </MenuButton>
          <MenuButton onClick={() => handleNavigate('/class/6-5')}>
            6-5반
            <DropdownMenu>
              {categories.map(cat => (
                <DropdownItem key={cat.key} onClick={e => { e.stopPropagation(); handleNavigate(`/class/6-5/${cat.key}`); }}>
                  <span>{cat.label}</span>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </MenuButton>
          <MenuButton onClick={() => handleNavigate('/awards')}>수상작</MenuButton>
        </MenuContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 