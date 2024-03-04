import { Metadata } from "next"
import { title } from "process";

type Props ={ 
    params : {
        productsId : string;
    }
}

// export const generateMetadata = ({ params }: Props) => {
//     return {
//         title : `Product ${params.productsId}`
//     }
// }

export const generateMetadata = async({ params }: Props) : Promise<Metadata>=> {
    const title = await new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(`Iphone ${params.productsId}`);
        },100);
    });
    return{
        title : `${title}`
    };
};



export default function ProductDetails({params} : {
    params : {productsId : string}
}){
    return(
        <h1> Product {params.productsId} Details Page </h1>
    )
}