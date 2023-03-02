class ExtensionBlockService {
  constructor(http) {
    this.http = http;
  }
  async getExtensionList() {
    return this.http.fetch("/extension/getExtensionList", {
      method: "GET",
    });
  }
  async getExtensionReferenceList() {
    return this.http.fetch("/extension/getExtensionReferenceList", {
      method: "GET",
    });
  }
  async addExtension(extension) {
    return this.http.fetch("/extension/addExtension", {
      method: "POST",
      body: extension,
    });
  }
  async deleteExtension(id) {
    return this.http.fetch(`/extension/deleteExtension?id=${id}`, {
      method: "DELETE",
    });
  }
  async updateExtension(extension) {
    return this.http.fetch(`/extension/updateExtension`, {
      method: "PUT",
      body: extension,
    });
  }
}
export default ExtensionBlockService;
