import { rand } from "@vueuse/core";

const getRandInt = () => Math.floor(Math.random() * 200) + 1;
let randUrl;
const getRandImgUrl = () => {
  randUrl = `https://picsum.photos/id/${getRandInt()}/300/300`;
  return randUrl
  // await 
  
};
export { getRandImgUrl };
