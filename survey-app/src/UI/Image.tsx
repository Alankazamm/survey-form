
import zero from '../assets/zero.svg';
import one from '../assets/one.svg';
import two from '../assets/two.svg';
import three from '../assets/three.svg';
import four from '../assets/four.svg';
import five from '../assets/five.svg';

type imgprops = {
    src: string,
    alt: string,
    style: {
        width: string,
        height: string,
    }
}
const imgSet = (src:string) => {
    switch(src) {
        case 'zero':
            return zero;
        case 'one':
            return one;
        case 'two':
            return two;
        case 'three':
            return three;
        case 'four':
            return four;
        case 'five':
            return five;
        default:
            return;
      
    }
 }

export const Image = (props:imgprops) => {
    return (
        <>
            <img src={imgSet(props.src)} alt={props.alt} style={props.style} />
        </>
    )
}