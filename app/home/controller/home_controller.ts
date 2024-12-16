export const getDataFromQRCode = (qr: string, field: string): string => {
    const content = sliceContent(qr)
    const fields = field.split(".")
    const subField = fields.length > 1 ? fields.slice(1).join(".") : null
    if (content.id === fields[0] && !subField) {
        return content.value
    }
    if (content.id === fields[0] && subField) {
        return getDataFromQRCode(content.value, subField)
    }
    return getDataFromQRCode(content.nextValue, fields.join("."))
}

export const sliceContent = (content: string) => {
    const id = content.slice(0, 2)
    const length = Number(content.slice(2, 4))
    const value = content.slice(4, 4 + length)
    const nextValue = content.slice(4 + length)
    return { id, length, value, nextValue }
}

