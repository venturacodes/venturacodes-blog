export default function BlogPost({params}){
    console.log(params.slug)
    return <>
        <h1>{params.slug}</h1>
    </>
}