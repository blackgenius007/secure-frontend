import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography } from "@mui/material";
import { styled } from '@mui/system';

const MainContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#ffff',
  border: `${theme.spacing(0.25)} solid`,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius
}));

function HighlightedInformation(props) {
  const { className, children } = props;
  return (
    <MainContainer className={classNames(className)}>
      <Typography variant="body2">{children}</Typography>
    </MainContainer>
  );
}

HighlightedInformation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string
};

export default HighlightedInformation;
