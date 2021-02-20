export const manageFinallize = (approval: any, emailParty: any) => {
    if (approval === "Approve" && emailParty === "Approve" || approval === null && emailParty === "Approve") {
        return {text: "Approve", status: "Approve"}
    }

    if (approval === "Waiting" && emailParty === "Waiting" || approval === null && emailParty === "Waiting") {
        return {text: "Waiting", status: "Waiting"}
    }

    if (approval === "Waiting" && emailParty === "Approve") {
        return {text: "WaitingByApproval", status: "Waiting"}
    }
  
    if (approval === "Reject" && emailParty === "Approve") {
        return {text: "ProposeAmendmentByApproval", status: "Reject"}
    }

    if (approval === "Approve" && emailParty === "Reject") {
        return {text: "ProposeAmendmentByEmailParty", status: "Reject"}
    }
    
    if (approval === null && emailParty === "Reject") {
        return {text: "ProposeAmendment", status: "Reject"}
    }
    
    if (approval === "Waiting" && emailParty === "Reject") {
        return {text: "ProposeAmendmentByEmailParty", status: "Reject"}
    }else{
        return {text: "Waiting", status: "Waiting"}
    }
}
