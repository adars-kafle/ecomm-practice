import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LoginPage = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,
          backgroundColor: theme.palette.primary.main,
          boxShadow: 3,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ color: "white" }}
        >
          Login
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            variant="outlined"
            fullWidth
            label="Email Address"
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: {
                color: "white",
                backgroundColor: theme.palette.primary.light,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
              },
              "& label.Mui-focused": {
                color: theme.palette.secondary.main,
              },
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: {
                color: "white",
                backgroundColor: theme.palette.primary.light,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
              },
              "& label.Mui-focused": {
                color: theme.palette.secondary.main,
              },
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              mt: 3,
              mb: 2,
              padding: "10px",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            Login
          </Button>
        </Box>
        <Typography align="center" sx={{ color: "white" }}>
          Don’t have an account?{" "}
          <Button
            color="secondary"
            href="/signup"
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Sign Up
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
