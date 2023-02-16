import React, { useState, useContext } from "react"
import { useForm } from "react-hook-form";
import ChildForm from './ChildForm';
import axios, { isCancel, AxiosError } from 'axios';
import { context } from './Context';
import { useNavigate } from "react-router-dom"



export default function Form() {
    const ctx = useContext(context);
    const [children, setChildern] = useState([]);
    const navigate = useNavigate();

    const submitFunc = async (data) => {

        await axios.post(` https://localhost:44381/api/User`, {
            FirstName: data.name,
            LastName: data.family,
            Tz: data.tz,
            DateOfBirth: data.BirthDate,
            Gender: parseInt(data.min),
            HMO: parseInt(data.hmo)
        }).then(res => { console.log(res) })
        // var current = await axios.get(`https://localhost:44381/api/User/${data.tz}`)
        // console.log("current",current)
        for (let index = 0; index < data.num; index++) {
            axios.post(`https://localhost:44381/api/UserChild`, {
                FirstName: sessionStorage.getItem(`name${index}`),
                LastName: data.family,
                DateOfBirth: sessionStorage.getItem(`BirthDate${index}`),
                Tz: sessionStorage.getItem(`tz${index}`),
                IdParent: data.tz

            })
        }
       
    }

    const childfunc = (num) => {
        const childArr = [];
        for (let i = 0; i < num; i++) {
            childArr.push(<ChildForm index={i} key={i}></ChildForm>)
        }
        setChildern([childArr]);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    return (<div className="row g-3 align-items-center" style={{ color: "blue", display: "inline" }}>
        <form onSubmit={handleSubmit(submitFunc)}>

            <div class="form-floating mb-3">
                <input type="string" class="form-control" id="name" placeholder="string"
                    {...register("name", { required: "required", onChange: (e) => sessionStorage.setItem(`name`, e.target.value), minLength: 1 })} className="form-control"
                    defaultValue={ctx.myuser.FirstName}
                    onChange={(e) => { var u = ctx.myuser; u.FirstName = e.target.value; ctx.setMyuser(u) }} />
                <label for="floatingInput">name</label>
            </div>
            {errors?.name && errors.family.name}

            <div class="form-floating mb-3">
                <input type="string" class="form-control"  placeholder="Family" defaultValue={ctx.myuser.LastName} 
                {...register("family", { required: "required", minLength: 1 })} className="form-control"
                onChange={(e) => { var u = ctx.myuser; u.LastName = e.target.value; ctx.setMyuser(u) }}/>
                <label for="floatingPassword">Famili</label>
            </div>
            {errors?.family && errors.family.message}

       
<div class="form-floating mb-3">
           
            <input type="text" name="tz" id="floatingPassword"  className="form-control" placeholder="Password" defaultValue={ctx.myuser.Tz} {...register("tz", { required: "required", minLength: 1 })} className="form-control"
                onChange={(e) => { var u = ctx.myuser; u.Tz = e.target.value; ctx.setMyuser(u) }}
            /> <label for="floatingPassword">tz</label>
            </div>
            {errors?.tz && errors.tz.message}

            <div class="mb-3">
            <label>genedy</label>
            <select className="form-control" name="min" {...register("min", { required: "required" })} onChange={(e) => { var u = ctx.myuser; u.Min = e.target.value; ctx.setMyuser(u) }}
            >
                <option value={0}>male</option>
                <option value={1}>female</option>
            </select>
            {errors?.min && errors.min.message}
            </div>
            <div class="mb-3">
            < label>HMO</label>
            <select className="form-control" name="hmo" {...register("hmo", { required: "required" })} onChange={(e) => { var u = ctx.myuser; u.HMO = e.target.value; ctx.setMyuser(u) }}
            >
                <option value={0}>Leumit</option>
                <option value={1}>Macabi</option>
                <option value={2}>Clalit</option>
                <option value={3}>Meuchedet</option>
            </select>
            {errors?.hmo && errors.hmo.message}
</div>
            <label>Date Of Birth</label>
            <input type="date" name="BirthDate" {...register("BirthDate", { required: "required", minLength: 1 })} className="form-control"
                defaultValue={ctx.myuser.DateOfBirth}
                onChange={(e) => { var u = ctx.myuser; u.DateOfBirth = e.target.value; ctx.setMyuser(u) }}
            />
            {errors?.BirthDate && errors.BirthDate.message}

            <label>How much children do you have </label>
            <input type="namber" name="num"
                defaultValue={sessionStorage.getItem('num')}
                {...register("num", { required: "required", onChange: (e) => sessionStorage.setItem(`num`, e.target.value), minLength: 1 })}
                onInput={(e) => { childfunc(e.target.value) }}
            />
            {errors?.family && errors.family.message}
            {children}
            <input type="submit"
                class="btn btn-primary"
                value="submit"
            />
            <button 
            class="btn btn-outline-danger"
           
                onClick={() => {
                    navigate(`/Excel`)
                }}>download</button>
        

        </form>
        <button onClick={() => navigate('/')} class="btn btn-primary">Home</button></div>)
}

