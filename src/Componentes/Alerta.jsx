
const Alerta = ({alerta}) => {
    return (
        <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-sky-400 to-sky-600'} bg-gradient-to-br text-center p-1 rounded-md
         uppercase text-white font-bold text-sm my-4`}>
            {alerta.msg}
        </div>
    )
}

export default Alerta