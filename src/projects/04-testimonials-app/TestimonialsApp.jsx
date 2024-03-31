/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Title from "../components/Title"
import Button from '../components/Button'
import { BsFillFileEarmarkPostFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { BiCommentDetail } from "react-icons/bi"


export default function TestimonialsApp() {

    // const handleClick = () => {
    //     console.log("My Click");
    // } 
    const [testimonials, setTestimonials] = useState("");
    const [items, setItems] = useState();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
            .then((response ) => response.json())
            .then((json) => setItems(json))
    }, [testimonials])
    return (
        <div className='container m-auto'>
            <Title text={"Testimonials App"} />
            <Button icon={<BsFillFileEarmarkPostFill />} text={"Posts"} btnClass="btn-info" onClick={() => setTestimonials("Posts")} />
            <Button text={"Users"} icon={<FaUserAlt />} btnClass="btn-info" onClick={() => setTestimonials("Users")} />
            <Button text={"Comments"} icon={<BiCommentDetail />} btnClass="btn-info" onClick={() => setTestimonials("Comments")} />
            <Title classes={"subtitle text-primary"} text={!testimonials ? "Select from above !" : testimonials} />
            {!items ? null : items.map((item) => {
                return(
                    <div className='card card-primary mb-2' key={item.id}>
                        {item.name && <h2 className='card-header'>{item.name}</h2> }
                        <div className="card-body">
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                        </div>
                        {item.email && <small className='card-footer'>{item.email}</small>}
                    </div>
                )
            })}
        </div>
    )
}
