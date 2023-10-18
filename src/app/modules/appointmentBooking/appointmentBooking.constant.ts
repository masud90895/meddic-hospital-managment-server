export const appointmentFilterableFields: string[] = [
    'searchTerm',
    'firstName',  
   'appointmentStatus'
  ];
  
  export const appointmentSearchableFields: string[] = [
    "appointmentStatus"
  ];
  

  export const appointmentFields: string[] = ['profileId'];
  export const appointmentRelationalFieldsMapper: { [key: string]: string } = {
    profileId: 'profileId'
  };
  