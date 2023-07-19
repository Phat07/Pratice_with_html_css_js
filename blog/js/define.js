const API = axios.create({
  baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
});
dayjs.extend(window.dayjs_plugin_relativeTime)

const ACCESS_TOKEN='FE20_ACCESS_TOKEN'