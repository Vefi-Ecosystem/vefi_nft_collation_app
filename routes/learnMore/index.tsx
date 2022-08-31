import { Typography } from "antd";
import { NavLink } from "components";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { LearnMoreWrapper } from "./learnMore.style";

const LearnMore = () => {
  return (
    <>
      <LearnMoreWrapper>
        <div className="breadcrumb">
          <NavLink href="/">
            <div className="box">
              <FiArrowLeft className="icon" />
            </div>
          </NavLink>
          <div className="Learn__more">
            <Typography.Title>Here&apos;s why you should join in at this time.</Typography.Title>
            <div className="content">
              <ol>
                <li>You&apos;ll get quick verification on our NFT marketplace.</li>
                <li>You&apos;ll get front-page privilege.</li>
                <li>Help with community-building.</li>
                <li>You stand a chance to have an AMA with our community members.</li>
                <li>You define the price for your assets.</li>
              </ol>
            </div>
          </div>
        </div>
      </LearnMoreWrapper>
    </>
  );
};

export default LearnMore;
