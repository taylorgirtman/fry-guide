let map = L.map('mapid').setView([29.637076, -82.359213], 12.33);

L.tileLayer('https://api.mapbox.com/styles/v1/taylorgirtman/ck3xu3mma2gdo1cr2fo6mgw5k/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGF5bG9yZ2lydG1hbiIsImEiOiJjazJ4Z2x0YzAwYjh4M2JyNjdsOXZ6dW96In0.y1-KyFbXSPfMxJg_8QKccg', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(map);

for ( let i = 0; i < locations.length; i++ ) {
  L.marker( [locations[i].Latitude, locations[i].Longitude ] )
  .bindPopup( '<h3>' + locations[i].Restaurant + '</h3>' + '<p>' + locations[i].Type + '</p>')
  .addTo( map );
};

var table = new Tabulator("#regular-table", {
   layout:"fitColumns",
   columns:[
       {title:"Restaurant", field:"Restaurant", width:100},
       {title:"Fry Types Offered", field:"offered", widthGrow:1},
       {title:"Address", field:"Address", widthGrow:1},
       {title:"Price", field:"Price", widthGrow:1},
       {title:"Nutrition", field:"Nutrition"},
   ]
});

 var tableDataRegular = [
  {
    id: 1,
    Restaurant: "Burger-fi",
    offered: "Regular",
    Address: "3524 SW Archer Road, Gainesville, FL 32608",
    Price: "Regular: $3.47",
    Nutrition: "640 cal"
  },
  {
    id: 2,
    Restaurant: "Dick Mondell's",
    offered: "Regular",
    Address: "412 SW 4th Ave, Gainesville, FL 32601",
    Price: "Small: $2.50",
    Nutrition: "Not available"
  },
  {
    id: 3,
    Restaurant: "Five Guys",
    offered: "Regular, Seasoned",
    Address: "3310 SW 35th Blvd, Gainesville, FL 32608",
    Price: "Regular: $4.79",
    Nutrition: "950 cal"
  },
  {
    "id": 4,
    "Restaurant": "Grub Burger Bar",
    "offered": "Regular, Sweet Potato",
    "Address": "917 SW 35th Dr, Gainesville, FL 32608",
    "Price": "Regular: $2.59",
    "Nutrition": "430/570 cal"
  },
  {
    "id": 5,
    "Restaurant": "Hurricanes BTW",
    "offered": "Regular",
    "Address": "1402 West University Ave, Gainesville, FL 32603",
    "Price": "Regular: $2.00",
    "Nutrition": "Not available"
  },
  {
    "id": 6,
    "Restaurant": "Loosey's",
    "offered": "Regular",
    "Address": "2725 SW 91st Street, Suite 100, Gainesville, FL 32608",
    "Price": "Small: $3.00",
    "Nutrition": "Not available"
  },
  {
    "id": 7,
    "Restaurant": "McDonald's",
    "offered": "Regular",
    "Address": "1206 W. University Ave, Gainesville FL 32601",
    "Price": "Medium: $2.09",
    "Nutrition": "320 cal"
  },
  {
    "id": 8,
    "Restaurant": "PDQ",
    "offered": "Regular",
    "Address": "3403 W. University Ave., Gainesville, FL 32607",
    "Price": "Regular: $2.29",
    "Nutrition": "340 cal"
  },
  {
    "id": 9,
    "Restaurant": "Relish Archer Road",
    "offered": "Regular, Sweet Potato",
    "Address": "3841 SW Archer Rd Gainesville, Florida 32608",
    "Price": "Regular: $2.75",
    "Nutrition": "Not available"
  },
  {
    "id": 10,
    "Restaurant": "Relish Downtown",
    "offered": "Regular",
    "Address": "201 SE 1st St, Gainesville, FL 32601",
    "Price": "Regular: $2.95",
    "Nutrition": "Not available"
  },
  {
    "id": 11,
    "Restaurant": "Relish Midtown",
    "offered": "Regular, Sweet Potato",
    "Address": "1702 W University Ave, Gainesville, FL 32603",
    "Price": "Regular: $2.75",
    "Nutrition": "Not available"
  },
  {
    "id": 12,
    "Restaurant": "Relish Royal Park",
    "offered": "Regular, Sweet Potato",
    "Address": "3822 W Newberry Rd, Gainesville, FL 32607",
    "Price": "Regular: $2.75",
    "Nutrition": "Not available"
  },
  {
    "id": 13,
    "Restaurant": "The Spot",
    "offered": "Regular",
    "Address": "16 NW 18th St #160, Gainesville, FL 32603",
    "Price": "Regular: $3.25",
    "Nutrition": "Not available"
  },
  {
    "id": 14,
    "Restaurant": "The Top",
    "offered": "Regular, Sweet Potato",
    "Address": "30 N Main St, Gainesville, FL 32601",
    "Price": "Regular: $5.49",
    "Nutrition": "Not available"
  },
  {
    "id": 15,
    "Restaurant": "Wendy's",
    "offered": "Regular",
    "Address": "3611 SW Archer Road, Gainesville, FL 32608",
    "Price": "Medium: $2.09",
    "Nutrition": "420 cal"
  },
  {
    "id": 16,
    "Restaurant": "Wing Zone Orange and Brew",
    "offered": "Regular",
    "Address": "655 Reitz Union Drive, Gainesville, FL 32603",
    "Price": "Regular: $2.29",
    "Nutrition": "390 cal"
  }
];
table.setData(tableDataRegular);

var table = new Tabulator("#sweet-table", {
   layout:"fitColumns",
   columns:[
       {title:"Restaurant", field:"Restaurant", width:100},
       {title:"Fry Types Offered", field:"offered", widthGrow:1},
       {title:"Address", field:"Address", widthGrow:1},
       {title:"Price", field:"Price", widthGrow:1},
       {title:"Nutrition", field:"Nutrition"},
   ]
});

var tableDataSweet = [{"id":1,"Restaurant":"Big Lou's NY Style Pizzeria","offered":"Sweet Potato, Curly","Address":"5 SE 2nd Ave, Gainesville, FL 32601","Price":"Small: $3.50","Nutrition":"Not available"},
{"id":2,"Restaurant":"Grub Burger Bar","offered":"Regular, Sweet Potato","Address":"917 SW 35th Dr, Gainesville, FL 32608","Price":"Regular: $3.00","Nutrition":"570 cal"},
{"id":3,"Restaurant":"OAK Kitchen","offered":"Waffle, Sweet Potato","Address":"15 SE 1st Ave, Gainesville, FL 32601","Price":"Regular: $6.00","Nutrition":"Not available"},
{"id":4,"Restaurant":"Relish Archer Road","offered":"Regular, Sweet Potato","Address":"3841 SW Archer Rd Gainesville, Florida 32608","Price":"Regular $3.75","Nutrition":"Not available"},
{"id":5,"Restaurant":"Relish Midtown","offered":"Regular, Sweet Potato","Address":"1702 W University Ave, Gainesville, FL 32603","Price":"Regular: $3.75","Nutrition":"Not available"},
{"id":6,"Restaurant":"Relish Royal Park","offered":"Regular, Sweet Potato","Address":"3822 W Newberry Rd, Gainesville, FL 32607","Price":"Regular: $3.75","Nutrition":"Not available"},
{"id":7,"Restaurant":"The Top","offered":"Regular, Sweet Potato","Address":"30 N Main St, Gainesville, FL 32601","Price":"Regular: $6.49","Nutrition":"Not available"}];
table.setData(tableDataSweet);

var table = new Tabulator("#curly-table", {
   layout:"fitColumns",
   columns:[
       {title:"Restaurant", field:"Restaurant", width:100},
       {title:"Fry Types Offered", field:"Offered", widthGrow:1},
       {title:"Address", field:"Address", widthGrow:1},
       {title:"Price", field:"Price", widthGrow:1},
       {title:"Nutrition", field:"Nutrition"},
   ]
});
var tableDataCurly = [{"id":1,"Restaurant":"Big Lou's NY Style Pizzeria","Offered":"Sweet Potato, Curly","Address":"5 SE 2nd Ave, Gainesville, FL 32601","Price":"Small: $2.50","Nutrition":"Not available"},
{"id":2,"Restaurant":"Midtown Deli","Offered":"Curly","Address":"1702 W University Ave suite F1, Gainesville, FL 32603","Price":"Regular: $2.89","Nutrition":"Not available"}]
table.setData(tableDataCurly);

var table = new Tabulator("#seasoned-table", {
   layout:"fitColumns",
   columns:[
       {title:"Restaurant", field:"Restaurant", width:100},
       {title:"Fry Types Offered", field:"Offered", widthGrow:1},
       {title:"Address", field:"Address", widthGrow:1},
       {title:"Price", field:"Price", widthGrow:1},
       {title:"Nutrition", field:"Nutrition"},
   ]
});
var tableDataSeasoned = [{"id":1,"Restaurant":"Checkers","Offered":"Seasoned","Address":"3325 W University Ave, Gainesville, FL 32607","Price":"Medium: $2.59","Nutrition":"500 cal"},
{"id":2,"Restaurant":"Checkers","Offered":"Seasoned","Address":"912 W University Ave, Gainesville, FL 32601","Price":"Medium: $2.59","Nutrition":"500 cal"},
{"id":3,"Restaurant":"Five Guys","Offered":"Regular, Seasoned","Address":"3310 SW 35th Blvd, Gainesville, FL 32608","Price":"Regular: $4.79","Nutrition":"950 cal"},
{"id":4,"Restaurant":"Steak N Shake","Offered":"Regular, Seasoned","Address":"1610 SW 13th St, Gainesville, FL 32608","Price":"Regular: $1.99","Nutrition":"450 cal"}];
table.setData(tableDataSeasoned);

var table = new Tabulator("#waffle-table", {
   layout:"fitColumns",
   columns:[
       {title:"Restaurant", field:"Restaurant", width:100},
       {title:"Fry Types Offered", field:"Offered", widthGrow:1},
       {title:"Address", field:"Address", widthGrow:1},
       {title:"Price", field:"Price", widthGrow:1},
       {title:"Nutrition", field:"Nutrition"},
   ]
});
var tableDataWaffle = [{"id":1,"Restaurant":"Chick-fil-A","Offered":"Waffle","Address":"1340 W University Ave Suite 10, Gainesville, FL 32603","Price":"Medium: $1.65","Nutrition":"360 cal"},
{"id":2,"Restaurant":"Chick-fil-A","Offered":"Waffle","Address":"3938 SW Archer Rd, Gainesville, FL 32608","Price":"Medium: $1.65","Nutrition":"360 cal"},
{"id":3,"Restaurant":"OAK Kitchen","Offered":"Waffle, Sweet Potato","Address":"15 SE 1st Ave, Gainesville, FL 32601","Price":"Regular: $5.00","Nutrition":"Not available"}];
table.setData(tableDataWaffle);
