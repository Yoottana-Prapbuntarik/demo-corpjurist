export const dateToString = (start: string, end: string) => {
    let splitWhiteSpaceStartDate = start.split(' ')
    let splitSlashStartDate = splitWhiteSpaceStartDate[0].split('/')

    let splitWhiteSpaceEndDate = end.split(' ')
    let splitSlashEndDate = splitWhiteSpaceEndDate[0].split('/')

    let startDateTimestamp = new Date(splitSlashStartDate[2] + '-' + splitSlashStartDate[1] + '-' + splitSlashStartDate[0])
    let endDateTimestamp = new Date(splitSlashEndDate[2] + '-' + splitSlashEndDate[1] + '-' + splitSlashEndDate[0])
    if(endDateTimestamp.getMonth() - startDateTimestamp.getMonth() > 1){
        return `${endDateTimestamp.getMonth() - startDateTimestamp.getMonth()} Months`
    }else if(endDateTimestamp.getDate() - startDateTimestamp.getDate() > 1){        
        return `${endDateTimestamp.getDate() - startDateTimestamp.getDate()} Days`
    }else{
        return `1 Days`
    }
}