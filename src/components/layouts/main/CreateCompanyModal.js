import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/style.css';

const CreateCompanyModal = ({hideModal}) => {
    const [teamName, setTeamName] = useState("");
    const [teamDescription, setTeamDescription] = useState("");
    const [emails, setEmails] = useState([]);

    return (
        <div className="modalContainer">
            <div onClick={hideModal} style={{float: "right"}}>X</div>
            <div className="formContainer">                
                <form>
                    <TextField
                        id="standard-name"
                        label="Team Name"
                        value={teamName}
                        placeholder="Enter team name"
                        className="textField"
                        margin="normal"
                        required
                        onChange={(e) => setTeamName(e.target.value)}                        
                    />
                    <br />
                    <TextField
                        id="standard-name"
                        label="Team Description"
                        value={teamDescription}
                        className="textField"
                        placeholder="Enter team description"
                        margin="normal"
                        onChange={(e) => setTeamDescription(e.target.value)}                        
                    />
                    <p style={{fontSize: "20px"}}>Share the proejct with others</p>
                    <ReactMultiEmail 
                        className="textArea"
                        placeholder="Enter email addresses"
                        emails={emails}
                        onChange={(_emails) => {
                            setEmails(_emails)
                        }}
                        validateEmail={email => {
                            return isEmail(email); // return boolean
                            }}
                        getLabel={(email,index,removeEmail)=>{
                            return(
                                <div data-tag key={index} style={{fontSize:"1rem"}}>
                                    {email}
                                    <span data-tag-handle onClick={() => removeEmail(index) }>
                                        x
                                    </span>
                                </div>
                            )
                        }}
                    />
                </form>
            </div>
            <div 
                style={{float: "right", paddingTop: "15px"}}
                onClick={()=> {
                    console.log("Team Name: ", teamName);
                    console.log("Team Description: ", teamDescription);
                    console.log("Emails: ", emails);
                }}
            >
                SUBMIT
            </div>
        </div>
    )
}

export default CreateCompanyModal;
