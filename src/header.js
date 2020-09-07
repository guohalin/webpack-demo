/*
 * @Date: 2020-08-07 17:44:20
 * @FilePath: \webpack-demo\src\header.js
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */

import gift from './gift.png';
import styles from './webpackTest.css';
function Header(){
    var dom = document.getElementById('root');
    var sidebar = document.createElement('div');
    sidebar.innerText = 'this is header bundlehsja ';
    var img = document.createElement('img');
    img.src = gift;
    img.classList.add(styles.tupian);
    dom.append(sidebar)
    dom.append(img)
}

export default Header;