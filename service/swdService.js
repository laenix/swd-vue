import request from '@/util/request';
import qs from 'qs';

const query = ({ qq }) => (request.post('query', qs.stringify({ qq })));
export default {
  query
};
