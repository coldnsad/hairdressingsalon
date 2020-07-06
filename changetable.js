
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
    var ok = true;
    
    var n = selected.options.selectedIndex;
    var data = selected.options[n].text;

    var inner = '<select  id="data-cells" onChange = "selected(event);">' + 
                    '<option>Выберите услугу</option>' + 
                    '<option>Услуга 1</option>' + 
                    '<option>Услуга 2</option>' + 
                    '<option>Услуга 3</option>' + 
                '</select>';            
    
    switch (data)
    {
        case 'Услуга 1':

            //Проверка на пересечение услуг по времени
            if ((currentRow.rowIndex != table.rows.length - 1) && (!parent.hasAttribute('bgcolor')))
            {
                    for (let i = 0; i < 8; i++)
                    {
                        if (i == cellIndex)
                        {
                            if (table.rows[currentRow.rowIndex + services['Услуга 1'] - 1].cells[i].hasAttribute('bgcolor'))
                            {
                                alert('Выберите другое время для услуги');
                                return;
                            }
                        } 
                    }
            }
            
            if ((currentRow.rowIndex != table.rows.length - 1) && (parent.hasAttribute('bgcolor')))
            {
                let j = 0;
                while(j != 1)
                {                                   
                    currentRow = currentRow.nextSibling;
                    for (let i = 0; i < 8; i++)
                    {
                        if (i == cellIndex)
                        {
                            if (!table.rows[currentRow.rowIndex].cells[i].hasAttribute('style'))
                            {
                                if (table.rows[currentRow.rowIndex + 1].cells[i].hasAttribute('bgcolor'))
                                { 
                                    alert('Выберите другое время для услуги');
                                    return;
                                }
                                else 
                                {
                                    break;
                                }    
                            }
                        } 
                    }
                    j++;
                }                    
            }
            
            currentRow = parent.parentNode;
            if (parent.hasAttribute('bgcolor'))
            {
                parent.setAttribute('bgcolor', 'red');
                parent.setAttribute('style', 'border-bottom-style:hidden');

                for (let i = 0; i < services['Услуга 3'] - 1; i++)
                {                
                    currentRow = currentRow.nextSibling;
                    for (let j = 0; j < 8; j++)
                    {
                        if (j == cellIndex)
                        {
                            if (i < 1)
                            {
                                table.rows[currentRow.rowIndex].cells[j].setAttribute('bgcolor', 'red');
                                table.rows[currentRow.rowIndex].cells[j].innerHTML = '';
                                table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                            }
                            else
                            {
                                if (!table.rows[currentRow.rowIndex].cells[j].hasAttribute('style'))
                                {
                                    if (table.rows[currentRow.rowIndex + 1].cells[j].hasAttribute('bgcolor'))
                                    {
                                        table.rows[currentRow.rowIndex].cells[j].removeAttribute('bgcolor');
                                        table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                                        table.rows[currentRow.rowIndex].cells[j].innerHTML = inner;
                                        return;
                                    }
                                    else
                                    {
                                        table.rows[currentRow.rowIndex].cells[j].removeAttribute('bgcolor');
                                        table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                                        table.rows[currentRow.rowIndex].cells[j].innerHTML = inner;
                                    }
                                }
                                else
                                {
                                    table.rows[currentRow.rowIndex].cells[j].removeAttribute('bgcolor');
                                    table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                                    table.rows[currentRow.rowIndex].cells[j].innerHTML = inner;
                                }
                                    
                            }
                        }
                    }
                }
            }
            else
            {
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
            }
            break;

        case 'Услуга 2':                   
            //Проверка на пересечение услуг по времени
            if ((currentRow.rowIndex != table.rows.length - 1) && (!parent.hasAttribute('bgcolor')))
            {
                    for (let i = 0; i < 8; i++)
                    {
                        if (i == cellIndex)
                        {
                            if (table.rows[currentRow.rowIndex + services['Услуга 2'] - 1].cells[i].hasAttribute('bgcolor'))
                            {
                                alert('Выберите другое время для услуги');
                                return;
                            }
                        } 
                    }
            }

            if ((currentRow.rowIndex != table.rows.length - 1) && (parent.hasAttribute('bgcolor')))
            {
                let j = 0;
                while(j != 2)
                {                                   
                    currentRow = currentRow.nextSibling;
                    for (let i = 0; i < 8; i++)
                    {
                        if (i == cellIndex)
                        {
                            if (!table.rows[currentRow.rowIndex].cells[i].hasAttribute('style'))
                            {
                                if (table.rows[currentRow.rowIndex + 1].cells[i].hasAttribute('bgcolor'))
                                { 
                                    alert('Выберите другое время для услуги');
                                    return;
                                }
                                else if (!table.rows[currentRow.rowIndex + 1].cells[i].hasAttribute('bgcolor')) 
                                {
                                    j++;
                                    break;
                                }    
                            }
                        } 
                    }
                    j++;
                }                    
            }
            
            currentRow = parent.parentNode;
            if (parent.hasAttribute('bgcolor'))
            {
                parent.setAttribute('bgcolor', 'red');
                parent.setAttribute('style', 'border-bottom-style:hidden');

                for (let i = 0; i < services['Услуга 3'] - 1; i++)
                {                
                    currentRow = currentRow.nextSibling;
                    for (let j = 0; j < 8; j++)
                    {
                        if (j == cellIndex)
                        {
                            if (i < 2)
                            {
                                table.rows[currentRow.rowIndex].cells[j].setAttribute('bgcolor', 'red');
                                table.rows[currentRow.rowIndex].cells[j].innerHTML = '';
                                // table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                                table.rows[currentRow.rowIndex].cells[j].setAttribute('style', 'border-bottom-style:hidden');
                            }
                            if (i==1) table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                            if (i >= 1)
                            {
                                if (!table.rows[currentRow.rowIndex].cells[j].hasAttribute('style'))
                                {
                                    if (table.rows[currentRow.rowIndex + 1].cells[j].hasAttribute('bgcolor'))
                                    {
                                        table.rows[currentRow.rowIndex].cells[j].removeAttribute('bgcolor');
                                        table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                                        table.rows[currentRow.rowIndex].cells[j].innerHTML = inner;
                                        return;
                                    }
                                    else if (!table.rows[currentRow.rowIndex + 1].cells[j].hasAttribute('bgcolor'))
                                    {
                                        table.rows[currentRow.rowIndex].cells[j].setAttribute('bgcolor','red');
                                        table.rows[currentRow.rowIndex].cells[j].setAttribute('style', 'border-bottom-style:hidden');
                                        table.rows[currentRow.rowIndex].cells[j].innerHTML = '';
                                        if (i==1) table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                                        return;
                                    }
                                    else
                                    {
                                        table.rows[currentRow.rowIndex].cells[j].removeAttribute('bgcolor');
                                        table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                                        table.rows[currentRow.rowIndex].cells[j].innerHTML = inner; 
                                    }
                                }
                                else
                                {
                                    table.rows[currentRow.rowIndex].cells[j].setAttribute('bgcolor','red');
                                    table.rows[currentRow.rowIndex].cells[j].setAttribute('style', 'border-bottom-style:hidden');
                                    table.rows[currentRow.rowIndex].cells[j].innerHTML = '';
                                }
                                    
                            }                            
                        }
                    }
                }
            }
            else
            {
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
                            table.rows[currentRow.rowIndex].cells[j].setAttribute('style', 'border-bottom-style:hidden');
                            if (i == 1) table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');                            
                        }
                        
                    }
                }
            }
            break;
        case 'Услуга 3':
            
            //Проверка на пересечение услуг по времени
            if ((currentRow.rowIndex != table.rows.length - 1) && (!parent.hasAttribute('bgcolor')))
            {
                    for (let i = 0; i < 8; i++)
                    {
                        if (i == cellIndex)
                        {
                            if (table.rows[currentRow.rowIndex + services['Услуга 3'] - 1].cells[i].hasAttribute('bgcolor') || 
                                table.rows[currentRow.rowIndex + services['Услуга 3'] - 2].cells[i].hasAttribute('bgcolor'))
                            {
                                alert('Выберите другое время для услуги');
                                return;
                            }
                        } 
                    }
            }
            
            if ((currentRow.rowIndex != table.rows.length - 1) && (parent.hasAttribute('bgcolor')))
            {
                while(ok)
                {                    
                    currentRow = currentRow.nextSibling;
                    for (let i = 0; i < 8; i++)
                    {
                        if (i == cellIndex)
                        {
                            if (!table.rows[currentRow.rowIndex].cells[i].hasAttribute('style'))
                            {
                                if (table.rows[currentRow.rowIndex + 1].cells[i].hasAttribute('bgcolor'))
                                { 
                                    alert('Выберите другое время для услуги');
                                    return;
                                }
                                else 
                                {
                                    ok = false;
                                    break;
                                }    
                            }
                        } 
                    }

                }                    
            }
            
            currentRow = parent.parentNode;
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
            if (!parent.hasAttribute('bgcolor')) return;

            parent.removeAttribute('style');
            parent.removeAttribute('bgcolor');
            
            for (let i = 0; i < services['Услуга 3'] - 1; i++)
            {
                currentRow = currentRow.nextSibling;
                for (let j = 0; j < 8; j++)
                {
                    if (j == cellIndex)
                    {
                        if (table.rows[currentRow.rowIndex].cells[j].hasAttribute('bgcolor'))
                        {
                            if (!table.rows[currentRow.rowIndex].cells[j].hasAttribute('style')) 
                            {
                                table.rows[currentRow.rowIndex].cells[j].removeAttribute('bgcolor');
                                table.rows[currentRow.rowIndex].cells[j].innerHTML = inner;
                                return;
                            }
                            else
                            {
                                table.rows[currentRow.rowIndex].cells[j].removeAttribute('bgcolor');
                                table.rows[currentRow.rowIndex].cells[j].removeAttribute('style');
                                table.rows[currentRow.rowIndex].cells[j].innerHTML = inner;
                            }
                            
                        }
                       
                    }
                }
            }
            break;                
    }

   
    // alert();
}