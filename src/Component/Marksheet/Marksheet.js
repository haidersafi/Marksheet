
import React,{Component} from 'react';
import './marksheet.css'

class Marksheet extends Component{
    constructor(props){
        super(props)
        this.state={showPercentage:false,
            english:this.getRandomNumber(),
        math:this.getRandomNumber(),
    urdu:this.getRandomNumber(),
physics:this.getRandomNumber(),
chemistry:this.getRandomNumber(),
}
    }

    componentDidUpdate(prevProps){
        if(prevProps.rollNo !== this.props.rollNo){
            this.setState({   english:this.getRandomNumber(),
                              math:this.getRandomNumber(),
                              urdu:this.getRandomNumber(),
                              physics:this.getRandomNumber(),
                              chemistry:this.getRandomNumber(),
                              showPercentage:false       
                
                          });
        }
    }
    
        
    generatePercentage=()=>{
        
        let percentageBtn=document.getElementById("percentageBtn");

        this.setState({showPercentage:!this.state.showPercentage})
      
}
    getRandomNumber=()=>{
        return( Math.floor(Math.random() * 100) + 1)
    }
    
    render()
    {
        // let english=this.getRandomNumber();
        // let math=this.getRandomNumber();
        // let urdu=this.getRandomNumber();
        // let physics=this.getRandomNumber();
        // let chemistry=this.getRandomNumber();
        let totalMarksObtained=this.state.english+this.state.math+this.state.urdu+this.state.physics+this.state.chemistry;
        let percentage=((totalMarksObtained/500)*100).toFixed(2);
        return(<div className="marksheet">
        <h2>Marksheet</h2>
        <table>
        <th>RollNo</th><th>English</th><th>Maths</th><th>Urdu</th><th>Physics</th><th>Chemistry</th>
        <tr><td>{this.props.rollNo}</td><td>{this.state.english}</td><td>{this.state.math}</td><td>{this.state.urdu}</td><td>{this.state.physics}</td><td>{this.state.chemistry}</td><td><button id="percentageBtn" onClick={this.generatePercentage}>Generate Percentage</button></td></tr>
        </table>

{this.state.showPercentage?<table><th>Total Marks Obtained</th><th>Total Marks</th><th>Percentage</th>
    <tr></tr><tr><td>{totalMarksObtained}</td><td>500</td><td>{percentage}%</td></tr></table>:null}
        </div>)}
}
export default Marksheet;