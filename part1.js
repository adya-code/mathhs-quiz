function addUser() {
    player1_name = document.getElementById("ph1").value;
    player2_name = document.getElementById("ph2").value;

    localStorage.setItem("player1",player1_name);
    localStorage.setItem("player2",player2_name);

}