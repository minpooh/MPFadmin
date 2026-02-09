import { LuLayoutDashboard, LuStar, LuBell, LuCircleHelp, LuSettings, LuLogOut } from 'react-icons/lu';

export default function Sidebar({activeMenu, setActiveMenu}) {
    const menuItems = [
        { id: 'Dashboard', label: '대시보드', icon: LuLayoutDashboard},
        { id: 'Review', label: '리뷰 관리', icon: LuStar },
        { id: 'Notice', label: '공지 사항', icon: LuBell },
        { id: 'Faq', label: 'FAQ', icon: LuCircleHelp }
    ]

    return <aside className="fixed left-0 top-0 w-1/3 h-full px-8 py-16 bg-white border-r border-gray-200 md:w-72">
        <h2 className="text-gray-800">MPF admin</h2>
        <nav className="mt-4 px-2">
            {menuItems.map((item)=>{
                const Icon = item.icon;
                const isActive = activeMenu == item.id;
                return (
                    <button
                    key={item.id}
                    onClick={() => {setActiveMenu(item.id)}}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-md text-sm ${isActive ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                        <Icon className="w-4 h-4 flex-shrink-0"/>
                        <span>{item.label}</span>
                    </button>
                );
            })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-gray-200">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                <LuSettings className="w-4 h-4 flex-shrink-0"/>
                <span>설정</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                <LuLogOut className="w-4 h-4 flex-shrink-0"/>
                <span>로그아웃</span>
            </button>
        </div>
    </aside>
}