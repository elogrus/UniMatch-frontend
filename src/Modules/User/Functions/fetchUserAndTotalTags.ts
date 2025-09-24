import { http } from "@/Base/Functions/http";
import type { TagT } from "@/Modules/Tag/types";

interface FetchUserAndTotalTags {
    user_tags: TagT[];
    all_tags: TagT[];
}

export const fetchUserAndTotalTags = () => {
    return http.post<FetchUserAndTotalTags>("api/hobby/total/");
};
