// Mock data for our services so we can simulate back-end behavior

const oneSJ_API = {
    WomensRecoveryAssociation: {
        title: "Women's Recovery Association",
        gender: 'female',
        ethnicity: 'any',
        insurance: true,
    },
    IndianHealthCenter: {
        title: "Indian Health Center Adult Behavioral Health",
        gender: 'any',
        ethnicity: 'indian',
        insurance: false,
    },
    SantaClaraMedicalCenter: {
        title: "Santa Clara Valley Medical Center",
        gender: 'any',
        ethnicity: 'any',
        insurance: true,
    }
}

export default getAPIData = () => {
    return oneSJ_API;
}
