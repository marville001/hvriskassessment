import http from "./upload";

class FileUploadService {
  upload(file, onUploadProgress, id) {
    let formData = new FormData();
    formData.append("file", file);
    console.log(id);
    return http.post(
      "/api/upload/images/"+id,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      }
    );
  }
}

export default new FileUploadService();
