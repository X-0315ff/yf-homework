// 用递归实现flat方法

function flat(arr,deep = 1){// 默认只展开一层
  let result = []
  // 遍历传入数组
  for(let item of arr){
    // 1，如果元素是数组，并且deep大于0，则递归调用flat方法
    if(Array.isArray(item) && deep > 0){
      result = result.concat(flat(item,deep-1))
    }else {
    // 2.如果是普通元素，则直接添加到结果数组中
      result.push(item)
    }
  }
  return result
}


