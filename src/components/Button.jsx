export function Button({ value, className, setContador }) {

    const handleClick = () => {
        if (value === 'Aumentar') {
            setContador(anterior => anterior + 1)
        } else if (value === 'Disminuir') {
            setContador(anterior => anterior - 1)
        } else if (value === 'Reset') {
            setContador(0)
        }
    }

    return (
        <button onClick={handleClick} className={className}>{value}</button>
    )
}