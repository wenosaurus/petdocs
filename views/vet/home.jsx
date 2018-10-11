var React = require("react");

class VetHome extends React.Component {
    render() {
        let fileList = this.props.file.map(item => {
            return <li>{item.name} | <a href={"/vet/file/" + item.id + "/edit"}>Edit</a> | <a href={"/vet/file/" + item.id + "/delete"}>Delete</a></li>;
        })
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
            Search
            </nav>
            <main>
            <ul>
            {fileList}
            </ul>
            <p><a href="/vet/file">Add File</a></p>
            </main>
            <aside>
            <p><a href={"/vet/" + this.props.file[0].vet_id + "/edit"}>Account Setting</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </body>
            </html>
            );
    }
};

module.exports = VetHome;