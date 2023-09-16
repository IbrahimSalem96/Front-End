function TopActions(props) {
    return (
        <>
            <select name="currency">
                <option value="usd">USD &euro;</option>
                <option value="eur">EUR &euro;</option>
            </select>

            <select name="language">
                <option value="en-US">English</option>
                <option value="es-ES">Espa &ntilde;ol</option>
                <option value="fr">Fran&ccedil;ais</option>
            </select>
        </>
    )
}

export default TopActions
