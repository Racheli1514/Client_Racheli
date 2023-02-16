import { useNavigate } from "react-router-dom"

export default function Home() {
    const UserNavigate = useNavigate();

    return (<div>
        <button onClick={() => { UserNavigate('/Instractions') }} class="btn btn-primary">Instractions</button>
        <button onClick={() => { UserNavigate('/Form') }} class="btn btn-primary">Form</button>
    </div>
    )
}