import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Avatar,
  Tooltip,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";

const pages = ["Home", "Products"];
const settings = ["Account", "Dashboard", "Logout"];

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.background.default,
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const Navbar: React.FC = () => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const isLoggedIn = false; // Replace with actual auth state

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and Site Name */}
          <img src="../../../public/logo.png" />

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={`/${
                        page.toLowerCase() == "home"
                          ? ""
                          : page.toLowerCase().replace(" ", "-")
                      }`}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.text.primary,
                      }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                component={Link}
                to={`/${
                  page.toLowerCase() == "home"
                    ? ""
                    : page.toLowerCase().replace(" ", "-")
                }`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  fontWeight: "semibold",
                  display: "block",
                }}
              >
                <Typography color="white">{page}</Typography>
              </Button>
            ))}
          </Box>

          {/* Cart Icon */}
          <IconButton style={{ marginRight: 10 }} color="inherit">
            <Badge component={Link} to="/cart" badgeContent={0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* User Menu or Login Button */}
          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Adars Upadhyaya" src="/avatar.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <div className="flex gap-3 items-center">
              <Button
                component={Link}
                to="/login"
                variant="contained"
                color="secondary"
              >
                Login
              </Button>
              <ColorButton component={Link} to="/signup" variant="contained">
                Signup
              </ColorButton>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
