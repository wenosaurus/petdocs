var React = require("react");

class petDelete extends React.Component {
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
            <a href={"/owner/home/" + this.props.user}><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <nav>
            <h2>Delete Pet</h2>
            </nav>
            <main>
            <p>Are you sure you want to delete your pet?</p>
            <form className="form" method="POST" action={"/owner/pet/delete/" + this.props.pet + "?_method=DELETE"}>
            <p><input className="formButton" type="submit" value="Yes" /></p>
            </form>
            </main>
            </body>
            </html>
        );
    }
};

module.exports = petDelete;