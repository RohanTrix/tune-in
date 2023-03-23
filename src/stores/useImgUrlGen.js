import {ref} from 'vue';
export default function useRandImgUrl(){
    const getRandImgUrl = () => `https://picsum.photos/id/${Math.floor(Math.random() * 200) + 1}/300/300`;
    return {getRandImgUrl};
}