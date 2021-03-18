$(document).ready(function(){
let fio = ['Абясов Иван Петрович', 'Белов Акакий Акакиевич', 'Виноградов Семен Семенович',
    'Абясов Иван Петрович', 'Белов Акакий Акакиевич', 'Виноградов Семен Семенович',
    'Абясов Иван Петрович', 'Белов Акакий Акакиевич', 'Виноградов Семен Семенович',
    'Абясов Иван Петрович', 'Белов Акакий Акакиевич', 'Виноградов Семен Семенович',
    'Абясов Иван Петрович', 'Белов Акакий Акакиевич', 'Виноградов Семен Семенович'
];

// window.onload = function () {
//     let TDs =
//         document.getElementsByClassName('students-fio')[0].getElementsByTagName('TD');
//     for (i = 0; i < fio.length; ++i) {
//         TDs[i].innerHTML = fio[i];
//     }
// }

var wrap= function(value) {
    return "<td>" + value + "</td>";
};

// $("#tableID tbody").append("<tr><th>Name</th><th>Number</th><th>Address</th><th>Notes</th></tr>");
for (var i = 0; i < fio.length; ++i) {
    // $("#tableID tbody").append("<tr>"+ wrap(contacts[i].name)+ wrap(contacts[i].number)+ wrap(contacts[i].address)+ wrap(contacts[i].notes)+ "</tr>")
    $("#tableID tbody").append("<tr onclick='showRowInfo(this)'>"+ wrap(fio[i])+ "</tr>")
}

let students_info = [{
    name: 'Jane',
    subject: 'Алгебра и геометрия',
    tk1: 3.5,
    pk1: 3.0,
    tk2: 4.2,
    pk2: 3.6,
    exam: 4.0,
    rating: 377.5,
    mark: 'Хор'
  },
  {
    name: 'Jane',
    subject: 'Дискретная математика',
    tk1: 3.5,
    pk1: 3.0,
    tk2: 4.2,
    pk2: 3.6,
    exam: 4.0,
    rating: 377.5,
    mark: 'Хор'
  },
  {
    name: 'Jane',
    subject: 'История',
    tk1: 3.5,
    pk1: 3.0,
    tk2: 4.2,
    pk2: 3.6,
    exam: 4.0,
    rating: 377.5,
    mark: 'Хор'
  },
  {
    name: 'Jane',
    subject: 'Программирование',
    tk1: 3.5,
    pk1: 3.0,
    tk2: 4.2,
    pk2: 3.6,
    exam: 4.0,
    rating: 377.5,
    mark: 'Хор'
  },
  {
    name: 'Jane',
    subject: 'Структуры данных',
    tk1: 3.5,
    pk1: 3.0,
    tk2: 4.2,
    pk2: 3.6,
    exam: 4.0,
    rating: 377.5,
    mark: 'Хор'
  }
];

let response = JSON.stringify(students_info);

response = $.parseJSON(response);

let subjects = $('#subjects tbody');

$(function() {
  $.each(response, function(i, item) {
      var $tr = $('<tr>').append(
          $('<td>').text(item.subject),
          $('<td>').text(parseFloat(item.tk1).toFixed(1)),
          $('<td>').text(parseFloat(item.pk1).toFixed(1)),
          $('<td>').text(parseFloat(item.tk2).toFixed(1)),
          $('<td>').text(parseFloat(item.pk2).toFixed(1)),
          $('<td>').text(parseFloat(item.exam).toFixed(1)),
          $('<td>').text(parseFloat(item.rating).toFixed(1)),
          $('<td>').text(item.mark)
      ); //.appendTo('#records_table');
      subjects.append($tr);
    //  console.log($tr.wrap('<p>').html());
  });
});


});

function showRowInfo(elm) {
    alert($(elm).closest("tr").find("td").text());
 }
