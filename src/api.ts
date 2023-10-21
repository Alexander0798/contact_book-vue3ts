import axios from "axios";
import Contact from "./types/Contact";
export default {
  async getContact() {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
  },
  async setContact(data: Contact) {
    return axios
      .post<string>("https://jsonplaceholder.typicode.com/posts", {
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response);
  },
  async patchContact(contact: Contact) {
    return axios
      .patch<Contact>(
        `https://jsonplaceholder.typicode.com/posts/${contact.id}`,
        {
          body: JSON.stringify(contact),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        },
      )
      .then((res) => res);
  },
  async deleteContact(id: string) {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  },
};
