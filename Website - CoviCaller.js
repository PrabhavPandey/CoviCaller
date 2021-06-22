import wixData from "wix-data";

$w.onReady(function () {
});
 
 export function VerifyButton_click(event) {
  $w("#FlagLoad").show();
  $w("#EmpTxt").show();

  $w("#ResultTable").expand();  //Shows table

	wixData.query("medicalQuestionnaire") 
  .eq("dateOfBirth", parseInt($w("#VerifyInput").value, 10))  //Ananda Legend Part
  .find()  // Run the query
  .then(res => {
    if (res.items.length == 0) {  //Lil JS I learnt off
      $w("#EmpTxt").show();
      $w("#ResultTable").collapse();  
    }
    else {
      $w('#TableAnchor').scrollTo()  //Scrolls down to the table
      console.log(res)
      $w("#EmpTxt").hide();
      $w("#ResultTable").rows = res.items;
    }});
 }

//All design elements code down below...
 export function FBSubmit_click(event) {
  $w("#PreLoad").show();
  $w("#image22").hide();
  $w("#image21").hide();
 }
 export function SubmitButton_click(event) {
  $w("#loadGIF").show();
  $w("#ErrorText1").hide();
  $w("#FlagErr").hide();

  }
export function dataset1_afterSave() {
  $w("#loadGIF").hide();
  $w("#FlagErr").hide();
}
export function FBDataset_afterSave() {
  $w("#PreLoad").hide();
}

export function ResultTable_dataChange(event) { 
  $w("#FlagLoad").hide();
}

export function SuccessMessage1_viewportEnter(event) {
  $w("#Namaste").show();
}

export function EmpTxt_viewportEnter(event) {
  $w("#FlagLoad").hide();

}

export function ErrorText1_viewportEnter(event) {
  $w("#FlagErr").show();
  $w("#loadGIF").hide();

}
//Done!

export function text70_viewportEnter(event) {
  $w("#image21").show();
  $w("#PreLoad").hide();

}

export function text71_viewportEnter(event) {
  $w("#image22").show();
  $w("#PreLoad").hide();

}

export function SelectDrop(event) {
  $w("#ServiceDrop").disable()
  console.log( $w("#SelectDrop").value)
  const val=$w("#SelectDrop").value
  if (val == 'Services'){
    $w("#ServiceDrop").enable()
    $w("#ServiceDrop").expand()
  }
  else if (val=='Number'){
    console.log(val)
    $w("#ServiceDrop").collapse()
    $w("#anchor9").scrollTo()
    $w("#VerifyGroup").expand()

  }
}

export function ServiceDrop_click(event) {
  $w("#ServiceDrop").onClick( (event) => {
   $w("#SelectDrop").selectedIndex=1
  console.log( $w("#ServiceDrop").value)
  const val=$w("#ServiceDrop").value

} );
}
export function ShowTable_click(event) {
  $w('#TableAnchor').scrollTo()
  wixData.query("medicalQuestionnaire") 
  .contains("copyOfYourName", $w('#ServiceDrop').value)  
  .find()  // Run the query
  .then(res => {
    if (res.items.length == 0) {  
      $w("#EmpTxt").show();
      $w("#ResultTable").collapse();  
    }
    else {
       
      console.log(res)
      $w("#EmpTxt").hide();
      $w("#ResultTable").rows = res.items;
      $w("#ResultTable").expand()
    }});
    $w("#ServiceDrop").collapse()
 }
