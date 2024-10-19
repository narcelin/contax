SELECT 
    Contact.*, 
    (SELECT json_group_array(json_object('type', PhoneNumber.type, 'number', PhoneNumber.phone_number)) 
     FROM PhoneNumber 
     WHERE PhoneNumber.contact_id = Contact.id) AS phone_numbers,
    (SELECT json_group_array(json_object('type', Email.type, 'email_address', Email.email_address)) 
     FROM Email 
     WHERE Email.contact_id = Contact.id) AS email_addresses
    (SELECT json_group_array(json_object('type', Email.type, 'email_address', Email.email_address)) 
     FROM Email 
     WHERE Email.contact_id = Contact.id) AS email_addresses
FROM 
    Contact
WHERE 
    Contact.id = 1;
