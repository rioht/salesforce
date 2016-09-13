<apex:page standardController="lead" extensions="VolunteerApplication" showHeader="false" sidebar="false">
    <head>
        <link href="{!URLFOR($Resource.bootstrapv336, 'bootstrap-3.3.6-dist/css/bootstrap.css')}" rel="stylesheet"/>
        <apex:includeScript value="{!URLFOR($Resource.JQuery1123)}"/>
            <script type="text/javascript">
        
        // Note:  Included onkeydown event to prevent input on the agreement date field.
        // Agreement date is still changeable via the datepicker calendar.
        // Below code automatically inputs the current date from Salesforce.
        
        	var j$ = jQuery.noConflict();
        	var date_today = '{!MONTH(TODAY())}/{!DAY(TODAY())}/{!YEAR(TODAY())}';
            
        	function fill_agrdate() {
                
                jQuery('input[id$=agrdate]').val(date_today);
        }      	
        	j$(document).ready(function() {
                fill_agrdate();                                               
        });
         
    	</script>
         <style>            
            @font-face{
            font-family: MuseoSlab;
            src: url("{!URLFOR($Resource.MuseoSlab)}");
        }
			div.intro {
            font-size: 150%;
    		margin: 20px 0 20px 0;
    		padding: 20px;
            text-align: center;
            font-family: MuseoSlab;
			} 
		</style>
    </head>
    
    <center><br/><apex:image url="{!$Resource.ApexHorizontal2016}" width="330" height="165"/><br/><br/></center>
    <apex:form id="theform">
        <apex:pageMessages />
        <apex:pageBlock rendered="{! !SavedForm}">
            <apex:pageBlockButtons location="bottom">
                <apex:commandButton value="Submit Application" action="{!SaveNext}" rerender="theform"/>
                  <apex:outputPanel >
                               <p><b>
                                   Please check to make sure all required fields have been filled out.  
                                   <br/>
                                  A list of missing fields will appear at the top of this page after clicking Submit.
                               </b></p>
                  </apex:outputPanel>
            </apex:pageBlockButtons>
            
            <div class ="intro">
                <h2>Welcome to the Apex for Youth Volunteer Application.</h2><br/><br/>
                <h3>We deliver possibilities to underserved Asian and immigrant youth from low-income families in NYC.</h3><br/><br/>
                <h4 style = "color:red">Red-lined fields are required.</h4><br/><br/>
                <h4>Thank you for taking the time to complete our application.<br/>If you have any questions, please email us @ <a href = "mailto:info@apexforyouth.org?Subject=Application%20Inquiry">info@apexforyouth.org</a>.</h4>

            </div>
            <apex:pageBlockSection title="Personal Information">
               <apex:repeat value="{!$ObjectType.Lead.FieldSets.Personal_Information}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
            </apex:pageBlockSection>  
            <apex:pageBlockSection title="Employment and Educational History">
               <apex:repeat value="{!$ObjectType.Lead.FieldSets.Employment_and_Educational_History}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}" /> </apex:repeat>
            </apex:pageBlockSection>
            <apex:pageBlockSection title="References">
                 <apex:outputPanel >
                    Please provide references (2 professional, 1 personal) and notify them that they will be contacted via email.<br/>
                </apex:outputPanel>
                <apex:outputPanel >
                     <br/>
                </apex:outputPanel>
                
               <apex:repeat value="{!$ObjectType.Lead.FieldSets.References}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}" /> </apex:repeat>
            </apex:pageBlockSection>
            <apex:pageBlockSection title="Activities / Interests / Skills">
                                <apex:outputPanel >
                                    Your choices in this section will help us make a better decision matching you with potential mentees, so please select any/all items that apply.<br/>
                </apex:outputPanel>
                <apex:outputPanel >
                    <br/>
                </apex:outputPanel>
               <apex:repeat value="{!$ObjectType.Lead.FieldSets.Activities}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}" /> </apex:repeat>
            </apex:pageBlockSection>
            <apex:pageBlockSection title="Apex Programs">
                <apex:outputPanel >
                    We'll try our best to place you according to your preferences.<br/><br/>From time to time, Apex may have one-off volunteer opportunities.  Please let us know if you're willing to be a substitute volunteer below.<br/>
                </apex:outputPanel>
                <apex:outputPanel >
                    
                </apex:outputPanel>
               <apex:repeat value="{!$ObjectType.Lead.FieldSets.Educational_Programs}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}" /> </apex:repeat>
            </apex:pageBlockSection> 
            <apex:pageBlockSection title="*Mentoring Programs – If you are interested in volunteering with our mentoring programs, please check your preferences:">
                <apex:outputPanel >
                    Please select all that apply.<br/>
                </apex:outputPanel>
                <apex:outputPanel >
                    
                </apex:outputPanel>
               <apex:repeat value="{!$ObjectType.Lead.FieldSets.Mentoring_Programs}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}" /> </apex:repeat>
            </apex:pageBlockSection> 
            <apex:pageBlockSection title="*Time Commitment" columns="2">
                <apex:outputPanel >
                <b><u>Mentoring Program:</u></b><br/>
                <ol>
                    <li>Commit to at least one school year (September - June).</li> 
                    <li>Meet with your mentee 2x/month:<br/>
                        a.  Middle School Mentoring: on-site, every other Saturday at a school in Chinatown or Queens.<br/>
                        b.  High School Mentoring: on and off-site, workshops at least one Saturday/month at a school in Chinatown.<br/></li> 
                    <li>Attend mandatory one-time mentor training.</li>  
                    <li>Background check and fingerprinting.</li>
                    <li>Mandatory group feedback sessions (2/year), quarterly check-ins, and year-end interview.</li>
                    <li>Consistent and proactive investment in our youth.</li>
                                   </ol>
                </apex:outputPanel>
                <apex:outputPanel >
                <b><u>Education Program:</u></b><br/>
                <ol>
                    <li>Commit to at least one semester (Fall and/or Spring).</li> 
                    <li>Meets weekly (Saturday morning, 2 hr shifts).</li> 
                    <li>Attend mandatory volunteer training at the beginning of each semester.</li>  
                    <li>Background check and fingerprinting.</li>
                    <li>Attendance policy: <br/>
                        a.  Provide notification of absences as soon as possible.<br/>
                        b.  Volunteers with three or more absences without prior notice may be asked to not continue.</li>
               </ol>
                    </apex:outputPanel>
                <apex:outputPanel >
                    <b><u>Basketball Program:</u></b><br/>
                <ol>
                    <li>Commit to at least one school year.</li> 
                    <li>Meets weekly (Saturday mornings/afternoons, 2 hr shifts).</li> 
                    <li>Attend mandatory volunteer training at the beginning of each semester.</li>  
                    <li>Background check and fingerprinting.</li>
                    <li>Attendance policy:<br/>
                        a.  Provide notification of absences as soon as possible.<br/>
                        b.  Volunteers with three or more absences without prior notice may be asked to not continue.</li>
               </ol> <br/><br/>
                    </apex:outputPanel>
                <apex:outputPanel >
                    <b><u>Substitute Volunteers:</u></b><br/>
                <ol>
                    <li>Substitute Volunteers are contacted on an as-needed basis for our Saturday programs<br/> 
                        (educational, basketball, and mentoring programs).</li> 
                    <li>Substitute Volunteers will be contacted via email a few days before an event.</li> 
                    <li>Substitute Volunteer Requirements:<br/>
                        a.  Complete a volunteer application.<br/>
                        b.  Phone Interview.<br/>
                        c.  Background check and fingerprinting.</li>
               </ol> <br/><br/>
                    </apex:outputPanel>
               <apex:outputPanel >
            <br/><br/>
               </apex:outputPanel>
               <apex:pageBlockSectionItem >
                   <apex:outputPanel ><font color="red"><b><u>I can commit to my program's requirements.</u></b></font></apex:outputPanel>
                   <apex:inputField value="{!Lead.Can_Commit_to_Requirements__c}"/>
               </apex:pageBlockSectionItem>                   
           </apex:pageBlockSection> 
            <apex:pageBlockSection title="Personal Statement" columns="1">
               <apex:outputPanel > Briefly describe why you are interested in volunteering and what you have to offer to our youth. </apex:outputPanel>
               <apex:repeat value="{!$ObjectType.Lead.FieldSets.Personal_Statement}" var="f"> <apex:inputField value="{!Lead[f]}" style="width:400px;height:400px" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
            </apex:pageBlockSection> 
            <apex:pageBlockSection title="Availability for Interview Dates" columns="1">
               <apex:outputPanel > <b>We will contact you to schedule your interview time.</b> </apex:outputPanel>            
               <apex:repeat value="{!$ObjectType.Lead.FieldSets.Availability}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}" /> </apex:repeat>
            </apex:pageBlockSection> 
            <apex:pageBlockSection title="Verification of Application Information and Consent for Photo Usage" columns="1">
                <apex:outputPanel >
