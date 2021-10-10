import React from 'react'

function FormTalent() {
    const formTitle = [
        {
            title: "Name",
            ariaLabel: "name",
            placeholder:"Naruto"
        },
        {
            title: "Address",
            ariaLabel: "address",
            placeholder:"Jl. Kumogakure No. 19"
        },
        {
            title: "Contact",
            ariaLabel: "contact",
            placeholder:"08121212xxx"
        },
        {
            title: "Email",
            ariaLabel: "name",
            placeholder:"example@email.com"
        },
        {
            title: "Experience",
            ariaLabel: "experience",
            placeholder:"become the 4th Hokage of konoha"
        },
        {
            title: "Education",
            ariaLabel: "education",
            placeholder:"bachelor degree of ninjutsu art"
        },
        {
            title: "Expertise",
            ariaLabel: "expertise",
            placeholder:"Taijutsu, Ninjutsu"
        },
    ];
    return (
        <>
            <div className="m-5">
                {formTitle.map((item, index) => (
                    <div key={index} class="input-group mb-3">
                        <span class="input-group-text" >{item.title}</span>
                        <input type="text" class="form-control" placeholder={item.placeholder} aria-label={item.ariaLabel}/>
                    </div>
                ))}
                {/* <select class="form-select" aria-label="Default select example">
                    <option selected>Chose PIC</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select> */}
                <button type="button" class="btn btn-outline-success">Submit</button>
            </div>
        </>
    )
}

export default FormTalent
