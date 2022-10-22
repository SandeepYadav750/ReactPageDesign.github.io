import React from 'react'

const WorkingProcess = (props) => {
  return (
    <>
        <div className='col-lg-3 col-md-6'>
            <div className='expertcard my-4'>
                <div className='processimg'>
                    <img className="expertimg" src={props.Process} alt="Card image cap" />
                </div>
                <div className="card-body expertbody">
                    <p className="card-text">{props.name}</p>                                  
                </div>
            </div>
        </div>
    </>
  )
}

export default WorkingProcess;
