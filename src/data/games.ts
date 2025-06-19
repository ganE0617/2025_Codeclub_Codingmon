export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  scratchUrl: string;
  classNumber: string;
  category: '레이싱' | '컨트롤' | '리액션' | '자유' | '슬롯';
  isAward?: boolean;
  author: string;
  awardType?: '창의상' | '디자인상' | '완성상' | '발표상' | '협력상' | '감동상' | '대상';
}

export const games: Game[] = [
  {
    id: '1',
    title: '코딩몬 4반-01-거북이 달리기',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game1Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179514552',
    classNumber: '6-4',
    author: 'kang130609',
    category: '레이싱'
  },
  {
    id: '2',
    title: '코딩몬 4반-02-보트 레이싱',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game2Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179515386',
    classNumber: '6-4',
    author: 'Kim20130502',
    category: '레이싱'
  },
  {
    id: '3',
    title: '인형뽑기',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game3Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184615119',
    classNumber: '6-4',
    author: 'wrwrjk',
    category: '자유'
  },
  {
    id: '4',
    title: '추억의 두더지 게임',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game4Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179515290',
    classNumber: '6-4',
    author: 'pang916',
    category: '리액션'
  },
  {
    id: '5',
    title: '로켓 게임_코딩몬4반',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game5Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179516115',
    classNumber: '6-4',
    author: 'Block0324',
    category: '자유'
  },
  {
    id: '6',
    title: '인어공주 탈출',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game6Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184618179',
    classNumber: '6-4',
    author: 'mangdungtomato',
    category: '레이싱'
  },
  {
    id: '7',
    title: '기타',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game7Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179513194',
    classNumber: '6-4',
    author: 'daeun019284',
    category: '자유'
  },
  {
    id: '8',
    title: '노가다 겜(심심할때만 하세요)_4반',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game8Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184618889',
    classNumber: '6-4',
    author: 'chaeyulyul',
    category: '자유'
  },
  {
    id: '9',
    title: '코딩몬4반-5번-딸바사모',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game9Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184619442',
    classNumber: '6-4',
    author: 'zzongari',
    category: '자유'
  },
  {
    id: '10',
    title: '코딩몬4반6번꼬미돌을 잡아줘 ㅠㅠ',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game10Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184619998',
    classNumber: '6-4',
    author: 'oliviaya1012',
    category: '자유'
  },
  {
    id: '11',
    title: '블록',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game11Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179514709',
    classNumber: '6-4',
    author: 'seohyun019283',
    category: '컨트롤'
  },
  {
    id: '12',
    title: '기타',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game12Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1182593077',
    classNumber: '6-4',
    author: 'ID4444444',
    category: '자유'
  },
  {
    id: '13',
    title: '아이디어팩맨',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game13Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179515064',
    classNumber: '6-4',
    author: 'kim130621',
    category: '컨트롤'
  },
  {
    id: '14',
    title: '코딩몬 4반 10번 불가사리 블록 없애기',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game14Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184620430',
    classNumber: '6-4',
    author: 'abcdpotato',
    category: '자유'
  },
  {
    id: '15',
    title: '피하고 피해라',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game15Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184620893',
    classNumber: '6-4',
    author: 'llamen',
    category: '자유'
  },
  {
    id: '16',
    title: '코딩몬4반-16-암냠냠',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game16Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179514597',
    classNumber: '6-4',
    author: 'yun139',
    category: '자유'
  },
  {
    id: '17',
    title: '6학년 4반 21번 홀런더비',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game17Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184621383',
    classNumber: '6-4',
    author: 'kbos2',
    category: '자유'
  },
  {
    id: '18',
    title: '블록깨기',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game18Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1184621811',
    classNumber: '6-4',
    author: 'tokki0813',
    category: '컨트롤'
  },
  {
    id: '19',
    title: '코딩몬4반-18번-슈퍼마리오Remix',
    description: '6-4반 친구가 만든 게임입니다.',
    image: 'game19Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179514850',
    classNumber: '6-4',
    author: 'muck_dang',
    category: '자유'
  },
  {
    id: '20',
    title: '개구리 잡기',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game20Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179528583',
    classNumber: '6-5',
    author: 'Kruby73',
    category: '리액션'
  },
  {
    id: '21',
    title: '코딩몬 0502 arrow Game',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game21Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1172626486',
    classNumber: '6-5',
    author: 'rlarkddb',
    category: '자유'
  },
  {
    id: '22',
    title: '코딩몬0502cajino',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game22Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179527626',
    classNumber: '6-5',
    author: 'rlarkddb',
    category: '자유'
  },
  {
    id: '23',
    title: '슬롯 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game23Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179525268',
    classNumber: '6-5',
    author: 'leo_jinjin3',
    category: '슬롯'
  },
  {
    id: '24',
    title: '레이싱',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game24Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179526097',
    classNumber: '6-5',
    author: 'seou019283',
    category: '레이싱'
  },
  {
    id: '25',
    title: '슬롯형',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game25Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1182606204',
    classNumber: '6-5',
    author: 'kim130521',
    category: '슬롯'
  },
  {
    id: '26',
    title: '코딩몬 5반 5번 아리룰렛',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game26Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179528283',
    classNumber: '6-5',
    author: 'sponjyari1016',
    category: '슬롯'
  },
  {
    id: '27',
    title: '타타맨이 게이가 되어가는 과정',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game27Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179533844',
    classNumber: '6-5',
    author: 'clwmwngks',
    category: '자유'
  },
  {
    id: '28',
    title: '코딩몬5반_병아리!',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game28Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179538066',
    classNumber: '6-5',
    author: 'jia1218',
    category: '레이싱'
  },
  {
    id: '29',
    title: '두더지 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game29Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179526176',
    classNumber: '6-5',
    author: 'yeonjea0710',
    category: '리액션'
  },
  {
    id: '30',
    title: '코딩몬 5반 13 원숭이 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game30Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179526957',
    classNumber: '6-5',
    author: 'pappasii',
    category: '리액션'
  },
  {
    id: '31',
    title: '코5-12-바닷속을 탈출하라!',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game31Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179527910',
    classNumber: '6-5',
    author: 'hy1_ull',
    category: '레이싱'
  },
  {
    id: '32',
    title: '5반 7-',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game32Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179527962',
    classNumber: '6-5',
    author: 'dbstj_1024',
    category: '컨트롤'
  },
  {
    id: '33',
    title: '5-4 15 oh!',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game33Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179527516',
    classNumber: '6-5',
    author: 'Astroid0130',
    category: '컨트롤'
  },
  {
    id: '34',
    title: '코딩몬 5반 19번 병아리의 아침식사',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game34Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179528163',
    classNumber: '6-5',
    author: 'Eunseo0128',
    category: '레이싱'
  },
  {
    id: '35',
    title: '코5-11-성공률1/27 도브 아닌 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game35Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179529196',
    classNumber: '6-5',
    author: 'ookpo',
    category: '슬롯'
  },
  {
    id: '36',
    title: '코딩몬 5반 17 컨트롤 게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game36Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179526897',
    classNumber: '6-5',
    author: 'abcdeschool',
    category: '컨트롤'
  },
  {
    id: '37',
    title: '코5-14-곰바!',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game37Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179530571',
    classNumber: '6-5',
    author: 'Number-one-1',
    category: '리액션'
  },
  {
    id: '38',
    title: '코5-20-상식퀴즈',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game38Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179534725',
    classNumber: '6-5',
    author: 'chan0529',
    category: '자유'
  },
  {
    id: '39',
    title: '코딩몬5반-22번-슬롯게임',
    description: '6-5반 친구가 만든 게임입니다.',
    image: 'game39Image',
    scratchUrl: 'https://scratch.mit.edu/projects/1179529544',
    classNumber: '6-5',
    author: 'sungha0422',
    category: '슬롯'
  }
]; 