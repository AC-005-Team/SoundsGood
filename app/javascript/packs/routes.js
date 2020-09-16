import VueRouter from 'vue-router';
import Header from '../components/shared/header';

const routes = [{
  path: '/', component: Header,
}];

export default new VueRouter({ routes });
