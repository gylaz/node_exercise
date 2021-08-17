import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import 'config/init';

axios.defaults.adapter = httpAdapter;

nock.disableNetConnect();
nock.enableNetConnect((host) => host.startsWith('127.0.0.1'));
