import request from '@/plugins/request';
import axios from 'axios';

// 考虑到取消请求是较为少数的情况，可以这么处理
const { CancelToken } = axios;

export function signIn({ username, password, showError = true } = {}) {
  let abort;
  const r = request({
    method: 'POST',
    url: '/api/sign-in',
    data: {
      username,
      password,
    },
    cancelToken: new CancelToken((c) => {
      abort = c;
    }),
    showError,
  });
  // 供取消请求
  r.abort = abort;
  return r;
}

export function signUp({
  email,
  username,
  nickname,
  password,
  showError = true,
} = {}) {
  let abort;
  const r = request({
    method: 'POST',
    url: '/api/sign-up',
    data: {
      email,
      username,
      nickname,
      password,
    },
    cancelToken: new CancelToken((c) => {
      abort = c;
    }),
    showError,
  });
  r.abort = abort;
  return r;
}

export function renew({ showError = true } = {}) {
  let abort;
  const r = request({
    method: 'POST',
    url: '/api/renew',
    cancelToken: new CancelToken((c) => {
      abort = c;
    }),
    showError,
  });
  r.abort = abort;
  return r;
}

export default {
  signIn,
  signUp,
  renew,
};
