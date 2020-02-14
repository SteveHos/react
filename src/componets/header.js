import React, {Component} from 'react'; 

// const Header = () => {
//     return (
//         <header>
//             <div>Logo</div>
//             <input />
//         </header>
    
//     )
// };

class Header extends Component {


    inputChange(event){
        //console.log(event.target.value);
        console.log('hey');
    }


    render(){

        return (
            
            <header>
                <div className="logo">Logo</div>
                <input 
                    onChange={this.inputChange}
                />
            </header>
        )
    }


}

export default Header;