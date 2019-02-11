import React, { Component, Fragment } from "react";
import "../styles/App.css";
import { Footer, Header } from "./Layouts";
import { Grid, Paper, Button } from "@material-ui/core";
import WebcamDialog from "./WebcamCapture";
import Countdown from "./Countdown";


class Content extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    imageList: []
  };

  addImage = base64Str => {
    this.setState(prevState => {
      return {
        imageList: prevState.imageList.concat(base64Str)
      };
    });
  };

  displayUploadedImage = (event) => {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("myimage");
    imgtag.title = selectedFile.name;

    reader.onload = function (event) {
      imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
  }

  render() {
    return (
      <Fragment>
        <Grid container direction="row">
          <Grid item sm>
            <Paper className="Paper-container">
              Left Pane

              <Countdown />

              {
                this.state.imageList.map((image, index) => {
                  return (
                    <img
                      src={image}
                      alt="Text to display if image fails to load"
                      key={index}
                    />
                  );
                })
              }

            </Paper>
          </Grid>

          <Grid item sm>
            <Paper className="Paper-container">
              Right Pane
              <input type='file' id='single' onChange={this.displayUploadedImage} />

              <img id="myimage" height="200" />

              <WebcamDialog addImage={this.addImage} />
              
            </Paper>
          </Grid>
        </Grid>

        {/* Question: What's supposed to be in the "New Session" tab of the footer? */}
        <Footer />
      </Fragment>
    );
  }
}

export default Content;
