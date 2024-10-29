export const Head = ({title, color})=>{
    return (
        <h1 className={`text-${color} font-semibold text-4xl text-center underline decoration-color-4`}>{title}</h1>
    )
}