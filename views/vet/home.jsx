var React = require("react");

class VetHome extends React.Component {
    render() {
        let fileList = this.props.file.map(item => {
            return <tr><td>{item.name}</td> <td align="center"><a href={"/vet/file/" + item.id + "/edit"}><i class="fas fa-edit"></i></a></td> <td align="center"><a href={"/vet/file/" + item.id + "/delete"}><i class="fas fa-trash-alt"></i></a></td></tr>;
        })
        return (
            <html lang="en">
            <head>
            <title>PetDocs</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="/main.css" />
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
            </head>

            <body>
            <div className="container">
            <nav className="navbar navbar-light">
            <a className="navbar-brand" href="#">
            <img src="/images/logo_new.png" class="d-inline-block align-top" alt="" /></a>
            <a href="/logout"><button className="btn btn-warning navbar-btn" type="button">Logout</button></a>
            </nav>


            <div className="row" id="main">
            <div className="col-sm-4">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="true">Dashboard</a>
            <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="/vet/file" role="tab" aria-controls="v-pills-home" aria-selected="false">Add File</a>
            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href={"/vet/" + this.props.id + "/edit"} role="tab" aria-controls="v-pills-profile" aria-selected="false">Account Settings</a>
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href={"/vet/password/" + this.props.id} role="tab" aria-controls="v-pills-messages" aria-selected="false">Reset Password</a>
            </div>
            </div>

            <div className="col-sm-8">
            <h2>Dashboard</h2>
            <div className="showList">
            <table width="100%">
            <tr>
            <td><h5>File Name</h5></td>
            <td align="center"><h5>Edit</h5></td>
            <td align="center"><h5>Remove</h5></td></tr>
            {fileList}
            </table>
            </div>
            </div>

            <footer className="fixed-bottom">
            <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12">
            <p>
            <strong>
            <a href="/">Home</a> | <a href="mailto:contact@wenvo.tech">Contact</a> | <a href="/privacy">Privacy Policy</a></strong>
            </p>
            <hr />
            <p>
            2018 Made with <i className="fa fa-heart"></i> By <a href="http://www.wenvo.tech">WenVo.Tech</a>
            </p>
            </div>
            </div>
            </div>
            </footer>
            </div>
            </div>
            </body>
            </html>
            );
    }
};

module.exports = VetHome;