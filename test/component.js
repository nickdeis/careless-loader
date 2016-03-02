function SpringMap(props,context){
  var obj = props.obj;
  return (
    <map>
      {Object.keys(obj).map(function(key){
        return <entry key={key} value={obj[key]}/>;
      })}
    </map>
  );
}

function createSpringMap(obj){
  return <SpringMap obj={obj}/>;
}

module.exports = {SpringMap,createSpringMap};
