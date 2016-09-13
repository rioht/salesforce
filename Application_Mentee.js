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
       <apex:form id="mentee_application_form">
           <apex:pageMessages />
        <apex:pageBlock rendered="{! !SavedForm}">
            <apex:pageBlockButtons location="bottom">
                <apex:commandButton value="Submit Application" action="{!SaveNext}" rerender="mentee_application_form"/>
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
                <h2>Welcome to the Apex for Youth Mentee Application.</h2><br/><br/>
                <h3>The Mentoring Program addresses the personal, educational and social needs of middle and high school students through one-on-one caring relationships with adult volunteers. Mentoring pairs work together to develop and achieve specific goals throughout the school year.</h3><br/><br/>

                <h4 style = "color:red">Red-lined fields are required.</h4><br/><br/>
                <h4 style = "color:red">NOTE:  Under current grade, please fill in the grade you are in, or most recently completed.</h4><br/><br/>
                <h4>Thank you for taking the time to complete our application.<br/>If you have any questions, please email us @ <a href = "mailto:info@apexforyouth.org?Subject=Application%20Inquiry">info@apexforyouth.org</a>.</h4>


            </div>
          <section class="page2">
            <div class="page_container">
              <apex:pageBlockSection title="Personal Information">
              <apex:repeat value="{!$ObjectType.Lead.FieldSets.StudentApp_PersonalInformation}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
            </apex:pageBlockSection>    
            </div>
          </section>

            
          <section class="page3">
            <div class="page_container">
                <apex:pageBlockSection title="Family & Household">
              <apex:repeat value="{!$ObjectType.Lead.FieldSets.StudentApp_FamilyAndHousehold}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
            </apex:pageBlockSection>
              </div>
            </section>
            
          <section class="page3.5">
            <div class="page_container">
                <apex:pageBlockSection title="Emergency Contacts">
              <apex:repeat value="{!$ObjectType.Lead.FieldSets.StudentApp_EmergencyContacts}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
            </apex:pageBlockSection>
              </div>
            </section>
      
          <section class="page4">
            <div class="page_container">
              <apex:pageBlockSection title="Academic Information">
                <apex:repeat value="{!$ObjectType.Lead.FieldSets.StudentApp_AcademicInfo}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
              </apex:pageBlockSection>
            </div>
          </section>

            
          <section class="page5">
            <div class="page_container">
              <apex:pageBlockSection title="Extracurricular Activities" columns="2">
                  <apex:pageBlockSectionItem >
                        <apex:outputLabel value="Please tell us about other clubs, organizations or programs you are part of." />
                        <apex:inputField value="{!L.STUDENT_Other_Programs__c}" required="true"/>
                  </apex:pageBlockSectionItem>
                  <apex:pageBlockSectionItem >
                        <apex:outputLabel value="Please tell us when those programs meet." />
                        <apex:inputField value="{!L.STUDENT_Scheduling_Commitments__c}" required="true"/>
                  </apex:pageBlockSectionItem>
                  <apex:pageBlockSectionItem >
                        <apex:outputLabel value="What are your hobbies and interests?" />
                        <apex:inputField value="{!L.Interests_Hobbies_Skills__c}" required="true"/>
                  </apex:pageBlockSectionItem>
                  <apex:pageBlockSectionItem >
                        <apex:outputLabel value="Please tell us more about the hobbies and interests you selected." />
                        <apex:inputField value="{!L.Interests_Hobbies_Skills_Other__c}" required="true"/>
                  </apex:pageBlockSectionItem>
                  <apex:pageBlockSectionItem >
                        <apex:outputLabel value="Can you travel alone by yourself using the MTA?" />
                        <apex:inputField value="{!L.STUDENT_CanYouTravel__c}" required="true"/>
                  </apex:pageBlockSectionItem>
            </apex:pageBlockSection>
            </div>
          </section>

            
          <section class="page6">
            <div class="page_container">
              <apex:pageBlockSection title="Goals & Personal Statement" columns="1">
                 <apex:outputPanel >
                     <p>
                         Please select one or more goals which you would like to work on with a mentor.<br/>                         
                     </p>
                <br/><ol>
                    <li>Academics: Helping me with my school work and/or improving my English skills.</li> 
                    <li>Atheletic / Recreational: Doing recreational/social activities (e.g. sports, games, etc.)</li>
                    <li>Communication: Improving my communication skills to establish healthy relationships.</li>
                    <li>Cultural Awareness: Gaining greater knowledge and awareness of Asian culture as well as other cultures.</li>  
                    <li>Self-confidence: Building my self-confidence and sense of self-worth.</li>
                                   </ol>
                </apex:outputPanel>
                  <apex:repeat value="{!$ObjectType.Lead.FieldSets.StudentApp_Goals}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
                               <p>
                                   Write a brief essay (of at least two paragraphs) that answers how a mentor can be there for you.  Explain how a mentor could help you accomplish the goals you chose above.  Be specific!<br/><br/>
                               </p>
                  <apex:repeat value="{!$ObjectType.Lead.FieldSets.StudentApp_PersonalEssay}" var="f"> <apex:inputField value="{!Lead[f]}" style="width:400px;height:400px" required="true"/> </apex:repeat>
                </apex:pageBlockSection>
            </div>
          </section>

          <section class="page7">
            <div class="page_container">
              <apex:pageBlockSection title="Qualifications & Commitment" columns="1">
                <apex:outputPanel >
                    
                    <b><u>Mentee (Student) Qualifications</u></b><br/><br/>
                    <ol>
                    <li>Any student grades 5-12 attending a school in NYC.</li> 
                    <li>Available on Saturdays to meet mentor and attend Apex workshops.</li> 
                    <li>Open-minded and willing to learn and grow.</li>  
                                   </ol>

                    <b><u>Mentee (Student) Commitment</u></b><br/><br/>
                    <ol>
                    <li>Commit to at least one school year (September – June); pairs are encouraged to meet in the summer.</li> 
                    <li>Meet with your mentor 2x/month:<br/>
                        *  Middle School Mentoring: On-site, two Saturdays/month at a school in Chinatown or Queens.<br/>
                        *  High School Mentoring: On-site, workshops at least one Saturday/month at a school in Chinatown. Off-site, pairs meet on their own in the community.<br/></li> 
                    <li>Regularly check in with your mentor and program coordinator.</li>  
                    <li>Attend year-end interview.</li>
                                   </ol>
                </apex:outputPanel>
               <apex:pageBlockSectionItem >
                   <apex:outputPanel ><font color="red"><b><u>I can commit to my program's requirements.</u></b></font></apex:outputPanel>
                   <apex:inputField value="{!Lead.Can_Commit_to_Requirements__c}"/>
               </apex:pageBlockSectionItem>                   
              </apex:pageBlockSection>
            </div>
          </section>

          <section class="page10">
              <div class="page_container">
                <apex:pageBlockSection title="Parental Information and Mentee Preferences" columns="1">
                  <apex:outputPanel >
                               <p>
                                    Apex is proud to have a strong and diverse pool of mentors. Our mentors come from a variety of backgrounds, life experiences, and race/ethnicities. We strive to match your child with a mentor whose personality, strengths, and interests will serve the healthy development of your child, and to match your child with a mentor in whom you have the highest confidence and comfort. In order to make the best match for your child, we need some information from you.<br/><br/>
                          </p>
                  </apex:outputPanel>
                   <apex:pageBlockSectionItem >
                        <apex:outputLabel value="Are you comfortable with Apex matching your child with a mentor of a different race/ethnicity?" />
                        <apex:inputField value="{!L.Match_Ethnicity__c}" required="true"/>
                  </apex:pageBlockSectionItem>
                  
                  <!-->
                  <apex:pageBlockSectionItem >
                        <apex:outputLabel value="Are you comfortable with Apex matching your child with a mentor who is lesbian, gay, or bisexual?" />
                        <apex:inputField value="{!L.Match_Sexuality__c}" required="true"/>
                  </apex:pageBlockSectionItem>
                    
                  <apex:pageBlockSectionItem >
                        <apex:outputLabel value="Are you comfortable with Apex matching your child with a mentor who has a different religious background?" />
                        <apex:inputField value="{!L.Match_Religion__c}" required="true"/>
                  </apex:pageBlockSectionItem>
                  <!-->
                 
                </apex:pageBlockSection>
              </div>
            </section>
            
            
           <section class="page9">
            <div class="page_container">                
              <apex:pageBlockSection title="Scheduling" columns="2">
                <apex:repeat value="{!$ObjectType.Lead.FieldSets.StudentApp_Scheduling}" var="f"> <apex:inputField value="{!Lead[f]}" required="{!OR(f.required, f.dbrequired)}"/> </apex:repeat>
              </apex:pageBlockSection>
            </div>
          </section>

          <section class="page11">
              <div class="page_container">
                <apex:pageBlockSection title="Parental Consent & Release" columns="1">
                  
                  <apex:outputPanel >
                  <u>I have read and agree to the following:</u><br/><br/>

