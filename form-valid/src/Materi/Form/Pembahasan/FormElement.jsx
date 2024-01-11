import React from "react";

export default class FormElement extends React.Component {
    state = {
        nama : '',
        jurusan : '',
        gender : '',
        alamat : '',
        member : false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert (`
        nama : ${this.state.nama}
        jurusan : ${this.state.jurusan}
        gender : ${this.state.gender}
        alamat : ${this.state.alamat}
        member : ${this.state.member ? 'YES' : 'NO'}`);

        this.setState({
            nama : '',
            jurusan : '',
            gender : '',
            alamat : '',
            member : false
        })
    }
render () {
    return (
        <div className="Form" 
        style={{margin : '100px', pading : '20px', border :'1px solid black'}}>
    <form onSubmit={this.handleSubmit}>
        <label>
        Nama : <input type='text' name='nama' 
        onChange={ e => this.setState({nama:e.target.value},()=> console.log(this.state))}
        defaultValue={this.state.nama}/>
        </label>
        <br/>
        <label>
        Jurusan : <select name='jurusan' 
        onChange={ e => this.setState({jurusan: e.target.value},()=> console.log(this.state))}>
                    <option value=''>pilih jurusan</option>
                    <option value='Manajemen'>Manajemen</option>
                    <option value='Sistem informasi'>Sistem informasi</option>
                    <option value='Teknik Informatika'>Teknik Informatika</option>
                    <option value='Akuntansi'>Akuntansi</option>
                </select>
        </label>
        <br/>
        <label>
            Jenis kelamin :
            <input type='radio' value='Laki-laki' name="gender" onChange={ e => this.setState({gender:e.target.value},()=> console.log(this.state))}/> Laki - Laki
            <input type='radio' value='Perempuan' name="gender" onChange={ e => this.setState({gender:e.target.value},()=> console.log(this.state))}/> Perempuan
        </label>
        <br/>
        <label>
            Alamat : <textarea cols='30' rows='20'name="alamat" 
            onChange={ e => this.setState({alamat:e.target.value},()=> console.log(this.state))}
            defaultValue={this.state.alamat}/>
        </label>
        <br/>
        <label>
            Member : <input type='checkbox' checked={this.state.member} name='member' 
            onChange={ e => this.setState({member:e.target.checked},()=> console.log(this.state))}
            defaultChecked={this.state.member}/>
        </label>
        <br/>
        <br/>
        <button type="submit">Login</button>
    </form>
    </div>
    )
}

}