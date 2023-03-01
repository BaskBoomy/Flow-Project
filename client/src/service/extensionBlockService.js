class ExtensionBlockService {
  constructor(http) {
    this.http = http;
  }
  async getExtensionList() {
    return this.http.fetch("/getExtensionList", {
      method: "GET",
    });
  }
  async addExtension(extension) {
    return this.http.fetch("/addExtension", {
      method: "POST",
      body: extension,
    });
  }
  async deleteExtension(id) {
    return this.http.fetch(`/deleteExtension?id=${id}`, {
      method: "DELETE",
    });
  }
  async updateExtension(extension) {
    return this.http.fetch(`/updateExtension`, {
      method: "PUT",
      body: extension,
    });
  }
}
export default ExtensionBlockService;
