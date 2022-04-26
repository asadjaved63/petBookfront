import http from "./http-common";
class CategoriesDataService {
    getAll() {
      return http.get("/categories");
    }
    get(id) {
      return http.get(`/categories/${id}`);
    }
    async create(data) {
      return await http.post("/categories", data);
    }
    update(id, data) {
      return http.put(`/categories/${id}`, data);
    }
    delete(id) {
      return http.delete(`/categories/${id}`);
    }
    deleteAll() {
      return http.delete(`/categories`);
    }
    findByTitle(title) {
      return http.get(`/categories?title=${title}`);
    }
  }
  export default new CategoriesDataService();