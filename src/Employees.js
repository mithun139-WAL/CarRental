import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

const Styles = styled.div`
  padding: 1rem;

  h2{
    font-variant: small-caps;
    font-weight: 400;
  }

  table {
    border-spacing: 0;
    border: 1px solid black;

    th{
        background-color: #235661;
        color: #fff;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border: 1px solid black;
    }
  }
`


export default function Employees() {
    const [empdata, setEmpdata] = useState([]);

    useEffect(() => {
        axios.get("/employees.json").then((res) => {
            setEmpdata(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div>
            <Styles>
                <h2 className='text-center mt-5'>Employee Details</h2>
                <hr className='col-4 mx-auto border border-info mb-5' />
                <table className='w-50 text-center mx-auto'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>LoC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empdata.map((data) => {
                                return (
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.loc}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </Styles>
        </div>
    )
}
