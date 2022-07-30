import React, { useEffect, useState } from 'react'
import "./contact.css"
import logo from "../../assets/camera.png"

let ContactData = [
  {
    id: 1,
    name: "Teja Vardhan",
    designation: "VP of Technologies",
    company: " Empromto Technologies",
    industry: "Hospital & Health Care",
    email: " tejavardhanreddy464@gmail.com",
    phonenumber: " 7674822811",
    country: "IND"
  },
  {
    id: 2,
    name: "Ramesh",
    designation: "Director",
    company: " Ashoka Layland",
    industry: "Consumer Goods",
    email: "ramesh123@gmail.com",
    phonenumber: " 9484811811",
    country: "USA"
  }
]

const Contact = () => {
  const [ContactState, setContactState] = useState([]);

  useEffect(() => {

    setContactState(
      ContactData.map(d => {   //to get we want to get data from api and return
        return {
          ...d,
          select: false,

        }
      }));


  }, [])



  return (
    <div className="contact-container">
      <aside className='aside'>
        <div className='logo'>
          <img src={logo} alt='logo'></img>
          <button>Dash Board</button>
          <button>Total Contacts</button>

        </div>
        <div className='logout-button'>
          <button>logout</button>
        </div>

      </aside>
      <div className='content-main'>
        <div className='header-div'>
          <h4>Total Contacts</h4>

          <input type="search" id='search' placeholder='search by email id...' />

          <div className='user-contact-details'>
            <p>Ramesh</p>
          </div>
        </div>

        <div className='nav-bar'>
          <div className='nav-bar1'>
            <label htmlFor='SelectDate'>Select Date</label>
            <input type="date" id="dateselect" name="selectdate" />
            <select>Filter</select>
          </div>
          <div className='nav-bar2'>
            <button >Delete</button>
            <button >Export</button>
            <button >Import</button>
          </div>
        </div>

        <div className='contact-table'>
          <table className="rwd-table">
            <tbody>
              <tr>
                <th><input type="checkbox"  //checkbox for title name
                  checked={ContactState.filter(d => d?.select !== true).length < 1}
                  onChange={(e) => {
                    let checked = e.target.checked;
                    setContactState(ContactState.map(d => {
                      d.select = checked;
                      return d
                    }))
                  }}
                />
                </th>
                <th scope='col' class="v1" > Name</th>
                <th scope='col' class="v1">Designation</th>
                <th scope='col' class="v1">Company</th>
                <th scope='col' class="v1">Industry</th>
                <th scope='col' class="v1">Email</th>
                <th scope='col' class="v1">Phone Number</th>
                <th scope='col' class="v1">Country</th>
              </tr>
              {
                ContactState.map((d, i) => (
                  <tr key={d}>
                    <th scope='row'>
                      <input
                        onChange={(event) => {   //we get the value from the event
                          let checked = event.target.checked;
                          setContactState(ContactState.map(data => {   //setContactState takes an object
                            if (d.id === data.id) {
                              data.select = checked;
                            }
                            return data;
                          }));

                        }} type="checkbox"  //for all names in td
                        checked={d.select} />

                    </th>

                    <td data-th="Name">
                      {
                        d.name
                      }
                    </td>
                    <td data-th="Designation">
                      {
                        d.designation
                      }
                    </td>
                    <td data-th="Company">
                      {
                        d.company

                      }

                    </td>
                    <td data-th="Industry">
                      {
                        d.industry
                      }
                    </td>
                    <td data-th="Email">
                      {
                        d.email
                      }
                    </td>
                    <td data-th="Phone Number">
                      {
                        d.phonenumber
                      }
                    </td>
                    <td data-th="Country">
                      {
                        d.country
                      }
                    </td>

                  </tr>

                ))

              }


            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Contact