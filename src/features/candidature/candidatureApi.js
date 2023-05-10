import axios from 'axios';
import { requests } from '../request';
export function create(data) {
  return axios.post(requests.candidatureapi + '/create', data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function getCandidatures() {
  return axios.get(requests.candidatureapi + '/all')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function getCandidatureByCandidat(id) {
  return axios.get('http://localhost:4000/candidacy/getByCandidateId/' + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
