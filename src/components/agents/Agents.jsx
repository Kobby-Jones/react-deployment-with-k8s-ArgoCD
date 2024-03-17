import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AgentCard from "./AgentsCard";

function Agents() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        if (!response.ok) {
          throw new Error("Failed to fetch Data");
        }
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-center">Is Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error.message}</div>;
  }

    return (
      <div className="pt-5">
        <h1 className="mt-5 text-center">Agents</h1>
        <Container className="text-center mt-5">
          <Row>
            {data &&
              data.map((item) => (
                <Col key={item.login.uuid} className="col-lg-4">
                  <AgentCard
                    firstName={item.name.first}
                    lastName={item.name.last}
                    image={item.picture.large}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
}

export default Agents;
