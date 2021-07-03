export const getContentByTypeAndCode = (contents, type, code) => {
    const isContentEmpty = contents === undefined || contents.length === 0
    if (isContentEmpty) {
        return ""
    }
    const content = contents.find(content => content.type === type && content.code === code);
    if (content == null) {
        return "N/A"
    }
    return content.htmlContent
}