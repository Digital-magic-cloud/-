// alert('table.js')
//新增数据函数
function addRow() {
    //找到节点
    var table = document.getElementById('table');

    // 获取插入的位置
    var length = table.rows.length;
    
    //插入行节点
    var newRow = table.insertRow(length);
    // newRow.innerHTML = '123456'
    
    //插入列节点
    var nameCol = newRow.insertCell(0);
    var ingCol = newRow.insertCell(1);
    var actionCol = newRow.insertCell(2);

    //修改节点内容
    nameCol.innerHTML = '未命名';
    ingCol.innerHTML = '未知态';
    actionCol.innerHTML = '<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';

}

//删除数据函数
function deleteRow(button) {
    //找到父节点td的父节点tr
    var row = button.parentNode.parentNode;

    //在tr父节点删除掉tr节点
    row.parentNode.removeChild(row);
    
}

//编辑数据函数
function editRow(button) {
    //找到父节点td的父节点tr
    var row = button.parentNode.parentNode;

    //在tr父节点中获取对应行节点td
    var name = row.cells[0];
    var ing = row.cells[1];

    //利用浏览器自带弹窗获取修改数据
    var inputName = prompt('请输入姓名: ');
    var inputing = prompt('请输入当前状态: ');

    //替换数据
    name.innerHTML = inputName;
    ing.innerHTML = inputing;

}