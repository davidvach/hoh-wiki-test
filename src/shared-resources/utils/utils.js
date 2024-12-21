import resources from "../data/resources";
import Icon from "@/src/components/icon/Icon";

export const getItemIcon = (id, maxHeight) => {
    const foundResource = resources.find(elem => elem.id === id);
    if (foundResource) {
        return <Icon resource={foundResource} maxHeight={maxHeight}/>
    }
}