<b>Apex for Youth includes photos of Apex students and volunteers in its website, newsletter, yearbook, and promotional materials. Photos used in Apex’s promotional materials, sometimes with names, are made available to the general public for publicity and fundraising.
                    <br/><br/>                   
I have read the above statement and understand that photos of my child, sometimes with my child’s name, may be used in Apex publications and materials. I give my consent to Apex for Youth for such photo and name usage. All the information in this application is true to the best of my knowledge.
                      </b><br/><br/>
In addition, I understand that each mentor that participates in the Apex mentoring program is an independent volunteer who is not employed by Apex and that, although Apex has conducted background checks on each mentor and gives mentoring training and some supervision to each mentor, will not be responsible for any action or inaction of any mentor (including your child’s mentor) in connection with any mentoring activity. I also understand that my child’s mentor may have mentoring meetings with my child at times and places of their choosing and that Apex does not control or supervise any such meeting. I understand and assume any risks associated with my child’s participation in the program and I voluntarily consent to my child’s participation in the Apex mentoring program. I understand that participation in Apex programs is entirely voluntary. My child or I may withdraw from Apex programs without affecting any of my rights. In consideration of and in return for services, facilities, and other assistance provided to my child by Apex and its officers, directors, staff, employees, agents, and representatives, I release Apex and its officers, directors, staff, employees, agents, and representatives from any and all liability, claims and actions that may arise from injury or harm to my child or my child’s property, including, without limitation, any injury or harm to my child or my child’s property that may be caused by the mentor’s negligence or willful misconduct. I understand that this release covers liability, claims and actions caused entirely or in part by any acts or failures to act by Apex and its officers, directors, staff, employees, agents, and representatives to the extent that such release is permitted by law. I recognize that this release means I and my child are giving up, among other things, the right to sue Apex and its officers, directors, staff, employees, agents, and representatives for injuries, damages, or losses my child may incur while participating in the Apex mentoring program. I also understand that this release binds me, my child and my child’s executors, administrators, and assigns. I have read the entire release in this paragraph, fully understand it, and agree to be legally bound by it.
                  </apex:outputPanel>

                  <apex:pageBlockSectionItem >
                   <apex:outputLabel value="Student Name" />
                   <apex:inputField value="{!L.STUDENT_Student_Full_Name__c}" required="true"/>
                  </apex:pageBlockSectionItem>
                    
                  <apex:pageBlockSectionItem >
                   <apex:outputLabel value="Parent Name" />
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

Belinda Lin, Middle School Program Coordinator <br/>
Phone: 212-385-3574<br/>
Email: Belinda.Lin@apexforyouth.org<br/><br/>

Jessica Song, High School Program Coordinator <br/>
Phone: 212-385-3574<br/>
Email: Jessica.Song@apexforyouth.org<br/>      
        </apex:pageBlock>
    </apex:form>
            </div>        
      </body>
</html>        
</apex:page>