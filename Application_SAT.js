<apex:page standardController="Lead" extensions="StudentApplication_ControllerExtension" showHeader="false" sidebar="false">
    <html>
    <head>
    <link href="{!URLFOR($Resource.bootstrapv336, 'bootstrap-3.3.6-dist/css/bootstrap.css')}" rel="stylesheet"/>
    <!--><link href="{!URLFOR($Resource.OnePageScroll, 'onepage-scroll-master/onepage-scroll.css')}" rel="stylesheet"/>
	<!-->
	<apex:includeScript value="{!URLFOR($Resource.JQuery1123)}"/>
    <!--><apex:includeScript value="{!URLFOR($Resource.OnePageScroll,'onepage-scroll-master/jquery.onepage-scroll.min.js')}"/>
    <!-->        <script type="text/javascript">
        
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
                // j$(".main").onepage_scroll({
                // sectionContainer: "section",
                // loop: true,
                // responsiveFallback: false
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
      <body>
  <center><br/><apex:image url="{!$Resource.ApexHorizontal2016}" width="330" height="165"/><br/><br/></center>
      <div class="main" >
       <apex:form id="satprep_application_form">
           <apex:pageMessages />
        <apex:pageBlock rendered="{! !SavedForm}">
            <apex:pageBlockButtons location="bottom">
                <apex:commandButton value="Submit Application" action="{!SaveNext}" rerender="satprep_application_form"/>
                  <apex:outputPanel >
                               <p><b>
                                   Please check to make sure all required fields have been filled out.  
                                   <br/>
                                  A list of missing fields will appear at the top of this page after clicking Submit.
                               </b></p>
                  </apex:outputPanel>            
            </apex:pageBlockButtons>
           
          <!--><section class="page1">
            <div class="page_container" style="background:url(https://i.imgur.com/Ht83UbR.jpg);
                                               background-size:cover;
                                               ">
                <apex:outputPanel >
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    
                </apex:outputPanel>
              </div>
            </section>
		<!-->
            
            <div class ="intro">
                <h2>Welcome to the Apex for Youth SAT Prep Application.</h2><br/><br/>
                <h3>On average, our students increase their SAT scores by 100 points.</h3><br/><br/>
                <h4 style = "color:red">Red-lined fields are required.</h4><br/><br/>
                Our tuition fee for one semester of classes is $120, which covers the costs of textbooks, materials, and instruction.<br/>
                If you are in need of financial assistance, please contact us and prepare a copy of at least one of the following:<br/><br/>
             	
                    Paystub<br/>
                    NYCHA Residency<br/>
                W-2 Form (Most Current)<br/><br/>
                
                <h4>Thank you for taking the time to complete our application.<br/>If you have any questions, please email us @ <a href = "mailto:info@apexforyouth.org?Subject=Application%20Inquiry">info@apexforyouth.org</a>.</h4>



            </div>
          <section class="page2">
            <div class="page_container">
              <apex:pageBlockSection title="Student Information">
              <apex:repeat value="{!$ObjectType.Lead.FieldSets.SATPrepApp_PersonalInformation}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
            </apex:pageBlockSection>    
            </div>
          </section>

            
          <section class="page3">
            <div class="page_container">
                <apex:pageBlockSection title="Parent & Guardian Information">
              <apex:repeat value="{!$ObjectType.Lead.FieldSets.SATPrepApp_ParentGuardianInfo}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
            </apex:pageBlockSection>
              </div>
            </section>
            
          <section class="page3.5">
            <div class="page_container">
                <apex:pageBlockSection title="Emergency Contacts">
              <apex:repeat value="{!$ObjectType.Lead.FieldSets.SATPrepApp_EmergencyContacts}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
            </apex:pageBlockSection>
              </div>
            </section>
      
          <section class="page4">
            <div class="page_container">
                <apex:pageBlockSection title="Academic Information">
                <apex:repeat value="{!$ObjectType.Lead.FieldSets.SATPrepApp_AcademicInformation}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
              </apex:pageBlockSection>
            </div>
          </section>
            
          <section class="page5">
            <div class="page_container">
                <apex:pageBlockSection title="Goals" columns="1">
                     <apex:outputPanel >
                     	<p>
                         Please tell us how much you're looking to improve your SAT scores by, as well as any future dates that you plan to take the SAT on.<br/>                         
                     	</p>
                <br/>
                	</apex:outputPanel>
                <apex:repeat value="{!$ObjectType.Lead.FieldSets.SATPrepApp_Goals}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>                
                </apex:pageBlockSection>
            </div>
          </section>

          <section class="page7">
            <div class="page_container">
              <apex:pageBlockSection title="SAT Program Requirements" columns="1">
                <apex:outputPanel >
                    
                    <b><u>SAT Prep Program Policies</u></b><br/><br/>
                    <ol>
                    <b>Be on time</b><br/><br/>
                    <li>Arrive at PS 1 by 9:45 AM and wait in the lunchroom on the first floor.</li> 
                    <li>If you will be late, you must contact us before 10:00 am through call or text.</li>
                    <li>Two lates count as one absence.</li>   
                                   </ol>

                    <ol>
                    <b>Homework</b><br/><br/>
                    <li>Arrive at PS 1 by 9:45 AM and wait in the lunchroom on the first floor.</li> 
                    <li>Two incomplete homework assignments count as one absence.</li> 
                                   </ol>

                    <ol>
                    <b>Absence</b><br/><br/>
                    <li>If you cannot attend, provide at least 24 hour notice and a note that indicates the reason for your absence signed by a parent or guardian.</li> 
                    <li>If you have more than two unexcused absences, you run the risk of being kicked out of the program.</li>  
                                   </ol>

                    <ol>
                    <b>Materials: Bring binder, calculator and pens/pencils.</b><br/><br/>
					<b>Leave classroom and furniture neat and clean.</b><br/><br/>
                                   </ol>

                </apex:outputPanel>
               <apex:pageBlockSectionItem >
                   <apex:outputPanel ><font color="red"><b><u>I can commit to my program's requirements.</u></b></font></apex:outputPanel>
                   <apex:inputField value="{!Lead.Can_Commit_to_Requirements__c}"/>
               </apex:pageBlockSectionItem>                   
              </apex:pageBlockSection>
            </div>
          </section>


          <section class="page11">
              <div class="page_container">
                <apex:pageBlockSection title="Parental Consent & Release" columns="1">
                  
                  <apex:outputPanel >
                  <u>I have read and agree to the following:</u><br/><br/>

                      <b>Apex for Youth includes photos of Apex students and volunteers in its website, newsletter, yearbook, and promotional materials. Photos used in Apex’s promotional materials, sometimes with names, are made available to the general public for publicity and fundraising.</b>
                    <br/><br/>                   
