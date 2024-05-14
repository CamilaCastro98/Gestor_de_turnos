const formatDate = (date) => {
    const year = date.toString().substring(0,4)
    const month = date.toString().substring(5,7)
    const day = date.toString().substring(8,10)

    const formatDate = `${day}-${month}-${year}`
    return formatDate
}

export default formatDate