export const compareClasses = (
    cls: string,
    mods?: Record<string, boolean>,
    additionalCls?: Array<string | undefined>
): string => {
    let result = cls;

    additionalCls?.filter((val) => typeof val === "string");

    for (const mode in mods) {
        if (mods[mode]) result += " " + mode;
    }

    if (additionalCls) result += " " + additionalCls.join(" ");

    return result;
};

export const cmpc = compareClasses;
