import { commonParams,options } from './config'
import { getUid } from '../assets/js/uid'
import axios from 'axios'
import { ERR_OK } from 'api/config'

const debug = process.env.NODE_ENV !== 'production'

export function getLyric (mid) {
  const url = debug ? '/api/lyric' : 'http://47.103.192.110/api/lyric'

const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
   })
 }


export function getSongsUrl (songs) {
  const url = debug ? '/api/getPurlUrl' : 'http://47.103.192.110/api/getPurlUrl'

  let mids = []
  let types = []

  songs.forEach((song) => {
    mids.push(song.mid)
    types.push(0)
  })
    const data = Object.assign({}, commonParams, {
 
     g_tk: 5381,
     format: 'json',
 
     platform: 'h5',
     needNewCode: 1,
     uin: 0
   })

   return axios.post(url, {
     comm: data,
     url_mid: genUrlMid(mids, types)
   }).then((res) => {
     return Promise.resolve(res.data)
   })
 }


 function genUrlMid(mids, types) {
   const guid = getUid()
   return {
     module: 'vkey.GetVkeyServer',
     method: "CgiGetVkey",
     param: {
       guid,
       songmid: mids,
       songtype: types,
       uin: '0',
       loginflag: 0,
       platform: '23'
     }
   }
 }