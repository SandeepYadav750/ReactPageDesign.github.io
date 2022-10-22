import React from 'react'

const PricingPlan = (props) => {
  return (
    <>
        <div className='col-lg-4 col-md-6'>
            <div className='price_card'>
                <div className='price_offer'>
                    <span>{props.PackageName}</span>
                </div>
                <div className='price_img'>
                    <img src={props.Price} className=''alt="priceimg" />
                </div>
                <div className='price_count mt-5'>
                    <p className='priceline'><span className='pricesing'>$</span>{props.priceno}</p>
                    <p>Starting Price</p>
                </div>
                <span className='hrline my-4'></span>
                <div className='price_listing'>
                    <ul>
                    <li>{props.li1}<span><i className="fa-solid fa-check pricetick"></i></span></li>
                    <li>{props.li2}<span><i className="fa-solid fa-check pricetick"></i></span></li>
                    <li>{props.li3}<span><i className="fa-solid fa-check pricetick"></i></span></li>
                    <li>{props.li4}<span><i className="fa-solid fa-check pricetick"></i></span></li>
                    <li>{props.li5}<span><i className="fa-solid fa-check pricetick"></i></span></li>
                    <li>{props.li6}<span><i className="fa-solid fa-check pricetick"></i></span></li>
                    </ul>
                </div>
                <button className='btn pricesubsbtn'>Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default PricingPlan
