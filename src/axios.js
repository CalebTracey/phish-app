import axios from 'axios';
axios.defaults.baseURL = 'https://phish.in/api/v1'
axios.defaults.headers.common = {
'Authorization': `Bearer 856913ac92a15776365c3c519185fb5a4b0d041f248cbcb6f177c31906fe978345f1d6be08267531b818e52ddd9149f2`,
'Accept': `application/json`,
}
export default axios;