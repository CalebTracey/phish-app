import axios from 'axios';
axios.defaults.baseURL = 'http://phish.in/api/v1'
axios.defaults.headers.common = {
'Authorization': `Bearer 856913ac92a15776365c3c519185fb5a4b0d041f248cbcb6f177c31906fe978345f1d6be08267531b818e52ddd9149f2`,
// 'Accept-Encoding': 'gzip, deflate, br',
// 'Connection': 'keep-alive',
// 'Host': 'phish.in',

// 'Access-Control-Allow-Origin': '*',
// 'Access-Control-Allow-Credentials': 'true',
//'Access-Control-Request-Methods': 'GET',
//'Access-Control-Request-Headers': 'authorization, Accept',
// 'Access-Control-Allow-Headers': 'X-Requested-With, content-type',
'Accept': `application/json`,
}
export default axios;