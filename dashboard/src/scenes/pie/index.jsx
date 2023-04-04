import { Box } from "@mui/material";
import  Header  from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m="20px"
             position="absolute"
             top="178px"
             left="280px"
             width="1130px">
            <Header title="Pie Chart" subtitle="Pie Chart" />
            <Box height="78vh">
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie;