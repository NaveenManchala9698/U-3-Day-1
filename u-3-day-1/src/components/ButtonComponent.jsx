const button = ({ name, color, font, size, width }) => {
    return (
        <div>
            <button style={{ backgroundColor: color, fontStyle: font, fontSize: size, width: width }}>{name}</button>
        </div>
    )
}

export default button