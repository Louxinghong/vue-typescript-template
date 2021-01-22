import axios from '@/axios/axios'

export const getTestData = async (data: object) =>
  await axios.get('/x/web-interface/view', {
    params: data,
    timeout: 6000
  })

export const postTestData = async (data: object) =>
  await axios.post('/x/web-interface/view', data, {
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    timeout: 6000
  })
