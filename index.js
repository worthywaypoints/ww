//This function deals with
var docDict={
  NRequest:"0N# Request",
  ADRL:"ADRL",
  CACMB:"CACMB",
  CDRL:"CDRL",
  IASRD:"IASRD",
  KeyManagement:"Key Management Plan Support Agreement",
  Memorandum:"Memorandum of Agreement",
  Nomenclature:"Nomenclature Request",
  SAAPD:"Software Analysis and Assessment Process Description (SAAPD)",
  TSRD:"TSRD",
  User:"User Partnership Agreement",
  Automatic:"Automatic Test Equipment (ATE) Interface Hardware Manual",
  COMSEC:"COMSEC Equipment System Document",
  COTS:"COTS Manual and Associated Supplemental",
  Depot:"Depot Maintenance Manual",
  Embedment:"Embedment Manual",
  ECP:"Engineering Change Proposal (ECP)",
  EngineeringManual:"Engineering Manual",
  Full:"Full Maintenance Manual",
  Guidelines:"Guidelines for Use and Operation of INFOSEC Equipment/System",
  HDLDesign:"HDL Design Description (HDD)",
  HDLDevelopment:"HDL Development Plan (HDP)",
  HDLFiles:"HDL Files",
  HDLRequirements:"HDL Requirements Specification (HRS)",
  HDLSimulation:"HDL Simulation Plan and Description",
  HDLVerification:"HDL Verification Report (HVR)",
  HDLVersion:"HDL Version Description (HVD)",
  INFOSEC:"INFOSEC Anonymity Plan (IAP)",
  InProcess:"In-Process Accounting ProceduresDocumentation (IPAP)",
  Interface:"Interface Control Document (ICD)",
  KCMA:"Key and Certificate Management Architecture (KCMA)",
  KCMP:"Key and Certificate Management Plan (KCMP)",
  KeySpecification:"Key Specification (KS)",
  Limited:"Limited Maintenance Manual",
  MR:"MR",
  OSD:"OSD",
  PCAP:"Physical Configuration Audit (PCA) Plan (PCAP)",
  PCAR:"Physical Configuration Audit (PCA) Summary Report (PCAR)",
  Product:"Product Drawings and Associated Lists",
  Revised:"Revised Additional Data for Technical Publications",
  SecurityEvaluation:"Security Evaluation Document (SED)",
  SecurityProduction:"Security Production Assurance (SPA) Description",
  SecurityVerification:"Security Verification (SV) Plan and Procedures (SVPP)",
  SecurityVerificationReport:"Security Verification Report (SVR)",
  SoftwareAnd:"Software and Programmable Logic Evaluation Report (SPLER)",
  SoftwareDesign:"Software Design Description (SDD)",
  SoftwareDevelopmentPlan:"Software Development Plan (SPD)",
  SoftwareDevelopmentProcess:"Software Development Process Description Document (SDPDD)",
  SoftwareProduct:"Software Product Specification (SPS)",
  SoftwareRequirements:"Software Requirements Specification (SRS)",
  SoftwareSource:"Software Source Code",
  SoftwareTestPlan:"Software Test Plan (STP)",
  SoftwareTestReport:"Software Test Report (STR)",
  SoftwareVersion:"Software Version Description (SVD)",
  SoftwareHDLDesign:"Software/HDL Design Description (SHDD)",
  SoftwareHDLRequirement:"Software/HDL Requirement Specification (SHRS)",
  SPF:"SPF",
  TechnicalManualValidationPlan:"Technical Manual Validation Plan",
  TechnicalManualValidationReport:"Technical Manual Validation Report",
  TEMPESTControl:"TEMPEST Control Plan",
  TEMPESTTestEvaluation:"TEMPEST Test Evaluation Report (TTR)",
  TEMPESTTestPlan:"TEMPEST Test Plan (TTP)",
  UPA:"UPA",
  ValidationKey:"Validation Key",
  ValidationKeyValidation:"Validation Key Validation Report",
  Written:"Written Course of Instruction for Key Personnel"
}

console.log();
//docKey = "NRequest";
//alert(docDict[docKey]);
function initial(){
  option = document.getElementById("action").value;
  if (option == "edit"){
    //alert("Let's edit it.");
  }
  else if (option == "create"){
    //alert("Let's make a new project");
    //Points to "createProject" function, which writes the HTML for form.
    createProject();
  }
  else if (option == "delete"){
    //alert("Let's delete a project");
  }
  else{
    //alert("Nothing's selected");
  }
}

