import React from "react"

const Card = ({title="Default",description="default description",buttontext="Go default",imgurl="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
              <img
                src={imgurl}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {description}
                </p>
                <a href="#" className="btn btn-success">{buttontext}</a>
              </div>
            </div>
         
    )
}

export default Card;