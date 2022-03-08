import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getServicesYouPayForSelector } from "../../../../redux/selectors";
import { ServiceYouPayFor } from "./ServiceYouPayFor";
import c from "./../forClientsPage.module.scss";

export const ServicesYouPayFor: React.FC = () => {
    let servicesYouPayFor = useSelector(getServicesYouPayForSelector).map((s, index) => <ServiceYouPayFor {...s} key={index} />);

    return <Accordion className={c.servicesYouPayForContainer}>
        <AccordionSummary>Services you pay for</AccordionSummary>
        <AccordionDetails>
            <Link to='/prices/chooserMode'>Click here to choose new services</Link>
            <div className={c.servicesYouPayFor}>
                {servicesYouPayFor}
            </div>
        </AccordionDetails>
    </Accordion>
};