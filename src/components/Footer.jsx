import logo from '../assets/LOGO-2.png'

function footer() {
    return (
        <footer className="footer">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                <a className="a_footer" href="https://dev-dread.vercel.app">
                    créé avec amour par © Dev Dread
                </a>
            </p>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default footer