function classifyTree(category, formID){
  var SCIControlsOptionsSTS;
  /*SCIControlsOptionsSTS=('<select name="'+category+'SCIControls" form="'+formID+'"><option value="null"></option>');
  SCIControlsOptionsSTS+='<option value="HCS">HCS</option>';
  SCIControlsOptionsSTS+='<option value="KDK">KDK</option>';
  SCIControlsOptionsSTS+='<option value="SI">SI</option>';
  SCIControlsOptionsSTS+='<option value="TK">TK</option></select>';*/
  /*
  SCIControlsOptionsSTS=('<input type="checkbox" name="'+category+'SCIControls" id="'+category+'SCIControlsHCS" form="'+formID+'">');
  SCIControlsOptionsSTS+=('<label for="'+category+'SCIControlsHCS">HCS</label>');
  SCIControlsOptionsSTS+=('<input type="checkbox" name="'+category+'SCIControls" id="'+category+'SCIControlsKDK" form="'+formID+'">');
  SCIControlsOptionsSTS+=('<label for="'+category+'SCIControlsKDK">KDK</label>');
  SCIControlsOptionsSTS+=('<input type="checkbox" name="'+category+'SCIControls" id="'+category+'SCIControlsSI" form="'+formID+'">');
  SCIControlsOptionsSTS+=('<label for="'+category+'SCIControlsSI">SI</label>');
  SCIControlsOptionsSTS+=('<input type="checkbox" name="'+category+'SCIControls" id="'+category+'SCIControlsTK" form="'+formID+'">');
  SCIControlsOptionsSTS+=('<label for="'+category+'SCIControlsTK">TK</label>');
  */
  SCIControlsOptionsSTS=('<table><tr><td><input type="checkbox" name="'+category+'SCIControls" id="'+category+'SCIControlsSTSHCS" form="'+formID+'"></td>');
  SCIControlsOptionsSTS+=('<td>HCS</td></tr>');
  SCIControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'SCIControls" id="'+category+'SCIControlsSTSKDK" form="'+formID+'"></td>');
  SCIControlsOptionsSTS+=('<td>KDK</td></tr>');
  SCIControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'SCIControls" id="'+category+'SCIControlsSTSSI" form="'+formID+'"></td>');
  SCIControlsOptionsSTS+=('<td>SI</td></tr>');
  SCIControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'SCIControls" id="'+category+'SCIControlsSTSTK" form="'+formID+'"></td>');
  SCIControlsOptionsSTS+=('<td>TK</td></tr>');

  var SCIControlsOptionsC;
  /*SCIControlsOptionsC=('<select name="'+category+'SCIControls" form="'+formID+'"><option value="null"></option>');
  SCIControlsOptionsC+='<option value="HCS">HCS</option>';
  SCIControlsOptionsC+='<option value="SI">SI</option></select>';*/
  SCIControlsOptionsC=('<table><tr><td><input type="checkbox" name="'+category+'SCIControls" id="'+category+'SCIControlsCHCS" form="'+formID+'"></td>');
  SCIControlsOptionsC+=('<td>HCS</td></tr>');
  SCIControlsOptionsC+=('<td><input type="checkbox" name="'+category+'SCIControls" id="'+category+'SCIControlsCSI" form="'+formID+'"></td>');
  SCIControlsOptionsC+=('<td>SI</td></tr></table>');



  var SCIControlsOptionsU;
  SCIControlsOptionsU=('<input type="hidden" name="'+category+'SCIControls" form="'+formID+'" value="null">');
  //SCIControlsOptionsU='<select><option value="null"><option></select>';

  var DissControlsOptionsSTS;
  /*DissControlsOptionsSTS=('<select name="'+category+'DissControls" form="'+formID+'"><option value="null"></option>');
  DissControlsOptionsSTS+='<option value="RSEN">RSEN</option>';
  DissControlsOptionsSTS+='<option value="ORCON">ORCON</option>';
  DissControlsOptionsSTS+='<option value="IMCON">IMCON</option>';
  DissControlsOptionsSTS+='<option value="NOFORN">NOFORN</option>';
  DissControlsOptionsSTS+='<option value="PROPIN">PROPIN</option>';
  DissControlsOptionsSTS+='<option value="RELIDO">RELIDO</option>';
  DissControlsOptionsSTS+='<option value="DEASENSITIVE">DEA SENSITIVE</option>';
  DissControlsOptionsSTS+='<option value="FISA">FISA</option>';
  DissControlsOptionsSTS+='<option value="RELTO">REL TO</option></select>';*/
  DissControlsOptionsSTS=('<table><td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsSTSRSEN" form="'+formID+'" value="RSEN"></td>');
  DissControlsOptionsSTS+=('<td>RSEN</td></tr>');
  DissControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsSTSORCON" form="'+formID+'" value="ORCON"></td>');
  DissControlsOptionsSTS+=('<td>ORCON</td></tr>');
  DissControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsSTSIMCON" form="'+formID+'" value="IMCON"></td>');
  DissControlsOptionsSTS+=('<td>IMCON</td></tr>');
  DissControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsSTSNOFORN" form="'+formID+'" value="NOFORN"></td>');
  DissControlsOptionsSTS+=('<td>NOFORN</td></tr>');
  DissControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsSTSPROPIN" form="'+formID+'" value="PROPIN"></td>');
  DissControlsOptionsSTS+=('<td>PROPIN</td></tr>');
  DissControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsSTSRELIDO" form="'+formID+'" value="RELIDO"></td>');
  DissControlsOptionsSTS+=('<td>RELIDO</td></tr>');
  DissControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsSTSDEASENSITIVE" form="'+formID+'" value="DEASENSITIVE"></td>');
  DissControlsOptionsSTS+=('<td>DEA SENSITIVE</td></tr>');
  DissControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsSTSFISA" form="'+formID+'" value="FISA"></td>');
  DissControlsOptionsSTS+=('<td>FISA</td></tr>');
  DissControlsOptionsSTS+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsSTSRELTO" form="'+formID+'" value="RELTO"></td>');
  DissControlsOptionsSTS+=('<td>REL TO</td></tr></table>');

  var DissControlsOptionsC;
  /*DissControlsOptionsC=('<select name="'+category+'DissControls" form="'+formID+'"><option value="null"></option>');
  DissControlsOptionsC+='<option value="ORCON">ORCON</option>';
  DissControlsOptionsC+='<option value="NOFORN">NOFORN</option>';
  DissControlsOptionsC+='<option value="PROPIN">PROPIN</option>';
  DissControlsOptionsC+='<option value="RELIDO">RELIDO</option>';
  DissControlsOptionsC+='<option value="DEASENSITIVE">DEA SENSITIVE</option>';
  DissControlsOptionsC+='<option value="FISA">FISA</option>';
  DissControlsOptionsC+='<option value="RELTO">REL TO</option></select>';*/
  DissControlsOptionsC=('<table><td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsCORCON" form="'+formID+'" value="ORCON"></td>');
  DissControlsOptionsC+=('<td>ORCON</td></tr>');
  DissControlsOptionsC+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsCNOFORN" form="'+formID+'" value="NOFORN"></td>');
  DissControlsOptionsC+=('<td>NOFORN</td></tr>');
  DissControlsOptionsC+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsCPROPIN" form="'+formID+'" value="PROPIN"></td>');
  DissControlsOptionsC+=('<td>PROPIN</td></tr>');
  DissControlsOptionsC+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsCRELIDO" form="'+formID+'" value="RELIDO"></td>');
  DissControlsOptionsC+=('<td>RELIDO</td></tr>');
  DissControlsOptionsC+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsCDEASENSITIVE" form="'+formID+'" value="DEASENSITIVE"></td>');
  DissControlsOptionsC+=('<td>DEA SENSITIVE</td></tr>');
  DissControlsOptionsC+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsCFISA" form="'+formID+'" value="FISA"></td>');
  DissControlsOptionsC+=('<td>FISA</td></tr>');
  DissControlsOptionsC+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsCRELTO" form="'+formID+'" value="RELTO"></td>');
  DissControlsOptionsC+=('<td>REL TO</td></tr></table>');

  var DissControlsOptionsU;
  /*DissControlsOptionsU=('<select name="'+category+'DissControls" form="'+formID+'"><option value="null"></option>');
  DissControlsOptionsU+='<option value="FOUO">FOR OFFICIAL USE ONLY</option>';
  DissControlsOptionsU+='<option value="PROPIN">PROPIN</option>';
  DissControlsOptionsU+='<option value="RELIDO">RELIDO</option>';
  DissControlsOptionsU+='<option value="DEASENSITIVE">DEA SENSITIVE</option>';
  DissControlsOptionsU+='<option value="FISA">FISA</option></select>';*/
  DissControlsOptionsU=('<table><td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsUFOUO" form="'+formID+'" value="FOUO"></td>');
  DissControlsOptionsU+=('<td>FOR OFFICIAL USE ONLY</td></tr>');
  DissControlsOptionsU+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsUPROPIN" form="'+formID+'" value="PROPIN"></td>');
  DissControlsOptionsU+=('<td>PROPIN</td></tr>');
  DissControlsOptionsU+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsURELIDO" form="'+formID+'" value="RELIDO"></td>');
  DissControlsOptionsU+=('<td>RELIDO</td></tr>');
  DissControlsOptionsU+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsUDEASENSITIVE" form="'+formID+'" value="DEASENSITIVE"></td>');
  DissControlsOptionsU+=('<td>DEA SENSITIVE</td></tr>');
  DissControlsOptionsU+=('<td><input type="checkbox" name="'+category+'DissControls" id="'+category+'DissControlsUFISA" form="'+formID+'" value="FISA"></td>');
  DissControlsOptionsU+=('<td>FISA</td></tr></table>');

  var classificationID = (category+"USClass");
  classification = document.getElementById(classificationID).value;
  var SCIControlsID=(category+"SCIControls");
  var DissControlsID=(category+"DissControls");
  if (classification=="TOPSECRET"){
    document.getElementById(SCIControlsID).innerHTML=SCIControlsOptionsSTS;
    document.getElementById(DissControlsID).innerHTML=DissControlsOptionsSTS;
  }
  else if (classification=="SECRET"){
    document.getElementById(SCIControlsID).innerHTML=SCIControlsOptionsSTS;
    document.getElementById(DissControlsID).innerHTML=DissControlsOptionsSTS;
  }
  else if (classification=="CONFIDENTIAL"){
    document.getElementById(SCIControlsID).innerHTML=SCIControlsOptionsC;
    document.getElementById(DissControlsID).innerHTML=DissControlsOptionsC;
  }
  else if (classification=="UNCLASSIFIED"){
    document.getElementById(SCIControlsID).innerHTML=SCIControlsOptionsU;
    document.getElementById(DissControlsID).innerHTML=DissControlsOptionsU;
  }
  else{
    document.getElementById(SCIControlsID).innerHTML='';
    document.getElementById(DissControlsID).innerHTML='';
  }
}

