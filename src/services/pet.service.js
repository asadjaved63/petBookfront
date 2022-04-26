import http from "./http-common";
class PetDataService {
    getAll() {
      return http.get("/pets");
    }
    getAllByUserId(id) {
      return http.get(`/pets/userpet/${id}`);
    }
    get(id) {
      return http.get(`/pets/${id}`);
    }
    async create(data) {
      return await http.post("/pets", data);
    }
    update(id, data) {
      return http.put(`/pets/${id}`, data);
    }
    delete(id) {
      return http.delete(`/pets/${id}`);
    }
    deleteAll() {
      return http.delete(`/pets`);
    }
    findByTitle(title) {
      return http.get(`/pets?title=${title}`);
    }
  }
  export default new PetDataService();