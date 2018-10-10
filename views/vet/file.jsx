var React = require("react");

class fileNew extends React.Component {
    render() {
        let today = new Date().toISOString().substr(0, 10);
        console.log(today);
        return (
            <html>
            <head>
            </head>
            <body>
            <h1>Add File</h1>
            <div>
            <form className="form" method="POST" action="/file">
            <p>Upload File: <input className="formField" name="name" type="text" required /></p>
            <p>Pet ID: <input className="formField" name="pet_id" type="text" required /></p>
            <p>Date:<input className="formField" name="date" type="date" value={today} /></p>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </div>
            </body>
            </html>
            );
    }
};

module.exports = fileNew;