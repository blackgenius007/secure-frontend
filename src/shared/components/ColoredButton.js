import React, { memo } from "react";
import PropTypes from "prop-types";
import { Button,ThemeProvider } from "@mui/material";
import { createTheme} from '@mui/material/styles' 

function ColoredButton(props) {
  const { color, children, theme } = props;
  const buttonTheme = createTheme({
    ...theme,
    palette: {
      primary: {
        main: color
      }
    }
  });
  const buttonProps = (({ color, theme, children, ...o }) => o)(props);
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button {...buttonProps} color="primary">
        {children}
      </Button>
    </ThemeProvider>
  );
}

ColoredButton.propTypes = {
  color: PropTypes.string.isRequired
};

export default memo(ColoredButton);
