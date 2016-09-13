@isTest
private class EmailHandler_References_Test {
    // The following test methods instantiate the contact and email handler.
    // Code is commented out to simulate if/else logic present in the handler to get full coverage. 
    static testMethod void EmailHandler_References_Test() {
    
       // Create a new email and envelope object.
       Messaging.InboundEmail email = new Messaging.InboundEmail() ;
       Messaging.InboundEnvelope env = new Messaging.InboundEnvelope();
       
       email.subject = 'testemail@email.com';
       email.fromAddress = 'testemail@email.com';
       email.plainTextBody = 'This is a note.';
        
       // Create a new contact and populate the fields.
    Contact contact = new Contact(
        Email = 'testemail@email.com',
        firstName = 'FirstName',
        LastName = 'LastName');
        contact.Contact_Type__c = 'Volunteer';
        contact.Program_Affiliation__c = 'Mentoring';
        contact.Status__c  = 'Current';
        insert contact;
        //contact.Reference_1__c = 'one';
        //contact.Reference_2__c = 'two';
        //contact.Reference_3__c = 'three';
        //update contact;
        
       // Call the email handler.
       
        String referenceText = email.plainTextBody;          
        String Ref1 = contact.Reference_1__c;
        String Ref2 = contact.Reference_2__c;
        String Ref3 = contact.Reference_3__c;
        Boolean BRef1 = String.isBlank(Ref1);
        Boolean BRef2 = String.isBlank(Ref2);
        Boolean BRef3 = String.isBlank(Ref3);
        update contact;
       
       EmailHandler_References emailServiceObj = new EmailHandler_References();
        emailServiceObj.handleInboundEmail(email, env );
        
    }
    static testMethod void EmailHandler_References_Test2() {
    
       // Create a new email and envelope object.
       Messaging.InboundEmail email = new Messaging.InboundEmail() ;
       Messaging.InboundEnvelope env = new Messaging.InboundEnvelope();
       
       email.subject = 'testemail@email.com';
       email.fromAddress = 'testemail@email.com';
       email.plainTextBody = 'This is a note.';
        
       // Create a new contact and populate the fields.
    Contact contact = new Contact(
        Email = 'testemail@email.com',
        firstName = 'FirstName',
        LastName = 'LastName');
        contact.Contact_Type__c = 'Volunteer';
        contact.Program_Affiliation__c = 'Mentoring';
        contact.Status__c  = 'Current';
        insert contact;
        contact.Reference_1__c = 'one';
        //contact.Reference_2__c = 'two';
        //contact.Reference_3__c = 'three';
        update contact;
        
       // Call the email handler.
       
        String referenceText = email.plainTextBody;          
        String Ref1 = contact.Reference_1__c;
        String Ref2 = contact.Reference_2__c;
        String Ref3 = contact.Reference_3__c;
        Boolean BRef1 = String.isBlank(Ref1);
        Boolean BRef2 = String.isBlank(Ref2);
        Boolean BRef3 = String.isBlank(Ref3);
        update contact;
       
       EmailHandler_References emailServiceObj = new EmailHandler_References();
        emailServiceObj.handleInboundEmail(email, env );
        
    }
    static testMethod void EmailHandler_References_Test3() {
    
       // Create a new email and envelope object.
       Messaging.InboundEmail email = new Messaging.InboundEmail() ;
       Messaging.InboundEnvelope env = new Messaging.InboundEnvelope();
       
       email.subject = 'testemail@email.com';
       email.fromAddress = 'testemail@email.com';
       email.plainTextBody = 'This is a note.';
        
       // Create a new contact and populate the fields.
    Contact contact = new Contact(
        Email = 'testemail@email.com',
        firstName = 'FirstName',
        LastName = 'LastName');
        contact.Contact_Type__c = 'Volunteer';
        contact.Program_Affiliation__c = 'Mentoring';
        contact.Status__c  = 'Current';
        insert contact;
        contact.Reference_1__c = 'one';
        contact.Reference_2__c = 'two';
        //contact.Reference_3__c = 'three';
        update contact;
        
       // Call the email handler.
       
        String referenceText = email.plainTextBody;          
        String Ref1 = contact.Reference_1__c;
        String Ref2 = contact.Reference_2__c;
        String Ref3 = contact.Reference_3__c;
        Boolean BRef1 = String.isBlank(Ref1);
        Boolean BRef2 = String.isBlank(Ref2);
        Boolean BRef3 = String.isBlank(Ref3);
        update contact;
       
       EmailHandler_References emailServiceObj = new EmailHandler_References();
        emailServiceObj.handleInboundEmail(email, env );
        
    }
        static testMethod void EmailHandler_References_Test4() {
    
       // Create a new email and envelope object.
       Messaging.InboundEmail email = new Messaging.InboundEmail() ;
       Messaging.InboundEnvelope env = new Messaging.InboundEnvelope();
       
       email.subject = 'testemail@email.com';
       email.fromAddress = 'testemail@email.com';
       email.plainTextBody = 'This is a note.';
        
       // Create a new contact and populate the fields.
    Contact contact = new Contact(
        Email = 'testemail@email.com',
        firstName = 'FirstName',
        LastName = 'LastName');
        contact.Contact_Type__c = 'Volunteer';
        contact.Program_Affiliation__c = 'Mentoring';
        contact.Status__c  = 'Current';
        insert contact;
        contact.Reference_1__c = 'one';
        contact.Reference_2__c = 'two';
        contact.Reference_3__c = 'three';
        update contact;
        
       // Call the email handler.
       
        String referenceText = email.plainTextBody;          
        String Ref1 = contact.Reference_1__c;
        String Ref2 = contact.Reference_2__c;
        String Ref3 = contact.Reference_3__c;
        Boolean BRef1 = String.isBlank(Ref1);
        Boolean BRef2 = String.isBlank(Ref2);
        Boolean BRef3 = String.isBlank(Ref3);
        update contact;
       
       EmailHandler_References emailServiceObj = new EmailHandler_References();
        emailServiceObj.handleInboundEmail(email, env );
        
    }
            static testMethod void EmailHandler_References_Test5() {
    
       // Create a new email and envelope object.
       Messaging.InboundEmail email = new Messaging.InboundEmail() ;
       Messaging.InboundEnvelope env = new Messaging.InboundEnvelope();
       
       email.subject = 'testemail@email.com';
       email.fromAddress = 'testemail@email.com';
       email.plainTextBody = 'This is a note.';
        
       // Create a new contact and populate the fields.
    Contact contact = new Contact(
        Email = 'testemail@email.com',
        firstName = 'FirstName',
        LastName = 'LastName');
        contact.Contact_Type__c = 'Volunteer';
        contact.Program_Affiliation__c = 'Mentoring';
        contact.Status__c  = 'Current';
        //insert contact;
        contact.Reference_1__c = 'one';
        contact.Reference_2__c = 'two';
        contact.Reference_3__c = 'three';
        //update contact;
        
       // Call the email handler.
       
        String referenceText = email.plainTextBody;          
        String Ref1 = contact.Reference_1__c;
        String Ref2 = contact.Reference_2__c;
        String Ref3 = contact.Reference_3__c;
        Boolean BRef1 = String.isBlank(Ref1);
        Boolean BRef2 = String.isBlank(Ref2);
        Boolean BRef3 = String.isBlank(Ref3);
        //update contact;
       
       EmailHandler_References emailServiceObj = new EmailHandler_References();
        emailServiceObj.handleInboundEmail(email, env );
        
    }
}