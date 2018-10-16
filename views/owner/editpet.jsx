var React = require("react");

class EditPet extends React.Component {
    render() {

        var petBirthdate = new Date(this.props.pet.birthdate).toISOString().slice(0, 10);

        const animalList = ['other','dog','cat'];
        let typeList = animalList.map((animal)=>{
            let selected = false;
            if(animal === this.props.pet.type){
                selected = true;
            }
            return <option className="formOption" key={animal} value={animal} selected={selected}>{animal}</option>
        });

        const sexList = ['unsure','male','female']
        let genderList = sexList.map((sex)=>{
            let selected = false;
            if(sex === this.props.pet.gender){
                selected = true;
            }
            return <option className="formOption" key={sex} value={sex} selected={selected}>{sex}</option>
        });

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
            <a href={"/owner/home/" + this.props.pet.owner_id}><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <nav>
            <h2>Edit {this.props.pet.name}</h2>
            </nav>
            <main>
            <form className="form" method="POST" action={"/owner/pet/" + this.props.pet.id + "?_method=PUT"}>
            <table>
            <tr>
            <td>Pet Name:</td><td><input className="formField" name="name" type="text" defaultValue={this.props.pet.name} /></td></tr>
            <tr><td>Type of Animal:</td>
            <td><select className="formSelect" name="type">
                {typeList}
            </select>
            </td></tr>
            <tr><td>
            Gender:</td>
            <td>
            <select className="formSelect" name="gender">
                {genderList}
            </select></td></tr>
            <tr><td>Birthdate:</td><td><input className="formField" name="birthdate" type="date" defaultValue={petBirthdate} /></td></tr>
            <tr><td>Weight:</td><td><input className="formField" name="weight" type="text" defaultValue={this.props.pet.weight} /></td></tr>
            <tr><td>Upload Photo:</td><td><input className="formField" name="img" type="text" defaultValue={this.props.pet.img} /></td></tr>
            <input name="id" type="hidden" value={this.props.pet.id} />
            </table>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = EditPet;