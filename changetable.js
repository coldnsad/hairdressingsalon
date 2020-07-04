
function selected(event)
{
    var services = {"Услуга 1": 2,
                    "Услуга 2": 3,
                    "Услуга 3": 4};
    var selected = event.target;
    var parent = event.target.parentNode;
    var cellIndex = parent.cellIndex;
    var currentRow = parent.parentNode;
    var table = document.getElementById('shedule');
    
    var n = selected.options.selectedIndex;
    var data = selected.options[n].text;

    var inner = '<select  id="data-cells" onChange = "selected(event);">' + 
                    '<option>Выберите услугу</option>' + 
                    '<option>Услуга 1</option>' + 
                    '<option>Услуга 2</option>' + 
                    '<option>Услуга 3</option>' + 
                '</select>';
    parent.removeAttribute('rowspan');
    parent.removeAttribute('bgcolor');        
    
    switch (data)
    {
        case 'Услуга 1':
            parent.setAttribute('bgcolor', 'red');
            parent.setAttribute('style', 'border-bottom-style:hidden');
            
            for (let i = 0; i < services['Услуга 1'] - 1; i++)
            {
                currentRow = currentRow.nextSibling;
                for (let j = 0; j < 8; j++)
                {
                    if (j == cellIndex)
                    {
                        table.rows[currentRow.rowIndex].cells[j].setAttribute('bgcolor', 'red');
                        table.rows[currentRow.rowIndex].cells[j].innerHTML = '';
                    }
                }
            }
            break;
        case 'Услуга 2':

            parent.setAttribute('bgcolor', 'red');
            parent.setAttribute('style', 'border-bottom-style:hidden');            
            
            for (let i = 0; i < services['Услуга 2'] - 1; i++)
            {
                currentRow = currentRow.nextSibling;

                for (let j = 0; j < 8; j++)
                {
                    if (j == cellIndex)
                    {
                        table.rows[currentRow.rowIndex].cells[j].setAttribute('bgcolor', 'red');
                        table.rows[currentRow.rowIndex].cells[j].innerHTML = '';
                        
                        if (i < 1)
                            table.rows[currentRow.rowIndex].cells[j].setAttribute('style', 'border-bottom-style:hidden');
                    }
                }
            }
            break;
        case 'Услуга 3':

            parent.setAttribute('bgcolor', 'red');
            parent.setAttribute('style', 'border-bottom-style:hidden');
            
            for (let i = 0; i < services['Услуга 3'] - 1; i++)
            {
                currentRow = currentRow.nextSibling;

                for (let j = 0; j < 8; j++)
                {
                    if (j == cellIndex)
                    {
                        table.rows[currentRow.rowIndex].cells[j].setAttribute('bgcolor', 'red');
                        table.rows[currentRow.rowIndex].cells[j].innerHTML = '';
                        
                        if (i < 2)
                            table.rows[currentRow.rowIndex].cells[j].setAttribute('style', 'border-bottom-style:hidden');
                    }
                }
            }
            break;
        case 'Выберите услугу':
            parent.removeAttribute('style');
            for (let i = 0; i < services['Услуга 3'] - 1; i++)
            {
                currentRow = currentRow.nextSibling;
                for (let j = 0; j < 8; j++)
                {
                    if (j == cellIndex)
                    {
                        if (table.rows[currentRow.rowIndex].cells[j].hasAttribute('bgcolor'))
                        {
                            // alert('!!!');
                            table.rows[currentRow.rowIndex].cells[j].removeAttribute('bgcolor');
                            table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                            table.rows[currentRow.rowIndex].cells[j].innerHTML = inner;
                            // table.rows[currentRow.rowIndex].cells[j].innerHTML = '';
                        }
                       
                    }
                }
            }
            break;
                
    }

    
    
    // alert();
}