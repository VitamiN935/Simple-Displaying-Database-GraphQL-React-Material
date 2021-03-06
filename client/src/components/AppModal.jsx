import React from 'react';
import PropTypes from 'prop-types'
import {Box, Modal} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AppModal = ({open, handleClose, title = '', children}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={`modal ${title}`}
    >
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  );
};

export default AppModal;

AppModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string
}