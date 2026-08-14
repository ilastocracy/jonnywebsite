const gameSelectors = document.querySelectorAll(".boxnb");
const gameboxes = document.querySelectorAll(".gamebox");

gameSelectors.forEach(selector => {
    selector.addEventListener("click", () => {
        const game = selector.dataset.game;

        // Remove active from all game selectors
        gameSelectors.forEach(box => {
            box.classList.remove("active");
            box.querySelector(".gameselect").classList.remove("active");
        });

        // Remove active from all gameboxes
        gameboxes.forEach(gamebox => {
            gamebox.classList.remove("active");
        });

        // Activate clicked box
        selector.classList.add("active");

        // Activate clicked game's text
        selector.querySelector(".gameselect").classList.add("active");

        // Show corresponding gamebox
        document.getElementById("gamebox-" + game).classList.add("active");
    });
});
