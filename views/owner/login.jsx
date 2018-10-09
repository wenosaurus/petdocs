var React = require("react");

class LoginOwner extends React.Component {
    render() {
        return (
            <html>
            <head />
            <body>
            <h1>Owner Login</h1>
            <div>
            <form className="form" method="POST" action="/ownerlogin">
            <p>E-mail: <input className="formField" name="email" type="email" onInvalid="alert('Please fill out this field.');" required /></p>
            <p>Password: <input className="formField" name="password" type="password" onInvalid="alert('Please fill out this field.');" required /></p>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </div>
            </body>
            </html>
            );
    }
};

module.exports = LoginOwner;