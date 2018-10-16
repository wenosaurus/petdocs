var React = require("react");

class OwnerHome extends React.Component {
    render() {

        let fileList = this.props.file.map(item => {
            var fileDate = new Date(item.date).toISOString().slice(0, 10);
            return <tr><td>{fileDate}</td><td>{item.name}</td></tr>;
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
            <a href={"/owner/home/" + this.props.id}><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <nav>
            <h2>File List</h2>
            </nav>
            <main>
            <table className='showList'>
            <tr><td><h4>Files</h4></td><td></td></tr>
            {fileList}
            </table>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = OwnerHome;