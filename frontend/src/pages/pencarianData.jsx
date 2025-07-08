import { useState } from "react";
import Header from "../components/header";

const PencarianData = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('Cari');

    return(
        <Header
            activeMenuItem={activeMenuItem}
            setActiveMenuItem={setActiveMenuItem}
        />
    )
}

export default PencarianData;