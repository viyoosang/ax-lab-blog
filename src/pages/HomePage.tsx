import { Link } from 'react-router-dom';

const timeline: { date: string; title: string; desc?: string }[] = [
  {
    date: '2025.10',
    title: '에듀테크전략 Core Group 산하 출범',
    desc: '대고객용 AI 서비스 직접 설계·개발 미션, 바이브코딩 기반 MVP 체계 구축',
  },
  {
    date: '2026.02',
    title: '조직운영전략 Core Group 이동',
    desc: '사내 도구 개발로 영역 확장',
  },
  {
    date: '2026.04',
    title: 'AX추진위원회 직속 AX 추진 Cell로 이동',
  },
];

export default function HomePage() {
  return (
    <div>
      <h1
        className="text-gray-800 text-3xl sm:text-4xl mb-7"
        style={{ fontVariationSettings: "'wght' 600" }}
      >
        AX전략 LAB
      </h1>
      <div className="flex flex-col gap-7 text-gray-500 leading-relaxed">
        <p>
          AI로 기획하고 개발하는 방식을 바꾸는 실험을 해왔습니다.
        </p>
        <p>
          기획부터 구현, 현장 투입까지를 한 팀 안에서 수행했습니다.
          만들어서 증명한다는 원칙 아래, 진행한 작업 일부를{' '}
          <Link
            to="/projects"
            className="text-gray-600 underline underline-offset-4 decoration-gray-200 hover:decoration-gray-600 transition-colors duration-200"
          >
            projects
          </Link>
          에서 소개합니다.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-14 flex flex-col gap-6">
        {timeline.map((item) => (
          <div key={item.date} className="flex gap-6">
            <span className="text-gray-300 text-sm shrink-0 tabular-nums pt-0.5 w-16">
              {item.date}
            </span>
            <div>
              <p className="text-gray-600" style={{ fontVariationSettings: "'wght' 500" }}>
                {item.title}
              </p>
              {item.desc && (
                <p className="text-gray-400 text-sm mt-0.5">
                  {item.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Members */}
      <div className="mt-14">
        <h2
          className="text-gray-600 text-sm mb-4"
          style={{ fontVariationSettings: "'wght' 550" }}
        >
          구성원
        </h2>
        <div className="flex flex-col gap-1.5">
          {[
            { name: '김규동', from: '구 스마트러닝연구소' },
            { name: '정서한', from: '구 IT개발기획 Core', note: '콘텐츠 Company 잔류' },
            { name: '홍석진', from: '구 콘텐츠서비스1 Cell' },
            { name: '서준영', from: '구 스마트러닝전략1 Cell' },
          ].map((m) => (
            <div key={m.name} className="flex items-baseline gap-2 text-sm">
              <span className="text-gray-600">{m.name}</span>
              <span className="text-gray-300">
                {m.from}{m.note ? ` · ${m.note}` : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
