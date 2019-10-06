export const dateFormat = (date) => {
    const YYYY = date.getFullYear()
    const MM = date.getMonth() + 1
    const DD = date.getDate()
    return `${YYYY}-${MM}-${DD}`
}

export const prevDate = (date, diff) => {
    var dt = new Date()
    dt.setMonth(date.getMonth() - diff)
    return dt
}


