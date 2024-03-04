
export default function Docs({ params } : { params : { slug : string[] } }){
    if(params.slug?.length === 2){
        return (
            <h1> Viewing Docs for Feature  <span style={{ color: 'tomato' }}>{params.slug[0]} </span> and Concept  <span style={{ color: 'blue' }}>{params.slug[1]}</span>.</h1>
        )
    }
    else if(params.slug?.length === 1){
        return (
            <h1> Viewing Docs for Feature <span style={{ color: 'tomato' }}>{params.slug[0]} </span>.</h1>
        )
    }
    else{
        return <h1> Docs Home page </h1>
    }

    return <h1> Docs Page </h1>
}
