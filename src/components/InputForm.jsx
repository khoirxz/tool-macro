import TextField from "@mui/material/TextField";

const InputForm = ({ state, setState, inputType, title, ...rest }) => {
  return (
    <TextField
      label={title}
      variant="outlined"
      fullWidth={true}
      value={state}
      onChange={(e) => setState(e.target.value)}
      sx={{ mb: 1.2 }}
      size="medium"
      type={inputType}
      {...rest}
    />
  );
};

export default InputForm;
