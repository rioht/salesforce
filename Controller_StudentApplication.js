public class StudentApplication_ControllerExtension {
    Public Lead L {get; set;}
    Public Boolean Commitment {get; set;}
    Public String Name {get; set;}
    Public Boolean SavedForm {get; set;}
    public StudentApplication_ControllerExtension(ApexPages.StandardController stdController) {
        Commitment = false;
        SavedForm = false;
        Name = '';
        L = (Lead)stdController.getRecord();
    }
    public pageReference SaveNext() {
        try{
            L.Company = L.LastName;
            L.Contact_Type__c = 'Student / Mentee / Youth';
            L.Status__c = 'Interested / Prospective';
            insert L;
            SavedForm = true;
        }catch(DmlException e) {
            System.debug('The following exception has occurred: ' + e.getMessage());
            ApexPages.Message myMsg = new ApexPages.Message(ApexPages.Severity.ERROR,e.getMessage());
            ApexPages.addMessage(myMsg);
        }    
        return null;
    }    
}