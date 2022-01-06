export default data => {
  if(data == undefined){
    return [];
  }
  return Object.keys(data).map(key => {
    return {
      id: key,
      ...data[key],
    };
  });
};
