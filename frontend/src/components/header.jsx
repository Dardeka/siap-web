import { Button } from "./ui/button"

const Header = () => {
    return(
        <div className="px-[51px] bg-[#0077B6] shadow-md flex justify-between items-center fixed w-full top-0 z-50">
            <img className="" src="/logos/logo-slogan 1.png" alt="" />
            <div className="flex justify-between text-white">
                <Button className="max-w-[85px] cursor-pointer hover:bg-[#ADB5DB] hover:text-black">Dashboard</Button>
                <Button className="max-w-[104px] ml-[51px] mr-[51px] cursor-pointer hover:bg-[#ADB5DB] hover:text-black">Unggah Data</Button>
                <Button className="max-w-[120px] cursor-pointer hover:bg-[#ADB5DB] hover:text-black" >Pencarian Data</Button>
            </div>
            <div className="profile">
                <img src="/others/ix_user-profile-filled.png" alt="" />
            </div>
        </div>
    )
}

export default Header