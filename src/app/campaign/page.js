"use client";
import layoutCampaign from "./sectionsDefinition";
import Container from "@/src/components/container/Container";
import Intro from "./intro/Intro";
import Provinces from "./provinces/Provinces";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";

const CampaignPage = () => {

  	const basePath = "campaign";

  	const selectedTab = useTabHandler(layoutCampaign);

  	const renderSelectedTab = () => {
    	switch (selectedTab) {
			case "provinces":
				return <Provinces />;
			default:
				return <Intro />;
    	}
  	};

  	return (
    	<Container basePath={basePath} tabs={layoutCampaign.tabs}>
      		{renderSelectedTab()}
    	</Container>
  	);
};

export default CampaignPage;