<u>I have read and agree to the following:</u><br/><br/>

By signing, to the extent permitted by law, I release and discharge Apex for Youth (Apex) and its officers, agents, 
representatives and employees from any action, claim or liability which may arise in the future in connection with my 
participation as a volunteer in Apex’s programs. I also agree that Apex shall note in any way responsible or liable for my 
conduct or the conduct of any parent, guardian, or child participant and other volunteers. <br/><br/>

I grant permission for Apex to record any or all of my participation in its programs for photos, TV, radio, motion pictures, 
videotapes, and websites for use in publicity, promotions, fundraising or advertising without compensation.<br/><br/>
 
I further agree to indemnify, to the extent permitted by law, Apex and its officers, agents, representatives, and employees 
against any action or claim asserted by any person or entity and arising out of my gross negligence or willful misconduct in 
connection with my participation as a volunteer in Apex’s programs.<br/><br/>

<i>I have read the above statement and understand that photos of me, sometimes with my name, may be used in Apex publications 
and materials. I give my consent to Apex for such photo and name usage. Furthermore, all the information I have provided in this 
application is true to the best of my knowledge.</i>
               </apex:outputPanel>
               <apex:pageBlockSectionItem >
                   <apex:outputLabel value="Full Name" />
                   <apex:inputField value="{!L.Full_Name__c}" required="true"/>
               </apex:pageBlockSectionItem>  
               <apex:pageBlockSectionItem >
                   <apex:outputLabel value="Date" />
                   <apex:inputfield id="agrdate" value="{!Lead.Agreement_Date__c}" required="true" onkeydown="event.preventDefault();"/>
               </apex:pageBlockSectionItem>
                <apex:pageBlockSectionItem >
                    <apex:outputLabel value="Subscribe me to the Apex Email List" />
                   <apex:inputfield value="{!Lead.Subscribe_me_to_the_Apex_Email_List__c}"/>
               </apex:pageBlockSectionItem>
           </apex:pageBlockSection> 
<br/><br/> PLEASE NOTE: Volunteers working with youth are required to undergo a background check. Due to a legislative change in March 2011, the background check fee is now $60. Apex is subsidizing half of the cost as a courtesy to you, and asks that you bring $30 (cash, credit card or check) to the interview if contacted. Thank you.<br/><br/>                                                                                                                
        </apex:pageBlock>
        <apex:pageBlock rendered="{!SavedForm}" title="Thank you for your application!">
        
<b>For further questions or information, please contact:</b><br/><br/>

Dan Tak, Program Coordinator, Middle School Mentoring and Basketball <br/>
Phone: 212-385-3574<br/>
Email: Dan.Tak@apexforyouth.org<br/><br/>

Angela Tse, Program Coordinator, Educational Programs <br/>
Phone: 212-385-3574<br/>
Email: Angela.Tse@apexforyouth.org<br/>      
        </apex:pageBlock>                                                                    
       
    </apex:form>
</apex:page>