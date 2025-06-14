import { useState } from "react";

const Form =()=> {
    const [form,setForm] = useState({
        firstName:'mansinh',
        lastName:'vansh',
        email:'vansh@123gmail.com'
   });
    return(
        <div>
            <label>First Name:<input value={form.firstName} onChange={e=>{
                setForm({
                    ...form,firstName:e.target.value
                });
            }}/>
            </label>
            
        </div>
    );
}

export default Form;
