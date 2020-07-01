
function selected(event)
{
    
    var selected = event.target;
    var parent = event.target.parentNode;
    var row = parent.parentNode;
    var n = selected.options.selectedIndex;
    var data = selected.options[n].text;

    parent.removeAttribute('rowspan');
    parent.removeAttribute('bgcolor');
    
    switch (data)
    {
        case 'Услуга 1':
            parent.setAttribute('rowspan', 2);
            /* for (let i = 0; i < 2; i++)
            {   
                row.nextSibling.removeChild(row.nextSibling[row.nextSibling.cells.length]);
            } */
            parent.setAttribute('bgcolor', 'red');
            break;
        case 'Услуга 2':
            parent.setAttribute('rowspan', 3);
            parent.setAttribute('bgcolor', 'yellow');
            break;
        case 'Услуга 3':
            parent.setAttribute('rowspan', 4);
            parent.setAttribute('bgcolor', 'green');
            break;
    }
        
    // alert(data);
}