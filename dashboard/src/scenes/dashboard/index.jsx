import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import { useContext } from "react";
import  Header  from '../../components/Header';
import { ColorModeContext, tokens } from "../../theme";

const Dashboard = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return <Box m="20px" position="absolute" top= "178px" left= "280px" >
        <Box  display= "flex" justifyContent="space-between" alignItems="center">
            <Header title="Manage Team"  subtitle="Welcome to your dashboard" />
        </Box>
    </Box>
};

export default Dashboard;