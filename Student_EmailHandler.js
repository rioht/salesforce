global class EmailHandler_References implements Messaging.InboundEmailHandler {

  global Messaging.InboundEmailResult handleInboundEmail(Messaging.InboundEmail email, Messaging.InboundEnvelope envelope) {

    Messaging.InboundEmailResult result = new Messaging.InboundEmailresult();
	
      try {
    Contact contact = [SELECT Email, Reference_1__c, Reference_2__c, Reference_3__c
                      FROM Contact
                      WHERE Email = :email.subject
                      LIMIT 1];
          
          String referenceText = email.plainTextBody;          
          String Ref1 = contact.Reference_1__c;
          String Ref2 = contact.Reference_2__c;
          String Ref3 = contact.Reference_3__c;
          Boolean BRef1 = String.isBlank(Ref1);
          Boolean BRef2 = String.isBlank(Ref2);
          Boolean BRef3 = String.isBlank(Ref3);
          
          if (String.isBlank(Ref1)) {
              contact.Reference_1__c = referenceText;
              update contact;
          }
          else if (String.isBlank(Ref2)) {
              contact.Reference_2__c = referenceText;
              update contact;
          }
          
          else if (String.isBlank(Ref3)) {
              contact.Reference_3__c = referenceText;
              update contact;
          }
          
          else{
             System.debug('Reference fields are filled');
             MailerUtils.sendMail('An error occurred while processing References.','Either all references fields are full or a reference attempted to send their response more than once.  Please review the references listed with ' + contact.Email + ' to determine the error.');
          }
          }
  catch (System.QueryException e){
          System.debug('Contact Query Issues: ' + e);
      }
      System.debug('====> Updated contact '+contact.Id);
     return result;

  }

}