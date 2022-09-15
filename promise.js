const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");



// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (input) => {
  let comment = 0;

  const data = await Promise.all([
    promiseTheaterIXX(), 
    promiseTheaterVGC()]
  );

  data.forEach(element => {
    element.forEach(dataBioskop => {
      if (dataBioskop.hasil == input){
        comment++;
      }      
    })  
  });
  
  return comment;

};

module.exports = {
  promiseOutput,
};
