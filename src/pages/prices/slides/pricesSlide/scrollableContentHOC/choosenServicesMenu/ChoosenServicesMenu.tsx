import c from "./choosenServicesMenu.module.scss";
import { useState } from "react";
import { ChoosenServicesModal } from "./ChoosenServicesModal";
import { Buttons } from "./Buttons";

export const ChoosenServicesMenu: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return <>
        <div className={c.choosenCervicesMenu}>
            <p className={c.name} onClick={() => setIsModalOpen(true)}>Show all the choosen services</p>
            <Buttons />
        </div>
        {isModalOpen && <ChoosenServicesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
};