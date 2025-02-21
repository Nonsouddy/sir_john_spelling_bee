export const formatSubheading = (page: string) => {
    switch (page) {
        case "dashboard":
            return "Unified Dashboard for Seamless Management Operations.";
        case "contestants":
            return "Management Contestants Details.";

        default:
            return "Seamless Management Operations.";
    }
};

export const formatDate = (dateString: Date) => {
    const date = new Date(dateString)
    return date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}
