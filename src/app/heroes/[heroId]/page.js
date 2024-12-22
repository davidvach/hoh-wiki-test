"use client";

import { useEffect } from "react";
import Container from "@/src/components/container/Container";
import layoutHeroes from "../sectionsDefinition";
import Intro from "./intro/Intro";
import { allHeroes } from "../data";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import { usePathname, useRouter } from "next/navigation";

const OneHeroPage = () => {
    const basePath = "heroes";

    const selectedTab = useTabHandler(layoutHeroes);

    const pathname = usePathname();
    const router = useRouter();

    const heroId = pathname.split("/").pop();
    const hero = allHeroes.find((oneHero) => oneHero.id === heroId);

    useEffect(() => {
        if (!hero) {
            router.replace(`/${basePath}`);
        }
    }, [hero, router]);

    if (!hero) {
        return null;
    }

    const heroName = hero.name;

    const pageName = (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Heroes</a> &gt; {heroName}
        </span>
    );

    const renderSelectedTab = () => {
        switch (selectedTab.url) {
            default:
                return <Intro heroId={heroId} />;
        }
    };

    return (
        <Container basePath={basePath} tabs={layoutHeroes.tabs} pageName={pageName}>
            {renderSelectedTab()}
        </Container>
    );
};

export default OneHeroPage;
