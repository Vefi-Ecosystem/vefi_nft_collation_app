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
                <li>Enjoy low gas fees for minting a collection on vefi nft .</li>
                <li>Access to staking polls.</li>
                <li>Run your nft presale easily on our launchpad.</li>
                <li>
                  1 lucky collection gets showcases to our community daily and 5 collections gets to have a free AMA to
                  talk about thier projects to our community weekly.
                </li>
                <li>Try out our open collection feature.</li>
              </ol>
            </div>
          </div>
        </div>
      </LearnMoreWrapper>
    </>
  );
};

export default LearnMore;
