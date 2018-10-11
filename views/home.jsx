var React = require("react");

class NewOwner extends React.Component {
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
            <main>
            <table width="100%">
            <tr>
            <td width="50%" align="center">
            <h2>OWNER</h2>
            <p><a href="/owner/login">Owner Login</a></p>
            <p><a href="/owner/signup">Owner Signup</a></p>
            </td>
            <td width="50%" align="center">
            <h2>VET</h2>
            <p><a href="/vet/login">Vet Login</a></p>
            <p><a href="/vet/signup">Vet Signup</a></p>
            </td>
            </tr>
            </table>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = NewOwner;
