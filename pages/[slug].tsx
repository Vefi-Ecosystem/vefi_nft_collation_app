import { Container } from "components";
import { usePageQuery } from "hooks";
import React from "react";
import { LearnMore } from "routes";

const Index = () => {
  const { slug } = usePageQuery();
  return (
    <>
      <Container>{slug === "learn-more" && <LearnMore />}</Container>
    </>
  );
};

export default Index;
