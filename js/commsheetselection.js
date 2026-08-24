const commSelectors = document.querySelectorAll(".commselectbox");
const commboxes = document.querySelectorAll(".commbox");

commSelectors.forEach(selector => {
    selector.addEventListener("click", () => {
        const pricesheet = selector.dataset.pricesheet;

        commSelectors.forEach(box => {
            box.classList.remove("active");
        });

        commboxes.forEach(box => {
            box.classList.remove("active");
        });

        selector.classList.add("active");

        document
            .getElementById("commbox-" + pricesheet)
            .classList.add("active");
    });
});
