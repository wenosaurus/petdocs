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
            </head>
            <body>
            <h1>Edit {this.props.pet.name}</h1>
            <div>
            <form className="form" method="POST" action={"/owner/pet/" + this.props.pet.id + "?_method=PUT"}>
            <p>Pet Name:
            <input className="formField" name="name" type="text" defaultValue={this.props.pet.name} /></p>
            <p>Type of Animal:
            <select className="formSelect" name="type">
                {typeList}
            </select>
            </p>
            <p>Gender:
            <select className="formSelect" name="gender">
                {genderList}
            </select></p>
            <p>Birthdate:<input className="formField" name="birthdate" type="date" defaultValue={petBirthdate} /></p>
            <p>Weight:<input className="formField" name="weight" type="text" defaultValue={this.props.pet.weight} /></p>
            <p>Upload Photo: <input className="formField" name="img" type="text" defaultValue={this.props.pet.img} /></p>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </div>
            </body>
            </html>
            );
    }
};

module.exports = EditPet;