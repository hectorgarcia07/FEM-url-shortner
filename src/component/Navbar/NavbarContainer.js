import Toolbar from "@mui/material/Toolbar";
import { styled } from '@mui/material/styles';

const NavbarContainer = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.5rem 0.3rem 0 1.3rem'
}));

export default NavbarContainer
