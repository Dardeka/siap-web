import { useState } from "react"
import Header from "../components/header"

const UnggahData = () => {
    const [activeMenu, setActiveMenu] = useState('Unggah');

    return(
        <Header
            activeMenuItem={activeMenu}
            setActiveMenuItem={setActiveMenu}
        />
    )
}

export default UnggahData;