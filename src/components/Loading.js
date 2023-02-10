import ReactLoading from 'react-loading'

export const Loading = ({type}) => {
    return (
        <ReactLoading type={type} color='gray' height={60} width={60} />
    )
}