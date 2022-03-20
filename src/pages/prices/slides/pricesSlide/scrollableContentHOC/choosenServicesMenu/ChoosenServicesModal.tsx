import { Modal } from "@mui/material";
import { getServicesYouPayForSelector } from "../../../../../../redux/selectors";
import { ServiceYouPayFor } from "../../../../../forClients/slides/forClientsSlide/ServiceYouPayFor";
import { useSelector } from "react-redux";
import { Buttons } from "./Buttons";
import c from "./choosenServicesMenu.module.scss";
import { useTheme } from "./../../../../../../static/hooks/useTheme";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
    isOpen: boolean
    onClose: () => void
}

export const ChoosenServicesModal: React.FC<Props> = ({isOpen, onClose}) => {
    let servicesYouPayFor = useSelector(getServicesYouPayForSelector).map((s, index) => <ServiceYouPayFor {...s} key={index} />);
    const { useThemeClasses } = useTheme();

    let areButtonsDisabled = servicesYouPayFor.length === 0;
    let servicesYouPayForClasses = useThemeClasses(c.servicesYouPayFor, c.servicesYouPayForDark);
    return <Modal open={isOpen} onClose={onClose}>
        <div className={useThemeClasses(c.choosenServicesModal, c.choosenServicesModalDark, c.choosenServicesModalLight)}>
            <CloseIcon className={useThemeClasses(c.closeIcon, c.closeIconDark)} onClick={onClose} />
            {servicesYouPayFor.length !== 0 ? <div className={servicesYouPayForClasses}>
                {servicesYouPayFor}
            </div> : <p className={c.warningSign}>You need to choose at least 1 service.</p>}
            <Buttons areButtonsDisabled={areButtonsDisabled} closeModal={onClose} />
        </div>
    </Modal>
};