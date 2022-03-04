import React from 'react'
import styled from 'styled-components'
const Styles = styled.div`
  padding: 1rem;

  h2{
    font-variant: small-caps;
    font-weight: 400;
    font-size: 40px;
  }
  h1{
      font-size: 70px;
      opacity: 0.8;
  }
  a{
      padding: 10px;
  }

  a:hover{
      background-color: rgba(235, 250, 215, 0.932);
  }

`
export default function Home() {
  return (
    <div>
        <Styles>
            <h2 className='text-center my-5'>Cars Rental </h2>
            <div className='col-lg-6 col-md-9'>
                <h1>BUY YOUR <br/> DREAM CAR</h1>
            </div>
            <div className='col-lg-6 col-md-9'>
                <a className='btn btn-warning col-lg-4 my-5' href="#">Get Started</a>
            </div>
        </Styles>
    </div>
  )
}
