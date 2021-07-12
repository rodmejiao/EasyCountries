
function AgregarItem() {/* 
  let  = document.getElementById('').value
  let  = document.getElementById('').value
  let  = document.getElementById('').value
  let  = document.getElementById('').value
 */

  let table = document.getElementById('table')
 
  let item = document.getElementById('itemInput').value
  let descripcion = document.getElementById('descripcionInput').value
  let cantidad = document.getElementById('cantidadInput').value
  let precio = document.getElementById('precioInput').value

  let newRow= document.createElement(`tr`)
  let field1=document.createElement(`td`)
  let field2=document.createElement(`td`)
  let field3=document.createElement(`td`)
  let field4=document.createElement(`td`)
  let field5=document.createElement(`td`)  

  field1.textContent=item
  field2.textContent=descripcion
  field3.textContent=precio
  field4.textContent=cantidad
  field5.textContent=precio*cantidad

  newRow.appendChild(field1)
  newRow.appendChild(field2)
  newRow.appendChild(field3)
  newRow.appendChild(field4)
  newRow.appendChild(field5)
  table.appendChild(newRow)

  document.getElementById('itemInput').value=''
  document.getElementById('descripcionInput').value=''
  document.getElementById('cantidadInput').value=''
  document.getElementById('precioInput').value=''


  let cliente = document.getElementById('ClienteInput').value
  let fecha = document.getElementById('FechaInput').value
  let lugarServicio = document.getElementById('LugarServicioInput').value


  document.getElementById('ClienteIn').textContent=cliente
  document.getElementById('FechaIn').textContent=fecha
  document.getElementById('LugarIn').textContent=lugarServicio

   alert(`Agregado!`)
}



function GenerarPDF() {



    let element = document.getElementById('pdf');
html2pdf(element).save(`Cotizacion`);
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