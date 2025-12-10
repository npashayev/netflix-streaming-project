export function getRegionName(code: string): string {
    try {
        const names = new Intl.DisplayNames(["en"], { type: "region" });
        return names.of(code) ?? code;
    } catch {
        return code;
    }
}