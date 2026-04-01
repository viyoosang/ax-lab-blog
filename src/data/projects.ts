export interface Project {
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  links: { label: string; url: string }[];
  date: string;
  author?: string;
}

export const projects: Project[] = [
  {
    slug: 'ai-english-passage-generator',
    title: 'AI 영어 지문 생성기',
    description: '교육과정 기반 영어 지문 자동 생성·검수·문제 출제 도구',
    content: `## 개요

AI가 교육과정에 맞는 영어 지문을 자동으로 만들고, 검수하고, 문제까지 출제해주는 올인원 영어 교육 콘텐츠 제작 도구입니다.

## 배경

영어 교과서나 시험에 실리는 지문 하나를 만드는 데 전문 원어민 작가의 집필, 교육과정 기준 검토, 수정·재검토 반복 등 **수일에서 수주**가 걸렸습니다. 2022 개정 교육과정에 따라 학년별 어휘 수준, 문법 난이도, 글의 형식을 정확히 맞춰야 하기 때문입니다.

## 주요 기능

### 지문 생성
두 가지 모드를 지원합니다. **교과서 모드**는 학년, 난이도, 글 형식(21종), 주제를 지정하면 교육과정 기준에 맞는 지문을 생성합니다. **자유 생성 모드**는 수능·모의고사 스타일의 지문을 자유롭게 생성합니다.

![지문 생성 화면](/images/ai-english-passage-generator/passage-generation.jpg)

### 자동 검수
생성된 지문을 단어 수, 문장 길이, 어휘 수준, 문법, 번역 정확성의 5가지 항목으로 자동 검사합니다.

### 문제 출제
지문 하나에서 수능형 11종, 내신형 8종, 워크북형 5종 등 총 24종의 문제를 자동 생성합니다.

![문제 출제 화면](/images/ai-english-passage-generator/question-generation.jpg)

### 읽기 자료
교과 주제를 학습자 수준에 맞게 리라이팅합니다. 같은 주제라도 중학생용, 고등학생용으로 난이도 조절이 가능합니다.

![읽기 자료 화면](/images/ai-english-passage-generator/reading-materials.jpg)

### Idea Lab
키워드만 입력하면 AI가 인터넷에서 관련 최신 이슈와 소재를 검색해 지문 아이디어를 제안합니다.

![Idea Lab 화면](/images/ai-english-passage-generator/idea-lab.jpg)

### 음성 생성 (TTS)
생성된 지문을 AI 음성으로 변환하여 듣기 평가 자료로 활용할 수 있습니다.

### 라이브러리 제공
핵심 기능을 npm 패키지로 제공하여, 다른 교육 서비스에서 가져다 쓸 수 있습니다.

## 기술 스택

- **프론트엔드**: Next.js + TypeScript
- **백엔드**: Kotlin + Spring Boot
- **데이터베이스**: MySQL
- **AI**: OpenAI GPT-5.4 (지문 작성), Gemini 3.1 Flash-Lite (검수), Gemini 3 Flash (소재 검색), Gemini 2.5 Flash (TTS)

## 현황

v2.9.0 기준 35개 이상의 에픽을 거치며 2025년 11월부터 약 5개월간 개발. 지문 생성, 검수, 문제 출제, 읽기 자료, Idea Lab, TTS, 라이브러리 패키지까지 모두 완료.`,
    tags: ['Next.js', 'Spring Boot', 'GPT', 'Gemini', 'TypeScript'],
    links: [],
    date: '2025.11',
    author: '홍석진',
  },
  {
    slug: 'exam-image-generator',
    title: '출제용 이미지 생성기',
    description: 'AI 기반 시험지 삽화 제작 도구',
    content: `## 개요

교사 및 콘텐츠 기획자를 위한 시험지 삽화 제작 전용 도구입니다. Google Gemini AI를 활용하여 시험 문제에 필요한 정확하고 깔끔한 이미지를 빠르게 생성하고 편집할 수 있습니다.

## 주요 기능

### 장면 생성
3D 마커 시스템으로 캐릭터 위치와 원근을 직접 조절하여 정확한 구도를 설정합니다. 캐릭터 프리셋을 저장하고 재사용할 수 있으며, 최대 5명까지 배치 가능합니다.

### 스타일 변환
사진 업로드만으로 깔끔한 선화로 변환합니다. 14가지 화풍(흑백 선화, 수채화, 웹툰 등)을 선택할 수 있습니다.

### 지문 삽화
지문 내용을 분석하여 적합한 그림을 자동으로 추천하고 생성합니다.

## 기술 스택

- React 18 + Vite
- Google Gemini AI API
- Tailwind CSS
- IndexedDB (로컬 저장)`,
    tags: ['React', 'Gemini AI', 'Vite', 'Tailwind CSS'],
    links: [],
    date: '2026.03',
    author: '김규동',
  },
];
