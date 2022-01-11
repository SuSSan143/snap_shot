/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
// import useWidth from "../useWidth"

// console.log(useWidth);
function ImageResults(props) {
  const [modal, useModal] = useState({ open: false, currentImg: "" });

  const handleOpen = (img) => {
    useModal({ open: true, currentImg: img });
  };

  const handleClose = () => {
    useModal({ open: false });
  };

  let imageList;
  const { images } = props;

  if (images) {
    imageList = (
      <ImageList cols={4}>
        {images.map((img) => (
          <ImageListItem key={img.id}>
            <img src={img.largeImageURL} alt="" />
            <ImageListItemBar
              title={img.tags}
              actionIcon={
                <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                  <ZoomIn color="white" />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  } else {
    imageList = null;
  }
  const actions = [
    <FlatButton label="Close" primary={true} onClick={handleClose} />,
  ];
  return (
    <div style={{ marginLeft: 50, marginRight: 50, marginTop: 20 }}>
      {imageList}
      <Dialog
        actions={actions}
        modal={false}
        open={modal.open}
        onRequestClose={handleClose}
      >
        <img src={modal.currentImg} alt="" style={{ width: "100%" }} />
      </Dialog>
    </div>
  );
}
ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;
