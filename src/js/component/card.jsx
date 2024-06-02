import React from "react";
const Card = ({imageUrl, title, text}) => {
    return (
        <div className="card mx-2 p-0" style= {{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body text-center p-0">
                <h5 className="card-title pt-1">{title}</h5>
                <p className="card-text p-1">{text}</p>
                <div className=" d-flex border-top justify-content-center p-3">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
                
            </div>
        </div>
    )
}
export default Card