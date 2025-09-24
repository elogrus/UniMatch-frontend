import { useFetch } from "@/Base/Hooks/useFetch";
import { TagSelector } from "@/Modules/Tag/UI/TagSelector";
import { fetchUserAndTotalTags } from "../../Functions/fetchUserAndTotalTags";

export const UserTagSelector = () => {
    const tags = useFetch({ fetchFunc: fetchUserAndTotalTags });
    return (
        <div>
            <h2>Твои тэги</h2>
            <TagSelector tags={tags.response?.all_tags || null} />
        </div>
    );
};
