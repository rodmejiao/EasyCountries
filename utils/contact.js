
function GenerarPDF() {

    let nameCliente = document.getElementById('cliente').value
    let nameClienteIn = document.getElementById('ClienteIn')
    nameClienteIn.textContent=nameCliente

    let element = document.getElementById('pdf');
html2pdf(element).save(`Documento_${nameCliente}`);
}




/* 
let selectRecipientsButton=document.getElementById(`call`)
selectRecipientsButton.addEventListener('click', async () => {
    const contacts = await navigator.contacts.select(['name', 'tel'], {multiple: true});
    let wsp=document.getElementById(`wsp`)
    let mesage=document.getElementById(`mesage`).value
    let contenido=mesage.textContent

    if (!contacts.length) {
      // No contacts were selected in the picker.
      return;
    }
    let value=contacts[0].tel
    let valueok = String(value).substring(0,9)
    let valueFinal=`+51${valueok}`

    alert(valueFinal)

    wsp.href=`https://api.whatsapp.com/send?phone=${valueFinal}&text=${mesage}`


    // Use the names and e-mail addresses in |contacts| to populate the
    // recipients field in the website’s UI.
   populateRecipients(contacts);



  });
   */