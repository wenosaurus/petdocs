var React = require("react");

class petDelete extends React.Component {
    render() {
        return (
            <html>
            <head>
            <title>PetDocs</title>
            </head>
            <body>
            <header>
            <h1>PetDocs</h1>
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
            <aside>
            <p><a href={"/owner/home/" + this.props.user}>Home</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </html>
        );
    }
};

module.exports = petDelete;