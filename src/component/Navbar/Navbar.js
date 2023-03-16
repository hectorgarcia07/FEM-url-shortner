import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { useTheme } from '@mui/material/styles';

import Logo from './Logo'
import CustomMenu from './CustomMenu';

const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ padding: '1.5rem 0 1.5rem 1.5rem', paddingRight: '1.4rem' }} >
        <Toolbar disableGutters>

          <Logo sx={{ display: { xs: 'none', md: 'flex' } }} src={theme.icons.logo} />

          <Logo sx={{ display: { xs: 'flex', md: 'none' } }} src={theme.icons.logo} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:'flex-end' }}>
            <CustomMenu handleOpenNavMenu />
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;