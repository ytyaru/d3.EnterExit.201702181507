var ps = null;
setInterval(function(){
  ps = d3.select("body").selectAll("p").data(getRandomArray());
  // p要素が不足時に追加
  ps.enter().append("p").text(function(d) {return "value is " + d});
  // p要素が過剰時に削除
  ps.exit().remove();
  // p要素を更新
  ps.text(function(d) {return "value is " + d})
}, 1000);

function getRandomArray()
{
  var ret = [];
  var length = getRandomValue(1, 5);
  for (var i = 0; i < length; i++) {
    ret.push(getRandomValue(0, 100));
  }
  return ret;
}
function getRandomValue(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}
