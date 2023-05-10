import axios from 'axios';
import { requests } from '../request';
export function getcompanys() {
  return axios.get(requests.entrepriseapi + '/all')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function deletecompany(id) {
  return axios.delete(requests.entrepriseapi + '/delete/' + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function updateCompany(data) {
  return axios.put(requests.entrepriseapi + '/update/' + data.id, data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