//Global counting variable for the newDocumentRow() function
var docStatusRowCtr=1;
function newDocumentRow(){
  //  createTables+='<td><b>Date Received</b></td><td><b>Date Approved</b></td><td><b>Milestone Link</b></td><td><b>Status</b></td><td><b>Comments</b></td></tr>'
  //  createTables+='<tr><td><b>Document/ADRL/CDRL/Requirement Name</b></td><td><b>ADRL/CDRL #</b></td><td><b>Document#/0N/Revision#</b></td><td><b>Vendor</b></td>';
  //alert("hey");
  docKey = String(document.getElementById('newDocName').value);
  docKeyValue = String(docDict[docKey]);
  var rowIDNum=('rowID'+String(docStatusRowCtr));
  newRow=('<tr id="'+rowIDNum+'"><td>'+docKeyValue+'</td><td><input type="text" name="'+docKey+'ACDRLNum"></td><td><input type="text" name="'+docKey+'DocNum"></td><td><input type="text" name="'+docKey+'Vendor"></td>');
  newRow+=('<td><input type="date" name="'+docKey+'DateReceived"></td><td><input type="date" name="'+docKey+'DateApproved"></td><td><input type="text" name="'+docKey+'MilestoneLink"></td>');
  newRow+=('<td><select form="NewProject" name="'+docKey+'Status">');
    newRow+=('<option value="null"></option>');
    newRow+=('<option value="Complete">Complete</option>');
    newRow+=('<option value="Conditionally">Conditionally Acceptable with Comment</option>');
    newRow+=('<option value="InProgress">In Progress</option>');
    newRow+=('<option value="InReview">In Review</option>');
    newRow+=('<option value="NotReceived">Not Received</option>');
    newRow+=('<option value="NotStarted">Not Started</option>');
    newRow+=('<option value="Placeholder">Placeholder for ECPs following PCA</option>');
    newRow+=('<option value="Received">Received but Held from Review</option>');
    newRow+=('<option value="TechnicallyAcceptable">Technically Acceptable</option>');
    newRow+=('<option value="TechnicallyAcceptableWithComment">Technically Acceptable with Comment</option>');
    newRow+=('<option value="TechnicallyUnacceptable">Technically Unacceptable</option>');
    newRow+=('<option value="Waived">Waived</option></select></td>');
  newRow+=('<td><textarea name="'+docKey+'Comments" form="NewProject"></textarea></td>');
  newRow+=('<td><button onclick="deleteRow(\''+rowIDNum+'\')">Delete</button></td></tr>');
  docStatusRowCtr+=1;
  //nextRowIDNum =('rowID'+String(docStatusRowCtr));
  //newRow+=('</div><div id="'+nextRowIDNum+'">');
  currentTable=String(document.getElementById("docStatusTable").innerHTML);
  //alert(currentTable);
  //alert(newRow);
  newTable=currentTable+newRow;
  //alert(newTable);
  document.getElementById("docStatusTable").innerHTML=newTable;
}

