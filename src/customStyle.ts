

import { createGlobalStyle } from 'styled-components';

import inter from './fonts/Inter-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'inter';
        src: local('Inter-Regular'), local('Inter-Regular'),
        url(${inter}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;