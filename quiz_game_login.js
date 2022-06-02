function addUser(){
    player_1 = document.getElementById("input_player1_name").value;
    player_2 = document.getElementById("input_player2_name").value;
    localStorage.setItem("player1_name", player_1);
    localStorage.setItem("player2_name", player_2);
    window.location = "game_page.html";
}
