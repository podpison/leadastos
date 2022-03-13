import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getServicesYouPayForSelector } from "../../../../redux/selectors";
import { ServiceYouPayFor } from "./ServiceYouPayFor";
import c from "./../../forClientsPage.module.scss";
import { useTheme } from "./../../../../static/hooks/useTheme";
import ExpandIcon from "@mui/icons-material/ExpandMore";

export const ServicesYouPayFor: React.FC = () => {
    let servicesYouPayFor = useSelector(getServicesYouPayForSelector).map((s, index) => <ServiceYouPayFor {...s} key={index} />);
    const { useThemeClasses } = useTheme();

    return <Accordion className={useThemeClasses([c.servicesYouPayForContainer, c.textField4], c.servicesYouPayForContainerDark)}>
        <AccordionSummary expandIcon={<ExpandIcon className={useThemeClasses(c.expandIcon, c.expandIconDark)} />} className={useThemeClasses(c.summary, c.summaryDark)}>Services you pay for</AccordionSummary>
        <AccordionDetails>
            <Link className={useThemeClasses(c.link, c.linkDark)} to='/prices/chooserMode'>Click here to choose new services</Link>
            <div className={c.servicesYouPayFor}>
                {servicesYouPayFor}
            </div>
        </AccordionDetails>
    </Accordion>
};