import axios from 'axios';
import { requests } from '../request';
export function updateUser(data) {
  return axios.put(requests.usersapi + '/update/' + data.id, data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function uploadAvatar(data) {
  return axios.put(requests.usersapi + '/avatar/' + data.id, data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
