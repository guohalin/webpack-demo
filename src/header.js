/*
 * @Date: 2020-08-07 17:44:20
 * @FilePath: \webpack-demo\src\header.js
 * @file: 文件名称
 * @author: halin.guo
 * @description: 文件描述
 */
function Header(){
    var dom = document.getElementById('root');
    var sidebar = document.createElement('div');
    sidebar.innerText = 'this is header11';
    dom.append(sidebar)
    return {}
}

export default Header;