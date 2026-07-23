import React from "react";
import CardSwap, { Card } from "./CardSwap";

const ProjectFooter = () => {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CardSwap
        cardDistance={100}
        verticalDistance={120}
        delay={4000}
        pauseOnHover
        width={500}
        height={400}
      >
        <Card>
          <h3>Card 1</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 2</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>
    </div>
  );
};

export default ProjectFooter;
