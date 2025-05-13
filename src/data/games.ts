export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  scratchUrl: string;
  classNumber: string;
  category: 'racing' | 'breakout' | 'reaction' | 'free';
  isAward?: boolean;
  developer: string;
  awardType?: '창의상' | '디자인상' | '완성상' | '발표상' | '협력상' | '감동상' | '대상';
}

export const games: Game[] = [
  {
    id: '1',
    title: '6-4반의 레이싱 게임',
    description: '6-4반 친구가 만든 레이싱 게임입니다.',
    image: 'https://placekitten.com/300/200',
    scratchUrl: 'https://scratch.mit.edu/projects/1173182570',
    classNumber: '6-4',
    category: 'racing',
    developer: '김철수'
  },
  {
    id: '2',
    title: '6-4반의 브레이크아웃 게임',
    description: '6-4반 친구가 만든 브레이크아웃 게임입니다.',
    image: 'https://placekitten.com/301/200',
    scratchUrl: 'https://scratch.mit.edu/projects/987654321',
    classNumber: '6-4',
    category: 'breakout',
    developer: '이영희'
  },
  {
    id: '3',
    title: '6-5반의 레이싱 게임',
    description: '6-5반 친구가 만든 레이싱 게임입니다.',
    image: 'https://placekitten.com/302/200',
    scratchUrl: 'https://scratch.mit.edu/projects/1173182570',
    classNumber: '6-5',
    category: 'racing',
    developer: '박지민'
  },
  {
    id: '4',
    title: '6-5반의 브레이크아웃 게임',
    description: '6-5반 친구가 만든 브레이크아웃 게임입니다.',
    image: 'https://placekitten.com/303/200',
    scratchUrl: 'https://scratch.mit.edu/projects/987654321',
    classNumber: '6-5',
    category: 'breakout',
    developer: '최수진'
  },
  {
    id: '5',
    title: '우수상 수상작',
    description: '우수상을 수상한 게임입니다.',
    image: 'https://placekitten.com/304/200',
    scratchUrl: 'https://scratch.mit.edu/projects/123456789',
    classNumber: '6-4',
    category: 'racing',
    isAward: true,
    developer: '김철수',
    awardType: '창의상'
  },
  {
    id: '6',
    title: '6-4반의 반응 속도 게임',
    description: '6-4반 친구가 만든 반응 속도 게임입니다.',
    image: 'https://placekitten.com/305/200',
    scratchUrl: 'https://scratch.mit.edu/projects/234567890',
    classNumber: '6-4',
    category: 'reaction',
    developer: '정민수'
  },
  {
    id: '7',
    title: '6-5반의 자유 게임',
    description: '6-5반 친구가 만든 자유 게임입니다.',
    image: 'https://placekitten.com/306/200',
    scratchUrl: 'https://scratch.mit.edu/projects/345678901',
    classNumber: '6-5',
    category: 'free',
    developer: '한지원'
  }
]; 