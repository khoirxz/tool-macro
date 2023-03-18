import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" flexGrow={1}>
            Tool
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
