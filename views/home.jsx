var React = require("react");

class NewOwner extends React.Component {
    render() {
        return (
            <html>
            <head>
            <title>PetDocs</title>
            <link rel="stylesheet" href="/main.css" />
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
            </head>
            <body>
            <header>
            <div className='logo'>
            <img src="/images/logo.png" />
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/vet/login">Vet Login</a></span>
            </div>
            </header>
            <main>
            <nav>
            <h1>Get all your pet's records in one place</h1>
            <p><span className='loginButton'><a href="/owner/login">Login</a></span>
            <span className='signupButton'><a href="/owner/signup">Signup</a></span></p>
            </nav>
            <aside>
            <img src="images/sidephone.png" />
            </aside>
            </main>
            <footer>
            <h3>For Vets</h3>
            <p><a href="/vet/login">Vet Login</a></p>
            <p><a href="/vet/signup">Vet Signup</a></p>
            </footer>
            </body>
            </html>
            );
    }
};

module.exports = NewOwner;
