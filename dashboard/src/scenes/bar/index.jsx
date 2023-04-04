import { Box } from "@mui/material";
import  Header  from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
    return (
        <Box m="20px"
             position="absolute"
             top="178px"
             left="280px"
             width="1130px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="78vh">
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar;