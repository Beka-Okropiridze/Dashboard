import { Box, typography, useTheme } from "@mui/system";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns =  [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        { field: "age", headerName: "Age", headerAlign: "left", type: "number", align: "left" },
    ];

    return(
        <Box>
            <Header title="Team" subtitle="Managing the Team Members" />
            <Box>
                <DataGrid 
                rows={mockDataTeam}
                columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team;