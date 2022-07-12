function Login({onClick}) {
    return (
        <>
            <h1>Inlog pagina</h1>
            <p>Druk op de knop om je in te loggen.</p>
            <button type="button" onClick={onClick}>Inloggen</button>
        </>
    )
}

export default Login;