$(window).on("load", siteShow);

/*
karakter
boy_container
boy_sprite
girl_container
girl_sprite
guys_container
guys_sprite

anim:
girl_go_room
girl_walk_room
girl_walk
girl_move_in
girl_move_out
girl_run
girl_position_in
girl_phone_smile


boy_walk
boy_move_in
boy_position_in
boy_position_in
boy_phone
boy_show
boy_phone_smile

guys_talk
guys_laughs
guys_position_in

phone_came_up
crush_pic_phone
phone_goodmorning

privat_samtale_logo
consequence1
consequence2
consequence3
guestions1
guestions2
guestions3

lyd:
music_room
phone_vibration
class_noise
guys_laughs
girl_walk
guys_whistle
love_music
girl_walk
girl_cry
girl_run

*/

/* Soveværelse scene */

function siteShow() {
    console.log("Siden er loadet");
    $("#girl_room").addClass("girl_door");
    $("#girl_container").addClass("girl_go_room");
    $("#girl_sprite").addClass("girl_walk_room");
    $("#phone_container").addClass("phone_came_up");
    $("#phone_sprite").addClass("crush_pic_phone");
    $("#music_room")[0].play();
    $("#phone_vibration")[0].play();
    nextDay();

}

/* Klasseværelse scene */

function nextDay() {
    console.log("Klasseværelse");
    $("#girl_room").removeClass("girl_door");
    $("#girl_container").removeClass("girl_go_room");
    $("#girl_sprite").removeClass("girl_walk_room");
    $("#phone_container").removeClass("phone_came_up");
    $("#phone_sprite").removeClass("crush_pic_phone");
    $("#music_room").off("ended");
    $("#phone_vibration").off("ended");

    $("#class_room").addClass("class_tables");
    $("#boy_container").addClass("boy_move_in");
    $("#boy_sprite").addClass("boy_walk");
    $("#guys_container").addClass("guys_position_in");
    $("#guys_sprite").addClass("guys_talk");
    $("#music_room")[0].play();
    $("#phone_vibration")[0].play();






}

function phoneChoice() {
    console.log("Valget");
}

function showPic() {
    console.log("Dreng viser billede")
}

function sadGirl() {
    console.log("Pige løber grædende");
}

function textHer() {
    console.log("Dreng skriver til pige");
}

function happyGirl() {
    console.log("Pige bliver glad");
}

/* Reklame scene */


function badChoice() {
    console.log("Reklame og konsekvens");
}

function goodChoice() {
    console.log("Reklame og spørgsmål");
}
