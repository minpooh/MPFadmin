import { useState } from 'react';
import { LuBell, LuSearch } from 'react-icons/lu';

export default function Header() {
    const [showSearch, setShowSearch] = useState(false);

    return <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
            <div></div>
            <div className="flex items-center gap-2">
                <div className="flex items-center transition-all duration-300 ${showSearch ? 'w-64' : 'w-auto' }">
                    {showSearch ? (
                        <div className="relative w-full">
                            <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"/>
                            <input 
                             className="pl-9 pr-3 flex items-center h-9 border-gray-300 bg-gray text-gray-600 rounded-md outline-none placeholder:text-gray-400 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:ring-gray-300"
                             type="text"
                             placeholder="검색..."
                             autoFocus
                             onBlur={()=>setShowSearch(false)}
                            />
                        </div>
                    ) : (
                    <button className="p-2 hover:bg-gray-100 rounded-lg" onClick={()=>setShowSearch(true)}>
                        <LuSearch className="w-5 h-5 text-gray-600"/>
                    </button>
                    )}
                </div>
                <div className="relative flex items-center">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <LuBell className="w-5 h-5 text-gray-600"/>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
}