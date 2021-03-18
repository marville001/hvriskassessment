import React, { Component } from "react";
import UploadService from "../components/FileUploadService";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: undefined,
      previewImages: [],
      progressInfos: [],
      message: "",
      imageInfos: [],
      sessionId: props.match.params.sessionid,
    };
    this.selectFiles = this.selectFiles.bind(this);
    this.upload = this.upload.bind(this);
    this.uploadImages = this.uploadImages.bind(this);
  }

  selectFiles(event) {
    let images = [];

    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]));
    }

    this.setState({
      progressInfos: [],
      message: [],
      selectedFiles: event.target.files,
      previewImages: images,
    });
  }

  uploadImages(id) {
    const selectedFiles = this.state.selectedFiles;

    let _progressInfos = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      _progressInfos.push({ percentage: 0, fileName: selectedFiles[i].name });
    }

    this.setState(
      {
        progressInfos: _progressInfos,
        message: [],
      },
      () => {
        for (let i = 0; i < selectedFiles.length; i++) {
          this.upload(i, selectedFiles[i], id);
        }
      }
    );
  }

  upload(idx, file, id) {
    let _progressInfos = [...this.state.progressInfos];

    UploadService.upload(
      file,
      (event) => {
        _progressInfos[idx].percentage = Math.round(
          (100 * event.loaded) / event.total
        );
        this.setState({
          progressInfos: _progressInfos,
        });
      },
      id
    )
      .then(() => {
        this.setState({
          message: "Uploaded successfully "
        });
      })
      .then((files) => {
        this.setState({
          imageInfos: files.data,
        });
      })
      .catch(() => {
        _progressInfos[idx].percentage = 0;
        this.setState({
          progressInfos: _progressInfos
        });
      });
  }

  render() {
    const sessionId = this.props.match.params.sessionid;

    const { selectedFiles, previewImages, progressInfos, message } = this.state;
    return (
      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={this.selectFiles}
              />
            </label>
          </div>
          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={!selectedFiles}
              onClick={() => this.uploadImages(sessionId)}
            >
              Upload
            </button>
          </div>
        </div>

        {progressInfos &&
          progressInfos.map((progressInfo, index) => (
            <div className="mb-2" key={index}>
              <span>{progressInfo.fileName}</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow={progressInfo.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progressInfo.percentage + "%" }}
                >
                  {progressInfo.percentage}%
                </div>
              </div>
            </div>
          ))}

        {previewImages && (
          <div>
            {previewImages.map((img, i) => {
              return (
                <img
                  style={{ width: "200px", height: "200px" }}
                  className="preview"
                  src={img}
                  alt={"image-" + i}
                  key={i}
                />
              );
            })}
          </div>
        )}

        {message.length > 0 && (
          <div className="alert alert-secondary" role="alert">
            <ul>
              <li>{message}</li>;
            </ul>
          </div>
        )}
      </div>
    );
  }
}
