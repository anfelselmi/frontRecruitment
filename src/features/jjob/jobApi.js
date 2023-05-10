import axios from 'axios';
import { requests } from '../request';
export function createannonce(data) {
  return axios.post(requests.annonceapi + '/create', data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function getannonces() {
  return axios.get('http://localhost:4000/job/getAll')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function getannoncebyId(id) {
  return axios.get(requests.annonceapi + '/getById/' + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function deleteannonce(id) {
  return axios.delete(requests.annonceapi + '/delete/' + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function updateannonce(data) {
  return axios.put(requests.annonceapi + '/update/' + data.id, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function getannoncebyCompanyId(id) {
  return axios.get(requests.annonceapi + '/getByCompanyId/' + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
