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
    setTimeout(nextDay, 15000);


}

/* Klasseværelse scene */

function nextDay() {
    console.log("Klasseværelse");
    $("#music_room").off("ended");
    $("#phone_vibration").off("ended");
    $("#class_noise")[0].play();
    $("#phone_vibration")[0].play();

    $("#girl_room").hide();
    $("#girl_container").hide();
    $("#phone_container").hide();
    $(".girl_door").hide();
    $("#knapper").hide();



    $("#boy_container").show();
    $("#boy_container").addClass("boy_move_in");
    $("#boy_sprite").addClass("boy_walk");


    $("#guys_container").show();
    $("#guys_container").addClass("guys_position_in");
    $("#guys_sprite").addClass("guys_talk");




    $("#class_room").show();


    setTimeout(phoneChoice, 3000);

}

function phoneChoice() {
    console.log("Valget");
    $("#phone_container").show();
    $("#phone_container").addClass("came_up");
    $("#phone_sprite").addClass("crush");



    $("#knapper").show();

    knapper();

}


function knapper() {
    console.log("juhuu");

    $("#knapper").show();
    $("#knapper").addClass("vis_billede");


    $("#knap_hojre").on("click", textHer);
    $("#knap_venstre").on("click", showPic);

}

function showPic() {
    console.log("Dreng viser billede")
    $("#knap_hojre").off("click", textHer);
    $("#knap_venstre").off("click", showPic);
    $("#knapper").hide();
    $("#guys_laughs")[0].play();
    $("#guys_whistle")[0].play();


    $("#phone_sprite").removeClass("crush");
    $("#phone_sprite").addClass("phone_pic");

    $("#guys_sprite").removeClass("guys_talk");
    $("#guys_sprite").addClass("guys_laughs");

    $("#boy_container").removeClass("boy_move_in");
    $("#boy_sprite").removeClass("boy_walk");


    $("#boy_container").addClass("boy_position_in");
    $("#boy_sprite").addClass("boy_show");

    $("#girl_container").show();

    $("#girl_container").addClass("girl_move_in");
    $("#girl_sprite").addClass("girl_walk_room");

    setTimeout(sadGirl, 5000);

}

function sadGirl() {
    console.log("Pige løber grædende");
    $("#girl_cry")[0].play();

    $("#guys_sprite").addClass("guys_laughs");

    $("#girl_container").removeClass("girl_move_in");
    $("#girl_sprite").removeClass("girl_walk_room");

    $("#girl_container").addClass("girl_move_out");
    $("#girl_sprite").addClass("girl_run");

    setTimeout(badChoice, 4000);



}

function textHer() {
    console.log("Dreng skriver til pige");
    $("#knap_hojre").off("click", textHer);
    $("#knap_venstre").off("click", showPic);
    $("#knapper").hide();



    $("#phone_sprite").removeClass("crush");
    $("#phone_sprite").addClass("phone_goodmorning");

    $("#boy_container").removeClass("boy_move_in");
    $("#boy_sprite").removeClass("boy_walk");


    $("#boy_container").addClass("boy_position_in");
    $("#boy_sprite").addClass("boy_phone_smile");

    $("#girl_container").show();

    $("#girl_container").addClass("girl_move_in");
    $("#girl_sprite").addClass("girl_walk_room");

    $("#girl_sprite").on("animationend", happyGirl);




}

function happyGirl() {
    console.log("Pige bliver glad");
    $("#love_music")[0].play();

    $("#girl_container").addClass("girl_position_in");
    $("#girl_sprite").addClass("girl_phone_smile");

    setTimeout(goodChoice, 3000);
}

/* Reklame scene */


function badChoice() {
    console.log("Reklame og konsekvens");
    $("#guys_laughs").off("ended");
    $("#guys_whistle").off("ended");
    $("#class_noise").off("ended");
    $("#phone_vibration").off("ended");


    $("#reklame_show").show();
}

function goodChoice() {
    console.log("Reklame og spørgsmål");

    $("#reklame_text").show();


}
