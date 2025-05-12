import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../components/inputs/Input"
import { validateEmail } from "../../utils/helper"



const Signup = ({setCurrentPage}) => {
    const [profilePic, setProfilePic] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    return (
        <div>Signup</div>
    )
}

export default Signup