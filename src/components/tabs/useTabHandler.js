import { useState, useEffect } from "react";

export const useTabHandler = (layout) => {
	const [selectedTab, setSelectedTab] = useState(null);

	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash.replace("#", "").toLowerCase();
			const isValidTab = layout.tabs.some(tab => tab.url.toLowerCase() === hash);
			setSelectedTab(isValidTab ? hash : layout.tabs[0]?.url || "intro");
		};

		handleHashChange();

		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [layout]);

	return selectedTab;
};
