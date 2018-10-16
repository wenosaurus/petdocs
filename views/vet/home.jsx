var React = require("react");

class VetHome extends React.Component {
    render() {
        let fileList = this.props.file.map(item => {
            return <tr><td>{item.name}</td> <td><a href={"/vet/file/" + item.id + "/edit"}>Edit</a></td> <td><a href={"/vet/file/" + item.id + "/delete"}>Delete</a></td></tr>;
        })
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
            <a href="/"><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <main>
            <table className='showList'>
            <tr>
            <td><h4>File Name</h4></td>
            <td></td>
            <td></td>
            <td></td></tr>
            {fileList}
            </table>
            <p><a href="/vet/file">Add File</a></p>
            <p><a href={"/vet/" + this.props.id + "/edit"}>Account Settings</a></p>
            <p><a href="/logout">Logout</a></p>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = VetHome;