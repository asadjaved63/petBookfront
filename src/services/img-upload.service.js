import http from "./http-common";
class FileUploadService {
  upload (file, id,routName) {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("_id", id);
    return http.post(`/${routName}/uploadImg`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  }
}
export default new FileUploadService();