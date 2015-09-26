/**
 * Created by akshay on 9/26/15.
 */

var map = L.map('map').setView([47.76, -122.25], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);

var appToken = 'KIfXfEDIcraE5i0dxIb6YkzHN';

var query = "'MEDICAL OFFICE (341)'";
var query2 = "'MULTIPLE RESIDENCES ASSISTED LIVING (LOW RISE)'";
var query3 = "'CONVALESCENT HOSPITAL (313)'";
var query4 = "'GROUP CARE HOME (424)'";
var query5 = "'DENTAL OFFICE/CLINIC (444)'";
var query6 = "'HOSPITAL (331)'";

function a(inputQuery){
    $.getJSON("https://kenmorewa.data.socrata.com/resource/b6gg-b3a4.json?$$app_token=" + appToken + "&$where=predominant_use=" + inputQuery +  " AND zip_code='98028'",function(data) {
        for(var i = 0; i < data.length; i++){
            L.marker([data[i].latitude, data[i].longitude]).addTo(map).bindPopup(inputQuery);
        }
    });
}

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);