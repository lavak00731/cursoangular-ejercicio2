export interface Peoplemodel {
    userId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    emailAddress: string
}
export interface Peoplecontainer {
    users: Peoplemodel[]
    
}