import { LuStar, LuBell, LuCircleHelp, LuTrendingUp } from 'react-icons/lu';

export default function Dashboard() {

    const customerReview = [
        { id: 'minjoung1510', time: 1},
        { id: 'cutomer123', time: 2},
        { id: 'helloworld', time: 3},
        { id: 'review_king', time: 4}
    ]

    return <div className="text-gray-600">
        <div className="mb-6">
            <h2 className="font-medium mb-1">환영합니다, 관리자님!</h2>
            <p className="text-gray-500 text-sm">MPF 기프트디자인 관리 시스템</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card
                title="총 리뷰"
                value="0"
                color="bg-gray-500"
                icon={LuStar}
                trend="+ 12.5%"
            />
            <Card
                title="공지사항"
                value="0"
                color="bg-gray-500"
                icon={LuBell}
                trend="+ 0"
            />
            <Card
                title="FAQ"
                value="0"
                color="bg-gray-500"
                icon={LuCircleHelp}
                trend="+ 0"
            />
            <Card
                title="평균 평점"
                value="4.7"
                color="bg-gray-500"
                icon={LuTrendingUp}
                trend="+ 0.3%"
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h2 className="mb-5 font-medium">최근 리뷰</h2>
                <div className="space-y-3">
                    {customerReview.map((item)=>(
                    <div key={item.id} className="flex items-start gap-3 pb-3 border-b border-gray-200 last:border-0">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <LuStar className="w-4 h-4 text-gray-600"/>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-gray-600">
                                {item.id}님이 리뷰를 작성하셨습니다.
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{item.time}시간 전</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h2 className="mb-5 font-medium">시스템 통계</h2>
                <div className="space-y-3">
                    <StatRow label="오늘 방문자" value="1,234"/>
                    <StatRow label="이번 주 신규 리뷰" value="45"/>
                    <StatRow label="답변 대기 중" value="8"/>
                    <StatRow label="시스템 상태" value="정상"/>
                </div>
            </div>
        </div>
    </div>
}

function Card({ title, value, color, icon:Icon, trend }) {
    return(
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-gray-500">{trend}</span>
            </div>
            <h3 className="text-gray-500 text-xs mb-1">{title}</h3>
            <p className="text-xl font-medium">{value}</p>
        </div>
    );
}

function StatRow({ label, value }){
    return(
        <div className="flex items-center justify-between pb-3 border-b border-gray-200 last:border-0">
            <p className="text-xs text-gray-600">{label}</p>
            <p className="text-xs text-gray-400 mt-1">{value}</p>
        </div>
    );
}