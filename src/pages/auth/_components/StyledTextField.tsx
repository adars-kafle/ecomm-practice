import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const StyledTextField = ({ ...props }) => {
  const theme = useTheme();

  return (
    <TextField
      variant="outlined"
      fullWidth
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
      {...props}
    />
  );
};

export default StyledTextField;
