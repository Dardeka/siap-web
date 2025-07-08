import { useState } from "react";
import Header from "../components/header";

const Dashboard = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

    return (
        <div>
            {/* Header Section */}
            <Header
                activeMenuItem={activeMenuItem}
                setActiveMenuItem={setActiveMenuItem}
            />

            {/* Main Content */}
            <div className="max-w-[1124px] mt-[119px] mx-auto">
                <div className="bg-[#D9D9D9] w-full py-[13px] px-[44px] rounded-[10px]">
                    <p className="text-sm">Selamat datang di <b>Sistem Informasi Arsip Pembelian (SIAP)</b> ! <br /> Website ini masih dalam proses pengembangan. Untuk mendukung keberlanjutan pengembangan website ini, para pengguna dipersilahkan untuk memberikan kritik dan saran melalui kontak yang tertera di bawah. Terima kasih.</p>
                </div>
                {/* Separator */}
                <div className="flex justify-center items-center mt-[38px] mb-[39px]">
                    <hr className="flex-1 h-[2px] bg-black"/>
                    <h4 className="px-[30px] text-xl"><b>INFORMASI STATISTIK</b></h4>
                    <hr className="flex-1 h-[2px] bg-black"/>
                </div>
                {/* Statistics */}
                <div className="flex justify-between mb-[90px]">
                    <div className="w-[500px] h-[400px] bg-orange-400">
                        <h2>Graph 1</h2>
                    </div>
                    <div className="w-[500px] h-[400px] bg-green-200">
                        <h2>Graph 2</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard