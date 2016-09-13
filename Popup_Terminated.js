<apex:page StandardController="Contact">

<script>

window.document.onload = new function(e)
{
  if({!Contact.Status__c == 'Terminated'})
  {
    alert("Please be aware:  This contact was TERMINATED.");
  }
}
</script>

</apex:page>