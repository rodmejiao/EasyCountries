
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

    wsp.href=`https://api.whatsapp.com/send?phone=${Number(valueok)}&text=${mesage}`


    // Use the names and e-mail addresses in |contacts| to populate the
    // recipients field in the website’s UI.
/*     populateRecipients(contacts);
 */

    alert(valueok)
  });
  