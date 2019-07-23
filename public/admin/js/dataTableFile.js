
$(window).on('load',function(){
    
  $('#data_table thead tr:eq(1) th').each( function (i) {
    var title = $(this).text();
    $(this).html( '<input type="text"/>' );

    $( 'input', this ).on( 'keyup change', function () {
        if ( data_table.column(i).search() !== this.value ) {
          data_table
                .column(i)
                .search( this.value )
                .draw();
        }
    } );
} );         

var data_table = $('#data_table').DataTable({
  
    "order": [[ 0, "desc" ]],
     "paging":false,
     "searching": true

  });
  
});





