
function selected()
{
    var firstSelect = document.getElementById('data-cells');
    var n = firstSelect.options.selectedIndex;
    var data = document.getElementById('data-cells').options[n].text;

    var parent = firstSelect.parentNode.setAttribute('rowspan', 2);
    if (data == 'Услуга 2')
    { 
        
    }
    
    // alert(parent);
}