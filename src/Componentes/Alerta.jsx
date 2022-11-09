
const Alerta = ({alerta}) => {
    return (
        <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-sky-400 to-sky-600'} bg-gradient-to-br text-center p-1 rounded-sm
         uppercase text-white font-bold text-sm mt-6`}>
            {alerta.msg}
        </div>
    )
}

export default Alerta