<i>I have read the above statement and understand that photos of my child, sometimes with my child’s name, may be used in Apex publications and materials. I give my consent to Apex for Youth for such photo and name usage. All the information in this application is true to the best of my knowledge.
                    <br/><br/>
    In addition, I understand that each volunteer that participates in the Apex SAT Prep Program program is an independent volunteer who is not employed by Apex and that, although Apex has conducted background checks on each volunteer and gives Apex SAT Prep Program training and some supervision to each volunteer, will not be responsible for any action or inaction of any volunteer in connection with any Apex SAT Prep Program activity. In consideration of and in return for services, facilities, and other assistance provided to my child by Apex and its officers, directors, staff, employees, agents, and representatives, I release Apex and its officers, directors, staff, employees, agents, and representatives from any and all liability, claims and actions that may arise from injury or harm to my child or my child’s property, including, without limitation, any injury or harm to my child or my child’s property that may be caused by the volunteer’s negligence or willful misconduct. I understand that this release covers liability, claims and actions caused entirely or in part by any acts or failures to act by Apex and its officers, directors, staff, employees, agents, and representatives to the extent that such release is permitted by law. I recognize that this release means I and my child are giving up, among other things, the right to sue Apex and its officers, directors, staff, employees, agents, and representatives for injuries, damages, or losses my child may incur while participating in the Apex SAT Prep Program program. I also understand that this release binds me, my child and my child’s executors, administrators, and assigns. I have read the entire release in this paragraph, fully understand it, and agree to be legally bound by it.</i>
                  </apex:outputPanel>

                  <apex:pageBlockSectionItem >
                   <apex:outputLabel value="Student Name" />
                   <apex:inputField value="{!L.STUDENT_Student_Full_Name__c}" required="true"/>
                  </apex:pageBlockSectionItem>
                    
                  <apex:pageBlockSectionItem >
                      <apex:outputLabel value="Parent/Guardian Name" />
                   <apex:inputField value="{!L.STUDENT_Parent_Full_Name__c}" required="true"/>
                  </apex:pageBlockSectionItem>

                  <apex:pageBlockSectionItem >
                   <apex:outputLabel value="Date" />
                   <apex:inputfield id="agrdate" value="{!Lead.Agreement_Date__c}" required="true" onkeydown="event.preventDefault();"/>
                  </apex:pageBlockSectionItem>
                	</apex:pageBlockSection>
              </div>
            </section>
    </apex:pageBlock>
        <apex:pageBlock rendered="{!SavedForm}" title="Thank you for your application!">
        
<b>For further questions or information, please contact:</b><br/><br/>

Angela Tse, Program Coordinator, Educational Programs <br/>
Phone: 212-385-3574<br/>
Email: Angela.Tse@apexforyouth.org<br/>         
        </apex:pageBlock>
    </apex:form>
            </div>        
      </body>
</html>        
</apex:page>