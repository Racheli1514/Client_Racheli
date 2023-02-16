import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { context } from "./Context";


export default function ChildForm(props) {
    const ctx = useContext(context);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [childObj, setChildObj] = useState({ FirstName: 'hh', Tz: 'yui', DateOfBirth: 'hjk' });



    return (<div class="row g-3 align-items-center" style={{ color: "blue", display: "inline" }}>
        <form>

            <div class="col-auto">
                <label class="col-form-label">Name</label></div>
            <input type="text" name="name" defaultValue={sessionStorage.getItem('fname')}
                {...register(`name`, { required: "required", onChange: (e) => sessionStorage.setItem(`name${props.index}`, e.target.value), minLength: 1 })} className="form-control"
           
            />
            {errors?.name && errors.name.message}

            <label>tz</label>
            <input type="text" name="tz" defaultValue={sessionStorage.getItem('tz')}
                {...register(`tz`, { required: "required", onChange: (e) => sessionStorage.setItem(`tz${props.index}`, e.target.value), minLength: 1 })} className="form-control" />
            {errors?.tz && errors.tz.message}

            <label>Date Of Birth</label>
            <input type="date" name="BirthDate" defaultValue={sessionStorage.getItem('BirthDate')}
                {...register(`BirthDate`, { required: "required", onChange: (e) => sessionStorage.setItem(`BirthDate${props.index}`, e.target.value), minLength: 1 })}
                className="form-control" />
            {errors?.BirthDate && errors.BirthDate.message}
        </form></div>)

}