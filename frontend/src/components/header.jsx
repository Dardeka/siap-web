import { useState } from "react";
import { Button } from './ui/button';
import { useNavigate } from "react-router-dom";

const Header = ({activeMenuItem, setActiveMenuItem}) => {
    const navigate = useNavigate();

    return(
        <div className="flex w-full px-[51px] bg-[#0077B6] shadow-md flex justify-between items-center fixed top-0 z-50">
            <img className="max-w-[131px]" src="/logos/logo-slogan 1.png" alt="" />
            <div className="flex justify-between text-white">
                <Button 
                    variant={activeMenuItem === 'Dashboard' ? 'default' : 'ghost'} 
                    className={`max-w-[85px] bg-[#0077B6] border-b-2 cursor-pointer rounded-none hover:bg-[#0077B6] hover:text-white ${activeMenuItem === 'Dashboard'? 'border-white': 'border-transparent'} hover:border-white`} 
                    onClick={() => {setActiveMenuItem('Dashboard'); navigate("/");}}>Dashboard</Button>
                <Button 
                    variant={activeMenuItem === 'Unggah' ? 'default' : 'ghost'} 
                    className={`max-w-[104px] ml-[51px] mr-[51px] bg-[#0077B6] border-b-2 cursor-pointer rounded-none hover:bg-[#0077B6] hover:text-white ${activeMenuItem === 'Unggah'? 'border-white' : 'border-transparent'} hover:border-white`} 
                    onClick={() => {setActiveMenuItem('Unggah'); navigate("/unggahData");}}>Unggah Data</Button>
                <Button 
                    variant={activeMenuItem === 'Cari' ? 'default' : 'ghost'} 
                    className={`max-w-[120px] bg-[#0077B6] border-b-2 cursor-pointer rounded-none hover:bg-[#0077B6] hover:text-white ${activeMenuItem === 'Cari' ? 'border-white' : 'border-transparent'} hover:border-white`} 
                    onClick={() => {setActiveMenuItem('Cari'); navigate("/pencarianData");}}>Pencarian Data</Button>
            </div>
            <div className="profile">
                <img src="/others/ix_user-profile-filled.png" alt="" />
            </div>
        </div>
    )
}

export default Header;