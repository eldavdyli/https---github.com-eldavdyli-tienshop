import React from 'react';
import Container from 'react-bootstrap/Container';


function Footer() {
  return (
    <div className="bg-light py-4 mt-4">
      <Container className="d-flex justify-content-between align-items-center">
      <p className="m-0" style={{ fontSize: '14px' }}>
          Copyrights &copy; Tien Shop, 2024.
        </p>
        <div className="d-flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw-crQWpfpxpYaju5TFsg1Sp3D8ly1OHhigybUw_Bao6kMktS"
            alt="Logo 1"
            width="50"
            height="50"
            className="me-2"
          />
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8mZY2dU4RTFwOD8atOZ59nNZHBRw9-ABitGXsd1tvAxuIwFr7"
            alt="Logo 2"
            width="50"
            height="50"
            className="me-2"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRMJkU-eScgb8iQzHIi9T_J4Zc4JZVWgVxFM8GWRqgIxytZ1h"
            alt="Logo 3"
            width="50"
            height="50"
            className="me-2"
          />
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRM-POMJaBIZ632JOqyi5bgVec_p5CXXajWAzyB5BV44hcws_cT"
            alt="Logo 4"
            width="50"
            height="50"
          />
        </div>
      </Container>
    </div>
  );
}

export default Footer;