function deleteRow(rowID){
  alert(rowID);
  alert(document.getElementById(rowID).innerHTML);
  document.getElementById(rowID).innerHTML='';
}

function createProject(){
  //The "createTables" variable is an inner HTML string that shows the
  //"Create a Project" tables and respective forms.
  var createTables;
  createTables='<p style="width:300px;min-width:300px"><span class="subtitle">Create a New Project</span></p><br>';
  //createTables+='<p style="max-width:850px"><span class="tableTitle">General Project Information</span><table><form id="GeneralProjectInfo">';
  //createTables+='<table><form id="NewProject" /*method="post" action="submit.py"*/><tr><td class="title" colspan="2">General Project Information</td></tr>';
  createTables+='<table><form id="NewProject"/><tr><td class="title" colspan="2">General Project Information</td></tr>';

    createTables+='<tr><td class="right">Project Name:</td>';
    createTables+='<td><input type="text" name="ProjectName"></td></tr>';

    createTables+='<tr><td class="right">Last Updated:</td>';
    createTables+='<td><input type="date" name="LastUpdated"</td></tr>';

    createTables+='<tr><td class="right">Description:</td>';
    createTables+='<td><textarea rows="4" cols="40" name="Description" form="NewProject"></textarea></td></tr>';

    createTables+='<tr><td class="right">Information Assurance<br>Security Manager:</td>';
    createTables+='<td><input type="text" name="IASM"></td></tr>';

    createTables+='<tr><td class="right">SETA Contractor Support:</td>';
    createTables+='<td><input type="text" name="SETA"></td></tr>';

    createTables+='<tr><td class="right">Evaluator:</td>';
    createTables+='<td><input type="text" name="Evaluator"></td></tr>';

    createTables+='<tr><td class="right">CSRP #:</td>';
    createTables+='<td><input type="text" name="CSRP"</td></tr>';

    createTables+='<tr><td class="right">Project Type:</td>';
    createTables+='<td><input type="text" name="ProjectType"></td></tr>';

    createTables+='<tr><td class="right">Form Factor:</td>';
    createTables+='<td><input type="text" name="FormFactor"></td></tr>';

    /*CLASSIFICATION MARKINGS: Use a table within the data cell with Select
    boxes.  Add javascript to make the appropriate SCI controls/
    Dissemination Controls to appear with the appropriate classification
    level.  If REL TO, have an input box for that, too.*/
    createTables+='<tr><td class="right">Classification of Data:</td>';
    createTables+='<td><table><tr><td>US Classifications</td><td>SCI Controls</td><td>Dissemination Controls</td></tr>';
    createTables+='<tr><td><select form="NewProject" name="DataUSClass" id="DataUSClass" onchange=classifyTree("Data","GeneralProjectInfo")>';
      var USClassOptions;
      USClassOptions='<option value="null"></option>';
      USClassOptions+='<option value="TOPSECRET">TOP SECRET</option>';
      USClassOptions+='<option value="SECRET">SECRET</option>';
      USClassOptions+='<option value="CONFIDENTIAL">CONFIDENTIAL</option>';
      USClassOptions+='<option value="UNCLASSIFIED">UNCLASSIFIED</option></select></td>';
    createTables+=USClassOptions
    createTables+='<td id="DataSCIControls"></td><td id="DataDissControls"></td></tr></table>'

    createTables+='<tr><td class="right">Classification of Hardware:</td>';
    createTables+='<td><table><tr><td>US Classifications</td><td>SCI Controls</td><td>Dissemination Controls</td></tr>';
    createTables+='<tr><td><select form="NewProject" name="HardUSClass" id="HardUSClass" onchange=classifyTree("Hard","GeneralProjectInfo")>';
    createTables+=USClassOptions;
    createTables+='<td id="HardSCIControls"></td><td id="HardDissControls"></td></tr></table>'

    createTables+='<tr><td class="right">Classification of Software/HDL:</td>';
    createTables+='<td><table><tr><td>US Classifications</td><td>SCI Controls</td><td>Dissemination Controls</td></tr>';
    createTables+='<tr><td><select form="NewProject" name="SoftUSClass" id="SoftUSClass" onchange=classifyTree("Soft","GeneralProjectInfo")>';
    createTables+=USClassOptions;
    createTables+='<td id="SoftSCIControls"></td><td id="SoftDissControls"></td></tr></table>'



    createTables+='<tr><td class="right">Nomenclature:</td>';
    createTables+='<td><input type="text" name="Nomenclature"</td></tr>';

    createTables+='<tr><td class="right">Algorithms:</td>';
    createTables+='<td><textarea rows="4" name="Algorithms" form="NewProject"></textarea></td></tr>';

    createTables+='<tr><td class="right">Key Management:</td>';
    createTables+='<td><input type="text" name="KeyManagement"></td></tr>';

    createTables+='<tr><td class="right">Certification Need Date:</td>';
    createTables+='<td><input type="date" name="CertificationNeed"</td></tr>';

    createTables+='<tr><td class="right">Project Office:</td>';
    createTables+='<td><input type="text" name="ProjectOffice"></td></tr>';

    createTables+='<tr><td class="right">Project Manager:</td>';
    createTables+='<td><input type="text" name="ProjectManager"></td></tr>';

    createTables+='<tr><td class="right">Vendor:</td>';
    createTables+='<td><input type="text" name="Vendor"></td></tr>';

    createTables+='<tr><td class="right">Issues/Comments:</td>';
    createTables+='<td><textarea rows="4" name="IssuesComments" form="NewProject"></textarea></td></tr>';

    createTables+='</form></table><br>';
  /*%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$*/
  /*%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$*/
  /*%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$*/
  //New table for the Project Milestone Status/Meetings
  //createTables+='<p style="max-width:650px"><span class="tableTitle">Project Milestone Status/Meetings</span><table><form id="NewProject">';
  //createTables+='<table><form id="NewProject" /*method="post" action="submit.py"*/><tr><td class="title" colspan="3">Project Milestone Status</td></tr>';
  createTables+='<table><form id="NewProject"><tr><td class="title" colspan="3">Project Milestone Status</td></tr>';

    createTables+='<tr><td><b>NSA Certification Related Milestone</b></td><td><b>Status</b></td><td><b>Date</b></td></tr>';

      var mileStatusOptions;
      mileStatusOptions='<option value="null"></option>';
      mileStatusOptions+='<option value="AwaitingResults">Awaiting Results</option>';
      mileStatusOptions+='<option value="Completed">Completed</option>';
      mileStatusOptions+='<option value="InStaffing">In Staffing</option>';
      mileStatusOptions+='<option value="NotApplicable">Not Applicable</option>';
      mileStatusOptions+='<option value="Pending">Pending</option></select></td>';

    createTables+=('<tr><td>Triage</td><td><select form="NewProject" name="MilestoneStatus01">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate01"></td></tr>');
    createTables+=('<tr><td>Validation</td><td><select form="NewProject" name="MilestoneStatus02">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate02"></td></tr>');
    createTables+=('<tr><td>Acceptance</td><td><select form="NewProject" name="MilestoneStatus03">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate03"></td></tr>');
    createTables+=('<tr><td>IASRD Compliance TIM</td><td><select form="NewProject" name="MilestoneStatus05">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate05"></td></tr>');
    createTables+=('<tr><td>Kickoff</td><td><select form="NewProject" name="MilestoneStatus04">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate04"></td></tr>');
    createTables+=('<tr><td>SRR</td><td><select form="NewProject" name="MilestoneStatus06">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate06"></td></tr>');
    createTables+=('<tr><td>RAP1</td><td><select form="NewProject" name="MilestoneStatus07">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate07"></td></tr>');
    createTables+=('<tr><td>PDR</td><td><select form="NewProject" name="MilestoneStatus08">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate08"></td></tr>');
    createTables+=('<tr><td>RAP2 (TSAB projects)</td><td><select form="NewProject" name="MilestoneStatus09">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate09"></td></tr>');
    createTables+=('<tr><td>CDR</td><td><select form="NewProject" name="MilestoneStatus10">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate10"></td></tr>');
    createTables+=('<tr><td>TRR</td><td><select form="NewProject" name="MilestoneStatus11">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate11"></td></tr>');
    createTables+=('<tr><td>SW Test</td><td><select form="NewProject" name="MilestoneStatus12">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate12"></td></tr>');
    createTables+=('<tr><td>HDL Test</td><td><select form="NewProject" name="MilestoneStatus13">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate13"></td></tr>');
    createTables+=('<tr><td>SVT</td><td><select form="NewProject" name="MilestoneStatus14">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate14"></td></tr>');
    createTables+=('<tr><td>TEMPEST Test</td><td><select form="NewProject" name="MilestoneStatus15">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate15"></td></tr>');
    createTables+=('<tr><td>PCA</td><td><select form="NewProject" name="MilestoneStatus16">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate16"></td></tr>');
    createTables+=('<tr><td>RAP3</td><td><select form="NewProject" name="MilestoneStatus17">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate17"></td></tr>');
    createTables+=('<tr><td>MR submission</td><td><select form="NewProject" name="MilestoneStatus18">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate18"></td></tr>');
    createTables+=('<tr><td>Certification</td><td><select form="NewProject" name="MilestoneStatus19">'+mileStatusOptions+'<td><input type="date" name="MilestoneDate19"></td></tr>');

  createTables+='</form></table><br>';

  /*%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$*/
  /*%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$*/
  /*%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$*/
  //New table for Document/ADRL/CDRL Statuses. This will require some
  //JavaScript finesse.

  //createTables+='<p><span style="font-size:16pt;font-weight:bold">Document/ADRL/CDRL/Requirement Status</span>';
  /*createTables+='<p><span style="font-size:16pt;font-weight:bold">Document/ADRL/CDRL/Requirement Status</span>';
  createTables+='<br><select id="newDocName">';
    createTables+='<option value="NRequest">0N# Request</option>';
    createTables+='<option value="ADRL">ADRL</option>';
    createTables+='<option value="CACMB">CACMB</option>';
    createTables+='<option value="CDRL">CDRL</option>';
    createTables+='<option value="IASRD">IASRD</option>';
    createTables+='<option value="KeyManagement">Key Management Plan Support Agreement</option>';
    createTables+='<option value="Memorandum">Memorandum of Agreement</option>';
    createTables+='<option value="Nomenclature">Nomenclature Request</option>';
    createTables+='<option value="SAAPD">Software Analysis and Assessment Process Description (SAAPD)</option>';
    createTables+='<option value="TSRD">TSRD</option>';
    createTables+='<option value="User">User Partnership Agreement</option>';
    createTables+='<option value="Automatic">Automatic Test Equipment (ATE) Interface Hardware Manual</option>';
    createTables+='<option value="COMSEC">COMSEC Equipment System Document</option>';
    createTables+='<option value="COTS">COTS Manual and Associated Supplemental</option>';
    createTables+='<option value="Depot">Depot Maintenance Manual</option>';
    createTables+='<option value="Embedment">Embedment Manual</option>';
    createTables+='<option value="ECP">Engineering Change Proposal (ECP)</option>';
    createTables+='<option value="EngineeringManual">Engineering Manual</option>';
    createTables+='<option value="Full">Full Maintenance Manual</option>';
    createTables+='<option value="Guidelines">Guidelines for Use and Operation of INFOSEC Equipment/System</option>';
    createTables+='<option value="HDLDesign">HDL Design Description (HDD)</option>';
    createTables+='<option value="HDLDevelopment">HDL Development Plan (HDP)</option>';
    createTables+='<option value="HDLFiles">HDL Files</option>';
    createTables+='<option value="HDLRequirements">HDL Requirements Specification (HRS)</option>';
    createTables+='<option value="HDLSimulation">HDL Simulation Plan and Description</option>';
    createTables+='<option value="HDLVerification">HDL Verification Report (HVR)</option>';
    createTables+='<option value="HDLVersion">HDL Version Description (HVD)</option>';
    createTables+='<option value="INFOSEC">INFOSEC Anonymity Plan (IAP)</option>';
    createTables+='<option value="InProcess">In-Process Accounting ProceduresDocumentation (IPAP)</option>';
    createTables+='<option value="Interface">Interface Control Document (ICD)</option>';
    createTables+='<option value="KCMA">Key and Certificate Management Architecture (KCMA)</option>';
    createTables+='<option value="KCMP">Key and Certificate Management Plan (KCMP)</option>';
    createTables+='<option value="KeySpecification">Key Specification (KS)</option>';
    createTables+='<option value="Limited">Limited Maintenance Manual</option>';
    createTables+='<option value="MR">MR</option>';
    createTables+='<option value="OSD">OSD</option>';
    createTables+='<option value="PCAP">Physical Configuration Audit (PCA) Plan (PCAP)</option>';
    createTables+='<option value="PCAR">Physical Configuration Audit (PCA) Summary Report (PCAR)</option>';
    createTables+='<option value="Product">Product Drawings and Associated Lists</option>';
    createTables+='<option value="Revised">Revised Additional Data for Technical Publications</option>';
    createTables+='<option value="SecurityEvaluation">Security Evaluation Document (SED)</option>';
    createTables+='<option value="SecurityProduction">Security Production Assurance (SPA) Description</option>';
    createTables+='<option value="SecurityVerification">Security Verification (SV) Plan and Procedures (SVPP)</option>';
    createTables+='<option value="SecurityVerificationReport">Security Verification Report (SVR)</option>';
    createTables+='<option value="SoftwareAnd">Software and Programmable Logic Evaluation Report (SPLER)</option>';
    createTables+='<option value="SoftwareDesign">Software Design Description (SDD)</option>';
    createTables+='<option value="SoftwareDevelopmentPlan">Software Development Plan (SPD)</option>';
    createTables+='<option value="SoftwareDevelopmentProcess">Software Development Process Description Document (SDPDD)</option>';
    createTables+='<option value="SoftwareProduct">Software Product Specification (SPS)</option>';
    createTables+='<option value="SoftwareRequirements">Software Requirements Specification (SRS)</option>';
    createTables+='<option value="SoftwareSource">Software Source Code</option>';
    createTables+='<option value="SoftwareTestPlan">Software Test Plan (STP)</option>';
    createTables+='<option value="SoftwareTestReport">Software Test Report (STR)</option>';
    createTables+='<option value="SoftwareVersion">Software Version Description (SVD)</option>';
    createTables+='<option value="SoftwareHDLDesign">Software/HDL Design Description (SHDD)</option>';
    createTables+='<option value="SoftwareHDLRequirement">Software/HDL Requirement Specification (SHRS)</option>';
    createTables+='<option value="SPF">SPF</option>';
    createTables+='<option value="TechnicalManualValidationPlan">Technical Manual Validation Plan</option>';
    createTables+='<option value="TechnicalManualValidationReport">Technical Manual Validation Report</option>';
    createTables+='<option value="TEMPESTControl">TEMPEST Control Plan</option>';
    createTables+='<option value="TEMPESTTestEvaluation">TEMPEST Test Evaluation Report (TTR)</option>';
    createTables+='<option value="TEMPESTTestPlan">TEMPEST Test Plan (TTP)</option>';
    createTables+='<option value="UPA">UPA</option>';
    createTables+='<option value="ValidationKey">Validation Key</option>';
    createTables+='<option value="ValidationKeyValidation">Validation Key Validation Report</option>';
    createTables+='<option value="Written">Written Course of Instruction for Key Personnel</option>';
  createTables+='</select>';


  createTables+='<button onclick="newDocumentRow()">Add Document/ADRL/CDRL/Requirement</button><table><form id="DocStatus"><tbody id="docStatusTable">';*/
  //createTables+='<table><tbody id="docStatusTable"><form id="NewProject" /*method="post" action="submit.py"*/><tr><td class="title" colspan="10">'
  createTables+='<table><tbody id="docStatusTable"><form id="NewProject"><tr><td class="title" colspan="10">'
  createTables+='Document/ADRL/CDRL/Requirement Status';
  createTables+='<br><select id="newDocName">';
    createTables+='<option value="NRequest">0N# Request</option>';
    createTables+='<option value="ADRL">ADRL</option>';
    createTables+='<option value="CACMB">CACMB</option>';
    createTables+='<option value="CDRL">CDRL</option>';
    createTables+='<option value="IASRD">IASRD</option>';
    createTables+='<option value="KeyManagement">Key Management Plan Support Agreement</option>';
    createTables+='<option value="Memorandum">Memorandum of Agreement</option>';
    createTables+='<option value="Nomenclature">Nomenclature Request</option>';
    createTables+='<option value="SAAPD">Software Analysis and Assessment Process Description (SAAPD)</option>';
    createTables+='<option value="TSRD">TSRD</option>';
    createTables+='<option value="User">User Partnership Agreement</option>';
    createTables+='<option value="Automatic">Automatic Test Equipment (ATE) Interface Hardware Manual</option>';
    createTables+='<option value="COMSEC">COMSEC Equipment System Document</option>';
    createTables+='<option value="COTS">COTS Manual and Associated Supplemental</option>';
    createTables+='<option value="Depot">Depot Maintenance Manual</option>';
    createTables+='<option value="Embedment">Embedment Manual</option>';
    createTables+='<option value="ECP">Engineering Change Proposal (ECP)</option>';
    createTables+='<option value="EngineeringManual">Engineering Manual</option>';
    createTables+='<option value="Full">Full Maintenance Manual</option>';
    createTables+='<option value="Guidelines">Guidelines for Use and Operation of INFOSEC Equipment/System</option>';
    createTables+='<option value="HDLDesign">HDL Design Description (HDD)</option>';
    createTables+='<option value="HDLDevelopment">HDL Development Plan (HDP)</option>';
    createTables+='<option value="HDLFiles">HDL Files</option>';
    createTables+='<option value="HDLRequirements">HDL Requirements Specification (HRS)</option>';
    createTables+='<option value="HDLSimulation">HDL Simulation Plan and Description</option>';
    createTables+='<option value="HDLVerification">HDL Verification Report (HVR)</option>';
    createTables+='<option value="HDLVersion">HDL Version Description (HVD)</option>';
    createTables+='<option value="INFOSEC">INFOSEC Anonymity Plan (IAP)</option>';
    createTables+='<option value="InProcess">In-Process Accounting ProceduresDocumentation (IPAP)</option>';
    createTables+='<option value="Interface">Interface Control Document (ICD)</option>';
    createTables+='<option value="KCMA">Key and Certificate Management Architecture (KCMA)</option>';
    createTables+='<option value="KCMP">Key and Certificate Management Plan (KCMP)</option>';
    createTables+='<option value="KeySpecification">Key Specification (KS)</option>';
    createTables+='<option value="Limited">Limited Maintenance Manual</option>';
    createTables+='<option value="MR">MR</option>';
    createTables+='<option value="OSD">OSD</option>';
    createTables+='<option value="PCAP">Physical Configuration Audit (PCA) Plan (PCAP)</option>';
    createTables+='<option value="PCAR">Physical Configuration Audit (PCA) Summary Report (PCAR)</option>';
    createTables+='<option value="Product">Product Drawings and Associated Lists</option>';
    createTables+='<option value="Revised">Revised Additional Data for Technical Publications</option>';
    createTables+='<option value="SecurityEvaluation">Security Evaluation Document (SED)</option>';
    createTables+='<option value="SecurityProduction">Security Production Assurance (SPA) Description</option>';
    createTables+='<option value="SecurityVerification">Security Verification (SV) Plan and Procedures (SVPP)</option>';
    createTables+='<option value="SecurityVerificationReport">Security Verification Report (SVR)</option>';
    createTables+='<option value="SoftwareAnd">Software and Programmable Logic Evaluation Report (SPLER)</option>';
    createTables+='<option value="SoftwareDesign">Software Design Description (SDD)</option>';
    createTables+='<option value="SoftwareDevelopmentPlan">Software Development Plan (SPD)</option>';
    createTables+='<option value="SoftwareDevelopmentProcess">Software Development Process Description Document (SDPDD)</option>';
    createTables+='<option value="SoftwareProduct">Software Product Specification (SPS)</option>';
    createTables+='<option value="SoftwareRequirements">Software Requirements Specification (SRS)</option>';
    createTables+='<option value="SoftwareSource">Software Source Code</option>';
    createTables+='<option value="SoftwareTestPlan">Software Test Plan (STP)</option>';
    createTables+='<option value="SoftwareTestReport">Software Test Report (STR)</option>';
    createTables+='<option value="SoftwareVersion">Software Version Description (SVD)</option>';
    createTables+='<option value="SoftwareHDLDesign">Software/HDL Design Description (SHDD)</option>';
    createTables+='<option value="SoftwareHDLRequirement">Software/HDL Requirement Specification (SHRS)</option>';
    createTables+='<option value="SPF">SPF</option>';
    createTables+='<option value="TechnicalManualValidationPlan">Technical Manual Validation Plan</option>';
    createTables+='<option value="TechnicalManualValidationReport">Technical Manual Validation Report</option>';
    createTables+='<option value="TEMPESTControl">TEMPEST Control Plan</option>';
    createTables+='<option value="TEMPESTTestEvaluation">TEMPEST Test Evaluation Report (TTR)</option>';
    createTables+='<option value="TEMPESTTestPlan">TEMPEST Test Plan (TTP)</option>';
    createTables+='<option value="UPA">UPA</option>';
    createTables+='<option value="ValidationKey">Validation Key</option>';
    createTables+='<option value="ValidationKeyValidation">Validation Key Validation Report</option>';
    createTables+='<option value="Written">Written Course of Instruction for Key Personnel</option>';
  createTables+='</select><button onclick="newDocumentRow()">Add Document/ADRL/CDRL/Requirement</button>';
  createTables+='</td></tr>';



  createTables+='<tr><td style="max-width:175px"><b>Document/ ADRL/ CDRL/ Requirement Name</b></td><td style="max-width:50px"><b>ADRL/<br>CDRL #</b></td><td style="max-width:80px"><b>Document#/<br>0N/<br>Revision#</b></td><td><b>Vendor</b></td>';
  createTables+='<td><b>Date Received</b></td><td><b>Date Approved</b></td><td><b>Milestone Link</b></td><td><b>Status</b></td><td style="min-width:400px"><b>Comments</b></td><td></td></tr>';


  createTables+='</form></tbody></table><br>';
  createTables+='<p style="max-width:150px; min-width:150px"><button type="submit" form="NewProject" value="Submit">Submit Project</button></p>'
  document.getElementById("newTable").innerHTML = createTables
}
