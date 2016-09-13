public class MailerUtils {

    public static void sendMail(string subject, string message) {

        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        String[] toAddresses = new String[] {'david.cha@apexforyouth.org'};
        mail.setToAddresses(toAddresses);

        mail.setSubject(subject);

        mail.setUseSignature(false);
        mail.setHtmlBody(message);

        // Send the email
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });

    }
    
    public static void sendMailStudentLead(string subject, string message) {

        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        String[] toAddresses = new String[] {'belinda.lin@apexforyouth.org', 'angela.tse@apexforyouth.org'};
        mail.setToAddresses(toAddresses);
		mail.setReplyTo('michael.lee@apexforyouth.org');
        mail.setSenderDisplayName('Automated Student Lead Processer');
        mail.setSubject(subject);

        mail.setUseSignature(false);
        mail.setHtmlBody(message);

        // Send the email
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });

	}
}