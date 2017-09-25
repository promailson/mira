var s01 = {
    id: "Fontenelle",
    nivel: 4
};
var s02 = {
    id: "Gow",
    nivel: 4
};
var s03 = {
    id: "Hermano_HB",
    nivel: 3
};
var s04 = {
    id: "FLBC",
    nivel: 4
};
var s05 = {
    id: "coyotebruno",
    nivel: 5
};
var s06 = {
    id: "Spartacus",
    nivel: 4
};
var s07 = {
    id: "XxGhostxX155",
    nivel: 4
};
var s08 = {
    id: "ROCHA",
    nivel: 5
};
var s09 = {
    id: "Well-FNX",
    nivel: 5
};
var s10 = {
    id: "alex98",
    nivel: 4
};
var s11 = {
    id: "CHenriqueBig",
    nivel: 4
};
var s12 = {
    id: "AdolfHittler1940",
    nivel: 4
};
var s13 = {
    id: "DECIO",
    nivel: 3
};
var s14 = {
    id: "trattor",
    nivel: 5
};
var s15 = {
    id: "danilofoxTrot",
    nivel: 4
};
var s16 = {
    id: "Robertinhu",
    nivel: 3
};
var s17 = {
    id: "Raphitoss",
    nivel: 3
};
var s18 = {
    id: "Marreiro",
    nivel: 4
};
var s19 = {
    id: "Malinuz",
    nivel: 4
};
var s20 = {
    id: "joabelixo",
    nivel: 4
};
var s21 = {
    id: "Abreu",
    nivel: 4
};
var s22 = {
    id: "Droid",
    nivel: 5
};
var s23 = {
    id: "Regisnight",
    nivel: 4
};
var s24 = {
    id: "Darth_Thelast",
    nivel: 3
};
var s25 = {
    id: "Digofoça",
    nivel: 5
};
var s26 = {
    id: "Jack",
    nivel: 3
};
var s27 = {
    id: "Brunosouza229",
    nivel: 3
};
var s28 = {
    id: "Feiniel",
    nivel: 5
};
var s29 = {
    id: "iuryhardhock",
    nivel: 5
};
var s30 = {
    id: "Ton_BR",
    nivel: 5
};
var nivel5 = [s07, s18, s14, s09, s28, s05];
var nivel4 = [s23, s06, s04, s19, s12, s08];
var nivel3 = [s25, s22, s15, s10, s26, s20];
var nivel2 = [s01, s02, s16, s21, s29, s30];
var nivel1 = [s03, s13, s17, s24, s27, s11];
//var nivel0 = [s28,s25,s22,s09,s08,s05];    
//var outros = [s01,s02,s03,s04,s06,s07,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s23,s24,s26,s27,s29,s30];
function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ol');
    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[i].id));
        //item.appendChild(document.createTextNode(" - "));
        //item.appendChild(document.createTextNode(array[i].nivel));
        // Add it to the list:
        list.appendChild(item);
    }
    // Finally, return the constructed list:
    return list;
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


function sortear() {
    nivel5 = shuffle(nivel5);
    nivel4 = shuffle(nivel4);
    nivel3 = shuffle(nivel3);
    nivel2 = shuffle(nivel2);
    nivel1 = shuffle(nivel1);
    //outros = shuffle(outros)
    /*var time1 = [nivel5[0],outros[0],outros[1],outros[2],outros[3]];
    var time2 = [nivel5[1],outros[4],outros[5],outros[6],outros[7]];
    var time3 = [nivel5[2],outros[8],outros[9],outros[10],outros[11]];
    var time4 = [nivel5[3],outros[12],outros[13],outros[14],outros[15]];
    var time5 = [nivel5[4],outros[16],outros[17],outros[18],outros[19]];
    var time6 = [nivel5[5],outros[20],outros[21],outros[22],outros[23]];*/
    var time1 = [nivel5[0], nivel4[0], nivel3[0], nivel2[0], nivel1[0]];
    var time2 = [nivel5[1], nivel4[1], nivel3[1], nivel2[1], nivel1[1]];
    var time3 = [nivel5[2], nivel4[2], nivel3[2], nivel2[2], nivel1[2]];
    var time4 = [nivel5[3], nivel4[3], nivel3[3], nivel2[3], nivel1[3]];
    var time5 = [nivel5[4], nivel4[4], nivel3[4], nivel2[4], nivel1[4]];
    var time6 = [nivel5[5], nivel4[5], nivel3[5], nivel2[5], nivel1[5]];
    time1 = shuffle(time1);
    time2 = shuffle(time2);
    time3 = shuffle(time3);
    time4 = shuffle(time4);
    time5 = shuffle(time5);
    time6 = shuffle(time6);
    $("#t1,#t2,#t3,#t4,#t5,#t6").html("");
    document.getElementById('t1').appendChild(makeUL(time1));
    document.getElementById('t2').appendChild(makeUL(time2));
    document.getElementById('t3').appendChild(makeUL(time3));
    document.getElementById('t4').appendChild(makeUL(time4));
    document.getElementById('t5').appendChild(makeUL(time5));
    document.getElementById('t6').appendChild(makeUL(time6));
}
$("#sort").click(function(e) {
    e.preventDefault();
    sortear();
});