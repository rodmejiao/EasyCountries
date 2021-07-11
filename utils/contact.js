
let selectRecipientsButton=document.getElementById(`call`)
let wsp=document.getElementById(`wsp`)


selectRecipientsButton.addEventListener('click', async () => {
    const contacts = await navigator.contacts.select(['name', 'tel'], {multiple: true});
  
    let mesage=document.getElementById(`mesage`)
    let contenido=mesage.textContent

    if (!contacts.length) {
      // No contacts were selected in the picker.
      return;
    }
    
    wsp.href=`https://api.whatsapp.com/send?phone=${contacts[0].tel}&text=${contenido}`


    // Use the names and e-mail addresses in |contacts| to populate the
    // recipients field in the website’s UI.
/*     populateRecipients(contacts);
 */
    alert(contacts[0].tel)
  });
  