import {useState} from "react";

export default function InputPanel({onSubmit})
{
    const[input,setInput] = useState("");

    const handleSubmit = () =>{
        const arr = input.split(",").map(Number).filter(n => !isNaN(n));
        onSubmit(arr);
    }
    return(
        <div>
            <input placeholder="Enter numbers like 1,2,3,4"
                   value={input}
                   onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Run</button>
        </div>
    )
}