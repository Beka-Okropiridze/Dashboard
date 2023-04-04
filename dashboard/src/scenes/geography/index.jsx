import { Box } from "@mui/material";
import  Header  from "../../components/Header";
import GeographyChart  from "../../components/GeographyChart";

const Geography = () => {
    return (
        <Box m="20px"
             position="absolute"
             top="178px"
             left="280px"
             width="1130px">
            <Header title="Geography Chart" subtitle="Geography Chart" />
            <Box height="78vh"
                 border="1px solid"
                 borderRadius="4px">
                <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography;