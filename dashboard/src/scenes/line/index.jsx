import { Box } from "@mui/material";
import  Header  from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    return (
        <Box m="20px"
             position="absolute"
             top="178px"
             left="280px"
             width="1130px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="78vh">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line;