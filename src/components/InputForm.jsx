import TextField from "@mui/material/TextField";

const InputForm = ({ state, setState, inputType, title }) => {
  return (
    <TextField
      label={title}
      variant="outlined"
      fullWidth={true}
      value={state}
      onChange={(e) => setState(e.target.value)}
      sx={{ mb: 1.2 }}
      size="small"
      type={inputType}
    />
  );
};

export default InputForm;
