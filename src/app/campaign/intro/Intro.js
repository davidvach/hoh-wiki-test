import "./Intro.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import TextBlock from "@/src/components/textblock/TextBlock";
import Image from "@/src/components/image/Image";
import H1 from "@/src/components/h1/H1";
import ImageWideHeader from "@/src/components/image-wide-header/ImageWideHeader";
import { getItemIcon } from "@/src/shared-resources/utils/utils";

const Intro = () => {


    return <>
        <Prologue imageSrc={"/campaign/intro/icon-battle.webp"} alt="" maxHeight="80px">
            Campaign is the main PvE component of the game. It follows the main storyline, allows you to meet new heroes on the way and offers variety of rewards, that are both beneficial and necessary for your in-game progress.<br/>
            The primary way to obtain Expansions for your capital city and Research Materials to progress through the Research Tree is to play Campaign battles.
        </Prologue>

        <SectionDivider />

        <TextBlock>

            <H1 center={true}>Campaign</H1>

            <Image src={"/campaign/intro/deco_battle_mode_banner_campaign.webp"} alt="" roundedCorners={true} spacing={true} width={'400px'}/>

            Campaign comes with the main storyline of the game and offers a range rewards, such as Experiences {getItemIcon("xp_hero")} to level-up your Heroes, 
            Research Materials {getItemIcon("lapis_lazuli")} required to unlock specific technologies in the Research Tree,
            Antimatters {getItemIcon("antimatter")} to power the Time Portal and expansions {getItemIcon("expansion_regular")} to expand your Capital City.

            <ImageWideHeader imageUrl={"/campaign/intro/WorldMap_Fallback.webp"} style={{ height: '200px' }} centered={true} spacing={true}/>

            Each region of the World Map is associated with a unique era and a distinct set of heroes that you can encounter and unlock for your army. 
            Visit the <b>Provinces</b> tab for a detailed overview of the rewards available in each province. This can assist you in planning which encounters are worth prioritizing during your battles 
            and which ones offer the best chances of obtaining the items you need. Replaying battles is crucial for obtaining Experiences and Research Materials.

            <Image src={'https://www.innogames.com/fileadmin/user_upload/Screenshot_Column_Desktop_400x320_4.jpg'} alt="" roundedCorners={true} height={'250px'} spacing={true}/>
            
        </TextBlock>
    </>
}

export default Intro;