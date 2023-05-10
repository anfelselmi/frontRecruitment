import axios from 'axios';
import { requests } from '../request';
export function getcandidates() {
  return axios.get(requests.candidateapi + '/all')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function deletecandidate(id) {
  return axios.delete(requests.candidateapi + '/delete/' + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function updateCandidar(data) {
  return axios.put(requests.candidateapi + '/update/' + data.id, data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
