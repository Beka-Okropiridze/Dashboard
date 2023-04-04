import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px"
             position="absolute"
             top="178px"
             left="280px"
             width="1130px"
        >
            <Header title="FAQ" subtitle="Frequently Asked Questions" />

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                             An Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisic
                            voluptate dolor accusamus blanditiis praesentium, 
                            aliquid totam vitae id iste consectetur dolorese.
                            kokoseq oske esk koaq ad and so githu more ifnse
                            dorina dogestik monster fontel lion suspended yes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                             Second Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisic
                            voluptate dolor accusamus blanditiis praesentium, 
                            aliquid totam vitae id iste consectetur dolorese.
                            kokoseq oske esk koaq ad and so githu more ifnse
                            dorina dogestik monster fontel lion suspended yes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                            Your Favourite Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisic
                            voluptate dolor accusamus blanditiis praesentium, 
                            aliquid totam vitae id iste consectetur dolorese.
                            kokoseq oske esk koaq ad and so githu more ifnse
                            dorina dogestik monster fontel lion suspended yes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                            Final Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisic
                            voluptate dolor accusamus blanditiis praesentium, 
                            aliquid totam vitae id iste consectetur dolorese.
                            kokoseq oske esk koaq ad and so githu more ifnse
                            dorina dogestik monster fontel lion suspended yes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

        </Box>
    )

}

export default FAQ;