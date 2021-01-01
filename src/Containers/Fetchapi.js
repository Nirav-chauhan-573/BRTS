import React, { useState, useEffect } from "react";
import Navbarfun from "../Containers/Navbar";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "bootstrap";
import swal from "sweetalert";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";

const Forcast = () => {
  let swaldata = [];
  let data = "";

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  let [responseObj, setResponseObj] = useState({});
  let [busbyid, setbusbyid] = useState({});
  let [show, setShow] = useState(false);

  function Example() {
    const handleClose = () => setShow(false);

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  const getforcast = () => {
    fetch("http://13.232.152.61:3000/api/bus/", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setResponseObj(result.data);
      });
    // fetch(
    //   "http://13.232.152.61:3000/api/bus/useronboard/5fe8a5fb44e94e3054e21377",
    //   requestOptions
    // )
    //   .then((response1) => response1.json())
    //   .then((result1) => {
    //     swaldata = result1.data;
    //     setbusbyid(result1.data);

    //     console.log(busbyid);
    //     console.log(swaldata);
    //   });
  };

  const getbusbyid = () => {
    setShow(true);

    var requestOptions1 = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://13.232.152.61:3000/api/bus/useronboard/5fe8a5fb44e94e3054e21377",
      requestOptions1
    )
      .then((response1) => response1.json())
      .then((result1) => {
        swaldata = result1.data;
        setbusbyid(result1.data);

        console.log(busbyid);
        console.log(swaldata);
        for (let i = 0; i < swaldata.length; i++) {
          data =
            data +
            "\n" +
            swaldata[i].name +
            " - " +
            swaldata[i].id +
            " " +
            moment(swaldata[i].inTime).format("MMMM Do YYYY, h:mm:ss a");
        }
        console.log(data)
        swal({
          title: responseObj[0].origin + " " + responseObj[0].destination,
          text: data,
        });
      });
    // const getapidata = () => {
      // const promiseobj = new Promise((resolve, reject) => {
        // setTimeout(() => {
        // resolve(busbyid);
        // return promiseobj;
        // }, 200);
      // });
    // };
    console.log(swaldata);

    // function display() {
      // let pobj = getapidata();
      console.log(swaldata);
      // console.log(pobj);

      
      // });
    // }
    // display();
  };
  useEffect(() => {
    getforcast();
  }, []);

  return (
    <div>
      <Navbarfun />
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Origin</th>
              <th>Destination</th>
              <th>Total Passenger</th>
            </tr>
            {(() => {
              if (responseObj.length > 0) {
                return responseObj.map((object, i) => {
                  return (
                    <>
                      <tr
                        onClick={() => {
                          getbusbyid(getforcast);
                        }}
                      >
                        <td>{object.origin}</td>
                        <td>{object.destination}</td>
                        <td>{responseObj[0].totalUser.length}</td>
                      </tr>
                    </>
                  );
                });
              }
            })()}
          </thead>
        </Table>
        <h1>{data}</h1>
      </>
    </div>
  );
};

export default Forcast;
