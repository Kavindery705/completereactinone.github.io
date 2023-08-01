import React from 'react'

const Mycomponentprops = (props) => {
  // const {info,fees} = props;
  console.log(props.info);
  return (
    // <div> {props.info[2].Company}</div>
    <div>
        <table>
          <thead>
          <tr>
            <td>sr no.</td>
            <td>Company</td>
            <td>Price</td>
          </tr>
          </thead>
          <tbody>
      {props.info.map((e,index)=>
        <tr key={index}>
          <td>{e.Srno}</td>
          <td>{e.Company}</td>
          <td>{e.Price}</td>
        </tr>
      )}
      </tbody>
        </table>
    </div>
  )
}

export default Mycomponentprops